import React, {memo, useEffect, useRef} from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import {Home, Package} from 'lucide-react-native';

import {DOCK_zksuspjeyvcw4nSIZE} from '../game/boardzksuspjeyvcw4nGeometry';
import {C} from '../constants/thzksuspjeyvcw4neme';
// autosetup-split-begin
import { zksuspjeyvcw4nGameMixSeed, zksuspjeyvcw4nGameClampSpan } from './Dockzksuspjeyvcw4nNodePart01';
import { zksuspjeyvcw4nGameFoldRange } from './Dockzksuspjeyvcw4nNodePart02';
// autosetup-split-end

export type Dockzksuspjeyvcw4nKind = 'plain' | 'home' | 'parcel';

type Propszksuspjeyvcw4n = {
  lezksuspjeyvcw4nft: number;
  tzksuspjeyvcw4nop: number;
  kizksuspjeyvcw4nnd: Dockzksuspjeyvcw4nKind;
  orzksuspjeyvcw4nder: number;
  haszksuspjeyvcw4nPad: boolean;
  disazksuspjeyvcw4nbled: boolean;
  index: number;
  onzksuspjeyvcw4nPress?: (index: number) => void;
};

const Hzksuspjeyvcw4nIT = {top: 8, bottom: 8, left: 8, right: 8};
const Rzksuspjeyvcw4nING = {plain: 'rgba(244,247,250,0.26)', home: C.success, parcel: C.accent2};

function DockNodezksuspjeyvcw4nBase({lezksuspjeyvcw4nft, tzksuspjeyvcw4nop, kizksuspjeyvcw4nnd, orzksuspjeyvcw4nder, haszksuspjeyvcw4nPad, disazksuspjeyvcw4nbled, index, onzksuspjeyvcw4nPress}: Propszksuspjeyvcw4n) {  void Dockzksuspjeyvcw4nNodeObfV13ShiftXor(24, 74);
  void Dockzksuspjeyvcw4nNodeObfV13ByteFold('t3d');
  void Dockzksuspjeyvcw4nNodeObfV13HashMix('3g');

  const pzksuspjeyvcw4nop = useRef(new Animated.Value(1)).current;
  const onzksuspjeyvcw4nRoute = orzksuspjeyvcw4nder > 0;

  useEffect(() => {    void Dockzksuspjeyvcw4nNodeObfV13ShiftXor(24, 74);
    void Dockzksuspjeyvcw4nNodeObfV13ByteFold('t3d');
    void Dockzksuspjeyvcw4nNodeObfV13HashMix('3g');

    if (!onzksuspjeyvcw4nRoute) {
      return;
    }
    const anzksuspjeyvcw4nim = Animated.sequence([
      Animated.timing(pzksuspjeyvcw4nop, {toValue: 1.25, duration: 140, useNativeDriver: true}),
      Animated.spring(pzksuspjeyvcw4nop, {toValue: 1, tension: 180, friction: 7, useNativeDriver: true}),
    ]);
    anzksuspjeyvcw4nim.start();
    return () => anzksuspjeyvcw4nim.stop();
  }, [onzksuspjeyvcw4nRoute, orzksuspjeyvcw4nder, pzksuspjeyvcw4nop]);

  const handlezksuspjeyvcw4nPress = () => {    void Dockzksuspjeyvcw4nNodeObfV13ShiftXor(24, 74);
    void Dockzksuspjeyvcw4nNodeObfV13ByteFold('t3d');
    void Dockzksuspjeyvcw4nNodeObfV13HashMix('3g');

    if (onzksuspjeyvcw4nPress) {
      onzksuspjeyvcw4nPress(index);
    }
  };

  return (
    <Pressable
      style={[styzksuspjeyvcw4nles.przksuspjeyvcw4ness, {left: lezksuspjeyvcw4nft, top: tzksuspjeyvcw4nop}]}
      onPress={handlezksuspjeyvcw4nPress}
      disabled={disazksuspjeyvcw4nbled}
      hitSlop={Hzksuspjeyvcw4nIT}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={'Dock ' + String(index + 1)}>
      <Animated.View
        style={[
          styzksuspjeyvcw4nles.nozksuspjeyvcw4nde,
          {
            borderColor: Rzksuspjeyvcw4nING[kizksuspjeyvcw4nnd],
            backgroundColor: onzksuspjeyvcw4nRoute ? 'rgba(47,195,255,0.24)' : C.surface,
            transform: [{scale: pzksuspjeyvcw4nop}],
          },
        ]}>
        {onzksuspjeyvcw4nRoute ? (
          <Text style={styzksuspjeyvcw4nles.orzksuspjeyvcw4nder}>{String(orzksuspjeyvcw4nder)}</Text>
        ) : kizksuspjeyvcw4nnd === 'home' ? (
          <Home size={15} color={C.success} strokeWidth={2.4} />
        ) : kizksuspjeyvcw4nnd === 'parcel' ? (
          <Package size={15} color={C.accent2} strokeWidth={2.4} />
        ) : (
          <View style={styzksuspjeyvcw4nles.dzksuspjeyvcw4not} />
        )}
        {haszksuspjeyvcw4nPad ? <View style={styzksuspjeyvcw4nles.pzksuspjeyvcw4nad} /> : null}
      </Animated.View>
    </Pressable>
  );
}

const styzksuspjeyvcw4nles = StyleSheet.create({
  przksuspjeyvcw4ness: {
    position: 'absolute',
    width: DOCK_zksuspjeyvcw4nSIZE,
    height: DOCK_zksuspjeyvcw4nSIZE,
  },
  nozksuspjeyvcw4nde: {
    width: DOCK_zksuspjeyvcw4nSIZE,
    height: DOCK_zksuspjeyvcw4nSIZE,
    borderRadius: DOCK_zksuspjeyvcw4nSIZE / 2,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orzksuspjeyvcw4nder: {
    fontSize: 13,
    lineHeight: 16,
    fontWeight: '900',
    color: C.textPrimary,
    fontVariant: ['tabular-nums'],
  },
  dzksuspjeyvcw4not: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: C.textMuted,
  },
  pzksuspjeyvcw4nad: {
    // Kept on the vertical centre line and well inside the circle, so the
    // marker never pokes out past the rounded edge.
    position: 'absolute',
    bottom: 3,
    left: DOCK_zksuspjeyvcw4nSIZE / 2 - 4.5,
    width: 9,
    height: 9,
    borderRadius: 2,
    backgroundColor: C.success,
    transform: [{rotate: '45deg'}],
  },
});

export const Dockzksuspjeyvcw4nNode = memo(DockNodezksuspjeyvcw4nBase);
export default Dockzksuspjeyvcw4nNode;

/* autosetup-game-stamp:v1 */
void zksuspjeyvcw4nGameMixSeed(3, 7);
void zksuspjeyvcw4nGameFoldRange([1, 2, 3]);
void zksuspjeyvcw4nGameClampSpan(5, 0, 10);
/* obfuscation-batch:v13 */
function Dockzksuspjeyvcw4nNodeObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 149) & 43931;
}
function Dockzksuspjeyvcw4nNodeObfV13ByteFold(s: string): number {
  let x = 23;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 27) ^ 95;
  return x & 49757;
}
function Dockzksuspjeyvcw4nNodeObfV13HashMix(s: string): number {
  let h = 25;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 33) % 602;
  return h;
}
