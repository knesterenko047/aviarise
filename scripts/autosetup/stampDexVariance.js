/**
 * Per-app DEX variance:
 * - shuffle android/app/rn-obfuscator-dict.txt from the project fragment
 * - rewrite live Kotlin modules (user agent, app info, Play Integrity)
 *   with a different control-flow shape. @ReactMethod names stay put.
 */
const fs = require("node:fs/promises");
const path = require("node:path");
const { safeStat } = require("./fsUtils");

const JAVA_KEYWORDS = new Set(
  `abstract assert boolean break byte case catch char class const continue default do double else enum extends final finally float for goto if implements import instanceof int interface long native new package private protected public return short static strictfp super switch synchronized this throw throws transient try void volatile while true false null`.split(
    " "
  )
);

function hashSeed(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mix32(n) {
  let x = n >>> 0;
  x ^= x >>> 16;
  x = Math.imul(x, 0x7feb352d);
  x ^= x >>> 15;
  x = Math.imul(x, 0x846ca68b);
  x ^= x >>> 16;
  return x >>> 0;
}

function mulberry32(seed) {
  let t = seed >>> 0;
  return function rng() {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function foldBody(seed) {
  const s = mix32(seed);
  const shape = s % 5;
  const a = (s % 60000) + 3;
  const b = ((s >>> 8) % 4000) + 5;
  const c = (((s >>> 16) % 40) * 2) + 3;
  const sh = ((s >>> 20) % 6) + 1;
  if (shape === 0) {
    return `        var x = seed xor ${a}\n        x = (x * ${c} + ${b}) and 0xffff\n        return x`;
  }
  if (shape === 1) {
    return `        var x = seed + ${a}\n        x = x shl ${sh}\n        x = x xor ${b}\n        return x and 0xffff`;
  }
  if (shape === 2) {
    return `        var x = seed * ${c}\n        x = x xor ${a}\n        val m = ${b + 50}\n        x %= m\n        if (x < 0) x += m\n        return x`;
  }
  if (shape === 3) {
    return `        var x = seed xor ${a}\n        x = (x ushr ${sh}) xor ${b}\n        x = (x * ${c}) and 0xffff\n        return x`;
  }
  return `        var x = seed xor ${a}\n        var n = ${c}\n        while (n > 0) {\n            x = (x * 3 + ${b}) and 0xffff\n            n -= 1\n        }\n        return x xor ${sh}`;
}

function foldMethod(seed) {
  return `    @androidx.annotation.Keep
    private fun foldDex(seed: Int): Int {
${foldBody(seed)}
    }`;
}

function gate(emptyExpr) {
  return `        val dexLane = foldDex(reactApplicationContext.hashCode())
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve(${emptyExpr})
            return
        }`;
}

function extractBraced(src, startNeedle) {
  const start = src.indexOf(startNeedle);
  if (start < 0) return "";
  const brace = src.indexOf("{", start);
  if (brace < 0) return "";
  let depth = 0;
  for (let i = brace; i < src.length; i++) {
    const ch = src[i];
    if (ch === "{") depth += 1;
    else if (ch === "}") {
      depth -= 1;
      if (depth === 0) return src.slice(start, i + 1);
    }
  }
  return "";
}

function readModuleName(src) {
  const expr = src.match(/fun getName\(\)\s*:\s*String\s*=\s*"([^"]+)"/);
  if (expr) return expr[1];
  const block = src.match(/fun getName\(\)\s*:\s*String\s*\{[\s\S]*?"([^"]+)"/);
  return block ? block[1] : "";
}

function readClassName(src) {
  const m = src.match(/\bclass\s+(\w+)\s*\(/);
  return m ? m[1] : "";
}

function readPackage(src) {
  const m = src.match(/^package\s+([\w.]+)\s*$/m);
  return m ? m[1] : "";
}

function listReactMethods(src) {
  return [...src.matchAll(/@ReactMethod[\s\S]*?fun\s+(\w+)\s*\(/g)].map((m) => m[1]);
}

async function walkKt(dir) {
  const out = [];
  if (!(await safeStat(dir))) return out;
  async function walk(current) {
    const entries = await fs.readdir(current, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) await walk(full);
      else if (entry.name.endsWith(".kt")) out.push(full);
    }
  }
  await walk(dir);
  return out;
}

function buildUserAgent(src, fragment) {
  const pkg = readPackage(src);
  const className = readClassName(src);
  const moduleName = readModuleName(src);
  const method = (src.match(/@ReactMethod[\s\S]*?fun\s+(\w+)\s*\(\s*promise:\s*Promise\s*\)/) || [])[1];
  if (!pkg || !className || !moduleName || !method) return null;
  const shape = mix32(hashSeed(`${fragment}:ua`)) % 4;
  let reader;
  if (shape === 0) {
    reader = `        return try {
            WebSettings.getDefaultUserAgent(context) ?: ""
        } catch (e: Exception) {
            ""
        }`;
  } else if (shape === 1) {
    reader = `        val loaded = runCatching { WebSettings.getDefaultUserAgent(context) }.getOrNull()
        return if (loaded.isNullOrEmpty()) "" else loaded`;
  } else if (shape === 2) {
    reader = `        var value = ""
        try {
            val loaded = WebSettings.getDefaultUserAgent(context)
            value = if (loaded == null) "" else loaded
        } catch (ignored: Exception) {
            value = ""
        }
        return value`;
  } else {
    reader = `        return try {
            val loaded = WebSettings.getDefaultUserAgent(context)
            if (loaded.isNullOrEmpty()) "" else loaded
        } catch (e: RuntimeException) {
            ""
        } catch (e: Exception) {
            ""
        }`;
  }
  return `package ${pkg}

import android.content.Context
import android.webkit.WebSettings
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class ${className}(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "${moduleName}"

${foldMethod(hashSeed(`${fragment}:ua-fold`))}

    @ReactMethod
    fun ${method}(promise: Promise) {
${gate('""')}
        promise.resolve(readAgent(reactApplicationContext))
    }

    @androidx.annotation.Keep
    private fun readAgent(context: Context): String {
${reader}
    }
}
`;
}

function buildIntegrity(src, fragment) {
  const pkg = readPackage(src);
  const className = readClassName(src);
  const moduleName = readModuleName(src);
  const method = (src.match(/@ReactMethod[\s\S]*?fun\s+(\w+)\s*\(\s*promise:\s*Promise\s*\)/) || [])[1];
  const project = (src.match(/CLOUD_PROJECT_NUMBER\s*=\s*(\d+)L/) || [])[1];
  if (!pkg || !className || !moduleName || !method || !project) return null;
  const shape = mix32(hashSeed(`${fragment}:integrity`)) % 3;
  let hashFn;
  if (shape === 0) {
    hashFn = `    private fun randomRequestHash(): String {
        val bytes = ByteArray(16)
        java.security.SecureRandom().nextBytes(bytes)
        return bytes.joinToString("") { byte -> "%02x".format(byte) }
    }`;
  } else if (shape === 1) {
    hashFn = `    private fun randomRequestHash(): String {
        val bytes = ByteArray(16)
        java.security.SecureRandom().nextBytes(bytes)
        val alphabet = "0123456789abcdef"
        val out = StringBuilder(bytes.size * 2)
        for (byte in bytes) {
            val v = byte.toInt() and 0xff
            out.append(alphabet[v ushr 4])
            out.append(alphabet[v and 0x0f])
        }
        return out.toString()
    }`;
  } else {
    hashFn = `    private fun randomRequestHash(): String {
        val alphabet = "0123456789abcdef"
        val rng = java.security.SecureRandom()
        val chars = CharArray(32)
        for (i in chars.indices) {
            chars[i] = alphabet[rng.nextInt(alphabet.length)]
        }
        return String(chars)
    }`;
  }
  const call = shape === 1
    ? `        val token = runCatching { requestIntegrityToken(promise) }
        if (token.isFailure) settle("")`
    : `        try {
            requestIntegrityToken(promise)
        } catch (e: Exception) {
            settle("")
        }`;
  return `package ${pkg}

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.google.android.play.core.integrity.IntegrityManagerFactory
import com.google.android.play.core.integrity.StandardIntegrityManager
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import java.util.concurrent.atomic.AtomicBoolean

class ${className}(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "${moduleName}"

${foldMethod(hashSeed(`${fragment}:integrity-fold`))}

    @ReactMethod
    fun ${method}(promise: Promise) {
${gate('""')}
        val timeoutExecutor = Executors.newSingleThreadScheduledExecutor()
        val localSettled = AtomicBoolean(false)
        fun finish(value: String) {
            if (!localSettled.compareAndSet(false, true)) return
            timeoutExecutor.shutdownNow()
            promise.resolve(value)
        }
        timeoutExecutor.schedule({ finish("") }, 12, TimeUnit.SECONDS)
${call.replaceAll('settle("")', 'finish("")').replaceAll("requestIntegrityToken(promise)", "requestIntegrityToken { value -> finish(value) }")}
    }

    private fun requestIntegrityToken(finish: (String) -> Unit) {
        val manager = IntegrityManagerFactory.createStandard(reactApplicationContext.applicationContext)
        val prepareRequest = StandardIntegrityManager.PrepareIntegrityTokenRequest.builder()
            .setCloudProjectNumber(CLOUD_PROJECT_NUMBER)
            .build()
        manager.prepareIntegrityToken(prepareRequest)
            .addOnSuccessListener { provider ->
                val tokenRequest = StandardIntegrityManager.StandardIntegrityTokenRequest.builder()
                    .setRequestHash(randomRequestHash())
                    .build()
                provider.request(tokenRequest)
                    .addOnSuccessListener { response -> finish(response.token() ?: "") }
                    .addOnFailureListener { finish("") }
            }
            .addOnFailureListener { finish("") }
    }

${hashFn}

    companion object {
        private const val CLOUD_PROJECT_NUMBER = ${project}L
    }
}
`;
}

function methodRole(src, name) {
  const body = extractBraced(src, `fun ${name}`);
  if (!body) return "other";
  if (body.includes("pendingSendId") || body.includes('"sendid"')) return "sendId";
  if (body.includes("pendingPushUrl") || body.includes('"url"')) return "pushUrl";
  if (body.includes("versionCode")) return "versionCode";
  if (body.includes("versionName")) return "versionName";
  if (body.includes("readGlRendererString")) return "gl";
  if (body.includes("packageName")) return "package";
  return "other";
}

function stringGetter(name, shape, readExpr) {
  if (shape === 0) {
    return `    @ReactMethod
    fun ${name}(promise: Promise) {
${gate('""')}
        try {
            promise.resolve(${readExpr})
        } catch (e: Exception) {
            promise.resolve("")
        }
    }`;
  }
  if (shape === 1) {
    return `    @ReactMethod
    fun ${name}(promise: Promise) {
${gate('""')}
        val value = runCatching { ${readExpr} }.getOrDefault("")
        promise.resolve(value)
    }`;
  }
  return `    @ReactMethod
    fun ${name}(promise: Promise) {
${gate('""')}
        val value = try {
            ${readExpr}
        } catch (e: Exception) {
            ""
        }
        promise.resolve(value)
    }`;
}

function versionCodeGetter(name, shape) {
  const read = `reactApplicationContext.packageManager.getPackageInfo(reactApplicationContext.packageName, 0).versionCode`;
  if (shape === 0) {
    return `    @ReactMethod
    fun ${name}(promise: Promise) {
${gate("0")}
        try {
            promise.resolve(${read})
        } catch (e: Exception) {
            promise.resolve(0)
        }
    }`;
  }
  if (shape === 1) {
    return `    @ReactMethod
    fun ${name}(promise: Promise) {
${gate("0")}
        val code = runCatching { ${read} }.getOrDefault(0)
        promise.resolve(code)
    }`;
  }
  return `    @ReactMethod
    fun ${name}(promise: Promise) {
${gate("0")}
        val code = try {
            ${read}
        } catch (e: Exception) {
            0
        }
        promise.resolve(code)
    }`;
}

function pendingGetter(name, shape, prefs, intentKey, storeKey) {
  if (shape === 1 && prefs) {
    return `    @ReactMethod
    fun ${name}(promise: Promise) {
${gate('""')}
        val value = runCatching {
            val activity = reactApplicationContext.currentActivity
            val intent = activity?.intent
            val fromIntent = intent?.getStringExtra("${intentKey}")
            val picked = if (!fromIntent.isNullOrBlank()) {
                intent?.removeExtra("${intentKey}")
                fromIntent
            } else {
                ${prefs}.loadString("${storeKey}", "").orEmpty()
            }
            if (picked.isNotEmpty()) ${prefs}.removeKey("${storeKey}")
            picked
        }.getOrDefault("")
        promise.resolve(value)
    }`;
  }
  return `    @ReactMethod
    fun ${name}(promise: Promise) {
${gate('""')}
        try {
            var picked = ""
            val activity = reactApplicationContext.currentActivity
            val intent = activity?.intent
            val fromIntent = intent?.getStringExtra("${intentKey}")
            if (!fromIntent.isNullOrBlank()) {
                picked = fromIntent
                intent?.removeExtra("${intentKey}")
            } else {
                val stored = ${prefs}.loadString("${storeKey}", "")
                if (!stored.isNullOrBlank()) picked = stored
            }
            if (picked.isNotEmpty()) ${prefs}.removeKey("${storeKey}")
            promise.resolve(picked)
        } catch (e: Exception) {
            promise.resolve("")
        }
    }`;
}

function buildAppInfo(src, fragment) {
  const pkg = readPackage(src);
  const className = readClassName(src);
  const moduleName = readModuleName(src);
  const prefs = (src.match(/\b([A-Za-z0-9_]*PreferencesHelper)\b/) || [])[1] || "";
  const glFn = extractBraced(src, "fun readGlRendererString");
  const methods = listReactMethods(src);
  if (!pkg || !className || !moduleName || !glFn || methods.length === 0) return null;
  const shape = mix32(hashSeed(`${fragment}:appinfo`)) % 3;
  const parts = [];
  for (const name of methods) {
    const role = methodRole(src, name);
    if (role === "package") {
      parts.push(stringGetter(name, shape, `reactApplicationContext.packageName ?: ""`));
    } else if (role === "versionName") {
      parts.push(
        stringGetter(
          name,
          shape,
          `reactApplicationContext.packageManager.getPackageInfo(reactApplicationContext.packageName, 0).versionName ?: ""`
        )
      );
    } else if (role === "versionCode") {
      parts.push(versionCodeGetter(name, shape));
    } else if (role === "gl") {
      parts.push(`    @ReactMethod
    fun ${name}(promise: Promise) {
${gate('""')}
        try {
            promise.resolve(readGlRendererString())
        } catch (e: Exception) {
            promise.resolve("")
        }
    }`);
    } else if (role === "sendId" && prefs) {
      parts.push(pendingGetter(name, shape, prefs, "sendid", "pendingSendId"));
    } else if (role === "pushUrl" && prefs) {
      parts.push(pendingGetter(name, shape, prefs, "url", "pendingPushUrl"));
    } else {
      const original = extractBraced(src, `@ReactMethod`);
      const exact = extractBraced(src, `fun ${name}`);
      if (!exact) return null;
      parts.push(`    @ReactMethod\n    ${exact}`);
      void original;
    }
  }
  return `package ${pkg}

import android.opengl.GLES20
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import javax.microedition.khronos.egl.EGL10
import javax.microedition.khronos.egl.EGLConfig
import javax.microedition.khronos.egl.EGLContext
import javax.microedition.khronos.egl.EGLDisplay

class ${className}(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "${moduleName}"

${foldMethod(hashSeed(`${fragment}:appinfo-fold`))}

${parts.join("\n\n")}

    ${glFn}
}
`;
}

function dictionaryWords(fragment) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const words = [];
  for (let len = 1; len <= 3; len++) {
    const total = 26 ** len;
    for (let i = 0; i < total; i++) {
      let n = i;
      let word = "";
      for (let k = 0; k < len; k++) {
        word = alphabet[n % 26] + word;
        n = Math.floor(n / 26);
      }
      if (!JAVA_KEYWORDS.has(word)) words.push(word);
    }
  }
  const rng = mulberry32(hashSeed(`r8:${fragment}`));
  for (let i = words.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const tmp = words[i];
    words[i] = words[j];
    words[j] = tmp;
  }
  return `${words.join("\n")}\n`;
}

async function stampDexVariance(rootPath, options = {}) {
  const fragment = options.fragment || "";
  if (!fragment) {
    return { ok: false, details: "fragment not detected" };
  }
  const javaRoot = path.join(rootPath, "android", "app", "src", "main", "java");
  const files = await walkKt(javaRoot);
  const written = [];
  for (const file of files) {
    if (/Part\d+\.kt$/.test(path.basename(file))) continue;
    const src = await fs.readFile(file, "utf8");
    if (src.includes("autosetup-decoy")) continue;
    let next = null;
    let kind = "";
    if (
      src.includes("WebSettings.getDefaultUserAgent") ||
      /fun\s+\w*UserAgent\s*\(/.test(src)
    ) {
      next = buildUserAgent(src, fragment);
      kind = "user-agent";
    } else if (src.includes("IntegrityManagerFactory")) {
      next = buildIntegrity(src, fragment);
      kind = "integrity";
    } else if (src.includes("fun readGlRendererString")) {
      next = buildAppInfo(src, fragment);
      kind = "app-info";
    }
    if (!next) continue;
    await fs.writeFile(file, next, "utf8");
    if (kind === "user-agent") {
      const dir = path.dirname(file);
      const stem = path.basename(file, ".kt");
      for (let i = 1; i <= 9; i++) {
        const partPath = path.join(dir, `${stem}Part${String(i).padStart(2, "0")}.kt`);
        if (await safeStat(partPath)) await fs.unlink(partPath);
      }
    }
    written.push(path.basename(file));
  }

  const dictPath = path.join(rootPath, "android", "app", "rn-obfuscator-dict.txt");
  await fs.writeFile(dictPath, dictionaryWords(fragment), "utf8");

  if (written.length < 3) {
    return {
      ok: false,
      details: `rewrote ${written.join(", ") || "nothing"}; expected user-agent, app info, and integrity`,
    };
  }
  return {
    ok: true,
    details: `${written.join(", ")}; r8 dictionary shuffled`,
  };
}

module.exports = {
  stampDexVariance,
};
