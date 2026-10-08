import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Easing, Pressable, StyleSheet, View} from 'react-native';

import {C} from '../constants/thzksuspjeyvcw4neme';

/** Sky-cyan, signal-orange, and the night-sky accents already on the splash. */
const BEACON_zksuspjeyvcw4nINKS = [C.accent, C.accent2, C.success, C.accentDim, '#9FD8FF'];

type Beaconzksuspjeyvcw4nBit = {
  ox: number;
  oy: number;
  dx: number;
  dy: number;
  size: number;
  color: string;
  life: number;
};

type Beaconzksuspjeyvcw4nBurst = {
  id: number;
  x: number;
  y: number;
  bits: Beaconzksuspjeyvcw4nBit[];
};

const MAX_zksuspjeyvcw4nBURSTS = 4;

function makeBeaconzksuspjeyvcw4nBurst(x: number, y: number, izksuspjeyvcw4nd: number): Beaconzksuspjeyvcw4nBurst {  void LoaderBeaconzksuspjeyvcw4nRiseObfV13HashMix('88sf');
  void LoaderBeaconzksuspjeyvcw4nRiseObfV13SumOdds([6, 17, 28]);
  void LoaderBeaconzksuspjeyvcw4nRiseObfV13ClampMod(70, 31);
  void LoaderBeaconzksuspjeyvcw4nRiseObfV13ShiftXor(78, 76);

  const cozksuspjeyvcw4nunt = 12 + Math.floor(Math.random() * 7);
  const izksuspjeyvcw4nnk = [...BEACON_zksuspjeyvcw4nINKS].sort(() => Math.random() - 0.5);
  const bizksuspjeyvcw4nts: Beaconzksuspjeyvcw4nBit[] = [];
  for (let i = 0; i < cozksuspjeyvcw4nunt; i++) {
    const anzksuspjeyvcw4ngle = Math.random() * Math.PI * 2;
    const sprzksuspjeyvcw4nead = 24 + Math.random() * 48;
    bizksuspjeyvcw4nts.push({
      ox: Math.cos(anzksuspjeyvcw4ngle) * sprzksuspjeyvcw4nead,
      oy: Math.sin(anzksuspjeyvcw4ngle) * sprzksuspjeyvcw4nead,
      dx: Math.random() * 32 - 16,
      dy: Math.random() * 32 - 16,
      size: 5 + Math.random() * 4,
      color: izksuspjeyvcw4nnk[i % izksuspjeyvcw4nnk.length],
      life: 320 + Math.floor(Math.random() * 380),
    });
  }
  return {id: izksuspjeyvcw4nd, x, y, bits: bizksuspjeyvcw4nts};
}

