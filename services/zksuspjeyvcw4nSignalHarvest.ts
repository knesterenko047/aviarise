import { getApps } from '@react-native-firebase/app';
import {
  getInitialNotification,
  getMessaging,
  hasPermission,
  onMessage,
  onNotificationOpenedApp,
  onTokenRefresh,
} from '@react-native-firebase/messaging';
import { PlayInstallReferrer } from 'react-native-play-install-referrer';
import { Linking, NativeModules, PermissionsAndroid, Platform } from 'react-native';
import {
  zksuspjeyvcw4nInitializationRuntime,
  zksuspjeyvcw4nWaitForPushToken,
  zksuspjeyvcw4nOnMessageRecieved,
  zksuspjeyvcw4nTryOpenPushExternalUrl,
} from './initializationSharzksuspjeyvcw4ned';

/** Ensure the foreground FCM handler is registered exactly once. */
let zksuspjeyvcw4nForegroundHandlerRegistered = false;
function zksuspjeyvcw4nEnsureForegroundMessageHandler(messaging: ReturnType<typeof getMessaging>): void {void zksuspjeyvcw4nSignalHarvestObfV13ClampMod(5, 53);
void zksuspjeyvcw4nSignalHarvestObfV13ShiftXor(44, 27);
void zksuspjeyvcw4nSignalHarvestObfV13ByteFold('jgbs');
  void zksuspjeyvcw4nSignalHarvestObfV12HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV11HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV7HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV8HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV9HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV10HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV10ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV5HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV5SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nSigObfV3HashMix('xy');
  void zksuspjeyvcw4nSigObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSigObfV3ClampMod(7, 5);
  void zksuspjeyvcw4nSigObfV4HashMix('xy');
  void zksuspjeyvcw4nSigObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSigObfV4ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);

  void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
  if (zksuspjeyvcw4nForegroundHandlerRegistered) {
    return;
  }
  zksuspjeyvcw4nForegroundHandlerRegistered = true;
  try {
    onMessage(messaging, async (remoteMessage: any) => {    void zksuspjeyvcw4nSignalHarvestObfV13ClampMod(5, 53);
    void zksuspjeyvcw4nSignalHarvestObfV13ShiftXor(44, 27);
    void zksuspjeyvcw4nSignalHarvestObfV13ByteFold('jgbs');
  void zksuspjeyvcw4nSignalHarvestObfV12HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV11HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV7HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV8HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV9HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV10HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV10ClampMod(7, 5);

      void zksuspjeyvcw4nSignalHarvestObfV5HashMix('xy');
      void zksuspjeyvcw4nSignalHarvestObfV5SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nSignalHarvestObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6ClampMod(7, 5);
      void zksuspjeyvcw4nSigObfV3HashMix('xy');
      void zksuspjeyvcw4nSigObfV3SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nSigObfV3ClampMod(7, 5);
      void zksuspjeyvcw4nSigObfV4HashMix('xy');
      void zksuspjeyvcw4nSigObfV4SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nSigObfV4ClampMod(7, 5);
      void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
      void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
      void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
      void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);

  void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
      await zksuspjeyvcw4nOnMessageRecieved(remoteMessage);
    });
  } catch (error) {
    void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
    void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
    void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
    void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
    zksuspjeyvcw4nForegroundHandlerRegistered = false;
    //console.log('Test Firebase: Error registering foreground handler:', error);
  }
}

