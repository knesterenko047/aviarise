import { zksuspjeyvcw4nDecoyHubTouch } from './zksuspjeyvcw4nDecoyHub';
import { Utils } from './Utzksuspjeyvcw4nilService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, BackHandler } from 'react-native';
import { finzksuspjeyvcw4nKey } from './constants/constzksuspjeyvcw4nntsVariable';
import {
  InitializationState,
  zksuspjeyvcw4nInitTarget,
  zksuspjeyvcw4nResetInitializationRuntime,
  zksuspjeyvcw4nSynncPendingSendIdFromNative,
  zksuspjeyvcw4nSynncPendingPushUrlFromNative,
  zksuspjeyvcw4nAppenndSendId,
  zksuspjeyvcw4nInitializationRuntime,
} from './initializationSharzksuspjeyvcw4ned';

export type { InitializationState };
import {
  zksuspjeyvcw4nParallelCollectStep,
  zksuspjeyvcw4nSetupPushOpenHandlers,
} from './zksuspjeyvcw4nSignalHarvest';
import {
  zksuspjeyvcw4nInitStep,
  zksuspjeyvcw4nUnsubscribeFirebase,
} from './zksuspjeyvcw4nOfferResolve';
import { zksuspjeyvcw4nViewportShow } from './zksuspjeyvcw4nViewportHost';
// autosetup-split-begin
import { zksuspjeyvcw4nGatePipelineObfV11HashMix, zksuspjeyvcw4nGatePipelineObfV11ClampMod, zksuspjeyvcw4nGatePipelinObfV1HashMix, zksuspjeyvcw4nGatePipelineObfV5SumOdds, zksuspjeyvcw4nGatePipelinePart01ObfV6SumOdds, zksuspjeyvcw4nGatePipelineObfV6ClampMod, zksuspjeyvcw4nGatePipelineObfV7SumOdds, zksuspjeyvcw4nGatePipelinePart01ObfV5HashMix, zksuspjeyvcw4nGatePipelinObfV1SumOdds, zksuspjeyvcw4nGatObfV3HashMix, zksuspjeyvcw4nGatePipelinePart02ObfV8SumOdds, zksuspjeyvcw4nGatePipelineObfV9ClampMod, zksuspjeyvcw4nGatePipelineObfV10HashMix, zksuspjeyvcw4nGatePipelinePart02ObfV10SumOdds, zksuspjeyvcw4nGatePipelinePart01ObfV11SumOdds, zksuspjeyvcw4nGatePipelineObfV7ClampMod, zksuspjeyvcw4nGatePipelineObfV6HashMix, zksuspjeyvcw4nGatePipelinePart01ObfV5SumOdds, zksuspjeyvcw4nFoldRange, zksuspjeyvcw4nGatePipelineObfV8ClampMod, zksuspjeyvcw4nGatePipelinObfV2ClampMod, zksuspjeyvcw4nGatObfV3ClampMod, zksuspjeyvcw4nGatePipelinObfV1ClampMod, zksuspjeyvcw4nGatePipelinePart02ObfV8HashMix, zksuspjeyvcw4nGatePipelineObfV9SumOdds, zksuspjeyvcw4nGatePipelinePart02ObfV9ClampMod, zksuspjeyvcw4nGatePipelinePart02ObfV10HashMix, zksuspjeyvcw4nGatePipelinePart02ObfV11HashMix, zksuspjeyvcw4nGatePipelinePart02ObfV11ClampMod, zksuspjeyvcw4nGatePipelineObfV12SumOdds } from './zksuspjeyvcw4nGatePipelinePart01';
import { zksuspjeyvcw4nGatePipelineObfV11SumOdds, zksuspjeyvcw4nGatePipelineObfV7HashMix, zksuspjeyvcw4nGatObfV4HashMix, zksuspjeyvcw4nGatePipelinObfV2SumOdds, zksuspjeyvcw4nGatObfV4ClampMod, zksuspjeyvcw4nGatePipelineObfV8SumOdds, zksuspjeyvcw4nGatObfV4SumOdds, zksuspjeyvcw4nMixSeed, zksuspjeyvcw4nGatePipelineObfV5ClampMod, zksuspjeyvcw4nGatePipelinePart01ObfV6ClampMod, zksuspjeyvcw4nGatePipelineObfV9HashMix, zksuspjeyvcw4nGatePipelinePart02ObfV9SumOdds, zksuspjeyvcw4nGatePipelineObfV10ClampMod, zksuspjeyvcw4nGatePipelinePart01ObfV11HashMix, zksuspjeyvcw4nGatePipelinePart01ObfV11ClampMod, zksuspjeyvcw4nClampSpan, zksuspjeyvcw4nGatePipelinObfV2HashMix, zksuspjeyvcw4nGatObfV3SumOdds, zksuspjeyvcw4nGatePipelineObfV8HashMix, zksuspjeyvcw4nGatePipelineObfV5HashMix, zksuspjeyvcw4nGatePipelinePart01ObfV6HashMix, zksuspjeyvcw4nGatePipelineObfV6SumOdds, zksuspjeyvcw4nGatePipelinePart01ObfV5ClampMod, zksuspjeyvcw4nGatePipelinePart02ObfV8ClampMod, zksuspjeyvcw4nGatePipelinePart02ObfV9HashMix, zksuspjeyvcw4nGatePipelineObfV10SumOdds, zksuspjeyvcw4nGatePipelinePart02ObfV10ClampMod, zksuspjeyvcw4nGatePipelinePart02ObfV11SumOdds, zksuspjeyvcw4nGatePipelineObfV12HashMix, zksuspjeyvcw4nGatePipelineObfV12ClampMod } from './zksuspjeyvcw4nGatePipelinePart02';
// autosetup-split-end