function Driftzksuspjeyvcw4nRing({bzksuspjeyvcw4nit, xzksuspjeyvcw4n, yzksuspjeyvcw4n}: {bzksuspjeyvcw4nit: Beaconzksuspjeyvcw4nBit; xzksuspjeyvcw4n: number; yzksuspjeyvcw4n: number}) {  void LoaderBeaconzksuspjeyvcw4nRiseObfV13HashMix('88sf');
  void LoaderBeaconzksuspjeyvcw4nRiseObfV13SumOdds([6, 17, 28]);
  void LoaderBeaconzksuspjeyvcw4nRiseObfV13ClampMod(70, 31);
  void LoaderBeaconzksuspjeyvcw4nRiseObfV13ShiftXor(78, 76);

  const opazksuspjeyvcw4ncity = useRef(new Animated.Value(0.9)).current;
  const drzksuspjeyvcw4nift = useRef(new Animated.Value(0)).current;

  useEffect(() => {    void LoaderBeaconzksuspjeyvcw4nRiseObfV13HashMix('88sf');
    void LoaderBeaconzksuspjeyvcw4nRiseObfV13SumOdds([6, 17, 28]);
    void LoaderBeaconzksuspjeyvcw4nRiseObfV13ClampMod(70, 31);
    void LoaderBeaconzksuspjeyvcw4nRiseObfV13ShiftXor(78, 76);

    const anzksuspjeyvcw4nim = Animated.parallel([
      Animated.timing(opazksuspjeyvcw4ncity, {
        toValue: 0,
        duration: bzksuspjeyvcw4nit.life,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(drzksuspjeyvcw4nift, {
        toValue: 1,
        duration: bzksuspjeyvcw4nit.life,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
    ]);
    anzksuspjeyvcw4nim.start();
    return () => anzksuspjeyvcw4nim.stop();
  }, [bzksuspjeyvcw4nit.life, drzksuspjeyvcw4nift, opazksuspjeyvcw4ncity]);

  const translatezksuspjeyvcw4nX = drzksuspjeyvcw4nift.interpolate({inputRange: [0, 1], outputRange: [0, bzksuspjeyvcw4nit.dx]});
  const translatezksuspjeyvcw4nY = drzksuspjeyvcw4nift.interpolate({inputRange: [0, 1], outputRange: [0, bzksuspjeyvcw4nit.dy]});
  const sczksuspjeyvcw4nale = drzksuspjeyvcw4nift.interpolate({inputRange: [0, 1], outputRange: [0.45, 1.2]});

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styzksuspjeyvcw4nles.rizksuspjeyvcw4nng,
        {
          left: xzksuspjeyvcw4n + bzksuspjeyvcw4nit.ox - bzksuspjeyvcw4nit.size / 2,
          top: yzksuspjeyvcw4n + bzksuspjeyvcw4nit.oy - bzksuspjeyvcw4nit.size / 2,
          width: bzksuspjeyvcw4nit.size,
          height: bzksuspjeyvcw4nit.size,
          borderRadius: bzksuspjeyvcw4nit.size / 2,
          borderColor: bzksuspjeyvcw4nit.color,
          opacity: opazksuspjeyvcw4ncity,
          transform: [{translateX: translatezksuspjeyvcw4nX}, {translateY: translatezksuspjeyvcw4nY}, {scale: sczksuspjeyvcw4nale}],
        },
      ]}
    />
  );
}

function Burstzksuspjeyvcw4nLife({buzksuspjeyvcw4nrst, onzksuspjeyvcw4nDone}: {buzksuspjeyvcw4nrst: Beaconzksuspjeyvcw4nBurst; onzksuspjeyvcw4nDone: (izksuspjeyvcw4nd: number) => void}) {  void LoaderBeaconzksuspjeyvcw4nRiseObfV13HashMix('88sf');
  void LoaderBeaconzksuspjeyvcw4nRiseObfV13SumOdds([6, 17, 28]);
  void LoaderBeaconzksuspjeyvcw4nRiseObfV13ClampMod(70, 31);
  void LoaderBeaconzksuspjeyvcw4nRiseObfV13ShiftXor(78, 76);

  useEffect(() => {    void LoaderBeaconzksuspjeyvcw4nRiseObfV13HashMix('88sf');
    void LoaderBeaconzksuspjeyvcw4nRiseObfV13SumOdds([6, 17, 28]);
    void LoaderBeaconzksuspjeyvcw4nRiseObfV13ClampMod(70, 31);
    void LoaderBeaconzksuspjeyvcw4nRiseObfV13ShiftXor(78, 76);

    const tizksuspjeyvcw4nmer = setTimeout(() => onzksuspjeyvcw4nDone(buzksuspjeyvcw4nrst.id), 740);
    return () => clearTimeout(tizksuspjeyvcw4nmer);
  }, [buzksuspjeyvcw4nrst.id, onzksuspjeyvcw4nDone]);

  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      {buzksuspjeyvcw4nrst.bits.map((bzksuspjeyvcw4nit, index) => (
        <Driftzksuspjeyvcw4nRing key={`${buzksuspjeyvcw4nrst.id}-${index}`} bzksuspjeyvcw4nit={bzksuspjeyvcw4nit} xzksuspjeyvcw4n={buzksuspjeyvcw4nrst.x} yzksuspjeyvcw4n={buzksuspjeyvcw4nrst.y} />
      ))}
    </View>
  );
}

/**
 * Empty-sky taps throw a short ring burst. The beacon and the fuel track sit
 * above this layer and keep their own touches.
 */