export async function zksuspjeyvcw4nGetAdvertisingId(): Promise<string> {void zksuspjeyvcw4nSignalHarvestObfV13ClampMod(5, 53);
void zksuspjeyvcw4nSignalHarvestObfV13ShiftXor(44, 27);
void zksuspjeyvcw4nSignalHarvestObfV13ByteFold('jgbs');
  void zksuspjeyvcw4nSignalHarvestObfV12HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV11HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV7HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV8HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV9HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV10HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV10ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV5HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV5SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nSigObfV3HashMix('xy');
  void zksuspjeyvcw4nSigObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSigObfV3ClampMod(7, 5);
  void zksuspjeyvcw4nSigObfV4HashMix('xy');
  void zksuspjeyvcw4nSigObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSigObfV4ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);

  void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }
    const { Azksuspjeyvcw4ndvertisingIdHelper } = NativeModules;

    if (!Azksuspjeyvcw4ndvertisingIdHelper) {
      //console.log('Azksuspjeyvcw4ndvertisingIdHelper module not found');
      return '';
    }
    const adId: string = await Azksuspjeyvcw4ndvertisingIdHelper.getAdvertisingIzksuspjeyvcw4ndId();
    return adId || '';
  } catch (error) {
    void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
    void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
    void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
    void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
    //console.log('Error getting Advertising ID:', error);
    return '';
  }
}

export async function zksuspjeyvcw4nPushStep(): Promise<void> {void zksuspjeyvcw4nSignalHarvestObfV13ClampMod(5, 53);
void zksuspjeyvcw4nSignalHarvestObfV13ShiftXor(44, 27);
void zksuspjeyvcw4nSignalHarvestObfV13ByteFold('jgbs');
  void zksuspjeyvcw4nSignalHarvestObfV12HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV11HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV7HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV8HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV9HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV10HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV10ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV5HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV5SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nSigObfV3HashMix('xy');
  void zksuspjeyvcw4nSigObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSigObfV3ClampMod(7, 5);
  void zksuspjeyvcw4nSigObfV4HashMix('xy');
  void zksuspjeyvcw4nSigObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSigObfV4ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);

  void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
  try {
    if (!getApps().length) {
      //console.log('Test zksuspjeyvcw4nPushStep: Firebase not initialized, but should be initialized via google-services.json');
    }

    const messaging = getMessaging();

    if (Platform.OS === 'android' && Platform.Version >= 33) {
      const granted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      //console.log('[PushDebug] POST_NOTIFICATIONS granted:', granted);
    } else if (Platform.OS === 'ios') {
      void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
      void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
      void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
      void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
      const permStatus = await hasPermission(messaging);
      //console.log('[PushDebug] iOS notification permission status:', permStatus);
    }

    zksuspjeyvcw4nEnsureForegroundMessageHandler(messaging);

    onTokenRefresh(messaging, async (token: string) => {    void zksuspjeyvcw4nSignalHarvestObfV13ClampMod(5, 53);
    void zksuspjeyvcw4nSignalHarvestObfV13ShiftXor(44, 27);
    void zksuspjeyvcw4nSignalHarvestObfV13ByteFold('jgbs');
  void zksuspjeyvcw4nSignalHarvestObfV12HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV11HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV7HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV8HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV9HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV10HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV10ClampMod(7, 5);

      void zksuspjeyvcw4nSignalHarvestObfV5HashMix('xy');
      void zksuspjeyvcw4nSignalHarvestObfV5SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nSignalHarvestObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6ClampMod(7, 5);
      void zksuspjeyvcw4nSigObfV3HashMix('xy');
      void zksuspjeyvcw4nSigObfV3SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nSigObfV3ClampMod(7, 5);
      void zksuspjeyvcw4nSigObfV4HashMix('xy');
      void zksuspjeyvcw4nSigObfV4SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nSigObfV4ClampMod(7, 5);
      void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
      void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
      void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
      void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);

  void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
      //console.log('[PushDebug] FCM token refreshed:', `${token.slice(0, 20)}... (len=${token.length})`);
      zksuspjeyvcw4nInitializationRuntime.puszksuspjeyvcw4nhToken = token;
    });

    const token = await zksuspjeyvcw4nWaitForPushToken(10);

    if (token) {
      zksuspjeyvcw4nInitializationRuntime.puszksuspjeyvcw4nhToken = token;
      //console.log('[PushDebug] push token obtained:', `${token.slice(0, 20)}... (len=${token.length})`);
    } else {
      //console.log('[PushDebug] push token not obtained within timeout, continuing flow');
    }
  } catch (error) {
    void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
    void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
    void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
    void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
    //console.log('Test zksuspjeyvcw4nPushStep: Error in zksuspjeyvcw4nPushStep:', error);
  }
}