const PLACEHOLDER_RESULT: InitializationState = { isLoadPlaceholder: true };
const INTERNET_FAILED_RESULT: InitializationState = { isLoadPlaceholder: false };
const WEBVIEW_RESULT: InitializationState = {
  isLoadPlaceholder: false,
  initTarget: zksuspjeyvcw4nInitTarget.webview,
};

export type zksuspjeyvcw4nMachineRunOptions = {
  retryInitialize?: () => Promise<InitializationState>;
};

async function zksuspjeyvcw4nCheckInternetConnection(
  zksuspjeyvcw4nInitialize: () => Promise<InitializationState>,
): Promise<boolean> {void zksuspjeyvcw4nGatePipelineObfV13ShiftXor(35, 23);
  void zksuspjeyvcw4nGatePipelineObfV12HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV11HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV7HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV8HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV9HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV10HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV10ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV5HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV5SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV6HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nGatObfV3HashMix('xy');
  void zksuspjeyvcw4nGatObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatObfV3ClampMod(7, 5);
  void zksuspjeyvcw4nGatObfV4HashMix('xy');
  void zksuspjeyvcw4nGatObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatObfV4ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);

  void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
  void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
  void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {    void zksuspjeyvcw4nGatePipelineObfV13ShiftXor(35, 23);
  void zksuspjeyvcw4nGatePipelineObfV12HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV11HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV7HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV8HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV9HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV10HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV10ClampMod(7, 5);

      void zksuspjeyvcw4nGatePipelineObfV5HashMix('xy');
      void zksuspjeyvcw4nGatePipelineObfV5SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nGatePipelineObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV6HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6ClampMod(7, 5);
      return (controller.abort());
    }, 15000);

    const response = await fetch('https://www.google.com', {
      method: 'HEAD',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    return response.ok;
  } catch (error) {
    void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
    void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
    void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
    void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
    return new Promise<boolean>((resolve) => {    void zksuspjeyvcw4nGatePipelineObfV13ShiftXor(35, 23);
  void zksuspjeyvcw4nGatePipelineObfV12HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV11HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV7HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV8HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV9HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV10HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV10ClampMod(7, 5);

      void zksuspjeyvcw4nGatePipelineObfV5HashMix('xy');
      void zksuspjeyvcw4nGatePipelineObfV5SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nGatePipelineObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV6HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6ClampMod(7, 5);
      void zksuspjeyvcw4nGatObfV3HashMix('xy');
      void zksuspjeyvcw4nGatObfV3SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nGatObfV3ClampMod(7, 5);
      void zksuspjeyvcw4nGatObfV4HashMix('xy');
      void zksuspjeyvcw4nGatObfV4SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nGatObfV4ClampMod(7, 5);
      void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
      void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
      void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
      void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
      void zksuspjeyvcw4nMixSeed(3, 7);
      void zksuspjeyvcw4nFoldRange([1, 2, 3]);
      void zksuspjeyvcw4nClampSpan(5, 0, 10);

      void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
      void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
      void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
      void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
      Alert.alert(
        'No internet connection',
        'Please check your internet connection and try again',
        [
          {
            text: 'Retry',
            onPress: () => {            void zksuspjeyvcw4nGatePipelineObfV13ShiftXor(35, 23);
  void zksuspjeyvcw4nGatePipelineObfV12HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV11HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV7HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV8HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV9HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV10HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV10ClampMod(7, 5);

              void zksuspjeyvcw4nGatePipelineObfV5HashMix('xy');
              void zksuspjeyvcw4nGatePipelineObfV5SumOdds([1, 3, 5]);
              void zksuspjeyvcw4nGatePipelineObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV6HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6ClampMod(7, 5);
              void zksuspjeyvcw4nGatObfV3HashMix('xy');
              void zksuspjeyvcw4nGatObfV3SumOdds([1, 3, 5]);
              void zksuspjeyvcw4nGatObfV3ClampMod(7, 5);
              void zksuspjeyvcw4nGatObfV4HashMix('xy');
              void zksuspjeyvcw4nGatObfV4SumOdds([1, 3, 5]);
              void zksuspjeyvcw4nGatObfV4ClampMod(7, 5);
              void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
              void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
              void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
              void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
              void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
              void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
              void zksuspjeyvcw4nMixSeed(3, 7);
              void zksuspjeyvcw4nFoldRange([1, 2, 3]);
              void zksuspjeyvcw4nClampSpan(5, 0, 10);

              void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
              void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
              void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
              void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
              void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
              void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
              zksuspjeyvcw4nInitialize()
                .then(() => {                void zksuspjeyvcw4nGatePipelineObfV13ShiftXor(35, 23);
  void zksuspjeyvcw4nGatePipelineObfV12HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV11HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV7HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV8HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV9HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV10HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV10ClampMod(7, 5);

                  void zksuspjeyvcw4nGatePipelineObfV5HashMix('xy');
                  void zksuspjeyvcw4nGatePipelineObfV5SumOdds([1, 3, 5]);
                  void zksuspjeyvcw4nGatePipelineObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV6HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6ClampMod(7, 5);
                  return (resolve(false));
                })
                .catch(() => {                void zksuspjeyvcw4nGatePipelineObfV13ShiftXor(35, 23);
  void zksuspjeyvcw4nGatePipelineObfV12HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV11HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV7HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV8HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV9HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV10HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV10ClampMod(7, 5);

                  void zksuspjeyvcw4nGatePipelineObfV5HashMix('xy');
                  void zksuspjeyvcw4nGatePipelineObfV5SumOdds([1, 3, 5]);
                  void zksuspjeyvcw4nGatePipelineObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV6HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6ClampMod(7, 5);
                  return (resolve(false));
                });
            },
          },
          {
            text: 'Exit',
            onPress: () => {            void zksuspjeyvcw4nGatePipelineObfV13ShiftXor(35, 23);
  void zksuspjeyvcw4nGatePipelineObfV12HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV11HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV7HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV8HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV9HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV10HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV10ClampMod(7, 5);

              void zksuspjeyvcw4nGatePipelineObfV5HashMix('xy');
              void zksuspjeyvcw4nGatePipelineObfV5SumOdds([1, 3, 5]);
              void zksuspjeyvcw4nGatePipelineObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV6HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6ClampMod(7, 5);
              void zksuspjeyvcw4nGatObfV3HashMix('xy');
              void zksuspjeyvcw4nGatObfV3SumOdds([1, 3, 5]);
              void zksuspjeyvcw4nGatObfV3ClampMod(7, 5);
              void zksuspjeyvcw4nGatObfV4HashMix('xy');
              void zksuspjeyvcw4nGatObfV4SumOdds([1, 3, 5]);
              void zksuspjeyvcw4nGatObfV4ClampMod(7, 5);
              void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
              void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
              void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
              void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
              void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
              void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
              void zksuspjeyvcw4nMixSeed(3, 7);
              void zksuspjeyvcw4nFoldRange([1, 2, 3]);
              void zksuspjeyvcw4nClampSpan(5, 0, 10);

              void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
              void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
              void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
              void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
              void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
              void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
              BackHandler.exitApp();
              resolve(false);
            },
            style: 'destructive',
          },
        ],
        { cancelable: false },
      );
    });
  }
}

