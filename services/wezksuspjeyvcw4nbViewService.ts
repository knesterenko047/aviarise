import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Alert,
  Linking,
  NativeModules,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {
  AuthorizationStatus,
  getMessaging,
  hasPermission,
  requestPermission,
} from '@react-native-firebase/messaging';
import {
  LAST_zksuspjeyvcw4nKEY,
  STORAGE_zksuspjeyvcw4nKEYS,
  zksuspjeyvcw4nConstTouch,
} from './constants/constzksuspjeyvcw4nntsVariable';
// autosetup-split-begin
import { wezksuspjeyvcw4nbViewServiceObfV11HashMix, zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2HashMix, wezksuspjeyvcw4nbViewServiceObfV5HashMix, wezksuspjeyvcw4nbViewServiceObfV10HashMix, zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1HashMix, wezksuspjeyvcw4nbViewServiceObfV6HashMix, wezksuspjeyvcw4nbViewServiceObfV9HashMix, wezksuspjeyvcw4nbViewServiceObfV12HashMix, swefgdetguhjhoioesMixSeed, zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4HashMix, wezksuspjeyvcw4nbViewServiceObfV8HashMix, wezksuspjeyvcw4nbViewServicePart01ObfV11SumOdds, zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3HashMix, wezksuspjeyvcw4nbViewServiceObfV7HashMix, wezksuspjeyvcw4nbViewServicePart02ObfV11HashMix } from './wezksuspjeyvcw4nbViewServicePart01';
import { wezksuspjeyvcw4nbViewServiceObfV11ClampMod, zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3SumOdds, wezksuspjeyvcw4nbViewServiceObfV7SumOdds, wezksuspjeyvcw4nbViewServicePart01ObfV11HashMix, zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2SumOdds, wezksuspjeyvcw4nbViewServiceObfV5SumOdds, wezksuspjeyvcw4nbViewServiceObfV10SumOdds, wezksuspjeyvcw4nbViewServiceObfV12ClampMod, zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1SumOdds, wezksuspjeyvcw4nbViewServiceObfV6SumOdds, wezksuspjeyvcw4nbViewServiceObfV9SumOdds, swefgdetguhjhoioesClampSpan, zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4SumOdds, wezksuspjeyvcw4nbViewServiceObfV8SumOdds, wezksuspjeyvcw4nbViewServicePart02ObfV11ClampMod } from './wezksuspjeyvcw4nbViewServicePart02';
import { swefgdetguhjhoioesFoldRange, zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4ClampMod, wezksuspjeyvcw4nbViewServiceObfV8ClampMod, wezksuspjeyvcw4nbViewServicePart01ObfV11ClampMod, zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3ClampMod, wezksuspjeyvcw4nbViewServiceObfV7ClampMod, wezksuspjeyvcw4nbViewServicePart02ObfV11SumOdds, wezksuspjeyvcw4nbViewServiceObfV11SumOdds, zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2ClampMod, wezksuspjeyvcw4nbViewServiceObfV5ClampMod, wezksuspjeyvcw4nbViewServiceObfV10ClampMod, zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1ClampMod, wezksuspjeyvcw4nbViewServiceObfV6ClampMod, wezksuspjeyvcw4nbViewServiceObfV9ClampMod, wezksuspjeyvcw4nbViewServiceObfV12SumOdds } from './wezksuspjeyvcw4nbViewServicePart03';
// autosetup-split-end

type Vzksuspjeyvcw4niewportBannanaModule = {
  navzksuspjeyvcw4nigate: (url: string) => Promise<boolean>;
  hzksuspjeyvcw4nide: () => Promise<boolean>;
};

const vzksuspjeyvcw4niewportBridge: Vzksuspjeyvcw4niewportBannanaModule | undefined =
  NativeModules.Vzksuspjeyvcw4niewportBannana;
type swefgdetguhjhoioesWebViewState = {
  url: string | null;
  visible: boolean;
  openingInProgress: boolean;
};

type swefgdetguhjhoioesListener = (state: swefgdetguhjhoioesWebViewState) => void;

class swefgdetguhjhoioesWebViewBridgeServiceClass {
  private state: swefgdetguhjhoioesWebViewState = {
    url: null,
    visible: false,
    openingInProgress: false,
  };
  private listeners: Set<swefgdetguhjhoioesListener> = new Set();
  private openingInProgress = false;
  private swefgdetguhjhoioesCustomPushPromptShownThisSession = false;
  private swefgdetguhjhoioesNativePushAskedThisSession = false;
  private swefgdetguhjhoioesPushRetryTimer: ReturnType<typeof setTimeout> | null =
    null;
  _dummypicklfo5409vb33 = 0;