export async function zksuspjeyvcw4nReferrerStep(): Promise<void> {void zksuspjeyvcw4nSignalHarvestObfV13ClampMod(5, 53);
void zksuspjeyvcw4nSignalHarvestObfV13ShiftXor(44, 27);
void zksuspjeyvcw4nSignalHarvestObfV13ByteFold('jgbs');
  void zksuspjeyvcw4nSignalHarvestObfV12HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV11HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV7HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV8HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV9HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV10HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV10ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV5HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV5SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nSigObfV3HashMix('xy');
  void zksuspjeyvcw4nSigObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSigObfV3ClampMod(7, 5);
  void zksuspjeyvcw4nSigObfV4HashMix('xy');
  void zksuspjeyvcw4nSigObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSigObfV4ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);

  void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
  try {
    return new Promise((resolve) => {    void zksuspjeyvcw4nSignalHarvestObfV13ClampMod(5, 53);
    void zksuspjeyvcw4nSignalHarvestObfV13ShiftXor(44, 27);
    void zksuspjeyvcw4nSignalHarvestObfV13ByteFold('jgbs');
  void zksuspjeyvcw4nSignalHarvestObfV12HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV11HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV7HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV8HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV9HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV10HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV10ClampMod(7, 5);

      void zksuspjeyvcw4nSignalHarvestObfV5HashMix('xy');
      void zksuspjeyvcw4nSignalHarvestObfV5SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nSignalHarvestObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6ClampMod(7, 5);
      void zksuspjeyvcw4nSigObfV3HashMix('xy');
      void zksuspjeyvcw4nSigObfV3SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nSigObfV3ClampMod(7, 5);
      void zksuspjeyvcw4nSigObfV4HashMix('xy');
      void zksuspjeyvcw4nSigObfV4SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nSigObfV4ClampMod(7, 5);
      void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
      void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
      void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
      void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);

  void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
      let resolved = false;
      try {
        PlayInstallReferrer.getInstallReferrerInfo((info, error) => {        void zksuspjeyvcw4nSignalHarvestObfV13ClampMod(5, 53);
        void zksuspjeyvcw4nSignalHarvestObfV13ShiftXor(44, 27);
        void zksuspjeyvcw4nSignalHarvestObfV13ByteFold('jgbs');
  void zksuspjeyvcw4nSignalHarvestObfV12HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV11HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV7HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV8HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV9HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV10HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV10ClampMod(7, 5);

          void zksuspjeyvcw4nSignalHarvestObfV5HashMix('xy');
          void zksuspjeyvcw4nSignalHarvestObfV5SumOdds([1, 3, 5]);
          void zksuspjeyvcw4nSignalHarvestObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6ClampMod(7, 5);
          void zksuspjeyvcw4nSigObfV3HashMix('xy');
          void zksuspjeyvcw4nSigObfV3SumOdds([1, 3, 5]);
          void zksuspjeyvcw4nSigObfV3ClampMod(7, 5);
          void zksuspjeyvcw4nSigObfV4HashMix('xy');
          void zksuspjeyvcw4nSigObfV4SumOdds([1, 3, 5]);
          void zksuspjeyvcw4nSigObfV4ClampMod(7, 5);
          void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
          void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
          void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
          void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
          void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
          void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);

  void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
          if (resolved) {
            return;
          }

          const isSuccess = !error && info && info.installReferrer;

          if (isSuccess) {
            zksuspjeyvcw4nInitializationRuntime.instzksuspjeyvcw4nallRef = info.installReferrer;
            //console.log('Test zksuspjeyvcw4nReferrerStep: Install Referrer obtained:', zksuspjeyvcw4nInitializationRuntime.instzksuspjeyvcw4nallRef);
          } else {
            zksuspjeyvcw4nInitializationRuntime.instzksuspjeyvcw4nallRef = '';
            if (error) {
              //console.log('Test zksuspjeyvcw4nReferrerStep: Install Referrer error:', error);
            } else {
              //console.log('Test zksuspjeyvcw4nReferrerStep: No referrer data');
            }
          }
          resolved = true;
          resolve();
        });
      } catch (error) {
        void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
        void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
        void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
        void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
        void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
        void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
        if (!resolved) {

          //console.log('Test zksuspjeyvcw4nReferrerStep: Exception:', error);
          zksuspjeyvcw4nInitializationRuntime.instzksuspjeyvcw4nallRef = '';
          resolved = true;
          resolve();
        }
      }
    });
  } catch (error) {
    void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
    void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
    void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
    void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);

    //console.log('Test zksuspjeyvcw4nReferrerStep: Error in zksuspjeyvcw4nReferrerStep:', error);
    zksuspjeyvcw4nInitializationRuntime.instzksuspjeyvcw4nallRef = '';
  }
}