async function zksuspjeyvcw4nCheckBlockUser(): Promise<boolean> {void zksuspjeyvcw4nGatePipelineObfV13ShiftXor(35, 23);
  void zksuspjeyvcw4nGatePipelineObfV12HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV11HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV7HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV8HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV9HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV10HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV10ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV5HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV5SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV6HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nGatObfV3HashMix('xy');
  void zksuspjeyvcw4nGatObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatObfV3ClampMod(7, 5);
  void zksuspjeyvcw4nGatObfV4HashMix('xy');
  void zksuspjeyvcw4nGatObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatObfV4ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
  void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
  void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);

  void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
  void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
  void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
  try {
    const userBlock = await Utils.zksuspjeyvcw4nGetUserBlocke();
    return !!userBlock;
  } catch (error) {
    void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
    void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
    void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
    void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
    throw error;
  }
}

async function zksuspjeyvcw4nCheckFinalUrl(): Promise<string> {void zksuspjeyvcw4nGatePipelineObfV13ShiftXor(35, 23);
  void zksuspjeyvcw4nGatePipelineObfV12HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV11HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV7HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV8HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV9HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV10HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV10ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV5HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV5SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV6HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nGatObfV3HashMix('xy');
  void zksuspjeyvcw4nGatObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatObfV3ClampMod(7, 5);
  void zksuspjeyvcw4nGatObfV4HashMix('xy');
  void zksuspjeyvcw4nGatObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatObfV4ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
  void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
  void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);

  void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
  void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
  void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
  const finalUrl = await AsyncStorage.getItem(finzksuspjeyvcw4nKey);
  if (finalUrl && finalUrl !== '') {
    return zksuspjeyvcw4nAppenndSendId(
      finalUrl,
      zksuspjeyvcw4nInitializationRuntime.penzksuspjeyvcw4ndingSendId,
    );
  }
  return '';
}

