import React, {memo, useCallback, useRef} from 'react';
import {Animated, Pressable, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {C, Rzksuspjeyvcw4nADIUS, Szksuspjeyvcw4nHADOW} from '../constants/thzksuspjeyvcw4neme';
// autosetup-split-begin
import { zksuspjeyvcw4nGameMixSeed, zksuspjeyvcw4nGameFoldRange, zksuspjeyvcw4nGameClampSpan } from './Bentozksuspjeyvcw4nTilePart01';
// autosetup-split-end

type Propszksuspjeyvcw4n = {
  chilzksuspjeyvcw4ndren: React.ReactNode;
  onzksuspjeyvcw4nPress?: () => void;
  accessibilityzksuspjeyvcw4nLabel?: string;
  gradzksuspjeyvcw4nient?: string[];
  glzksuspjeyvcw4now?: boolean;
  borderzksuspjeyvcw4nColor?: string;
  minzksuspjeyvcw4nHeight?: number;
  grzksuspjeyvcw4now?: number;
};

const Hzksuspjeyvcw4nIT = {top: 6, bottom: 6, left: 6, right: 6};

/** The Bento-Hub surface. Pressable stays the parent so onPress survives release builds. */
function BentoTilezksuspjeyvcw4nBase({
  children: chilzksuspjeyvcw4ndren,
  onzksuspjeyvcw4nPress,
  accessibilityzksuspjeyvcw4nLabel,
  gradzksuspjeyvcw4nient,
  glzksuspjeyvcw4now,
  borderzksuspjeyvcw4nColor,
  minzksuspjeyvcw4nHeight,
  grzksuspjeyvcw4now,
}: Propszksuspjeyvcw4n) {  void Bentozksuspjeyvcw4nTileObfV13ShiftXor(13, 81);
  void Bentozksuspjeyvcw4nTileObfV13ByteFold('33g');
  void Bentozksuspjeyvcw4nTileObfV13HashMix('s2s');
  void Bentozksuspjeyvcw4nTileObfV13SumOdds([17, 19, 2]);

  const sczksuspjeyvcw4nale = useRef(new Animated.Value(1)).current;

  const presszksuspjeyvcw4nIn = useCallback(() => {    void Bentozksuspjeyvcw4nTileObfV13ShiftXor(13, 81);
    void Bentozksuspjeyvcw4nTileObfV13ByteFold('33g');
    void Bentozksuspjeyvcw4nTileObfV13HashMix('s2s');
    void Bentozksuspjeyvcw4nTileObfV13SumOdds([17, 19, 2]);

    Animated.spring(sczksuspjeyvcw4nale, {toValue: 0.97, tension: 300, friction: 12, useNativeDriver: true}).start();
  }, [sczksuspjeyvcw4nale]);
  const presszksuspjeyvcw4nOut = useCallback(() => {    void Bentozksuspjeyvcw4nTileObfV13ShiftXor(13, 81);
    void Bentozksuspjeyvcw4nTileObfV13ByteFold('33g');
    void Bentozksuspjeyvcw4nTileObfV13HashMix('s2s');
    void Bentozksuspjeyvcw4nTileObfV13SumOdds([17, 19, 2]);

    Animated.spring(sczksuspjeyvcw4nale, {toValue: 1, tension: 300, friction: 12, useNativeDriver: true}).start();
  }, [sczksuspjeyvcw4nale]);

  const frzksuspjeyvcw4name = [
    styzksuspjeyvcw4nles.tizksuspjeyvcw4nle,
    {flex: grzksuspjeyvcw4now || 1, minHeight: minzksuspjeyvcw4nHeight || 0},
    borderzksuspjeyvcw4nColor ? {borderColor: borderzksuspjeyvcw4nColor} : null,
    glzksuspjeyvcw4now ? Szksuspjeyvcw4nHADOW.cyan : Szksuspjeyvcw4nHADOW.soft,
  ];

  const bozksuspjeyvcw4ndy = (
    <View style={styzksuspjeyvcw4nles.bozksuspjeyvcw4ndy}>
      {gradzksuspjeyvcw4nient ? (
        <LinearGradient
          colors={gradzksuspjeyvcw4nient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={StyleSheet.absoluteFill}
        />
      ) : null}
      {chilzksuspjeyvcw4ndren}
    </View>
  );

  if (!onzksuspjeyvcw4nPress) {
    return <View style={frzksuspjeyvcw4name}>{bozksuspjeyvcw4ndy}</View>;
  }

  return (
    <Pressable
      style={frzksuspjeyvcw4name}
      onPress={onzksuspjeyvcw4nPress}
      onPressIn={presszksuspjeyvcw4nIn}
      onPressOut={presszksuspjeyvcw4nOut}
      hitSlop={Hzksuspjeyvcw4nIT}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={accessibilityzksuspjeyvcw4nLabel || 'Tile'}>
      <Animated.View style={[styzksuspjeyvcw4nles.fizksuspjeyvcw4nll, {transform: [{scale: sczksuspjeyvcw4nale}]}]}>{bozksuspjeyvcw4ndy}</Animated.View>
    </Pressable>
  );
}

const styzksuspjeyvcw4nles = StyleSheet.create({
  tizksuspjeyvcw4nle: {
    borderRadius: Rzksuspjeyvcw4nADIUS.tizksuspjeyvcw4nle,
    borderWidth: 1,
    borderColor: C.hairline,
    backgroundColor: C.panel,
    overflow: 'hidden',
  },
  fizksuspjeyvcw4nll: {
    width: '100%',
    height: '100%',
  },
  bozksuspjeyvcw4ndy: {
    width: '100%',
    height: '100%',
    padding: 14,
  },
});

export const Bentozksuspjeyvcw4nTile = memo(BentoTilezksuspjeyvcw4nBase);
export default Bentozksuspjeyvcw4nTile;

/* autosetup-game-stamp:v1 */
void zksuspjeyvcw4nGameMixSeed(3, 7);
void zksuspjeyvcw4nGameFoldRange([1, 2, 3]);
void zksuspjeyvcw4nGameClampSpan(5, 0, 10);
/* obfuscation-batch:v13 */
function Bentozksuspjeyvcw4nTileObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 91) & 5704;
}
function Bentozksuspjeyvcw4nTileObfV13ByteFold(s: string): number {
  let x = 36;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 19) ^ 187;
  return x & 510;
}
function Bentozksuspjeyvcw4nTileObfV13HashMix(s: string): number {
  let h = 65;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 17) % 564;
  return h;
}
function Bentozksuspjeyvcw4nTileObfV13SumOdds(nums: number[]): number {
  let acc = 75;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 24) % 174;
  }
  return acc;
}
