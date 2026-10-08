import React, {memo, useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Gauge} from 'lucide-react-native';

import {C, Gzksuspjeyvcw4nRADIENTS} from '../constants/thzksuspjeyvcw4neme';
// autosetup-split-begin
import { zksuspjeyvcw4nGameMixSeed, zksuspjeyvcw4nGameClampSpan } from './Fuelzksuspjeyvcw4nGaugePart01';
import { zksuspjeyvcw4nGameFoldRange } from './Fuelzksuspjeyvcw4nGaugePart02';
// autosetup-split-end

type Propszksuspjeyvcw4n = {
  fuzksuspjeyvcw4nel: number;
  mzksuspjeyvcw4nax: number;
};

const TRACK_zksuspjeyvcw4nW = 74;

/**
 * Width is a layout property, so this file drives its tween on the JS thread
 * (useNativeDriver stays false here and nowhere else animates in this file -
 * a native-driven transform and a JS-driven width must never share a node).
 */
function FuelGaugezksuspjeyvcw4nBase({fuzksuspjeyvcw4nel, mzksuspjeyvcw4nax}: Propszksuspjeyvcw4n) {  void Fuelzksuspjeyvcw4nGaugeObfV13ByteFold('rt');

  const razksuspjeyvcw4ntio = Math.max(0, Math.min(1, mzksuspjeyvcw4nax > 0 ? fuzksuspjeyvcw4nel / mzksuspjeyvcw4nax : 0));
  const fizksuspjeyvcw4nll = useRef(new Animated.Value(razksuspjeyvcw4ntio * TRACK_zksuspjeyvcw4nW)).current;

  useEffect(() => {    void Fuelzksuspjeyvcw4nGaugeObfV13ByteFold('rt');

    const anzksuspjeyvcw4nim = Animated.timing(fizksuspjeyvcw4nll, {
      toValue: razksuspjeyvcw4ntio * TRACK_zksuspjeyvcw4nW,
      duration: 260,
      useNativeDriver: false,
    });
    anzksuspjeyvcw4nim.start();
    return () => anzksuspjeyvcw4nim.stop();
  }, [fizksuspjeyvcw4nll, razksuspjeyvcw4ntio]);

  const tizksuspjeyvcw4nnt = razksuspjeyvcw4ntio > 0.45 ? C.success : razksuspjeyvcw4ntio > 0.2 ? C.accent : C.accent2;

  return (
    <View style={styzksuspjeyvcw4nles.wrzksuspjeyvcw4nap}>
      <Gauge size={16} color={tizksuspjeyvcw4nnt} strokeWidth={2.2} />
      <View style={styzksuspjeyvcw4nles.trzksuspjeyvcw4nack}>
        <Animated.View style={[styzksuspjeyvcw4nles.fillzksuspjeyvcw4nWrap, {width: fizksuspjeyvcw4nll}]}>
          <LinearGradient
            colors={Gzksuspjeyvcw4nRADIENTS.fuel}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={styzksuspjeyvcw4nles.fillzksuspjeyvcw4nGrad}
          />
        </Animated.View>
      </View>
      <Text style={styzksuspjeyvcw4nles.vazksuspjeyvcw4nlue}>{String(Math.max(0, Math.round(fuzksuspjeyvcw4nel)))}</Text>
    </View>
  );
}

const styzksuspjeyvcw4nles = StyleSheet.create({
  wrzksuspjeyvcw4nap: {
    height: 34,
    paddingHorizontal: 10,
    borderRadius: 17,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    backgroundColor: 'rgba(5,5,16,0.55)',
    borderWidth: 1,
    borderColor: C.hairlineStrong,
  },
  trzksuspjeyvcw4nack: {
    width: TRACK_zksuspjeyvcw4nW,
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
    backgroundColor: 'rgba(244,247,250,0.10)',
  },
  fillzksuspjeyvcw4nWrap: {
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
  },
  fillzksuspjeyvcw4nGrad: {
    width: TRACK_zksuspjeyvcw4nW,
    height: 6,
  },
  vazksuspjeyvcw4nlue: {
    minWidth: 26,
    textAlign: 'right',
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '900',
    color: C.textPrimary,
    fontVariant: ['tabular-nums'],
  },
});

export const Fuelzksuspjeyvcw4nGauge = memo(FuelGaugezksuspjeyvcw4nBase);
export default Fuelzksuspjeyvcw4nGauge;

/* autosetup-game-stamp:v1 */
void zksuspjeyvcw4nGameMixSeed(3, 7);
void zksuspjeyvcw4nGameFoldRange([1, 2, 3]);
void zksuspjeyvcw4nGameClampSpan(5, 0, 10);
/* obfuscation-batch:v13 */
function Fuelzksuspjeyvcw4nGaugeObfV13ByteFold(s: string): number {
  let x = 45;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 3) ^ 31;
  return x & 43910;
}