async function zksuspjeyvcw4nCompletePlaceholder(
  result: InitializationState = PLACEHOLDER_RESULT,
): Promise<InitializationState> {void zksuspjeyvcw4nGatePipelineObfV13ShiftXor(35, 23);
  void zksuspjeyvcw4nGatePipelineObfV12HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV11HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV7HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV8HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV9HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV10HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV10ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV5HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV5SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV6HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nGatObfV3HashMix('xy');
  void zksuspjeyvcw4nGatObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatObfV3ClampMod(7, 5);
  void zksuspjeyvcw4nGatObfV4HashMix('xy');
  void zksuspjeyvcw4nGatObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatObfV4ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);

  void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
  void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
  void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
  return result;
}

async function zksuspjeyvcw4nErrorFallback(): Promise<InitializationState> {void zksuspjeyvcw4nGatePipelineObfV13ShiftXor(35, 23);
  void zksuspjeyvcw4nGatePipelineObfV12HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV11HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV7HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV8HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV9HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV10HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV10ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV5HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV5SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV6HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nGatObfV3HashMix('xy');
  void zksuspjeyvcw4nGatObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatObfV3ClampMod(7, 5);
  void zksuspjeyvcw4nGatObfV4HashMix('xy');
  void zksuspjeyvcw4nGatObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatObfV4ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
  void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
  void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);

  void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
  void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
  void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
  try {
    await zksuspjeyvcw4nUnsubscribeFirebase('error fallback');
  } catch {
    // Best-effort cleanup.
  }
  return zksuspjeyvcw4nCompletePlaceholder();
}

