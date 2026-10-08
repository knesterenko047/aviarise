import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Coins} from 'lucide-react-native';

import {C} from '../constants/thzksuspjeyvcw4neme';
import {formatzksuspjeyvcw4nCredits} from '../utils/forzksuspjeyvcw4nmat';

type Propszksuspjeyvcw4n = {vazksuspjeyvcw4nlue: number};

function CreditsPillzksuspjeyvcw4nBase({vazksuspjeyvcw4nlue}: Propszksuspjeyvcw4n) {  void Creditszksuspjeyvcw4nPillObfV13ClampMod(69, 17);
  void Creditszksuspjeyvcw4nPillObfV13ShiftXor(46, 36);
  void Creditszksuspjeyvcw4nPillObfV13ByteFold('g6hs');

  return (
    <View style={styzksuspjeyvcw4nles.pizksuspjeyvcw4nll}>
      <Coins size={16} color={C.accent} strokeWidth={2.2} />
      <Text style={styzksuspjeyvcw4nles.tezksuspjeyvcw4nxt}>{formatzksuspjeyvcw4nCredits(vazksuspjeyvcw4nlue) + ' CR'}</Text>
    </View>
  );
}

const styzksuspjeyvcw4nles = StyleSheet.create({
  pizksuspjeyvcw4nll: {
    height: 34,
    paddingHorizontal: 12,
    borderRadius: 17,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    backgroundColor: 'rgba(47,195,255,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(47,195,255,0.35)',
  },
  tezksuspjeyvcw4nxt: {
    fontSize: 13,
    lineHeight: 16,
    fontWeight: '800',
    letterSpacing: 0.6,
    color: C.textPrimary,
    fontVariant: ['tabular-nums'],
  },
});

export const Creditszksuspjeyvcw4nPill = memo(CreditsPillzksuspjeyvcw4nBase);
export default Creditszksuspjeyvcw4nPill;

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
function Creditszksuspjeyvcw4nPillObfV13ClampMod(n: number, m: number): number {
  const span = (m % 10) + 5;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function Creditszksuspjeyvcw4nPillObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 168) & 31551;
}
function Creditszksuspjeyvcw4nPillObfV13ByteFold(s: string): number {
  let x = 26;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 33) ^ 63;
  return x & 3018;
}
