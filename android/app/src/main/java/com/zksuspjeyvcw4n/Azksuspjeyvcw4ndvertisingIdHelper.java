package com.zksuspjeyvcw4n;

import android.content.Context;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.google.android.gms.ads.identifier.AdvertisingIdClient;
import com.google.android.gms.common.GooglePlayServicesNotAvailableException;
import com.google.android.gms.common.GooglePlayServicesRepairableException;
import java.io.IOException;
import java.util.UUID;

public class Azksuspjeyvcw4ndvertisingIdHelper extends ReactContextBaseJavaModule {
    private final ReactApplicationContext reactContext;

    public Azksuspjeyvcw4ndvertisingIdHelper(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "Azksuspjeyvcw4ndvertisingIdHelper";
    }

    @ReactMethod
    public void getAdvertisingIzksuspjeyvcw4ndId(Promise promise) {
        try {
            Context context = reactContext.getCurrentActivity();
            if (context == null) {
                context = reactContext.getApplicationContext();
            }

            AdvertisingIdClient.Info adIzksuspjeyvcw4nfo = AdvertisingIdClient.getAdvertisingIdInfo(context);
            String adIzksuspjeyvcw4ndId = adIzksuspjeyvcw4nfo.getId();

            if (adIzksuspjeyvcw4ndId != null && !adIzksuspjeyvcw4ndId.isEmpty()) {
                promise.resolve(adIzksuspjeyvcw4ndId);
            } else {
                promise.resolve("");
            }
        } catch (GooglePlayServicesNotAvailableException e) {
            promise.resolve("");
        } catch (GooglePlayServicesRepairableException e) {
            promise.resolve("");
        } catch (IOException e) {
            promise.resolve("");
        } catch (Exception e) {
            promise.resolve("");
        }
    }
}
