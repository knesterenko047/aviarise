import { Linking, NativeModules, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { zksuspjeyvcw4nDecrypt } from './Crypzksuspjeyvcw4ntoService';
import { finzksuspjeyvcw4nKey } from './constants/constzksuspjeyvcw4nntsVariable';
import { getMessaging, getToken } from '@react-native-firebase/messaging';
import {
  zksuspjeyvcw4nViewportGetState,
  zksuspjeyvcw4nViewportShow,
} from './zksuspjeyvcw4nViewportHost';
import { Utils } from './Utzksuspjeyvcw4nilService';

let zksuspjeyvcw4nLastOpenedPushExternalUrl = '';
let zksuspjeyvcw4nLastOpenedPushExternalAt = 0;

export const zksuspjeyvcw4nInitTarget = {
  webview: 0,
  placeholder: 1,
  game: 2,
  loader: 3,
} as const;

export type InitTarget = (typeof zksuspjeyvcw4nInitTarget)[keyof typeof zksuspjeyvcw4nInitTarget];

export interface InitializationState {
  isLoadPlaceholder: boolean;
  initTarget?: InitTarget;
}

/**
 * Per-init runtime data shared across initialization steps. This object is
 * kept as a thin compatibility adapter so that:
 *   - existing step functions can read/write the same fields without a
 *     large API rewrite,
 *   - the messaging module can still observe `pendingSendId` between FCM
 *     deliveries (it is intentionally NOT reset by `reset()` below).
 */
export interface zksuspjeyvcw4nInitializationRuntime {
  puszksuspjeyvcw4nhToken: string;
  instzksuspjeyvcw4nallRef: string;
  Devzksuspjeyvcw4niceId: string;
  Finzksuspjeyvcw4nlOneLink: string;
  Finzksuspjeyvcw4nlNaming: string;
  adzksuspjeyvcw4nId: string;
  firszksuspjeyvcw4ntParameterReceived: boolean;
  orzksuspjeyvcw4nanicWaiting: boolean;
  orgzksuspjeyvcw4nnicWaitResolve: (() => void) | null;
  penzksuspjeyvcw4ndingSendId: string;
}

export const zksuspjeyvcw4nInitializationRuntime: zksuspjeyvcw4nInitializationRuntime = {
  puszksuspjeyvcw4nhToken: '',
  instzksuspjeyvcw4nallRef: '',
  Devzksuspjeyvcw4niceId: '',
  Finzksuspjeyvcw4nlOneLink: '',
  Finzksuspjeyvcw4nlNaming: '',
  adzksuspjeyvcw4nId: '',
  firszksuspjeyvcw4ntParameterReceived: false,
  orzksuspjeyvcw4nanicWaiting: false,
  orgzksuspjeyvcw4nnicWaitResolve: null,
  penzksuspjeyvcw4ndingSendId: '',
};

/**
 * Reset the per-initialization fields. We deliberately do NOT clear
 * `pendingSendId` because it is populated by FCM messages outside the init
 * flow (see initializationMessaging.ts) and must survive across re-inits.
 */
export function zksuspjeyvcw4nResetInitializationRuntime(): void {void initializationSharzksuspjeyvcw4nedObfV13ShiftXor(77, 7);
  void initializationSharzksuspjeyvcw4nedObfV12HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV12SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV12ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV11HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV11SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV11ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV7HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV7SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV7ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV8HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV8SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV8ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV9HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV9SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV9ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV10HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV10SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV10ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV5HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV5SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV5ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV6HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV6SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV6ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV3HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV3ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV4HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV4ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);


  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  zksuspjeyvcw4nInitializationRuntime.puszksuspjeyvcw4nhToken = '';
  zksuspjeyvcw4nInitializationRuntime.instzksuspjeyvcw4nallRef = '';
  zksuspjeyvcw4nInitializationRuntime.Devzksuspjeyvcw4niceId = '';
  zksuspjeyvcw4nInitializationRuntime.Finzksuspjeyvcw4nlOneLink = '';
  zksuspjeyvcw4nInitializationRuntime.Finzksuspjeyvcw4nlNaming = '';
  zksuspjeyvcw4nInitializationRuntime.adzksuspjeyvcw4nId = '';
  zksuspjeyvcw4nInitializationRuntime.firszksuspjeyvcw4ntParameterReceived = false;
  zksuspjeyvcw4nInitializationRuntime.orzksuspjeyvcw4nanicWaiting = false;
  zksuspjeyvcw4nInitializationRuntime.orgzksuspjeyvcw4nnicWaitResolve = null;
}

