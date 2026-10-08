package com.zksuspjeyvcw4n

import android.content.Context
import android.webkit.WebSettings
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class Uzksuspjeyvcw4nserAgentModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "UserAzksuspjeyvcw4nper"

    @androidx.annotation.Keep
    private fun foldDex(seed: Int): Int {
        var x = seed xor 29351
        x = (x ushr 6) xor 1104
        x = (x * 45) and 0xffff
        return x
    }

    @ReactMethod
    fun getAndrzksuspjeyvcw4noidUserAgent(promise: Promise) {
        val dexLane = foldDex(reactApplicationContext.hashCode())
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        promise.resolve(readAgent(reactApplicationContext))
    }

    @androidx.annotation.Keep
    private fun readAgent(context: Context): String {
        return try {
            WebSettings.getDefaultUserAgent(context) ?: ""
        } catch (e: Exception) {
            ""
        }
    }
}