  zksuspjeyvcw4nubscribe(listener: swefgdetguhjhoioesListener): () => void {  void wezksuspjeyvcw4nbViewServiceObfV13SumOdds([2, 22, 2]);
  void wezksuspjeyvcw4nbViewServiceObfV13ClampMod(64, 55);
  void wezksuspjeyvcw4nbViewServiceObfV13ShiftXor(6, 23);
  void wezksuspjeyvcw4nbViewServiceObfV13ByteFold('9k6');
  void wezksuspjeyvcw4nbViewServiceObfV12HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV12SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV12ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV11HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV11SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV11ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV7HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV7SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV7ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV8HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV8SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV8ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV9HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV9SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV9ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV10HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV10SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV10ClampMod(7, 5);

    void wezksuspjeyvcw4nbViewServiceObfV5HashMix('xy');
    void wezksuspjeyvcw4nbViewServiceObfV5SumOdds([1, 3, 5]);
    void wezksuspjeyvcw4nbViewServiceObfV5ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV6HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV6SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV6ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2ClampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    listener(this.state);
    this.listeners.add(listener);
    return () => {    void wezksuspjeyvcw4nbViewServiceObfV13SumOdds([2, 22, 2]);
    void wezksuspjeyvcw4nbViewServiceObfV13ClampMod(64, 55);
    void wezksuspjeyvcw4nbViewServiceObfV13ShiftXor(6, 23);
    void wezksuspjeyvcw4nbViewServiceObfV13ByteFold('9k6');
  void wezksuspjeyvcw4nbViewServiceObfV12HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV12SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV12ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV11HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV11SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV11ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV7HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV7SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV7ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV8HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV8SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV8ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV9HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV9SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV9ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV10HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV10SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV10ClampMod(7, 5);

      void wezksuspjeyvcw4nbViewServiceObfV5HashMix('xy');
      void wezksuspjeyvcw4nbViewServiceObfV5SumOdds([1, 3, 5]);
      void wezksuspjeyvcw4nbViewServiceObfV5ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV6HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV6SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV6ClampMod(7, 5);
      void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3HashMix('xy');
      void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3ClampMod(7, 5);
      void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4HashMix('xy');
      void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4ClampMod(7, 5);
      void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1HashMix('xy');
      void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1ClampMod(7, 5);
      void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2HashMix('xy');
      void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

      this.listeners.delete(listener);
    };
  }

  swefgdetguhjhoioesGetState(): swefgdetguhjhoioesWebViewState {  void wezksuspjeyvcw4nbViewServiceObfV13SumOdds([2, 22, 2]);
  void wezksuspjeyvcw4nbViewServiceObfV13ClampMod(64, 55);
  void wezksuspjeyvcw4nbViewServiceObfV13ShiftXor(6, 23);
  void wezksuspjeyvcw4nbViewServiceObfV13ByteFold('9k6');
  void wezksuspjeyvcw4nbViewServiceObfV12HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV12SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV12ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV11HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV11SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV11ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV7HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV7SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV7ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV8HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV8SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV8ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV9HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV9SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV9ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV10HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV10SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV10ClampMod(7, 5);

    void wezksuspjeyvcw4nbViewServiceObfV5HashMix('xy');
    void wezksuspjeyvcw4nbViewServiceObfV5SumOdds([1, 3, 5]);
    void wezksuspjeyvcw4nbViewServiceObfV5ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV6HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV6SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV6ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);
  void zksuspjeyvcw4nConstTouch();