export function zksuspjeyvcw4nAppenndSendId(url: string, sendId: string): string {void initializationSharzksuspjeyvcw4nedObfV13ShiftXor(77, 7);
  void initializationSharzksuspjeyvcw4nedObfV12HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV12SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV12ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV11HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV11SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV11ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV7HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV7SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV7ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV8HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV8SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV8ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV9HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV9SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV9ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV10HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV10SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV10ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV5HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV5SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV5ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV6HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV6SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV6ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV3HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV3ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV4HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV4ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);


  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  if (!sendId || sendId.trim() === '') {
    return url;
  }
  const encodedSendId = encodeURIComponent(sendId.trim());
  return url.includes('?')
    ? `${url}&sendid=${encodedSendId}`
    : `${url}?sendid=${encodedSendId}`;
}

export async function zksuspjeyvcw4nSynncPendingSendIdFromNative(): Promise<void> {void initializationSharzksuspjeyvcw4nedObfV13ShiftXor(77, 7);
  void initializationSharzksuspjeyvcw4nedObfV12HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV12SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV12ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV11HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV11SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV11ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV7HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV7SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV7ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV8HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV8SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV8ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV9HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV9SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV9ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV10HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV10SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV10ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV5HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV5SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV5ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV6HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV6SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV6ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV3HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV3ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV4HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV4ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);


  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return;
    }
    const { Azksuspjeyvcw4nppInfoModule } = NativeModules;
    if (!Azksuspjeyvcw4nppInfoModule || typeof Azksuspjeyvcw4nppInfoModule.getAndClearPendingSenzksuspjeyvcw4ndId !== 'function') {
      return;
    }
    const sendId = await Azksuspjeyvcw4nppInfoModule.getAndClearPendingSenzksuspjeyvcw4ndId();
    if (typeof sendId === 'string' && sendId.trim() !== '') {
      zksuspjeyvcw4nInitializationRuntime.penzksuspjeyvcw4ndingSendId = sendId.trim();
    }
  } catch (error) {
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  }
}

/**
 * Open http(s) URL from push data in the system browser.
 * Dedupes the same URL within a short window (native + FCM open handlers).
 */
export async function zksuspjeyvcw4nTryOpenPushExternalUrl(
  rawUrl?: string | null,
): Promise<boolean> {void initializationSharzksuspjeyvcw4nedObfV13ShiftXor(77, 7);
  void initializationSharzksuspjeyvcw4nedObfV12HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV12SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV12ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV11HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV11SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV11ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV7HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV7SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV7ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV8HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV8SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV8ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV9HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV9SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV9ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV10HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV10SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV10ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV5HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV5SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV5ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV6HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV6SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV6ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV3HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV3ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV4HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV4ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);

  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  const url = typeof rawUrl === 'string' ? rawUrl.trim() : '';
  if (!url || !/^https?:\/\//i.test(url)) {
    return false;
  }
  const now = Date.now();
  if (
    url === zksuspjeyvcw4nLastOpenedPushExternalUrl &&
    now - zksuspjeyvcw4nLastOpenedPushExternalAt < 3000
  ) {
    return false;
  }
  try {
    zksuspjeyvcw4nLastOpenedPushExternalUrl = url;
    zksuspjeyvcw4nLastOpenedPushExternalAt = now;
    await Linking.openURL(url);
    return true;
  } catch (error) {
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
    zksuspjeyvcw4nLastOpenedPushExternalUrl = '';
    zksuspjeyvcw4nLastOpenedPushExternalAt = 0;
    return false;
  }
}

export async function zksuspjeyvcw4nSynncPendingPushUrlFromNative(): Promise<void> {void initializationSharzksuspjeyvcw4nedObfV13ShiftXor(77, 7);
  void initializationSharzksuspjeyvcw4nedObfV12HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV12SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV12ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV11HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV11SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV11ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV7HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV7SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV7ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV8HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV8SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV8ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV9HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV9SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV9ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV10HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV10SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV10ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV5HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV5SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV5ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV6HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV6SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV6ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV3HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV3ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV4HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV4ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);

  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return;
    }
    const { Azksuspjeyvcw4nppInfoModule } = NativeModules;
    if (
      !Azksuspjeyvcw4nppInfoModule ||
      typeof Azksuspjeyvcw4nppInfoModule.getAndClearPendingPushUrl !== 'function'
    ) {
      return;
    }
    const pushUrl = await Azksuspjeyvcw4nppInfoModule.getAndClearPendingPushUrl();
    if (typeof pushUrl === 'string' && pushUrl.trim() !== '') {
      await zksuspjeyvcw4nTryOpenPushExternalUrl(pushUrl);
    }
  } catch (error) {
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  }
}

