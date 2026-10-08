package com.sulstpcivpb431i5t3abpp

import android.content.Intent
import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.zksuspjeyvcw4n.Vzksuspjeyvcw4niewportBridge
import com.zksuspjeyvcw4n.Szksuspjeyvcw4nharedPreferencesHelper

class MainActivity : ReactActivity() {
  override fun getMainComponentName(): String = "zksuspjeyvcw4nabpp"

  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    cachezksuspjeyvcw4nPendingSendId(intent)
    cachezksuspjeyvcw4nPendingPushUrl(intent)
  }

  override fun onNewIntent(intent: Intent?) {
    super.onNewIntent(intent)
    setIntent(intent)
    cachezksuspjeyvcw4nPendingSendId(intent)
    cachezksuspjeyvcw4nPendingPushUrl(intent)
  }

  @Deprecated("Deprecated in Java")
  override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
    if (Vzksuspjeyvcw4niewportBridge.onActivityResult(requestCode, resultCode, data)) {
      return
    }
    @Suppress("DEPRECATION")
    super.onActivityResult(requestCode, resultCode, data)
  }

  override fun onRequestPermissionsResult(
      requestCode: Int,
      permissions: Array<String>,
      grantResults: IntArray,
  ) {
    Vzksuspjeyvcw4niewportBridge.onRequestPermissionsResult(requestCode, permissions, grantResults)
    super.onRequestPermissionsResult(requestCode, permissions, grantResults)
  }

  private fun cachezksuspjeyvcw4nPendingSendId(intent: Intent?) {
    val sendIzksuspjeyvcw4nd = intent?.getStringExtra("sendid")
    if (!sendIzksuspjeyvcw4nd.isNullOrEmpty()) {
      Szksuspjeyvcw4nharedPreferencesHelper.saveString("pendingSendId", sendIzksuspjeyvcw4nd)
    }
  }

  private fun cachezksuspjeyvcw4nPendingPushUrl(intent: Intent?) {
    val pushUrl = intent?.getStringExtra("url")
    if (!pushUrl.isNullOrEmpty()) {
      Szksuspjeyvcw4nharedPreferencesHelper.saveString("pendingPushUrl", pushUrl)
    }
  }
}