/**
 * Diversified gate pipeline (different order/shape from Henway):
 * reset+decoy → internet → signal intake (sendId + pending push URL + push handlers)
 * → blocked → cached URL OR (getLink → collect → init)
 */
export async function zksuspjeyvcw4nRunInitializationFlow(
  options?: zksuspjeyvcw4nMachineRunOptions,
): Promise<InitializationState> {  void zksuspjeyvcw4nGatePipelineObfV13ShiftXor(35, 23);

  // autosetup-decoy-begin
  void zksuspjeyvcw4nDecoyHubTouch();
  // autosetup-decoy-end

  void zksuspjeyvcw4nGatePipelineObfV12HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV11HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV7HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV8HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV9HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV10HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV10ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV5HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV5SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV6HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nGatObfV3HashMix('xy');
  void zksuspjeyvcw4nGatObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatObfV3ClampMod(7, 5);
  void zksuspjeyvcw4nGatObfV4HashMix('xy');
  void zksuspjeyvcw4nGatObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatObfV4ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);

  void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
  void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
  void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
  zksuspjeyvcw4nResetInitializationRuntime();

  try {
    const retry =
      options?.retryInitialize ??
      (async (): Promise<InitializationState> => {      void zksuspjeyvcw4nGatePipelineObfV13ShiftXor(35, 23);
  void zksuspjeyvcw4nGatePipelineObfV12HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV11HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV7HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV8HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV9HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV10HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV10ClampMod(7, 5);

        void zksuspjeyvcw4nGatePipelineObfV5HashMix('xy');
        void zksuspjeyvcw4nGatePipelineObfV5SumOdds([1, 3, 5]);
        void zksuspjeyvcw4nGatePipelineObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV6HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6ClampMod(7, 5);
        return (INTERNET_FAILED_RESULT);
      });

    // 1) Internet check FIRST
    let hasInternet = false;
    try {
      hasInternet = await zksuspjeyvcw4nCheckInternetConnection(retry);
    } catch (error) {
      void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
      void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
      void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
      void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
      hasInternet = false;
    }
    if (!hasInternet) {
      return INTERNET_FAILED_RESULT;
    }

    // 2) Signal intake: sendId + pending push URL + push open handlers
    try {
      await zksuspjeyvcw4nSynncPendingSendIdFromNative();
    } catch (error) {
      void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
      void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
      void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
      void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
    }
    try {
      await zksuspjeyvcw4nSynncPendingPushUrlFromNative();
    } catch (error) {
      void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
      void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
      void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
      void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
    }
    try {
      await zksuspjeyvcw4nSetupPushOpenHandlers();
    } catch (error) {
      void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
      void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
      void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
      void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
    }

    // 3) Blocked check
    let isBlocked = false;
    try {
      isBlocked = await zksuspjeyvcw4nCheckBlockUser();
    } catch (error) {
      void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
      void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
      void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
      void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
      return zksuspjeyvcw4nErrorFallback();
    }
    if (isBlocked) {
      try {
        await zksuspjeyvcw4nUnsubscribeFirebase('user blocked');
      } catch (error) {
        void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
        void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
        void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
        void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
        void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
        void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
      }
      return zksuspjeyvcw4nCompletePlaceholder();
    }

    // 4) Prefer cached final URL; getLink validation only when no cache
    let finalUrl = '';
    try {
      finalUrl = await zksuspjeyvcw4nCheckFinalUrl();
    } catch (error) {
      void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
      void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
      void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
      void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
      return zksuspjeyvcw4nErrorFallback();
    }
    if (finalUrl) {
      try {
        await zksuspjeyvcw4nViewportShow(finalUrl);
      } catch (error) {
        void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
        void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
        void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
        void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
        void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
        void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
      }
      return WEBVIEW_RESULT;
    }

    let link = '';
    try {
      link = await Utils.zksuspjeyvcw4nGetLink();
    } catch (error) {
      void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
      void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
      void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
      void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
      link = '';
    }
    if (!link) {
      try {
        await Utils.zksuspjeyvcw4nSetUserBlocke(1);
      } catch (error) {
        void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
        void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
        void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
        void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
        void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
        void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
      }
      try {
        await zksuspjeyvcw4nUnsubscribeFirebase('no worker link');
      } catch (error) {
        void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
        void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
        void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
        void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
        void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
        void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
      }
      return zksuspjeyvcw4nCompletePlaceholder();
    }

    try {
      await zksuspjeyvcw4nParallelCollectStep();
    } catch (error) {
      void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
      void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
      void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
      void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
    }

    let initResult: InitializationState | null = null;
    try {
      initResult = await zksuspjeyvcw4nInitStep();
    } catch (error) {
      void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
      void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
      void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
      void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
      return zksuspjeyvcw4nErrorFallback();
    }
    if (initResult !== null && initResult !== undefined) {
      return initResult;
    }

    try {
      await zksuspjeyvcw4nUnsubscribeFirebase('init step returned null');
    } catch (error) {
      void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
      void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
      void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
      void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
      void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
    }
    return zksuspjeyvcw4nCompletePlaceholder();
  } catch (error) {
    void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
    void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
    void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
    void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
    return PLACEHOLDER_RESULT;
  }
}