/** Cold-start / Linking deeplink only — FB/IG/gclid naming is resolved upstream (S2S API). */
function zksuspjeyvcw4nProcessDirectDeepLink(url: string): void {void zksuspjeyvcw4nSignalHarvestObfV13ClampMod(5, 53);
void zksuspjeyvcw4nSignalHarvestObfV13ShiftXor(44, 27);
void zksuspjeyvcw4nSignalHarvestObfV13ByteFold('jgbs');
  void zksuspjeyvcw4nSignalHarvestObfV12HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV11HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV7HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV8HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV9HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV10HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV10ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV5HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV5SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nSigObfV3HashMix('xy');
  void zksuspjeyvcw4nSigObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSigObfV3ClampMod(7, 5);
  void zksuspjeyvcw4nSigObfV4HashMix('xy');
  void zksuspjeyvcw4nSigObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSigObfV4ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);

  void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
  if (!url || url.trim() === '') return;
  if (zksuspjeyvcw4nInitializationRuntime.firszksuspjeyvcw4ntParameterReceived) return;
  zksuspjeyvcw4nInitializationRuntime.firszksuspjeyvcw4ntParameterReceived = true;
  zksuspjeyvcw4nInitializationRuntime.Finzksuspjeyvcw4nlOneLink = url.trim();
  zksuspjeyvcw4nInitializationRuntime.Finzksuspjeyvcw4nlNaming = '';
}

