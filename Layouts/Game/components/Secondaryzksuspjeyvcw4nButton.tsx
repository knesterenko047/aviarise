import React, {memo, useCallback, useRef} from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';

import {C, Rzksuspjeyvcw4nADIUS} from '../constants/thzksuspjeyvcw4neme';
import type {Iconzksuspjeyvcw4nType} from './Primaryzksuspjeyvcw4nButton';

type Propszksuspjeyvcw4n = {
  lazksuspjeyvcw4nbel: string;
  onzksuspjeyvcw4nPress: () => void;
  Iconzksuspjeyvcw4n?: Iconzksuspjeyvcw4nType;
  tizksuspjeyvcw4nnt?: string;
  heizksuspjeyvcw4nght?: number;
  flzksuspjeyvcw4nex?: boolean;
};

const Hzksuspjeyvcw4nIT = {top: 8, bottom: 8, left: 8, right: 8};

function SecondaryButtonzksuspjeyvcw4nBase({lazksuspjeyvcw4nbel, onzksuspjeyvcw4nPress, Iconzksuspjeyvcw4n, tizksuspjeyvcw4nnt, heizksuspjeyvcw4nght, flzksuspjeyvcw4nex}: Propszksuspjeyvcw4n) {  void Secondaryzksuspjeyvcw4nButtonObfV13HashMix('m389');
  void Secondaryzksuspjeyvcw4nButtonObfV13SumOdds([20, 26, 5]);

  const sczksuspjeyvcw4nale = useRef(new Animated.Value(1)).current;

  const presszksuspjeyvcw4nIn = useCallback(() => {    void Secondaryzksuspjeyvcw4nButtonObfV13HashMix('m389');
    void Secondaryzksuspjeyvcw4nButtonObfV13SumOdds([20, 26, 5]);

    Animated.spring(sczksuspjeyvcw4nale, {
      toValue: 0.96,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [sczksuspjeyvcw4nale]);

  const presszksuspjeyvcw4nOut = useCallback(() => {    void Secondaryzksuspjeyvcw4nButtonObfV13HashMix('m389');
    void Secondaryzksuspjeyvcw4nButtonObfV13SumOdds([20, 26, 5]);

    Animated.spring(sczksuspjeyvcw4nale, {
      toValue: 1,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [sczksuspjeyvcw4nale]);

  const cozksuspjeyvcw4nlor = tizksuspjeyvcw4nnt || C.textSecondary;
  const h = heizksuspjeyvcw4nght || 48;

  return (
    <Pressable
      style={[styzksuspjeyvcw4nles.przksuspjeyvcw4ness, {height: h}, flzksuspjeyvcw4nex ? styzksuspjeyvcw4nles.flezksuspjeyvcw4nxed : styzksuspjeyvcw4nles.fuzksuspjeyvcw4nll]}
      onPress={onzksuspjeyvcw4nPress}
      onPressIn={presszksuspjeyvcw4nIn}
      onPressOut={presszksuspjeyvcw4nOut}
      hitSlop={Hzksuspjeyvcw4nIT}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={lazksuspjeyvcw4nbel}>
      <Animated.View style={[styzksuspjeyvcw4nles.fizksuspjeyvcw4nll, {transform: [{scale: sczksuspjeyvcw4nale}]}]}>
        <View style={styzksuspjeyvcw4nles.rzksuspjeyvcw4now}>
          {Iconzksuspjeyvcw4n ? <Iconzksuspjeyvcw4n size={20} color={cozksuspjeyvcw4nlor} strokeWidth={2.2} /> : null}
          <Text style={[styzksuspjeyvcw4nles.lazksuspjeyvcw4nbel, {color: cozksuspjeyvcw4nlor}]}>{lazksuspjeyvcw4nbel}</Text>
        </View>
      </Animated.View>
    </Pressable>
  );
}

const styzksuspjeyvcw4nles = StyleSheet.create({
  przksuspjeyvcw4ness: {
    borderRadius: Rzksuspjeyvcw4nADIUS.chip,
    backgroundColor: C.glassFill,
    borderWidth: 1,
    borderColor: C.hairlineStrong,
  },
  fuzksuspjeyvcw4nll: {width: '100%'},
  flezksuspjeyvcw4nxed: {flex: 1},
  fizksuspjeyvcw4nll: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rzksuspjeyvcw4now: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  lazksuspjeyvcw4nbel: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '800',
    letterSpacing: 2,
  },
});

export const Secondaryzksuspjeyvcw4nButton = memo(SecondaryButtonzksuspjeyvcw4nBase);
export default Secondaryzksuspjeyvcw4nButton;

/* autosetup-game-stamp:v1 */
function zksuspjeyvcw4nGameMixSeed(x: number, y: number): number {
  return ((x % (y || 1)) + y) % (y || 1);
}
function zksuspjeyvcw4nGameFoldRange(nuzksuspjeyvcw4nms: number[]): number {
  return nuzksuspjeyvcw4nms.reduce((azksuspjeyvcw4ncc, n) => azksuspjeyvcw4ncc + n, 0);
}
function zksuspjeyvcw4nGameClampSpan(n: number, lzksuspjeyvcw4no: number, hzksuspjeyvcw4ni: number): number {
  return n < lzksuspjeyvcw4no ? lzksuspjeyvcw4no : n > hzksuspjeyvcw4ni ? hzksuspjeyvcw4ni : n;
}
void zksuspjeyvcw4nGameMixSeed(3, 7);
void zksuspjeyvcw4nGameFoldRange([1, 2, 3]);
void zksuspjeyvcw4nGameClampSpan(5, 0, 10);
/* obfuscation-batch:v13 */
function Secondaryzksuspjeyvcw4nButtonObfV13HashMix(s: string): number {
  let h = 28;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 29) % 729;
  return h;
}
function Secondaryzksuspjeyvcw4nButtonObfV13SumOdds(nums: number[]): number {
  let acc = 50;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 41) % 509;
  }
  return acc;
}