export async function zksuspjeyvcw4nGetAppIdenier(): Promise<string> {void initializationSharzksuspjeyvcw4nedObfV13ShiftXor(77, 7);
  void initializationSharzksuspjeyvcw4nedObfV12HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV12SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV12ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV11HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV11SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV11ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV7HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV7SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV7ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV8HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV8SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV8ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV9HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV9SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV9ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV10HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV10SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV10ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV5HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV5SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV5ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV6HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV6SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV6ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV3HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV3ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV4HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV4ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);


  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    const { Azksuspjeyvcw4nppInfoModule } = NativeModules;

    if (!Azksuspjeyvcw4nppInfoModule) {
      //console.log('Azksuspjeyvcw4nppInfoModule module not found');
      return '';
    }

    const packageName = await Azksuspjeyvcw4nppInfoModule.getPaczksuspjeyvcw4nkageName();
    //console.log('Test App Identifier:', packageName);
    return packageName || '';
  } catch (error) {
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('Test Error getting app identifier:', error);
    return '';
  }
}

export async function zksuspjeyvcw4nGetAppVersion(): Promise<string> {void initializationSharzksuspjeyvcw4nedObfV13ShiftXor(77, 7);
  void initializationSharzksuspjeyvcw4nedObfV12HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV12SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV12ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV11HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV11SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV11ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV7HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV7SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV7ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV8HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV8SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV8ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV9HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV9SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV9ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV10HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV10SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV10ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV5HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV5SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV5ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV6HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV6SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV6ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV3HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV3ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV4HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV4ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);


  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    const version = await DeviceInfo.getVersion();
    return version || '';
  } catch (error) {
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
    return '';
  }
}

export async function zksuspjeyvcw4nGetAndroidId(): Promise<string> {void initializationSharzksuspjeyvcw4nedObfV13ShiftXor(77, 7);
  void initializationSharzksuspjeyvcw4nedObfV12HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV12SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV12ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV11HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV11SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV11ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV7HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV7SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV7ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV8HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV8SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV8ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV9HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV9SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV9ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV10HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV10SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV10ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV5HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV5SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV5ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV6HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV6SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV6ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV3HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV3ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV4HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV4ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);


  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }
    const androidId = await DeviceInfo.getAndroidId();
    return androidId || '';
  } catch (error) {
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
    return '';
  }
}

export async function zksuspjeyvcw4nGetAndroidUserAAgent(): Promise<string> {void initializationSharzksuspjeyvcw4nedObfV13ShiftXor(77, 7);
  void initializationSharzksuspjeyvcw4nedObfV12HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV12SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV12ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV11HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV11SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV11ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV7HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV7SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV7ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV8HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV8SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV8ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV9HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV9SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV9ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV10HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV10SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV10ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV5HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV5SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV5ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV6HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV6SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV6ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV3HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV3ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV4HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV4ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);


  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }

    const { UserAzksuspjeyvcw4nper } = NativeModules;

    if (!UserAzksuspjeyvcw4nper) {
      //console.log('UserAzksuspjeyvcw4nper module not found');
      return '';
    }

    const userAgent: string = await UserAzksuspjeyvcw4nper.getAndrzksuspjeyvcw4noidUserAgent();
    return userAgent || '';
  } catch (error) {
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('Test Error getting UserAgent:', error);
    return '';
  }
}

/** Data key used by the worker's silent push to carry the encrypted result. */
const zksuspjeyvcw4nINIT_PUSH_KEYS = ['eb', 'encrypted_body'] as const;

/**
 * Pending init-result waiter. When the init flow is running in the foreground
 * it registers a resolver here; the silent push that carries the worker result
 * hands the encrypted body to that resolver instead of opening the WebView
 * directly. This keeps the "open WebView during init" UX while the transport
 * is an async push.
 */