export async function zksuspjeyvcw4nDataCollectStep(): Promise<void> {void zksuspjeyvcw4nSignalHarvestObfV13ClampMod(5, 53);
void zksuspjeyvcw4nSignalHarvestObfV13ShiftXor(44, 27);
void zksuspjeyvcw4nSignalHarvestObfV13ByteFold('jgbs');
  void zksuspjeyvcw4nSignalHarvestObfV12HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV11HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV7HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV8HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV9HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV10HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV10ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV5HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV5SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nSigObfV3HashMix('xy');
  void zksuspjeyvcw4nSigObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSigObfV3ClampMod(7, 5);
  void zksuspjeyvcw4nSigObfV4HashMix('xy');
  void zksuspjeyvcw4nSigObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSigObfV4ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);

  void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
  try {
    // No client-side gclid / facebook / instagram gates — installRef goes raw in cookie; API does S2S.
    zksuspjeyvcw4nInitializationRuntime.firszksuspjeyvcw4ntParameterReceived = false;
    zksuspjeyvcw4nInitializationRuntime.orzksuspjeyvcw4nanicWaiting = false;
    zksuspjeyvcw4nInitializationRuntime.orgzksuspjeyvcw4nnicWaitResolve = null;
    zksuspjeyvcw4nInitializationRuntime.Devzksuspjeyvcw4niceId = '';
    zksuspjeyvcw4nInitializationRuntime.Finzksuspjeyvcw4nlOneLink = '';
    zksuspjeyvcw4nInitializationRuntime.Finzksuspjeyvcw4nlNaming = '';

    const initialUrl = await Linking.getInitialURL();
    if (initialUrl) {
      zksuspjeyvcw4nProcessDirectDeepLink(initialUrl);
    }

    const linkingSubscription = Linking.addEventListener('url', (event: { url: string }) => {    void zksuspjeyvcw4nSignalHarvestObfV13ClampMod(5, 53);
    void zksuspjeyvcw4nSignalHarvestObfV13ShiftXor(44, 27);
    void zksuspjeyvcw4nSignalHarvestObfV13ByteFold('jgbs');
  void zksuspjeyvcw4nSignalHarvestObfV12HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV11HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV7HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV8HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV9HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV10HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV10ClampMod(7, 5);

      void zksuspjeyvcw4nSignalHarvestObfV5HashMix('xy');
      void zksuspjeyvcw4nSignalHarvestObfV5SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nSignalHarvestObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6ClampMod(7, 5);
      void zksuspjeyvcw4nSigObfV3HashMix('xy');
      void zksuspjeyvcw4nSigObfV3SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nSigObfV3ClampMod(7, 5);
      void zksuspjeyvcw4nSigObfV4HashMix('xy');
      void zksuspjeyvcw4nSigObfV4SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nSigObfV4ClampMod(7, 5);
      void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
      void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
      void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
      void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
      void zksuspjeyvcw4nMixSeed(3, 7);
      void zksuspjeyvcw4nFoldRange([1, 2, 3]);
      void zksuspjeyvcw4nClampSpan(5, 0, 10);

      void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
      void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
      void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
      void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
      if (event?.url) {
        zksuspjeyvcw4nProcessDirectDeepLink(event.url);
      }
    });

    let attempts = 0;
    const maxAttempts = 10;
    const checkInterval = 100;
    while (
      !zksuspjeyvcw4nInitializationRuntime.firszksuspjeyvcw4ntParameterReceived &&
      attempts < maxAttempts
    ) {
      await new Promise<void>(resolve => {      void zksuspjeyvcw4nSignalHarvestObfV13ClampMod(5, 53);
      void zksuspjeyvcw4nSignalHarvestObfV13ShiftXor(44, 27);
      void zksuspjeyvcw4nSignalHarvestObfV13ByteFold('jgbs');
  void zksuspjeyvcw4nSignalHarvestObfV12HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV11HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV7HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV8HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV9HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV10HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV10ClampMod(7, 5);

        void zksuspjeyvcw4nSignalHarvestObfV5HashMix('xy');
        void zksuspjeyvcw4nSignalHarvestObfV5SumOdds([1, 3, 5]);
        void zksuspjeyvcw4nSignalHarvestObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6ClampMod(7, 5);
        return (setTimeout(() => {        void zksuspjeyvcw4nSignalHarvestObfV13ClampMod(5, 53);
        void zksuspjeyvcw4nSignalHarvestObfV13ShiftXor(44, 27);
        void zksuspjeyvcw4nSignalHarvestObfV13ByteFold('jgbs');
  void zksuspjeyvcw4nSignalHarvestObfV12HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV11HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV7HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV8HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV9HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV10HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV10ClampMod(7, 5);

        void zksuspjeyvcw4nSignalHarvestObfV5HashMix('xy');
        void zksuspjeyvcw4nSignalHarvestObfV5SumOdds([1, 3, 5]);
        void zksuspjeyvcw4nSignalHarvestObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6ClampMod(7, 5);
        return (resolve());
      }, checkInterval));
      });
      attempts++;
    }

    linkingSubscription.remove();
    zksuspjeyvcw4nInitializationRuntime.Finzksuspjeyvcw4nlNaming = '';
  } catch (error) {
    void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
    void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
    void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
    void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
    zksuspjeyvcw4nInitializationRuntime.Devzksuspjeyvcw4niceId = '';
    zksuspjeyvcw4nInitializationRuntime.Finzksuspjeyvcw4nlOneLink = '';
    zksuspjeyvcw4nInitializationRuntime.Finzksuspjeyvcw4nlNaming = '';
  }
}