/** @deprecated Use zksuspjeyvcw4nRunInitializationFlow */
export const zksuspjeyvcw4nRunInitializationMachine = zksuspjeyvcw4nRunInitializationFlow;

export async function zksuspjeyvcw4nInitialize(
  options?: zksuspjeyvcw4nMachineRunOptions,
): Promise<InitializationState> {void zksuspjeyvcw4nGatePipelineObfV13ShiftXor(35, 23);
  void zksuspjeyvcw4nGatePipelineObfV12HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV11HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV7HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV8HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV9HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV10HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV10ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV5HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV5SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV6HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nGatObfV3HashMix('xy');
  void zksuspjeyvcw4nGatObfV3SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatObfV3ClampMod(7, 5);
  void zksuspjeyvcw4nGatObfV4HashMix('xy');
  void zksuspjeyvcw4nGatObfV4SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatObfV4ClampMod(7, 5);
  void zksuspjeyvcw4nMixSeed(3, 7);
  void zksuspjeyvcw4nFoldRange([1, 2, 3]);
  void zksuspjeyvcw4nClampSpan(5, 0, 10);

  void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
  void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
  void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
  const retry = async (): Promise<InitializationState> => {  void zksuspjeyvcw4nGatePipelineObfV13ShiftXor(35, 23);
  void zksuspjeyvcw4nGatePipelineObfV12HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV12SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV12ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV11HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV11SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV11ClampMod(7, 5);

  void zksuspjeyvcw4nGatePipelineObfV7HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV7SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV7ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV8HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV9HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV10HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV10ClampMod(7, 5);

    void zksuspjeyvcw4nGatePipelineObfV5HashMix('xy');
    void zksuspjeyvcw4nGatePipelineObfV5SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nGatePipelineObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelineObfV6HashMix('xy');
  void zksuspjeyvcw4nGatePipelineObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelineObfV6ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6ClampMod(7, 5);
    void zksuspjeyvcw4nGatObfV3HashMix('xy');
    void zksuspjeyvcw4nGatObfV3SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nGatObfV3ClampMod(7, 5);
    void zksuspjeyvcw4nGatObfV4HashMix('xy');
    void zksuspjeyvcw4nGatObfV4SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nGatObfV4ClampMod(7, 5);
    void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
    void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
    void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
    void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
    void zksuspjeyvcw4nMixSeed(3, 7);
    void zksuspjeyvcw4nFoldRange([1, 2, 3]);
    void zksuspjeyvcw4nClampSpan(5, 0, 10);

    void zksuspjeyvcw4nGatePipelinObfV1HashMix('xy');
    void zksuspjeyvcw4nGatePipelinObfV1SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nGatePipelinObfV1ClampMod(7, 5);
    void zksuspjeyvcw4nGatePipelinObfV2HashMix('xy');
    void zksuspjeyvcw4nGatePipelinObfV2SumOdds([1, 3, 5]);
    void zksuspjeyvcw4nGatePipelinObfV2ClampMod(7, 5);
    return zksuspjeyvcw4nInitialize(options);
  };

  try {
    return await zksuspjeyvcw4nRunInitializationFlow({
      ...options,
      retryInitialize: options?.retryInitialize ?? retry,
    });
  } catch {
    return { isLoadPlaceholder: true };
  }
}
/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v5 */