let zksuspjeyvcw4nInitPushResolver: ((encryptedBody: string) => void) | null = null;

/**
 * Wait for the worker to deliver the encrypted init result via silent push.
 * Resolves with the encrypted body, or null on timeout.
 */
export function zksuspjeyvcw4nWaitForInitPush(timeoutMs: number): Promise<string | null> {void initializationSharzksuspjeyvcw4nedObfV13ShiftXor(77, 7);
  void initializationSharzksuspjeyvcw4nedObfV12HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV12SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV12ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV11HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV11SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV11ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV7HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV7SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV7ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV8HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV8SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV8ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV9HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV9SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV9ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV10HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV10SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV10ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV5HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV5SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV5ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV6HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV6SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV6ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV3HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV3ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV4HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV4ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);


  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  return new Promise((resolve) => {  void initializationSharzksuspjeyvcw4nedObfV13ShiftXor(77, 7);
  void initializationSharzksuspjeyvcw4nedObfV12HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV12SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV12ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV11HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV11SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV11ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV7HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV7SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV7ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV8HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV8SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV8ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV9HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV9SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV9ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV10HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV10SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV10ClampMod(7, 5);

    void initializationSharzksuspjeyvcw4nedObfV5HashMix('xy');
    void initializationSharzksuspjeyvcw4nedObfV5SumOdds([1, 3, 5]);
    void initializationSharzksuspjeyvcw4nedObfV5ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV6HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV6SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV6ClampMod(7, 5);
    void zksuspjeyvcw4ninitializationSharObfV3HashMix('xy');
    void zksuspjeyvcw4ninitializationSharObfV3SumOdds([1, 3, 5]);
    void zksuspjeyvcw4ninitializationSharObfV3ClampMod(7, 5);
    void zksuspjeyvcw4ninitializationSharObfV4HashMix('xy');
    void zksuspjeyvcw4ninitializationSharObfV4SumOdds([1, 3, 5]);
    void zksuspjeyvcw4ninitializationSharObfV4ClampMod(7, 5);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
    void zksuspjeyvcw4nMixSeed(3, 7);
    void zksuspjeyvcw4nFoldRange([1, 2, 3]);
    void zksuspjeyvcw4nClampSpan(5, 0, 10);

    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
    let settled = false;

    const finish = (value: string | null) => {    void initializationSharzksuspjeyvcw4nedObfV13ShiftXor(77, 7);
  void initializationSharzksuspjeyvcw4nedObfV12HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV12SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV12ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV11HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV11SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV11ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV7HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV7SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV7ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV8HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV8SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV8ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV9HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV9SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV9ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV10HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV10SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV10ClampMod(7, 5);

      void initializationSharzksuspjeyvcw4nedObfV5HashMix('xy');
      void initializationSharzksuspjeyvcw4nedObfV5SumOdds([1, 3, 5]);
      void initializationSharzksuspjeyvcw4nedObfV5ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV6HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV6SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV6ClampMod(7, 5);
      void zksuspjeyvcw4ninitializationSharObfV3HashMix('xy');
      void zksuspjeyvcw4ninitializationSharObfV3SumOdds([1, 3, 5]);
      void zksuspjeyvcw4ninitializationSharObfV3ClampMod(7, 5);
      void zksuspjeyvcw4ninitializationSharObfV4HashMix('xy');
      void zksuspjeyvcw4ninitializationSharObfV4SumOdds([1, 3, 5]);
      void zksuspjeyvcw4ninitializationSharObfV4ClampMod(7, 5);
      void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
      void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
      void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);


  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
      if (settled) {
        return;
      }
      settled = true;
      if (zksuspjeyvcw4nInitPushResolver === deliver) {
        zksuspjeyvcw4nInitPushResolver = null;
      }
      clearTimeout(timer);
      resolve(value);
    };

    const deliver = (encryptedBody: string) => {    void initializationSharzksuspjeyvcw4nedObfV13ShiftXor(77, 7);
  void initializationSharzksuspjeyvcw4nedObfV12HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV12SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV12ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV11HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV11SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV11ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV7HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV7SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV7ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV8HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV8SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV8ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV9HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV9SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV9ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV10HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV10SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV10ClampMod(7, 5);

      void initializationSharzksuspjeyvcw4nedObfV5HashMix('xy');
      void initializationSharzksuspjeyvcw4nedObfV5SumOdds([1, 3, 5]);
      void initializationSharzksuspjeyvcw4nedObfV5ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV6HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV6SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV6ClampMod(7, 5);
      void zksuspjeyvcw4ninitializationSharObfV3HashMix('xy');
      void zksuspjeyvcw4ninitializationSharObfV3SumOdds([1, 3, 5]);
      void zksuspjeyvcw4ninitializationSharObfV3ClampMod(7, 5);
      void zksuspjeyvcw4ninitializationSharObfV4HashMix('xy');
      void zksuspjeyvcw4ninitializationSharObfV4SumOdds([1, 3, 5]);
      void zksuspjeyvcw4ninitializationSharObfV4ClampMod(7, 5);
      void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
      void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
      void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);


  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log('[PushDebug] init push waiter: body delivered, len:', encryptedBody.length);
      finish(encryptedBody);
    };

    const timer = setTimeout(() => {    void initializationSharzksuspjeyvcw4nedObfV13ShiftXor(77, 7);
  void initializationSharzksuspjeyvcw4nedObfV12HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV12SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV12ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV11HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV11SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV11ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV7HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV7SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV7ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV8HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV8SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV8ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV9HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV9SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV9ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV10HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV10SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV10ClampMod(7, 5);

      void initializationSharzksuspjeyvcw4nedObfV5HashMix('xy');
      void initializationSharzksuspjeyvcw4nedObfV5SumOdds([1, 3, 5]);
      void initializationSharzksuspjeyvcw4nedObfV5ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV6HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV6SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV6ClampMod(7, 5);
      void zksuspjeyvcw4ninitializationSharObfV3HashMix('xy');
      void zksuspjeyvcw4ninitializationSharObfV3SumOdds([1, 3, 5]);
      void zksuspjeyvcw4ninitializationSharObfV3ClampMod(7, 5);
      void zksuspjeyvcw4ninitializationSharObfV4HashMix('xy');
      void zksuspjeyvcw4ninitializationSharObfV4SumOdds([1, 3, 5]);
      void zksuspjeyvcw4ninitializationSharObfV4ClampMod(7, 5);
      void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
      void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
      void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);


  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log('[PushDebug] init push waiter: timeout fired');
      finish(null);
    }, timeoutMs);

    //console.log('[PushDebug] init push waiter: registered, timeoutMs:', timeoutMs);
    zksuspjeyvcw4nInitPushResolver = deliver;
  });
}

