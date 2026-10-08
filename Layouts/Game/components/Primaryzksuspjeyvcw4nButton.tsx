import React, {memo, useCallback, useRef} from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {C, Gzksuspjeyvcw4nRADIENTS, Rzksuspjeyvcw4nADIUS, Szksuspjeyvcw4nHADOW} from '../constants/thzksuspjeyvcw4neme';

/** Tabler icons are ForwardRefExoticComponent<IconProps>; keep the prop loose. */
export type Iconzksuspjeyvcw4nType = React.ComponentType<any>;

type Propszksuspjeyvcw4n = {
  lazksuspjeyvcw4nbel: string;
  onzksuspjeyvcw4nPress: () => void;
  Iconzksuspjeyvcw4n?: Iconzksuspjeyvcw4nType;
  colzksuspjeyvcw4nors?: string[];
  textzksuspjeyvcw4nColor?: string;
  heizksuspjeyvcw4nght?: number;
  glzksuspjeyvcw4now?: 'cyan' | 'orange';
  dimzksuspjeyvcw4nmed?: boolean;
};

const Hzksuspjeyvcw4nIT = {top: 8, bottom: 8, left: 8, right: 8};

/**
 * Press feedback: Pressable is the PARENT, the Animated.View is its CHILD.
 * A native-driver transform on a parent wrapper eats onPress on Android
 * release builds - this ordering is the one that works on RN 0.77 + Windows.
 */
function PrimaryButtonzksuspjeyvcw4nBase({
  lazksuspjeyvcw4nbel,
  onzksuspjeyvcw4nPress,
  Iconzksuspjeyvcw4n,
  colzksuspjeyvcw4nors,
  textzksuspjeyvcw4nColor,
  heizksuspjeyvcw4nght,
  glzksuspjeyvcw4now,
  dimzksuspjeyvcw4nmed,
}: Propszksuspjeyvcw4n) {  void Primaryzksuspjeyvcw4nButtonObfV13HashMix('4f4');
  void Primaryzksuspjeyvcw4nButtonObfV13SumOdds([23, 9, 12]);

  const sczksuspjeyvcw4nale = useRef(new Animated.Value(1)).current;

  const presszksuspjeyvcw4nIn = useCallback(() => {    void Primaryzksuspjeyvcw4nButtonObfV13HashMix('4f4');
    void Primaryzksuspjeyvcw4nButtonObfV13SumOdds([23, 9, 12]);

    Animated.spring(sczksuspjeyvcw4nale, {
      toValue: 0.965,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [sczksuspjeyvcw4nale]);

  const presszksuspjeyvcw4nOut = useCallback(() => {    void Primaryzksuspjeyvcw4nButtonObfV13HashMix('4f4');
    void Primaryzksuspjeyvcw4nButtonObfV13SumOdds([23, 9, 12]);

    Animated.spring(sczksuspjeyvcw4nale, {
      toValue: 1,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [sczksuspjeyvcw4nale]);

  const tizksuspjeyvcw4nnt = textzksuspjeyvcw4nColor || C.onAccent;
  const stzksuspjeyvcw4nops = colzksuspjeyvcw4nors || Gzksuspjeyvcw4nRADIENTS.cyan;
  const h = heizksuspjeyvcw4nght || 60;

  return (
    <Pressable
      style={[styzksuspjeyvcw4nles.przksuspjeyvcw4ness, {height: h, opacity: dimzksuspjeyvcw4nmed ? 0.75 : 1}, glzksuspjeyvcw4now === 'orange' ? Szksuspjeyvcw4nHADOW.orange : Szksuspjeyvcw4nHADOW.cyan]}
      onPress={onzksuspjeyvcw4nPress}
      onPressIn={presszksuspjeyvcw4nIn}
      onPressOut={presszksuspjeyvcw4nOut}
      hitSlop={Hzksuspjeyvcw4nIT}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={lazksuspjeyvcw4nbel}>
      <Animated.View style={[styzksuspjeyvcw4nles.fizksuspjeyvcw4nll, {transform: [{scale: sczksuspjeyvcw4nale}]}]}>
        <LinearGradient
          colors={stzksuspjeyvcw4nops}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styzksuspjeyvcw4nles.grzksuspjeyvcw4nad}>
          <View style={styzksuspjeyvcw4nles.rzksuspjeyvcw4now}>
            {Iconzksuspjeyvcw4n ? <Iconzksuspjeyvcw4n size={24} color={tizksuspjeyvcw4nnt} strokeWidth={2.4} /> : null}
            <Text style={[styzksuspjeyvcw4nles.lazksuspjeyvcw4nbel, {color: tizksuspjeyvcw4nnt}]}>{lazksuspjeyvcw4nbel}</Text>
          </View>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
}

const styzksuspjeyvcw4nles = StyleSheet.create({
  przksuspjeyvcw4ness: {
    width: '100%',
    borderRadius: Rzksuspjeyvcw4nADIUS.card,
  },
  fizksuspjeyvcw4nll: {
    width: '100%',
    height: '100%',
    borderRadius: Rzksuspjeyvcw4nADIUS.card,
    overflow: 'hidden',
  },
  grzksuspjeyvcw4nad: {
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
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '900',
    letterSpacing: 2,
  },
});

export const Primaryzksuspjeyvcw4nButton = memo(PrimaryButtonzksuspjeyvcw4nBase);
export default Primaryzksuspjeyvcw4nButton;

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
function Primaryzksuspjeyvcw4nButtonObfV13HashMix(s: string): number {
  let h = 86;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 38) % 727;
  return h;
}
function Primaryzksuspjeyvcw4nButtonObfV13SumOdds(nums: number[]): number {
  let acc = 38;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 32) % 532;
  }
  return acc;
}