void zksuspjeyvcw4nGatePipelinePart01ObfV5HashMix('xy');
void zksuspjeyvcw4nGatePipelinePart01ObfV5SumOdds([1, 3, 5]);
void zksuspjeyvcw4nGatePipelinePart01ObfV5ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6HashMix('xy');
  void zksuspjeyvcw4nGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinePart01ObfV6ClampMod(7, 5);

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v7 */
function zksuspjeyvcw4nGatePipelinePart01ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function zksuspjeyvcw4nGatePipelinePart01ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function zksuspjeyvcw4nGatePipelinePart01ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v8 */

/* obfuscation-batch:v8 */

/* obfuscation-batch:v8 */

function zksuspjeyvcw4nGatePipelinePart02ObfV8Touch(): number {
  void zksuspjeyvcw4nGatePipelinePart02ObfV8HashMix('xy');
  void zksuspjeyvcw4nGatePipelinePart02ObfV8SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinePart02ObfV8ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelinePart02ObfV9HashMix('xy');
  void zksuspjeyvcw4nGatePipelinePart02ObfV9SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinePart02ObfV9ClampMod(7, 5);
  void zksuspjeyvcw4nGatePipelinePart02ObfV10HashMix('xy');
  void zksuspjeyvcw4nGatePipelinePart02ObfV10SumOdds([1, 3, 5]);
  void zksuspjeyvcw4nGatePipelinePart02ObfV10ClampMod(7, 5);
  return zksuspjeyvcw4nGatePipelinePart02ObfV8ClampMod(3, 7);
}

/* obfuscation-batch:v9 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v10 */

/* obfuscation-batch:v10 */
/* obfuscation-batch:v11 */

void zksuspjeyvcw4nGatePipelinePart01ObfV11HashMix('xy');
void zksuspjeyvcw4nGatePipelinePart01ObfV11SumOdds([1, 3, 5]);
void zksuspjeyvcw4nGatePipelinePart01ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void zksuspjeyvcw4nGatePipelinePart02ObfV11HashMix('xy');
void zksuspjeyvcw4nGatePipelinePart02ObfV11SumOdds([1, 3, 5]);
void zksuspjeyvcw4nGatePipelinePart02ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

/* obfuscation-batch:v12 */
/* obfuscation-batch:v13 */
function zksuspjeyvcw4nGatePipelineObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 87) & 61133;
}