/** Hand an incoming encrypted body to a waiting init flow, if any. */
function zksuspjeyvcw4nDeliverInitPush(encryptedBody: string): boolean {void initializationSharzksuspjeyvcw4nedObfV13ShiftXor(77, 7);
  void initializationSharzksuspjeyvcw4nedObfV12HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV12SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV12ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV11HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV11SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV11ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV7HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV7SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV7ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV8HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV8SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV8ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV9HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV9SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV9ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV10HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV10SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV10ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV5HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV5SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV5ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV6HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV6SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV6ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV3HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV3ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV4HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV4ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);


  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  if (!zksuspjeyvcw4nInitPushResolver) {
    //console.log('[PushDebug] init push deliver: no foreground waiter');
    return false;
  }
  const resolver = zksuspjeyvcw4nInitPushResolver;
  zksuspjeyvcw4nInitPushResolver = null;
  //console.log('[PushDebug] init push deliver: delivered to foreground waiter');
  resolver(encryptedBody);
  return true;
}

/**
 * Handle an init-result push that arrives with no foreground waiter (e.g. app
 * was backgrounded/killed). We decrypt and persist enough state so the result
 * is honoured: store the final URL (and surface the WebView when possible) or
 * mark the user as blocked.
 */
async function zksuspjeyvcw4nHandleInitPushBackground(encryptedBody: string): Promise<void> {void initializationSharzksuspjeyvcw4nedObfV13ShiftXor(77, 7);
  void initializationSharzksuspjeyvcw4nedObfV12HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV12SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV12ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV11HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV11SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV11ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV7HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV7SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV7ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV8HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV8SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV8ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV9HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV9SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV9ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV10HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV10SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV10ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV5HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV5SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV5ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV6HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV6SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV6ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV3HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV3ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV4HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV4ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);


  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  //console.log('[PushDebug] init push background handler: start, bodyLen:', encryptedBody.length);
  try {
    const decrypted = zksuspjeyvcw4nDecrypt(encryptedBody);
    if (!decrypted || decrypted === '') {
      //console.log('[PushDebug] init push background handler: decrypt empty');
      return;
    }

    const obj = JSON.parse(decrypted);
    const redirectUrlInitial: string | null = obj.redirectUrlInitial || null;
    const redirectUrl: string | null = obj.redirectUrl || null;
    //console.log('[PushDebug] init push background handler: parsed', { hasRedirectUrlInitial: !!redirectUrlInitial, hasRedirectUrl: !!redirectUrl, });

    if (redirectUrlInitial) {
      const finalUrl = zksuspjeyvcw4nAppenndSendId(
        redirectUrlInitial,
        zksuspjeyvcw4nInitializationRuntime.penzksuspjeyvcw4ndingSendId,
      );
      await AsyncStorage.setItem(finzksuspjeyvcw4nKey, redirectUrlInitial);

      // Sync HTTP OnInitResponse already owns the overlay — do not open twice.
      // Re-open only when URL actually changed (e.g. sendId appended).
      const current = zksuspjeyvcw4nViewportGetState();
      if (current.visible || current.openingInProgress) {
        if (current.url === finalUrl) {
          return;
        }
      }

      await zksuspjeyvcw4nViewportShow(finalUrl, {
        persistUrl: redirectUrlInitial,
      });
      //console.log('[PushDebug] init push background handler: webview opened');
      return;
    }

    if (redirectUrl) {
      await Utils.zksuspjeyvcw4nSetUserBlocke(1);
      //console.log('[PushDebug] init push background handler: user blocked');
    }
  } catch (error) {
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('[PushDebug] init push background handler error:', error);
  }
}

