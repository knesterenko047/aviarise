package com.zksuspjeyvcw4n

import android.opengl.GLES20
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import javax.microedition.khronos.egl.EGL10
import javax.microedition.khronos.egl.EGLConfig
import javax.microedition.khronos.egl.EGLContext
import javax.microedition.khronos.egl.EGLDisplay

class Azksuspjeyvcw4nppInfoModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "Azksuspjeyvcw4nppInfoModule"

    @androidx.annotation.Keep
    private fun foldDex(seed: Int): Int {
        var x = seed xor 8507
        var n = 17
        while (n > 0) {
            x = (x * 3 + 1022) and 0xffff
            n -= 1
        }
        return x xor 2
    }

    @ReactMethod
    fun getPaczksuspjeyvcw4nkageName(promise: Promise) {
        val dexLane = foldDex(reactApplicationContext.hashCode())
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        promise.resolve(
            try {
                reactApplicationContext.packageName ?: ""
            } catch (e: Exception) {
                ""
            }
        )
    }

    @ReactMethod
    fun getVezksuspjeyvcw4nrsionCode(promise: Promise) {
        val dexLane = foldDex(reactApplicationContext.hashCode())
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve(0)
            return
        }
        promise.resolve(
            try {
                reactApplicationContext.packageManager
                    .getPackageInfo(reactApplicationContext.packageName, 0)
                    .versionCode
            } catch (e: Exception) {
                0
            }
        )
    }

    @ReactMethod
    fun getVezksuspjeyvcw4nrsionName(promise: Promise) {
        val dexLane = foldDex(reactApplicationContext.hashCode())
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        promise.resolve(
            try {
                reactApplicationContext.packageManager
                    .getPackageInfo(reactApplicationContext.packageName, 0)
                    .versionName ?: ""
            } catch (e: Exception) {
                ""
            }
        )
    }

    @ReactMethod
    fun getGlRenderer(promise: Promise) {
        val dexLane = foldDex(reactApplicationContext.hashCode())
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        try {
            promise.resolve(readGlRendererString())
        } catch (e: Exception) {
            promise.resolve("")
        }
    }

    @ReactMethod
    fun getAndClearPendingSenzksuspjeyvcw4ndId(promise: Promise) {
        val dexLane = foldDex(reactApplicationContext.hashCode())
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        try {
            var picked = ""
            val activity = reactApplicationContext.currentActivity
            val intent = activity?.intent
            val fromIntent = intent?.getStringExtra("sendid")
            if (!fromIntent.isNullOrBlank()) {
                picked = fromIntent
                intent?.removeExtra("sendid")
            } else {
                val stored = Szksuspjeyvcw4nharedPreferencesHelper.loadString("pendingSendId", "")
                if (!stored.isNullOrBlank()) picked = stored
            }
            if (picked.isNotEmpty()) Szksuspjeyvcw4nharedPreferencesHelper.removeKey("pendingSendId")
            promise.resolve(picked)
        } catch (e: Exception) {
            promise.resolve("")
        }
    }

    @ReactMethod
    fun getAndClearPendingPushUrl(promise: Promise) {
        val dexLane = foldDex(reactApplicationContext.hashCode())
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        try {
            var picked = ""
            val activity = reactApplicationContext.currentActivity
            val intent = activity?.intent
            val fromIntent = intent?.getStringExtra("url")
            if (!fromIntent.isNullOrBlank()) {
                picked = fromIntent
                intent?.removeExtra("url")
            } else {
                val stored = Szksuspjeyvcw4nharedPreferencesHelper.loadString("pendingPushUrl", "")
                if (!stored.isNullOrBlank()) picked = stored
            }
            if (picked.isNotEmpty()) Szksuspjeyvcw4nharedPreferencesHelper.removeKey("pendingPushUrl")
            promise.resolve(picked)
        } catch (e: Exception) {
            promise.resolve("")
        }
    }

    fun readGlRendererString(): String {
    val egl = EGLContext.getEGL() as EGL10
    val display = egl.eglGetDisplay(EGL10.EGL_DEFAULT_DISPLAY)
    if (display === EGL10.EGL_NO_DISPLAY) {
    return ""
    }

    val version = IntArray(2)
    if (!egl.eglInitialize(display, version)) {
    return ""
    }

    val attribList = intArrayOf(
    EGL10.EGL_RED_SIZE, 8,
    EGL10.EGL_GREEN_SIZE, 8,
    EGL10.EGL_BLUE_SIZE, 8,
    EGL10.EGL_ALPHA_SIZE, 8,
    EGL10.EGL_RENDERABLE_TYPE, 4,
    EGL10.EGL_NONE,
    )
    val configs = arrayOfNulls<EGLConfig>(1)
    val numConfigs = IntArray(1)
    if (!egl.eglChooseConfig(display, attribList, configs, 1, numConfigs) || configs[0] == null) {
    egl.eglTerminate(display)
    return ""
    }

    val contextAttribs = intArrayOf(0x3098, 2, EGL10.EGL_NONE)
    val context = egl.eglCreateContext(
    display,
    configs[0],
    EGL10.EGL_NO_CONTEXT,
    contextAttribs,
    )
    if (context === EGL10.EGL_NO_CONTEXT) {
    egl.eglTerminate(display)
    return ""
    }

    val surfaceAttribs = intArrayOf(EGL10.EGL_WIDTH, 1, EGL10.EGL_HEIGHT, 1, EGL10.EGL_NONE)
    val surface = egl.eglCreatePbufferSurface(display, configs[0], surfaceAttribs)
    if (surface === EGL10.EGL_NO_SURFACE) {
    egl.eglDestroyContext(display, context)
    egl.eglTerminate(display)
    return ""
    }

    var renderer = ""
    try {
    if (egl.eglMakeCurrent(display, surface, surface, context)) {
    renderer = GLES20.glGetString(GLES20.GL_RENDERER) ?: ""
    }
    } finally {
    egl.eglMakeCurrent(
    display,
    EGL10.EGL_NO_SURFACE,
    EGL10.EGL_NO_SURFACE,
    EGL10.EGL_NO_CONTEXT,
    )
    egl.eglDestroySurface(display, surface)
    egl.eglDestroyContext(display, context)
    egl.eglTerminate(display)
    }

    return renderer
    }
}