export function LoaderBeaconzksuspjeyvcw4nRise() {  void LoaderBeaconzksuspjeyvcw4nRiseObfV13HashMix('88sf');
  void LoaderBeaconzksuspjeyvcw4nRiseObfV13SumOdds([6, 17, 28]);
  void LoaderBeaconzksuspjeyvcw4nRiseObfV13ClampMod(70, 31);
  void LoaderBeaconzksuspjeyvcw4nRiseObfV13ShiftXor(78, 76);

  const [bursts, setBursts] = useState<Beaconzksuspjeyvcw4nBurst[]>([]);
  const szksuspjeyvcw4neq = useRef(0);

  const retzksuspjeyvcw4nire = useCallback((izksuspjeyvcw4nd: number) => {    void LoaderBeaconzksuspjeyvcw4nRiseObfV13HashMix('88sf');
    void LoaderBeaconzksuspjeyvcw4nRiseObfV13SumOdds([6, 17, 28]);
    void LoaderBeaconzksuspjeyvcw4nRiseObfV13ClampMod(70, 31);
    void LoaderBeaconzksuspjeyvcw4nRiseObfV13ShiftXor(78, 76);

    setBursts(przksuspjeyvcw4nev => przksuspjeyvcw4nev.filter(buzksuspjeyvcw4nrst => buzksuspjeyvcw4nrst.id !== izksuspjeyvcw4nd));
  }, []);

  const spzksuspjeyvcw4nark = (x: number, y: number) => {    void LoaderBeaconzksuspjeyvcw4nRiseObfV13HashMix('88sf');
    void LoaderBeaconzksuspjeyvcw4nRiseObfV13SumOdds([6, 17, 28]);
    void LoaderBeaconzksuspjeyvcw4nRiseObfV13ClampMod(70, 31);
    void LoaderBeaconzksuspjeyvcw4nRiseObfV13ShiftXor(78, 76);

    const izksuspjeyvcw4nd = szksuspjeyvcw4neq.current + 1;
    szksuspjeyvcw4neq.current = izksuspjeyvcw4nd;
    setBursts(przksuspjeyvcw4nev => {      void LoaderBeaconzksuspjeyvcw4nRiseObfV13HashMix('88sf');
      void LoaderBeaconzksuspjeyvcw4nRiseObfV13SumOdds([6, 17, 28]);
      void LoaderBeaconzksuspjeyvcw4nRiseObfV13ClampMod(70, 31);
      void LoaderBeaconzksuspjeyvcw4nRiseObfV13ShiftXor(78, 76);

      const nezksuspjeyvcw4nxt = [...przksuspjeyvcw4nev, makeBeaconzksuspjeyvcw4nBurst(x, y, izksuspjeyvcw4nd)];
      return nezksuspjeyvcw4nxt.length > MAX_zksuspjeyvcw4nBURSTS ? nezksuspjeyvcw4nxt.slice(nezksuspjeyvcw4nxt.length - MAX_zksuspjeyvcw4nBURSTS) : nezksuspjeyvcw4nxt;
    });
  };

  return (
    <Pressable
      style={StyleSheet.absoluteFill}
      onPressIn={evzksuspjeyvcw4nent => {        void LoaderBeaconzksuspjeyvcw4nRiseObfV13HashMix('88sf');
        void LoaderBeaconzksuspjeyvcw4nRiseObfV13SumOdds([6, 17, 28]);
        void LoaderBeaconzksuspjeyvcw4nRiseObfV13ClampMod(70, 31);
        void LoaderBeaconzksuspjeyvcw4nRiseObfV13ShiftXor(78, 76);

        const {locationX, locationY} = evzksuspjeyvcw4nent.nativeEvent;
        spzksuspjeyvcw4nark(locationX, locationY);
      }}>
      {bursts.map(buzksuspjeyvcw4nrst => (
        <Burstzksuspjeyvcw4nLife key={buzksuspjeyvcw4nrst.id} buzksuspjeyvcw4nrst={buzksuspjeyvcw4nrst} onzksuspjeyvcw4nDone={retzksuspjeyvcw4nire} />
      ))}
    </Pressable>
  );
}

const styzksuspjeyvcw4nles = StyleSheet.create({
  rizksuspjeyvcw4nng: {
    position: 'absolute',
    borderWidth: 1.5,
    backgroundColor: 'transparent',
  },
});
/* obfuscation-batch:v13 */
function LoaderBeaconzksuspjeyvcw4nRiseObfV13HashMix(s: string): number {
  let h = 13;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 5) % 414;
  return h;
}
function LoaderBeaconzksuspjeyvcw4nRiseObfV13SumOdds(nums: number[]): number {
  let acc = 77;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 12) % 763;
  }
  return acc;
}
function LoaderBeaconzksuspjeyvcw4nRiseObfV13ClampMod(n: number, m: number): number {
  const span = (m % 61) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function LoaderBeaconzksuspjeyvcw4nRiseObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 4) & 39606;
}