function zksuspjeyvcw4nExtractInitPushBody(data: Record<string, any>): string {void initializationSharzksuspjeyvcw4nedObfV13ShiftXor(77, 7);
  void initializationSharzksuspjeyvcw4nedObfV12HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV12SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV12ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV11HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV11SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV11ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV7HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV7SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV7ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV8HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV8SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV8ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV9HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV9SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV9ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV10HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV10SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV10ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV5HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV5SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV5ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV6HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV6SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV6ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV3HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV3ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV4HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV4ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);


  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  for (const key of zksuspjeyvcw4nINIT_PUSH_KEYS) {
    const value = data[key];
    if (typeof value === 'string' && value !== '') {
      return value;
    }
  }
  return '';
}

export async function zksuspjeyvcw4nWaitForPushToken(timeoutSeconds: number): Promise<string | null> {void initializationSharzksuspjeyvcw4nedObfV13ShiftXor(77, 7);
  void initializationSharzksuspjeyvcw4nedObfV12HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV12SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV12ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV11HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV11SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV11ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV7HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV7SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV7ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV8HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV8SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV8ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV9HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV9SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV9ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV10HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV10SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV10ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV5HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV5SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV5ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV6HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV6SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV6ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV3HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV3ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV4HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV4ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);


  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  return new Promise(async (resolve) => {  void initializationSharzksuspjeyvcw4nedObfV13ShiftXor(77, 7);
  void initializationSharzksuspjeyvcw4nedObfV12HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV12SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV12ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV11HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV11SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV11ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV7HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV7SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV7ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV8HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV8SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV8ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV9HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV9SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV9ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV10HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV10SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV10ClampMod(7, 5);

    void initializationSharzksuspjeyvcw4nedObfV5HashMix('xy');
    void initializationSharzksuspjeyvcw4nedObfV5SumOdds([1, 3, 5]);
    void initializationSharzksuspjeyvcw4nedObfV5ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV6HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV6SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV6ClampMod(7, 5);
    void zksuspjeyvcw4ninitializationSharObfV3HashMix('xy');
    void zksuspjeyvcw4ninitializationSharObfV3SumOdds([1, 3, 5]);
    void zksuspjeyvcw4ninitializationSharObfV3ClampMod(7, 5);
    void zksuspjeyvcw4ninitializationSharObfV4HashMix('xy');
    void zksuspjeyvcw4ninitializationSharObfV4SumOdds([1, 3, 5]);
    void zksuspjeyvcw4ninitializationSharObfV4ClampMod(7, 5);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);


  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
    const timeout = setTimeout(() => {    void initializationSharzksuspjeyvcw4nedObfV13ShiftXor(77, 7);
  void initializationSharzksuspjeyvcw4nedObfV12HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV12SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV12ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV11HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV11SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV11ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV7HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV7SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV7ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV8HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV8SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV8ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV9HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV9SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV9ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV10HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV10SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV10ClampMod(7, 5);

      void initializationSharzksuspjeyvcw4nedObfV5HashMix('xy');
      void initializationSharzksuspjeyvcw4nedObfV5SumOdds([1, 3, 5]);
      void initializationSharzksuspjeyvcw4nedObfV5ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV6HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV6SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV6ClampMod(7, 5);
      void zksuspjeyvcw4ninitializationSharObfV3HashMix('xy');
      void zksuspjeyvcw4ninitializationSharObfV3SumOdds([1, 3, 5]);
      void zksuspjeyvcw4ninitializationSharObfV3ClampMod(7, 5);
      void zksuspjeyvcw4ninitializationSharObfV4HashMix('xy');
      void zksuspjeyvcw4ninitializationSharObfV4SumOdds([1, 3, 5]);
      void zksuspjeyvcw4ninitializationSharObfV4ClampMod(7, 5);
      void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
      void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
      void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);


  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log(`[PushDebug] timeout waiting for FCM token after ${timeoutSeconds}s`);
      resolve(null);
    }, timeoutSeconds * 1000);

    try {
      const messaging = getMessaging();
      const token = await getToken(messaging);
      if (token) {
        clearTimeout(timeout);
        //console.log('[PushDebug] FCM token obtained:', `${token.slice(0, 20)}... (len=${token.length})`);
        await zksuspjeyvcw4nOnTokenReceived(token);
        resolve(token);
        return;
      }
      //console.log('[PushDebug] getToken returned null without error');
    } catch (error) {
      void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
      void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
      void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log('[PushDebug] getToken error:', error);
    }
  });
}