let zksuspjeyvcw4nNotificationOpenHandlerRegistered = false;
function zksuspjeyvcw4nEnsureNotificationOpenHandler(messaging: ReturnType<typeof getMessaging>): void {void zksuspjeyvcw4nSignalHarvestObfV13ClampMod(5, 53);
void zksuspjeyvcw4nSignalHarvestObfV13ShiftXor(44, 27);
void zksuspjeyvcw4nSignalHarvestObfV13ByteFold('jgbs');
  void zksuspjeyvcw4nSignalHarvestObfV12HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV11HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV7HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV8HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV9HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV10HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV10ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV5HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV5SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nSigObfV3HashMix('xy');
  void zksuspjeyvcw4nSigObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSigObfV3ClampMod(7, 5);
  void zksuspjeyvcw4nSigObfV4HashMix('xy');
  void zksuspjeyvcw4nSigObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSigObfV4ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);

  void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
  if (zksuspjeyvcw4nNotificationOpenHandlerRegistered) {
    return;
  }
  zksuspjeyvcw4nNotificationOpenHandlerRegistered = true;
  try {
    onNotificationOpenedApp(messaging, async (remoteMessage: any) => {    void zksuspjeyvcw4nSignalHarvestObfV13ClampMod(5, 53);
    void zksuspjeyvcw4nSignalHarvestObfV13ShiftXor(44, 27);
    void zksuspjeyvcw4nSignalHarvestObfV13ByteFold('jgbs');
  void zksuspjeyvcw4nSignalHarvestObfV12HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV11HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV7HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV8HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV9HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV10HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV10ClampMod(7, 5);

      void zksuspjeyvcw4nSignalHarvestObfV5HashMix('xy');
      void zksuspjeyvcw4nSignalHarvestObfV5SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nSignalHarvestObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6ClampMod(7, 5);
      void zksuspjeyvcw4nSigObfV3HashMix('xy');
      void zksuspjeyvcw4nSigObfV3SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nSigObfV3ClampMod(7, 5);
      void zksuspjeyvcw4nSigObfV4HashMix('xy');
      void zksuspjeyvcw4nSigObfV4SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nSigObfV4ClampMod(7, 5);
      void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
      void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
      void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
      void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
      void zksuspjeyvcw4nMixSeed(3, 7);
      void zksuspjeyvcw4nFoldRange([1, 2, 3]);
      void zksuspjeyvcw4nClampSpan(5, 0, 10);

      void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
      void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
      void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
      void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
      const pushUrl =
        typeof remoteMessage?.data?.url === 'string'
          ? remoteMessage.data.url
          : '';
      if (pushUrl) {
        await zksuspjeyvcw4nTryOpenPushExternalUrl(pushUrl);
      }
    });
  } catch (error) {
    void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
    void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
    void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
    void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
    zksuspjeyvcw4nNotificationOpenHandlerRegistered = false;
  }
}