    return {
      ...this.state,
      openingInProgress: this.openingInProgress,
    };
  }

  private swefgdetguhjhoioesEmit(): void {  void wezksuspjeyvcw4nbViewServiceObfV13SumOdds([2, 22, 2]);
  void wezksuspjeyvcw4nbViewServiceObfV13ClampMod(64, 55);
  void wezksuspjeyvcw4nbViewServiceObfV13ShiftXor(6, 23);
  void wezksuspjeyvcw4nbViewServiceObfV13ByteFold('9k6');
  void wezksuspjeyvcw4nbViewServiceObfV12HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV12SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV12ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV11HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV11SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV11ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV7HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV7SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV7ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV8HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV8SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV8ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV9HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV9SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV9ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV10HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV10SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV10ClampMod(7, 5);

    void wezksuspjeyvcw4nbViewServiceObfV5HashMix('xy');
    void wezksuspjeyvcw4nbViewServiceObfV5SumOdds([1, 3, 5]);
    void wezksuspjeyvcw4nbViewServiceObfV5ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV6HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV6SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV6ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    this.listeners.forEach(l => {    void wezksuspjeyvcw4nbViewServiceObfV13SumOdds([2, 22, 2]);
    void wezksuspjeyvcw4nbViewServiceObfV13ClampMod(64, 55);
    void wezksuspjeyvcw4nbViewServiceObfV13ShiftXor(6, 23);
    void wezksuspjeyvcw4nbViewServiceObfV13ByteFold('9k6');
  void wezksuspjeyvcw4nbViewServiceObfV12HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV12SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV12ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV11HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV11SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV11ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV7HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV7SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV7ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV8HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV8SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV8ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV9HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV9SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV9ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV10HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV10SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV10ClampMod(7, 5);

      void wezksuspjeyvcw4nbViewServiceObfV5HashMix('xy');
      void wezksuspjeyvcw4nbViewServiceObfV5SumOdds([1, 3, 5]);
      void wezksuspjeyvcw4nbViewServiceObfV5ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV6HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV6SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV6ClampMod(7, 5);
      return (l(this.state));
    });
  }

  private async swefgdetguhjhoioesRequestPushNotificationPermission(
    force = false,
  ): Promise<boolean> {  void wezksuspjeyvcw4nbViewServiceObfV13SumOdds([2, 22, 2]);
  void wezksuspjeyvcw4nbViewServiceObfV13ClampMod(64, 55);
  void wezksuspjeyvcw4nbViewServiceObfV13ShiftXor(6, 23);
  void wezksuspjeyvcw4nbViewServiceObfV13ByteFold('9k6');
  void wezksuspjeyvcw4nbViewServiceObfV12HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV12SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV12ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV11HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV11SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV11ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV7HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV7SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV7ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV8HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV8SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV8ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV9HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV9SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV9ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV10HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV10SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV10ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV5HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV5SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV5ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV6HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV6SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3HashMix('xy');
  void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3ClampMod(7, 5);
  void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4HashMix('xy');
  void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      if (Platform.OS === 'android' && Platform.Version >= 33) {
        const permission = PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS;
        const alreadyGranted = await PermissionsAndroid.check(permission);
        //console.log('[PushDebug] POST_NOTIFICATIONS already granted:', alreadyGranted);
        if (alreadyGranted) {
          return true;
        }
        const result = await PermissionsAndroid.request(permission);
        //console.log('[PushDebug] POST_NOTIFICATIONS request result:', result);
        return result === PermissionsAndroid.RESULTS.GRANTED;
      }

      if (Platform.OS === 'android') {
        return true;
      }

      if (Platform.OS === 'ios') {
        const messaging = getMessaging();
        const status = await hasPermission(messaging);
        //console.log('[PushDebug] iOS permission status before request:', status);
        const alreadyGranted =
          status === AuthorizationStatus.AUTHORIZED ||
          status === AuthorizationStatus.PROVISIONAL;
        if (alreadyGranted) {
          return true;
        }
        if (force || status === AuthorizationStatus.NOT_DETERMINED) {
          const newStatus = await requestPermission(messaging);
          //console.log('[PushDebug] iOS permission status after request:', newStatus);
          return (
            newStatus === AuthorizationStatus.AUTHORIZED ||
            newStatus === AuthorizationStatus.PROVISIONAL
          );
        }
        return false;
      }
    } catch (error) {
      void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1HashMix('xy');
      void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1ClampMod(7, 5);
      void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2HashMix('xy');
      void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2ClampMod(7, 5);
      //console.log('[PushDebug] permission request error:', error);
      void error;
    }
    return false;
  }

  private async swefgdetguhjhoioesHasPushNotificationPermission(): Promise<boolean> {  void wezksuspjeyvcw4nbViewServiceObfV13SumOdds([2, 22, 2]);
  void wezksuspjeyvcw4nbViewServiceObfV13ClampMod(64, 55);
  void wezksuspjeyvcw4nbViewServiceObfV13ShiftXor(6, 23);
  void wezksuspjeyvcw4nbViewServiceObfV13ByteFold('9k6');
  void wezksuspjeyvcw4nbViewServiceObfV12HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV12SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV12ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV11HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV11SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV11ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV7HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV7SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV7ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV8HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV8SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV8ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV9HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV9SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV9ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV10HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV10SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV10ClampMod(7, 5);

    void wezksuspjeyvcw4nbViewServiceObfV5HashMix('xy');
    void wezksuspjeyvcw4nbViewServiceObfV5SumOdds([1, 3, 5]);
    void wezksuspjeyvcw4nbViewServiceObfV5ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV6HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV6SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV6ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      if (Platform.OS === 'android') {
        if (Platform.Version < 33) {
          return true;
        }
        return await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
      }
      if (Platform.OS === 'ios') {
        const status = await hasPermission(getMessaging());
        return (
          status === AuthorizationStatus.AUTHORIZED ||
          status === AuthorizationStatus.PROVISIONAL
        );
      }
    } catch {
      return false;
    }
    return false;
  }

  private swefgdetguhjhoioesShowCustomPushSettingsPrompt(): void {  void wezksuspjeyvcw4nbViewServiceObfV13SumOdds([2, 22, 2]);
  void wezksuspjeyvcw4nbViewServiceObfV13ClampMod(64, 55);
  void wezksuspjeyvcw4nbViewServiceObfV13ShiftXor(6, 23);
  void wezksuspjeyvcw4nbViewServiceObfV13ByteFold('9k6');
  void wezksuspjeyvcw4nbViewServiceObfV12HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV12SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV12ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV11HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV11SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV11ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV7HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV7SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV7ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV8HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV8SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV8ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV9HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV9SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV9ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV10HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV10SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV10ClampMod(7, 5);

    void wezksuspjeyvcw4nbViewServiceObfV5HashMix('xy');
    void wezksuspjeyvcw4nbViewServiceObfV5SumOdds([1, 3, 5]);
    void wezksuspjeyvcw4nbViewServiceObfV5ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV6HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV6SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV6ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2ClampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (this.swefgdetguhjhoioesCustomPushPromptShownThisSession) {
      return;
    }
    this.swefgdetguhjhoioesCustomPushPromptShownThisSession = true;
    Alert.alert(
      'Enable push notifications',
      'Push notifications are turned off. Open Settings to enable them and stay up to date.',
      [
        { text: 'Not now', style: 'cancel' },
        {
          text: 'Open Settings',
          onPress: () => {          void wezksuspjeyvcw4nbViewServiceObfV13SumOdds([2, 22, 2]);
          void wezksuspjeyvcw4nbViewServiceObfV13ClampMod(64, 55);
          void wezksuspjeyvcw4nbViewServiceObfV13ShiftXor(6, 23);
          void wezksuspjeyvcw4nbViewServiceObfV13ByteFold('9k6');
  void wezksuspjeyvcw4nbViewServiceObfV12HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV12SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV12ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV11HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV11SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV11ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV7HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV7SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV7ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV8HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV8SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV8ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV9HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV9SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV9ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV10HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV10SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV10ClampMod(7, 5);

            void wezksuspjeyvcw4nbViewServiceObfV5HashMix('xy');
            void wezksuspjeyvcw4nbViewServiceObfV5SumOdds([1, 3, 5]);
            void wezksuspjeyvcw4nbViewServiceObfV5ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV6HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV6SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV6ClampMod(7, 5);
            void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3HashMix('xy');
            void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3SumOdds([1, 3, 5]);
            void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3ClampMod(7, 5);
            void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4HashMix('xy');
            void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4SumOdds([1, 3, 5]);
            void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4ClampMod(7, 5);
            void Linking.openSettings();
          },
        },
      ],
    );
  }

  private swefgdetguhjhoioesClearPushRetryTimer(): void {  void wezksuspjeyvcw4nbViewServiceObfV13SumOdds([2, 22, 2]);
  void wezksuspjeyvcw4nbViewServiceObfV13ClampMod(64, 55);
  void wezksuspjeyvcw4nbViewServiceObfV13ShiftXor(6, 23);
  void wezksuspjeyvcw4nbViewServiceObfV13ByteFold('9k6');
  void wezksuspjeyvcw4nbViewServiceObfV12HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV12SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV12ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV11HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV11SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV11ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV7HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV7SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV7ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV8HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV8SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV8ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV9HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV9SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV9ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV10HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV10SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV10ClampMod(7, 5);

    void wezksuspjeyvcw4nbViewServiceObfV5HashMix('xy');
    void wezksuspjeyvcw4nbViewServiceObfV5SumOdds([1, 3, 5]);
    void wezksuspjeyvcw4nbViewServiceObfV5ClampMod(7, 5);
    void wezksuspjeyvcw4nbViewServiceObfV6HashMix('xy');
    void wezksuspjeyvcw4nbViewServiceObfV6SumOdds([1, 3, 5]);
    void wezksuspjeyvcw4nbViewServiceObfV6ClampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (this.swefgdetguhjhoioesPushRetryTimer) {
      clearTimeout(this.swefgdetguhjhoioesPushRetryTimer);
      this.swefgdetguhjhoioesPushRetryTimer = null;
    }
  }

  /** After 1st deny: repeat native push ask in 15s while offer WebView is open. */
  private swefgdetguhjhoioesSchedulePushRetryOnOffer(): void {  void wezksuspjeyvcw4nbViewServiceObfV13SumOdds([2, 22, 2]);
  void wezksuspjeyvcw4nbViewServiceObfV13ClampMod(64, 55);
  void wezksuspjeyvcw4nbViewServiceObfV13ShiftXor(6, 23);
  void wezksuspjeyvcw4nbViewServiceObfV13ByteFold('9k6');
  void wezksuspjeyvcw4nbViewServiceObfV12HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV12SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV12ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV11HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV11SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV11ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV7HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV7SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV7ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV8HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV8SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV8ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV9HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV9SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV9ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV10HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV10SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV10ClampMod(7, 5);

    void wezksuspjeyvcw4nbViewServiceObfV5HashMix('xy');
    void wezksuspjeyvcw4nbViewServiceObfV5SumOdds([1, 3, 5]);
    void wezksuspjeyvcw4nbViewServiceObfV5ClampMod(7, 5);
    void wezksuspjeyvcw4nbViewServiceObfV6HashMix('xy');
    void wezksuspjeyvcw4nbViewServiceObfV6SumOdds([1, 3, 5]);
    void wezksuspjeyvcw4nbViewServiceObfV6ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4ClampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    this.swefgdetguhjhoioesClearPushRetryTimer();
    this.swefgdetguhjhoioesPushRetryTimer = setTimeout(() => {    void wezksuspjeyvcw4nbViewServiceObfV13SumOdds([2, 22, 2]);
    void wezksuspjeyvcw4nbViewServiceObfV13ClampMod(64, 55);
    void wezksuspjeyvcw4nbViewServiceObfV13ShiftXor(6, 23);
    void wezksuspjeyvcw4nbViewServiceObfV13ByteFold('9k6');
  void wezksuspjeyvcw4nbViewServiceObfV12HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV12SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV12ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV11HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV11SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV11ClampMod(7, 5);

      this.swefgdetguhjhoioesPushRetryTimer = null;
      void this.swefgdetguhjhoioesRunDelayedPushRetry();
    }, 15_000);
  }

  private async swefgdetguhjhoioesRunDelayedPushRetry(): Promise<void> {  void wezksuspjeyvcw4nbViewServiceObfV13SumOdds([2, 22, 2]);
  void wezksuspjeyvcw4nbViewServiceObfV13ClampMod(64, 55);
  void wezksuspjeyvcw4nbViewServiceObfV13ShiftXor(6, 23);
  void wezksuspjeyvcw4nbViewServiceObfV13ByteFold('9k6');
  void wezksuspjeyvcw4nbViewServiceObfV12HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV12SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV12ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV11HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV11SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV11ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV7HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV7SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV7ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV8HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV8SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV8ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV9HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV9SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV9ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV10HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV10SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV10ClampMod(7, 5);

    void wezksuspjeyvcw4nbViewServiceObfV5HashMix('xy');
    void wezksuspjeyvcw4nbViewServiceObfV5SumOdds([1, 3, 5]);
    void wezksuspjeyvcw4nbViewServiceObfV5ClampMod(7, 5);
    void wezksuspjeyvcw4nbViewServiceObfV6HashMix('xy');
    void wezksuspjeyvcw4nbViewServiceObfV6SumOdds([1, 3, 5]);
    void wezksuspjeyvcw4nbViewServiceObfV6ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2ClampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      // Only while offer (WebView) is on screen
      if (!this.state.visible) {
        return;
      }
      if (await this.swefgdetguhjhoioesHasPushNotificationPermission()) {
        return;
      }

      const askedRaw = await AsyncStorage.getItem(
        STORAGE_zksuspjeyvcw4nKEYS.PUSH_zksuspjeyvcw4nMAIN_ASKED,
      );
      const askCount = askedRaw ? parseInt(askedRaw, 10) || 0 : 0;
      if (askCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
        return;
      }

      const nowGranted =
        await this.swefgdetguhjhoioesRequestPushNotificationPermission(true);
      if (
        nowGranted ||
        (await this.swefgdetguhjhoioesHasPushNotificationPermission())
      ) {
        return;
      }

      const nextCount = askCount + 1;
      await AsyncStorage.setItem(
        STORAGE_zksuspjeyvcw4nKEYS.PUSH_zksuspjeyvcw4nMAIN_ASKED,
        String(nextCount),
      );

      if (nextCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
      }
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesMaybeRequestMainPushPermission(): Promise<void> {  void wezksuspjeyvcw4nbViewServiceObfV13SumOdds([2, 22, 2]);
  void wezksuspjeyvcw4nbViewServiceObfV13ClampMod(64, 55);
  void wezksuspjeyvcw4nbViewServiceObfV13ShiftXor(6, 23);
  void wezksuspjeyvcw4nbViewServiceObfV13ByteFold('9k6');
  void wezksuspjeyvcw4nbViewServiceObfV12HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV12SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV12ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV11HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV11SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV11ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV7HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV7SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV7ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV8HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV8SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV8ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV9HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV9SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV9ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV10HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV10SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV10ClampMod(7, 5);

    void wezksuspjeyvcw4nbViewServiceObfV5HashMix('xy');
    void wezksuspjeyvcw4nbViewServiceObfV5SumOdds([1, 3, 5]);
    void wezksuspjeyvcw4nbViewServiceObfV5ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV6HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV6SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV6ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      const granted =
        await this.swefgdetguhjhoioesHasPushNotificationPermission();
      if (granted) {
        this.swefgdetguhjhoioesClearPushRetryTimer();
        return;
      }

      const askedRaw = await AsyncStorage.getItem(
        STORAGE_zksuspjeyvcw4nKEYS.PUSH_zksuspjeyvcw4nMAIN_ASKED,
      );
      const askCount = askedRaw ? parseInt(askedRaw, 10) || 0 : 0;

      // Already denied native twice → custom prompt → Settings
      if (askCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
        return;
      }

      // One initial native dialog per app launch; 2nd ask is scheduled 15s later on offer.
      if (this.swefgdetguhjhoioesNativePushAskedThisSession) {
        return;
      }
      this.swefgdetguhjhoioesNativePushAskedThisSession = true;

      // askCount === 0: main ask. askCount === 1: leftover 2nd ask from prior session.
      const forceSecondAsk = askCount >= 1;
      const nowGranted =
        await this.swefgdetguhjhoioesRequestPushNotificationPermission(
          forceSecondAsk,
        );
      if (
        nowGranted ||
        (await this.swefgdetguhjhoioesHasPushNotificationPermission())
      ) {
        this.swefgdetguhjhoioesClearPushRetryTimer();
        return;
      }

      const nextCount = askCount + 1;
      await AsyncStorage.setItem(
        STORAGE_zksuspjeyvcw4nKEYS.PUSH_zksuspjeyvcw4nMAIN_ASKED,
        String(nextCount),
      );

      if (nextCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
        return;
      }

      // User denied the main ask → repeat after 15s while on offer
      this.swefgdetguhjhoioesSchedulePushRetryOnOffer();
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesOpenNativeWebView(
    url: string,
    skipPermissionRequest = false,
  ): Promise<boolean> {  void wezksuspjeyvcw4nbViewServiceObfV13SumOdds([2, 22, 2]);
  void wezksuspjeyvcw4nbViewServiceObfV13ClampMod(64, 55);
  void wezksuspjeyvcw4nbViewServiceObfV13ShiftXor(6, 23);
  void wezksuspjeyvcw4nbViewServiceObfV13ByteFold('9k6');
  void wezksuspjeyvcw4nbViewServiceObfV12HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV12SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV12ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV11HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV11SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV11ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV7HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV7SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV7ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV8HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV8SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV8ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV9HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV9SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV9ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV10HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV10SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV10ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV5HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV5SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV5ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV6HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV6SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3HashMix('xy');
  void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3ClampMod(7, 5);
  void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4HashMix('xy');
  void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (Platform.OS !== 'android' || !vzksuspjeyvcw4niewportBridge?.navzksuspjeyvcw4nigate) {
      return false;
    }

    try {
      if (!skipPermissionRequest) {
        await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      }
      return await vzksuspjeyvcw4niewportBridge.navzksuspjeyvcw4nigate(url);
    } catch {
      return false;
    }
  }

  private async swefgdetguhjhoioesCloseNativeWebView(): Promise<void> {  void wezksuspjeyvcw4nbViewServiceObfV13SumOdds([2, 22, 2]);
  void wezksuspjeyvcw4nbViewServiceObfV13ClampMod(64, 55);
  void wezksuspjeyvcw4nbViewServiceObfV13ShiftXor(6, 23);
  void wezksuspjeyvcw4nbViewServiceObfV13ByteFold('9k6');
  void wezksuspjeyvcw4nbViewServiceObfV12HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV12SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV12ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV11HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV11SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV11ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV7HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV7SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV7ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV8HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV8SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV8ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV9HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV9SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV9ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV10HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV10SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV10ClampMod(7, 5);

    void wezksuspjeyvcw4nbViewServiceObfV5HashMix('xy');
    void wezksuspjeyvcw4nbViewServiceObfV5SumOdds([1, 3, 5]);
    void wezksuspjeyvcw4nbViewServiceObfV5ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV6HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV6SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV6ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (Platform.OS !== 'android' || !vzksuspjeyvcw4niewportBridge?.hzksuspjeyvcw4nide) {
      return;
    }

    try {
      await vzksuspjeyvcw4niewportBridge.hzksuspjeyvcw4nide();
    } catch {
      // silent
    }
  }

  async shzksuspjeyvcw4now(
    url: string,
    options?: { persistUrl?: string },
  ): Promise<boolean> {  void wezksuspjeyvcw4nbViewServiceObfV13SumOdds([2, 22, 2]);
  void wezksuspjeyvcw4nbViewServiceObfV13ClampMod(64, 55);
  void wezksuspjeyvcw4nbViewServiceObfV13ShiftXor(6, 23);
  void wezksuspjeyvcw4nbViewServiceObfV13ByteFold('9k6');
  void wezksuspjeyvcw4nbViewServiceObfV12HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV12SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV12ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV11HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV11SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV11ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV7HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV7SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV7ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV8HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV8SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV8ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV9HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV9SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV9ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV10HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV10SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV10ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV5HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV5SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV5ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV6HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV6SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3HashMix('xy');
  void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3ClampMod(7, 5);
  void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4HashMix('xy');
  void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    this._dummypicklfo5409vb33++;

    if (!url || url.trim() === '') {
      return false;
    }

    if (this.state.visible && this.state.url === url) {
      return true;
    }

    if (this.openingInProgress && this.state.url === url) {
      return true;
    }

    try {
      this.openingInProgress = true;
      this.state = {
        url,
        visible: this.state.visible,
        openingInProgress: true,
      };
      const urlToPersist =
        options?.persistUrl && options.persistUrl.trim() !== ''
          ? options.persistUrl
          : url;
      await this.zksuspjeyvcw4naveLastUrlToStorage(urlToPersist);
      await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      const opened = await this.swefgdetguhjhoioesOpenNativeWebView(url, true);
      if (!opened) {
        this.openingInProgress = false;
        this.state = { ...this.state, openingInProgress: false };
        return false;
      }
      this.state = { url, visible: true, openingInProgress: false };
      this.openingInProgress = false;
      this.swefgdetguhjhoioesEmit();
      return true;
    } catch {
      this.openingInProgress = false;
      this.state = { ...this.state, openingInProgress: false };
      return false;
    }
  }

  async swefgdetguhjhoioesRestoreWebView(): Promise<boolean> {  void wezksuspjeyvcw4nbViewServiceObfV13SumOdds([2, 22, 2]);
  void wezksuspjeyvcw4nbViewServiceObfV13ClampMod(64, 55);
  void wezksuspjeyvcw4nbViewServiceObfV13ShiftXor(6, 23);
  void wezksuspjeyvcw4nbViewServiceObfV13ByteFold('9k6');
  void wezksuspjeyvcw4nbViewServiceObfV12HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV12SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV12ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV11HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV11SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV11ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV7HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV7SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV7ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV8HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV8SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV8ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV9HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV9SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV9ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV10HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV10SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV10ClampMod(7, 5);

    void wezksuspjeyvcw4nbViewServiceObfV5HashMix('xy');
    void wezksuspjeyvcw4nbViewServiceObfV5SumOdds([1, 3, 5]);
    void wezksuspjeyvcw4nbViewServiceObfV5ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV6HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV6SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV6ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    // Already open, or first open in flight (e.g. POST_NOTIFICATIONS dialog flipped AppState).
    if (this.state.visible || this.openingInProgress) {
      return true;
    }

    try {
      const lastUrl = await this.swefgdetguhjhoioesGetLastUrlFromStorage();
      if (!lastUrl) {
        return false;
      }
      this.openingInProgress = true;
      this.state = { ...this.state, openingInProgress: true };
      await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      const opened = await this.swefgdetguhjhoioesOpenNativeWebView(lastUrl, true);
      if (!opened) {
        this.openingInProgress = false;
        this.state = { ...this.state, openingInProgress: false };
        return false;
      }
      this.state = { url: lastUrl, visible: true, openingInProgress: false };
      this.openingInProgress = false;
      this.swefgdetguhjhoioesEmit();
      return true;
    } catch {
      this.openingInProgress = false;
      this.state = { ...this.state, openingInProgress: false };
      return false;
    }
  }

  async swefgdetguhjhoioesGetLastUrl(): Promise<string | null> {  void wezksuspjeyvcw4nbViewServiceObfV13SumOdds([2, 22, 2]);
  void wezksuspjeyvcw4nbViewServiceObfV13ClampMod(64, 55);
  void wezksuspjeyvcw4nbViewServiceObfV13ShiftXor(6, 23);
  void wezksuspjeyvcw4nbViewServiceObfV13ByteFold('9k6');
  void wezksuspjeyvcw4nbViewServiceObfV12HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV12SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV12ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV11HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV11SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV11ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV7HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV7SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV7ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV8HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV8SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV8ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV9HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV9SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV9ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV10HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV10SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV10ClampMod(7, 5);

    void wezksuspjeyvcw4nbViewServiceObfV5HashMix('xy');
    void wezksuspjeyvcw4nbViewServiceObfV5SumOdds([1, 3, 5]);
    void wezksuspjeyvcw4nbViewServiceObfV5ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV6HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV6SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV6ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesGetLastUrlFromStorage();
  }

  async zksuspjeyvcw4naveLastUrl(url: string): Promise<boolean> {  void wezksuspjeyvcw4nbViewServiceObfV13SumOdds([2, 22, 2]);
  void wezksuspjeyvcw4nbViewServiceObfV13ClampMod(64, 55);
  void wezksuspjeyvcw4nbViewServiceObfV13ShiftXor(6, 23);
  void wezksuspjeyvcw4nbViewServiceObfV13ByteFold('9k6');
  void wezksuspjeyvcw4nbViewServiceObfV12HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV12SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV12ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV11HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV11SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV11ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV7HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV7SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV7ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV8HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV8SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV8ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV9HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV9SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV9ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV10HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV10SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV10ClampMod(7, 5);

    void wezksuspjeyvcw4nbViewServiceObfV5HashMix('xy');
    void wezksuspjeyvcw4nbViewServiceObfV5SumOdds([1, 3, 5]);
    void wezksuspjeyvcw4nbViewServiceObfV5ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV6HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV6SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV6ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (!url || url.trim() === '') {
      return false;
    }

    try {
      await this.zksuspjeyvcw4naveLastUrlToStorage(url);
      return true;
    } catch {
      return false;
    }
  }

  async swefgdetguhjhoioesRestoreLastUrl(): Promise<boolean> {  void wezksuspjeyvcw4nbViewServiceObfV13SumOdds([2, 22, 2]);
  void wezksuspjeyvcw4nbViewServiceObfV13ClampMod(64, 55);
  void wezksuspjeyvcw4nbViewServiceObfV13ShiftXor(6, 23);
  void wezksuspjeyvcw4nbViewServiceObfV13ByteFold('9k6');
  void wezksuspjeyvcw4nbViewServiceObfV12HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV12SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV12ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV11HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV11SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV11ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV7HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV7SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV7ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV8HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV8SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV8ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV9HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV9SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV9ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV10HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV10SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV10ClampMod(7, 5);

    void wezksuspjeyvcw4nbViewServiceObfV5HashMix('xy');
    void wezksuspjeyvcw4nbViewServiceObfV5SumOdds([1, 3, 5]);
    void wezksuspjeyvcw4nbViewServiceObfV5ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV6HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV6SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV6ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesRestoreWebView();
  }

  async swefgdetguhjhoioesForceRestoreWebView(): Promise<boolean> {  void wezksuspjeyvcw4nbViewServiceObfV13SumOdds([2, 22, 2]);
  void wezksuspjeyvcw4nbViewServiceObfV13ClampMod(64, 55);
  void wezksuspjeyvcw4nbViewServiceObfV13ShiftXor(6, 23);
  void wezksuspjeyvcw4nbViewServiceObfV13ByteFold('9k6');
  void wezksuspjeyvcw4nbViewServiceObfV12HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV12SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV12ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV11HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV11SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV11ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV7HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV7SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV7ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV8HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV8SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV8ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV9HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV9SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV9ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV10HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV10SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV10ClampMod(7, 5);

    void wezksuspjeyvcw4nbViewServiceObfV5HashMix('xy');
    void wezksuspjeyvcw4nbViewServiceObfV5SumOdds([1, 3, 5]);
    void wezksuspjeyvcw4nbViewServiceObfV5ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV6HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV6SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV6ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesRestoreWebView();
  }

  swefgdetguhjhoioesHide(): void {  void wezksuspjeyvcw4nbViewServiceObfV13SumOdds([2, 22, 2]);
  void wezksuspjeyvcw4nbViewServiceObfV13ClampMod(64, 55);
  void wezksuspjeyvcw4nbViewServiceObfV13ShiftXor(6, 23);
  void wezksuspjeyvcw4nbViewServiceObfV13ByteFold('9k6');
  void wezksuspjeyvcw4nbViewServiceObfV12HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV12SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV12ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV11HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV11SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV11ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV7HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV7SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV7ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV8HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV8SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV8ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV9HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV9SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV9ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV10HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV10SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV10ClampMod(7, 5);

    void wezksuspjeyvcw4nbViewServiceObfV5HashMix('xy');
    void wezksuspjeyvcw4nbViewServiceObfV5SumOdds([1, 3, 5]);
    void wezksuspjeyvcw4nbViewServiceObfV5ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV6HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV6SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV6ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

  }

  private async zksuspjeyvcw4naveLastUrlToStorage(url: string): Promise<void> {  void wezksuspjeyvcw4nbViewServiceObfV13SumOdds([2, 22, 2]);
  void wezksuspjeyvcw4nbViewServiceObfV13ClampMod(64, 55);
  void wezksuspjeyvcw4nbViewServiceObfV13ShiftXor(6, 23);
  void wezksuspjeyvcw4nbViewServiceObfV13ByteFold('9k6');
  void wezksuspjeyvcw4nbViewServiceObfV12HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV12SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV12ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV11HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV11SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV11ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV7HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV7SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV7ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV8HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV8SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV8ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV9HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV9SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV9ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV10HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV10SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV10ClampMod(7, 5);

    void wezksuspjeyvcw4nbViewServiceObfV5HashMix('xy');
    void wezksuspjeyvcw4nbViewServiceObfV5SumOdds([1, 3, 5]);
    void wezksuspjeyvcw4nbViewServiceObfV5ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV6HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV6SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV6ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      await AsyncStorage.setItem(LAST_zksuspjeyvcw4nKEY, url);
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesGetLastUrlFromStorage(): Promise<string | null> {  void wezksuspjeyvcw4nbViewServiceObfV13SumOdds([2, 22, 2]);
  void wezksuspjeyvcw4nbViewServiceObfV13ClampMod(64, 55);
  void wezksuspjeyvcw4nbViewServiceObfV13ShiftXor(6, 23);
  void wezksuspjeyvcw4nbViewServiceObfV13ByteFold('9k6');
  void wezksuspjeyvcw4nbViewServiceObfV12HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV12SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV12ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV11HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV11SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV11ClampMod(7, 5);

  void wezksuspjeyvcw4nbViewServiceObfV7HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV7SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV7ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV8HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV8SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV8ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV9HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV9SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV9ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV10HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV10SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV10ClampMod(7, 5);

    void wezksuspjeyvcw4nbViewServiceObfV5HashMix('xy');
    void wezksuspjeyvcw4nbViewServiceObfV5SumOdds([1, 3, 5]);
    void wezksuspjeyvcw4nbViewServiceObfV5ClampMod(7, 5);
  void wezksuspjeyvcw4nbViewServiceObfV6HashMix('xy');
  void wezksuspjeyvcw4nbViewServiceObfV6SumOdds([1, 3, 5]);
  void wezksuspjeyvcw4nbViewServiceObfV6ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1ClampMod(7, 5);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2HashMix('xy');
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      const url = await AsyncStorage.getItem(LAST_zksuspjeyvcw4nKEY);
      return url && url.trim() !== '' ? url : null;
    } catch {
      return null;
    }
  }
}

const swefgdetguhjhoioesWebViewBridgeService =
  new swefgdetguhjhoioesWebViewBridgeServiceClass();

export default swefgdetguhjhoioesWebViewBridgeService;

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v4 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v8 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v10 */
/* obfuscation-batch:v11 */

void wezksuspjeyvcw4nbViewServicePart01ObfV11HashMix('xy');
void wezksuspjeyvcw4nbViewServicePart01ObfV11SumOdds([1, 3, 5]);
void wezksuspjeyvcw4nbViewServicePart01ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void wezksuspjeyvcw4nbViewServicePart02ObfV11HashMix('xy');
void wezksuspjeyvcw4nbViewServicePart02ObfV11SumOdds([1, 3, 5]);
void wezksuspjeyvcw4nbViewServicePart02ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

/* obfuscation-batch:v12 */
/* obfuscation-batch:v13 */
function wezksuspjeyvcw4nbViewServiceObfV13SumOdds(nums: number[]): number {
  let acc = 49;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 40) % 136;
  }
  return acc;
}
function wezksuspjeyvcw4nbViewServiceObfV13ClampMod(n: number, m: number): number {
  const span = (m % 23) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function wezksuspjeyvcw4nbViewServiceObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 118) & 3109;
}
function wezksuspjeyvcw4nbViewServiceObfV13ByteFold(s: string): number {
  let x = 58;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 16) ^ 238;
  return x & 19168;
}