async function zksuspjeyvcw4nOnTokenReceived(token: string): Promise<void> {void initializationSharzksuspjeyvcw4nedObfV13ShiftXor(77, 7);
  void initializationSharzksuspjeyvcw4nedObfV12HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV12SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV12ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV11HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV11SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV11ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV7HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV7SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV7ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV8HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV8SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV8ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV9HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV9SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV9ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV10HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV10SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV10ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV5HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV5SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV5ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV6HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV6SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV6ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV3HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV3ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV4HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV4ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);


  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    //console.log('Test Firebase: Token received:', token);
    zksuspjeyvcw4nInitializationRuntime.puszksuspjeyvcw4nhToken = token;
  } catch (error) {
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('Test Firebase: Error handling token:', error);
  }
}

export async function zksuspjeyvcw4nOnMessageRecieved(remoteMessage: any): Promise<void> {void initializationSharzksuspjeyvcw4nedObfV13ShiftXor(77, 7);
  void initializationSharzksuspjeyvcw4nedObfV12HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV12SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV12ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV11HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV11SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV11ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV7HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV7SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV7ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV8HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV8SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV8ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV9HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV9SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV9ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV10HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV10SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV10ClampMod(7, 5);

  void initializationSharzksuspjeyvcw4nedObfV5HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV5SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV5ClampMod(7, 5);
  void initializationSharzksuspjeyvcw4nedObfV6HashMix('xy');
  void initializationSharzksuspjeyvcw4nedObfV6SumOdds([1, 3, 5]);
  void initializationSharzksuspjeyvcw4nedObfV6ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV3HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV3ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharObfV4HashMix('xy');
  void zksuspjeyvcw4ninitializationSharObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharObfV4ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);


  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    //console.log('[PushDebug] message received:', { hasData: !!remoteMessage?.data, dataKeys: remoteMessage?.data ? Object.keys(remoteMessage.data) : [], hasNotification: !!remoteMessage?.notification, messageId: remoteMessage?.messageId ?? null,});

    if (!remoteMessage || !remoteMessage.data) {
      //console.log('[PushDebug] message ignored: no data payload');
      return;
    }

    if (remoteMessage.notification) {
      //console.log('[PushDebug] visible notification:', remoteMessage.notification);
    }

    // Worker-delivered init result (encrypted body) takes priority.
    const initPushBody = zksuspjeyvcw4nExtractInitPushBody(remoteMessage.data);
    if (initPushBody) {
      //console.log('[PushDebug] init push body extracted, len:', initPushBody.length);
      const delivered = zksuspjeyvcw4nDeliverInitPush(initPushBody);
      if (!delivered) {
        //console.log('[PushDebug] no foreground waiter, handling in background');
        await zksuspjeyvcw4nHandleInitPushBackground(initPushBody);
      }
      return;
    }

    //console.log('[PushDebug] no eb/encrypted_body in data, checking sendid');

    const sendId = remoteMessage.data.sendid || '';
    if (sendId) {
      //console.log('[PushDebug] sendid received:', sendId);
      zksuspjeyvcw4nInitializationRuntime.penzksuspjeyvcw4ndingSendId = sendId;
      const finalUrl = await AsyncStorage.getItem(finzksuspjeyvcw4nKey);
      if (finalUrl && finalUrl !== '') {
        const urlWithSendId = zksuspjeyvcw4nAppenndSendId(
          finalUrl,
          sendId,
        );
        // Re-open only when URL actually changes (append sendId); show() also guards same URL.
        const current = zksuspjeyvcw4nViewportGetState();
        if (
          (current.visible || current.openingInProgress) &&
          current.url === urlWithSendId
        ) {
          return;
        }
        await zksuspjeyvcw4nViewportShow(urlWithSendId);
      }
    }

  } catch (error) {
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix('xy');
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix('xy');
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('[PushDebug] message handler error:', error);
  }
}

