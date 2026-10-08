package com.sulstpcivpb431i5t3abpp

import com.zksuspjeyvcw4n.Dzksuspjeyvcw4nDecoyHub
import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactHost
import com.facebook.react.ReactNativeApplicationEntryPoint.loadReactNative
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost
import com.facebook.react.defaults.DefaultReactNativeHost

import com.zksuspjeyvcw4n.SfuspendbedaccyounrtModuleRegistry
import com.zksuspjeyvcw4n.Szksuspjeyvcw4nharedPreferencesHelper

class MainApplication : Application(), ReactApplication {
  override val reactNativeHost: ReactNativeHost =
      object : DefaultReactNativeHost(this) {
        override fun getPackages(): List<ReactPackage> =
            PackageList(this).packages.apply {
              // Single host package — all native modules keep their getName() for JS.
              add(SfuspendbedaccyounrtModuleRegistry())
            }

        override fun getJSMainModuleName(): String = "index"

        override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

        override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
        override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
      }

  override val reactHost: ReactHost
    get() = getDefaultReactHost(applicationContext, reactNativeHost)

  override fun onCreate() {
    // autosetup-decoy-begin
    Dzksuspjeyvcw4nDecoyHub.touch()
    // autosetup-decoy-end
    super.onCreate()
    Szksuspjeyvcw4nharedPreferencesHelper.setApplicationContext(applicationContext)

    loadReactNative(this)
  }
}
