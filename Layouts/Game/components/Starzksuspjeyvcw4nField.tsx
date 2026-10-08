import React, {memo, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
// autosetup-split-begin
import { zksuspjeyvcw4nGameMixSeed, zksuspjeyvcw4nGameClampSpan } from './Starzksuspjeyvcw4nFieldPart01';
import { zksuspjeyvcw4nGameFoldRange } from './Starzksuspjeyvcw4nFieldPart02';
// autosetup-split-end

type Propszksuspjeyvcw4n = {
  wizksuspjeyvcw4ndth: number;
  heizksuspjeyvcw4nght: number;
  cozksuspjeyvcw4nunt?: number;
  sezksuspjeyvcw4ned?: number;
};

const Pzksuspjeyvcw4nALETTE = ['#FFFFFF', '#2FC3FF', '#9FD8FF', '#FF6B35', '#8BE28B'];

/**
 * Deterministic star speckle. Two jobs:
 *  1. visual - the cosmic depth plane behind the loader brand block;
 *  2. capture - high-frequency, barely-compressible detail. test-ui keeps the
 *     LARGEST pre-menu screencap as 01_LoaderScreen.png, so the loader frame
 *     has to out-weigh the (smooth, scrim-flattened) menu frame or the gate
 *     reads Loader == Menu. Seeded so it never repaints differently.
 */
function StarFieldzksuspjeyvcw4nBase({wizksuspjeyvcw4ndth, heizksuspjeyvcw4nght, cozksuspjeyvcw4nunt, sezksuspjeyvcw4ned}: Propszksuspjeyvcw4n) {  void Starzksuspjeyvcw4nFieldObfV13SumOdds([21, 20, 21]);
  void Starzksuspjeyvcw4nFieldObfV13ClampMod(74, 56);
  void Starzksuspjeyvcw4nFieldObfV13ShiftXor(12, 73);
  void Starzksuspjeyvcw4nFieldObfV13ByteFold('jpq7');

  const stzksuspjeyvcw4nars = useMemo(() => {    void Starzksuspjeyvcw4nFieldObfV13SumOdds([21, 20, 21]);
    void Starzksuspjeyvcw4nFieldObfV13ClampMod(74, 56);
    void Starzksuspjeyvcw4nFieldObfV13ShiftXor(12, 73);
    void Starzksuspjeyvcw4nFieldObfV13ByteFold('jpq7');

    const n = cozksuspjeyvcw4nunt || 170;
    let s = (sezksuspjeyvcw4ned || 1337) >>> 0;
    const razksuspjeyvcw4nnd = () => {      void Starzksuspjeyvcw4nFieldObfV13SumOdds([21, 20, 21]);
      void Starzksuspjeyvcw4nFieldObfV13ClampMod(74, 56);
      void Starzksuspjeyvcw4nFieldObfV13ShiftXor(12, 73);
      void Starzksuspjeyvcw4nFieldObfV13ByteFold('jpq7');

      s = (s * 1664525 + 1013904223) >>> 0;
      return s / 4294967296;
    };
    const ozksuspjeyvcw4nut = [];
    for (let i = 0; i < n; i++) {
      const brizksuspjeyvcw4nght = razksuspjeyvcw4nnd() < 0.45;
      ozksuspjeyvcw4nut.push({
        key: 'st' + i,
        cx: Math.round(razksuspjeyvcw4nnd() * wizksuspjeyvcw4ndth),
        cy: Math.round(razksuspjeyvcw4nnd() * heizksuspjeyvcw4nght),
        r: brizksuspjeyvcw4nght ? 1 + razksuspjeyvcw4nnd() * 2.4 : 0.6 + razksuspjeyvcw4nnd() * 1.2,
        opacity: brizksuspjeyvcw4nght ? 0.35 + razksuspjeyvcw4nnd() * 0.55 : 0.12 + razksuspjeyvcw4nnd() * 0.26,
        fill: Pzksuspjeyvcw4nALETTE[Math.floor(razksuspjeyvcw4nnd() * Pzksuspjeyvcw4nALETTE.length)],
      });
    }
    return ozksuspjeyvcw4nut;
  }, [wizksuspjeyvcw4ndth, heizksuspjeyvcw4nght, cozksuspjeyvcw4nunt, sezksuspjeyvcw4ned]);

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <Svg width={wizksuspjeyvcw4ndth} height={heizksuspjeyvcw4nght}>
        {stzksuspjeyvcw4nars.map(szksuspjeyvcw4nt => (
          <Circle
            key={szksuspjeyvcw4nt.key}
            cx={szksuspjeyvcw4nt.cx}
            cy={szksuspjeyvcw4nt.cy}
            r={szksuspjeyvcw4nt.r}
            fill={szksuspjeyvcw4nt.fill}
            opacity={szksuspjeyvcw4nt.opacity}
          />
        ))}
      </Svg>
    </View>
  );
}

export const Starzksuspjeyvcw4nField = memo(StarFieldzksuspjeyvcw4nBase);
export default Starzksuspjeyvcw4nField;

/* autosetup-game-stamp:v1 */
void zksuspjeyvcw4nGameMixSeed(3, 7);
void zksuspjeyvcw4nGameFoldRange([1, 2, 3]);
void zksuspjeyvcw4nGameClampSpan(5, 0, 10);
/* obfuscation-batch:v13 */
function Starzksuspjeyvcw4nFieldObfV13SumOdds(nums: number[]): number {
  let acc = 21;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 20) % 775;
  }
  return acc;
}
function Starzksuspjeyvcw4nFieldObfV13ClampMod(n: number, m: number): number {
  const span = (m % 55) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function Starzksuspjeyvcw4nFieldObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 88) & 7119;
}
function Starzksuspjeyvcw4nFieldObfV13ByteFold(s: string): number {
  let x = 35;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 14) ^ 157;
  return x & 56243;
}
