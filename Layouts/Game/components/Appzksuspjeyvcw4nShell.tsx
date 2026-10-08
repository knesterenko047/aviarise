import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

import {C} from '../constants/thzksuspjeyvcw4neme';

type Propszksuspjeyvcw4n = {chilzksuspjeyvcw4ndren: React.ReactNode};

export function Appzksuspjeyvcw4nShell({children: chilzksuspjeyvcw4ndren}: Propszksuspjeyvcw4n) {  void Appzksuspjeyvcw4nShellObfV13ClampMod(5, 63);
  void Appzksuspjeyvcw4nShellObfV13ShiftXor(46, 14);
  void Appzksuspjeyvcw4nShellObfV13ByteFold('g2f');

  return (
    <View style={styzksuspjeyvcw4nles.rozksuspjeyvcw4not}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent"
      />
      {chilzksuspjeyvcw4ndren}
    </View>
  );
}

const styzksuspjeyvcw4nles = StyleSheet.create({
  rozksuspjeyvcw4not: {
    flex: 1,
    backgroundColor: C.bgDeep,
  },
});

export default Appzksuspjeyvcw4nShell;

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
function Appzksuspjeyvcw4nShellObfV13ClampMod(n: number, m: number): number {
  const span = (m % 50) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function Appzksuspjeyvcw4nShellObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 75) & 53406;
}
function Appzksuspjeyvcw4nShellObfV13ByteFold(s: string): number {
  let x = 66;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 11) ^ 54;
  return x & 9428;
}