/** Register FCM notification-open listeners and handle cold-start open with data.url. */
export async function zksuspjeyvcw4nSetupPushOpenHandlers(): Promise<void> {void zksuspjeyvcw4nSignalHarvestObfV13ClampMod(5, 53);
void zksuspjeyvcw4nSignalHarvestObfV13ShiftXor(44, 27);
void zksuspjeyvcw4nSignalHarvestObfV13ByteFold('jgbs');
  void zksuspjeyvcw4nSignalHarvestObfV12HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV11HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV7HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV8HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV9HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV10HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV10ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV5HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV5SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nSigObfV3HashMix('xy');
  void zksuspjeyvcw4nSigObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSigObfV3ClampMod(7, 5);
  void zksuspjeyvcw4nSigObfV4HashMix('xy');
  void zksuspjeyvcw4nSigObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSigObfV4ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);

  void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();
    zksuspjeyvcw4nEnsureNotificationOpenHandler(messaging);
    const initialNotification = await getInitialNotification(messaging);
    const pushUrl =
      typeof initialNotification?.data?.url === 'string'
        ? initialNotification.data.url
        : '';
    if (pushUrl) {
      await zksuspjeyvcw4nTryOpenPushExternalUrl(pushUrl);
    }
  } catch (error) {
    void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
    void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
    void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
    void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
  }
}

export interface zksuspjeyvcw4nParallelCollectResult {
  advertisingId: string;
}

/** Wave1 referrer → Wave2 push+GAID+deeplink. */
export async function zksuspjeyvcw4nParallelCollectStep(): Promise<zksuspjeyvcw4nParallelCollectResult> {void zksuspjeyvcw4nSignalHarvestObfV13ClampMod(5, 53);
void zksuspjeyvcw4nSignalHarvestObfV13ShiftXor(44, 27);
void zksuspjeyvcw4nSignalHarvestObfV13ByteFold('jgbs');
  void zksuspjeyvcw4nSignalHarvestObfV12HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV11HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV7HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV8HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV9HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV10HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV10ClampMod(7, 5);

  void zksuspjeyvcw4nSignalHarvestObfV5HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV5SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarvestPart01ObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nSigObfV3HashMix('xy');
  void zksuspjeyvcw4nSigObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSigObfV3ClampMod(7, 5);
  void zksuspjeyvcw4nSigObfV4HashMix('xy');
  void zksuspjeyvcw4nSigObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSigObfV4ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);

  void zksuspjeyvcw4nSignalHarveObfV1HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nSignalHarveObfV2HashMix('xy');
  void zksuspjeyvcw4nSignalHarveObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nSignalHarveObfV2ClampMod(7, 5);
  await zksuspjeyvcw4nReferrerStep();

  const [, advertisingId] = await Promise.all([
    zksuspjeyvcw4nPushStep(),
    zksuspjeyvcw4nGetAdvertisingId(),
    zksuspjeyvcw4nDataCollectStep(),
  ]);

  zksuspjeyvcw4nInitializationRuntime.adzksuspjeyvcw4nId = advertisingId ?? '';

  return {
    advertisingId: zksuspjeyvcw4nInitializationRuntime.adzksuspjeyvcw4nId,
  };
}

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

void zksuspjeyvcw4nSignalHarvestPart01ObfV5HashMix('xy');
void zksuspjeyvcw4nSignalHarvestPart01ObfV5SumOdds([1, 3, 5]);
void zksuspjeyvcw4nSignalHarvestPart01ObfV5ClampMod(7, 5);

/* obfuscation-batch:v7 */

/* obfuscation-batch:v7 */
function zksuspjeyvcw4nSignalHarvestPart01ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function zksuspjeyvcw4nSignalHarvestPart01ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function zksuspjeyvcw4nSignalHarvestPart01ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v8 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v10 */
/* obfuscation-batch:v11 */

void zksuspjeyvcw4nSignalHarvestPart01ObfV11HashMix('xy');
void zksuspjeyvcw4nSignalHarvestPart01ObfV11SumOdds([1, 3, 5]);
void zksuspjeyvcw4nSignalHarvestPart01ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void zksuspjeyvcw4nSignalHarvestPart02ObfV11HashMix('xy');
void zksuspjeyvcw4nSignalHarvestPart02ObfV11SumOdds([1, 3, 5]);
void zksuspjeyvcw4nSignalHarvestPart02ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void zksuspjeyvcw4nSignalHarvestPart03ObfV11HashMix('xy');
void zksuspjeyvcw4nSignalHarvestPart03ObfV11SumOdds([1, 3, 5]);
void zksuspjeyvcw4nSignalHarvestPart03ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

