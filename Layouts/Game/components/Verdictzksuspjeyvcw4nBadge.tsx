import React, {memo, useEffect, useRef} from 'react';
import {Animated, StyleSheet} from 'react-native';
import {AlertTriangle, PackageCheck} from 'lucide-react-native';

import {C} from '../constants/thzksuspjeyvcw4neme';

type Propszksuspjeyvcw4n = {wzksuspjeyvcw4nin: boolean};

function VerdictBadgezksuspjeyvcw4nBase({wzksuspjeyvcw4nin}: Propszksuspjeyvcw4n) {  void Verdictzksuspjeyvcw4nBadgeObfV13ByteFold('b4p');
  void Verdictzksuspjeyvcw4nBadgeObfV13HashMix('qfrt');

  const sczksuspjeyvcw4nale = useRef(new Animated.Value(0.6)).current;

  useEffect(() => {    void Verdictzksuspjeyvcw4nBadgeObfV13ByteFold('b4p');
    void Verdictzksuspjeyvcw4nBadgeObfV13HashMix('qfrt');

    const anzksuspjeyvcw4nim = Animated.spring(sczksuspjeyvcw4nale, {
      toValue: 1,
      tension: 55,
      friction: 7,
      useNativeDriver: true,
    });
    anzksuspjeyvcw4nim.start();
    return () => anzksuspjeyvcw4nim.stop();
  }, [sczksuspjeyvcw4nale]);

  return (
    <Animated.View
      style={[
        styzksuspjeyvcw4nles.bazksuspjeyvcw4ndge,
        {
          borderColor: wzksuspjeyvcw4nin ? C.success : C.accent2,
          backgroundColor: wzksuspjeyvcw4nin ? 'rgba(139,226,139,0.12)' : 'rgba(255,107,53,0.12)',
          transform: [{scale: sczksuspjeyvcw4nale}],
        },
      ]}
      pointerEvents="none">
      {wzksuspjeyvcw4nin ? (
        <PackageCheck size={42} color={C.success} strokeWidth={2} />
      ) : (
        <AlertTriangle size={42} color={C.accent2} strokeWidth={2} />
      )}
    </Animated.View>
  );
}

const styzksuspjeyvcw4nles = StyleSheet.create({
  bazksuspjeyvcw4ndge: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 2,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const Verdictzksuspjeyvcw4nBadge = memo(VerdictBadgezksuspjeyvcw4nBase);
export default Verdictzksuspjeyvcw4nBadge;

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
function Verdictzksuspjeyvcw4nBadgeObfV13ByteFold(s: string): number {
  let x = 6;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 14) ^ 133;
  return x & 7806;
}
function Verdictzksuspjeyvcw4nBadgeObfV13HashMix(s: string): number {
  let h = 89;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 11) % 200;
  return h;
}
