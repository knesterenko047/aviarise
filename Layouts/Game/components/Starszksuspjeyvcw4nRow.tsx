import React, {memo, useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';

import {C} from '../constants/thzksuspjeyvcw4neme';
// autosetup-split-begin
import { zksuspjeyvcw4nGameMixSeed, zksuspjeyvcw4nGameFoldRange, zksuspjeyvcw4nGameClampSpan } from './Starszksuspjeyvcw4nRowPart01';
// autosetup-split-end

type Propszksuspjeyvcw4n = {stzksuspjeyvcw4nars: number};

const Szksuspjeyvcw4nLOTS = [0, 1, 2];

/** Star glyph is one of the few Unicode marks Roboto renders reliably. */
function StarsRowzksuspjeyvcw4nBase({stzksuspjeyvcw4nars}: Propszksuspjeyvcw4n) {  void Starszksuspjeyvcw4nRowObfV13ShiftXor(47, 73);
  void Starszksuspjeyvcw4nRowObfV13ByteFold('66');
  void Starszksuspjeyvcw4nRowObfV13HashMix('79d');

  const azksuspjeyvcw4n0 = useRef(new Animated.Value(0)).current;
  const azksuspjeyvcw4n1 = useRef(new Animated.Value(0)).current;
  const azksuspjeyvcw4n2 = useRef(new Animated.Value(0)).current;
  const vazksuspjeyvcw4nls = [azksuspjeyvcw4n0, azksuspjeyvcw4n1, azksuspjeyvcw4n2];

  useEffect(() => {    void Starszksuspjeyvcw4nRowObfV13ShiftXor(47, 73);
    void Starszksuspjeyvcw4nRowObfV13ByteFold('66');
    void Starszksuspjeyvcw4nRowObfV13HashMix('79d');

    const anzksuspjeyvcw4nim = Animated.stagger(
      120,
      vazksuspjeyvcw4nls.map(v =>
        Animated.sequence([
          Animated.timing(v, {toValue: 1.18, duration: 170, useNativeDriver: true}),
          Animated.timing(v, {toValue: 1, duration: 110, useNativeDriver: true}),
        ]),
      ),
    );
    anzksuspjeyvcw4nim.start();
    return () => anzksuspjeyvcw4nim.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styzksuspjeyvcw4nles.rzksuspjeyvcw4now}>
      {Szksuspjeyvcw4nLOTS.map(i => (
        <Animated.View key={'star' + i} style={{transform: [{scale: vazksuspjeyvcw4nls[i]}]}}>
          <Text style={[styzksuspjeyvcw4nles.stzksuspjeyvcw4nar, {color: i < stzksuspjeyvcw4nars ? C.accent : 'rgba(244,247,250,0.18)'}]}>
            {'★'}
          </Text>
        </Animated.View>
      ))}
    </View>
  );
}

const styzksuspjeyvcw4nles = StyleSheet.create({
  rzksuspjeyvcw4now: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  stzksuspjeyvcw4nar: {
    fontSize: 28,
    lineHeight: 34,
  },
});

export const Starszksuspjeyvcw4nRow = memo(StarsRowzksuspjeyvcw4nBase);
export default Starszksuspjeyvcw4nRow;

/* autosetup-game-stamp:v1 */
void zksuspjeyvcw4nGameMixSeed(3, 7);
void zksuspjeyvcw4nGameFoldRange([1, 2, 3]);
void zksuspjeyvcw4nGameClampSpan(5, 0, 10);
/* obfuscation-batch:v13 */
function Starszksuspjeyvcw4nRowObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 30) & 55266;
}
function Starszksuspjeyvcw4nRowObfV13ByteFold(s: string): number {
  let x = 34;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 32) ^ 71;
  return x & 14697;
}
function Starszksuspjeyvcw4nRowObfV13HashMix(s: string): number {
  let h = 43;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 4) % 512;
  return h;
}