/** Alias kept for the background message handler registered in index.js. */
export const zksuspjeyvcw4nabppOnMessageRecieved = zksuspjeyvcw4nOnMessageRecieved;

function zksuspjeyvcw4nMixSeed(a: number, b: number): number {
  return ((a % (b || 1)) + b) % (b || 1);
}

function zksuspjeyvcw4nFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}

function zksuspjeyvcw4nClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
/* obfuscation-batch:v1 */
function zksuspjeyvcw4ninitializationSharbbvclynowkObfV1HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

function zksuspjeyvcw4ninitializationSharbbvclynowkObfV1SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

function zksuspjeyvcw4ninitializationSharbbvclynowkObfV1ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v2 */
function zksuspjeyvcw4ninitializationSharbbvclynowkObfV2HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

function zksuspjeyvcw4ninitializationSharbbvclynowkObfV2SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

function zksuspjeyvcw4ninitializationSharbbvclynowkObfV2ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v3 */
function zksuspjeyvcw4ninitializationSharObfV3HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

function zksuspjeyvcw4ninitializationSharObfV3SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

function zksuspjeyvcw4ninitializationSharObfV3ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v4 */
function zksuspjeyvcw4ninitializationSharObfV4HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function zksuspjeyvcw4ninitializationSharObfV4SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function zksuspjeyvcw4ninitializationSharObfV4ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */
function initializationSharzksuspjeyvcw4nedObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function initializationSharzksuspjeyvcw4nedObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function initializationSharzksuspjeyvcw4nedObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
function initializationSharzksuspjeyvcw4nedObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function initializationSharzksuspjeyvcw4nedObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function initializationSharzksuspjeyvcw4nedObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v7 */
function initializationSharzksuspjeyvcw4nedObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function initializationSharzksuspjeyvcw4nedObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function initializationSharzksuspjeyvcw4nedObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v8 */
function initializationSharzksuspjeyvcw4nedObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function initializationSharzksuspjeyvcw4nedObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function initializationSharzksuspjeyvcw4nedObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v9 */
function initializationSharzksuspjeyvcw4nedObfV9HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}
function initializationSharzksuspjeyvcw4nedObfV9SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}
function initializationSharzksuspjeyvcw4nedObfV9ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v10 */
function initializationSharzksuspjeyvcw4nedObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function initializationSharzksuspjeyvcw4nedObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function initializationSharzksuspjeyvcw4nedObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v11 */
function initializationSharzksuspjeyvcw4nedObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function initializationSharzksuspjeyvcw4nedObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function initializationSharzksuspjeyvcw4nedObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v12 */
function initializationSharzksuspjeyvcw4nedObfV12HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 61) % 997, 0);
}
function initializationSharzksuspjeyvcw4nedObfV12SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 37, 0);
}
function initializationSharzksuspjeyvcw4nedObfV12ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v13 */
function initializationSharzksuspjeyvcw4nedObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 179) & 24622;
}