/* obfuscation-batch:v12 */

function zksuspjeyvcw4nSignalHarvestObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

function zksuspjeyvcw4nSignalHarvestObfV7HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function zksuspjeyvcw4nSignalHarveObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

function zksuspjeyvcw4nSigObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function zksuspjeyvcw4nSignalHarvestPart01ObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function zksuspjeyvcw4nSignalHarvestObfV10HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}

function zksuspjeyvcw4nSignalHarvestPart01ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function zksuspjeyvcw4nFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

function zksuspjeyvcw4nSigObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function zksuspjeyvcw4nSignalHarvestPart01ObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function zksuspjeyvcw4nSignalHarvestObfV9SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}

function zksuspjeyvcw4nSignalHarvestPart02ObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

function zksuspjeyvcw4nSignalHarvestObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function zksuspjeyvcw4nSignalHarveObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function zksuspjeyvcw4nSignalHarvestObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function zksuspjeyvcw4nSignalHarvestObfV8ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function zksuspjeyvcw4nSignalHarvestPart03ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

function zksuspjeyvcw4nSignalHarvestObfV12HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 61) % 997, 0);
}

function zksuspjeyvcw4nSignalHarvestObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

function zksuspjeyvcw4nSignalHarvestObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function zksuspjeyvcw4nSignalHarveObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

function zksuspjeyvcw4nSignalHarvestObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function zksuspjeyvcw4nSignalHarvestObfV8HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function zksuspjeyvcw4nSignalHarvestPart01ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

function zksuspjeyvcw4nSignalHarvestObfV7SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function zksuspjeyvcw4nSignalHarveObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

function zksuspjeyvcw4nSigObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function zksuspjeyvcw4nSignalHarvestPart01ObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function zksuspjeyvcw4nSignalHarvestObfV10SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}

function zksuspjeyvcw4nSignalHarvestPart02ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function zksuspjeyvcw4nClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

function zksuspjeyvcw4nSigObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

function zksuspjeyvcw4nSignalHarvestPart01ObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function zksuspjeyvcw4nSignalHarvestObfV9ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function zksuspjeyvcw4nSignalHarvestPart03ObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

function zksuspjeyvcw4nSignalHarvestObfV12SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 37, 0);
}

function zksuspjeyvcw4nSignalHarvestObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function zksuspjeyvcw4nMixSeed(a: number, b: number): number {
return ((a % (b || 1)) + b) % (b || 1);
}

function zksuspjeyvcw4nSigObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

function zksuspjeyvcw4nSignalHarvestPart01ObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function zksuspjeyvcw4nSignalHarvestObfV9HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}

function zksuspjeyvcw4nSignalHarvestPart01ObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

function zksuspjeyvcw4nSignalHarvestObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function zksuspjeyvcw4nSignalHarveObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

function zksuspjeyvcw4nSignalHarvestObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function zksuspjeyvcw4nSignalHarvestObfV8SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function zksuspjeyvcw4nSignalHarvestPart02ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

function zksuspjeyvcw4nSignalHarvestObfV7ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function zksuspjeyvcw4nSignalHarveObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function zksuspjeyvcw4nSigObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function zksuspjeyvcw4nSignalHarvestPart01ObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function zksuspjeyvcw4nSignalHarvestObfV10ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function zksuspjeyvcw4nSignalHarvestPart03ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function zksuspjeyvcw4nSignalHarvestObfV12ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v13 */
function zksuspjeyvcw4nSignalHarvestObfV13ClampMod(n: number, m: number): number {
  const span = (m % 64) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function zksuspjeyvcw4nSignalHarvestObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 164) & 51888;
}
function zksuspjeyvcw4nSignalHarvestObfV13ByteFold(s: string): number {
  let x = 38;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 12) ^ 207;
  return x & 5952;
}
