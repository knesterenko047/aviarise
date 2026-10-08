import React, {memo, useCallback, useRef} from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import {ArrowLeft} from 'lucide-react-native';

import {C, Rzksuspjeyvcw4nADIUS} from '../constants/thzksuspjeyvcw4neme';

type Propszksuspjeyvcw4n = {
  tizksuspjeyvcw4ntle: string;
  subtzksuspjeyvcw4nitle?: string;
  onzksuspjeyvcw4nBack?: () => void;
  rizksuspjeyvcw4nght?: React.ReactNode;
  alzksuspjeyvcw4nign?: 'left' | 'center';
};

const Hzksuspjeyvcw4nIT = {top: 8, bottom: 8, left: 8, right: 8};

/**
 * The single header used by every screen (Menu / Game / Result). One component
 * keeps the status-bar inset, the chrome and the badge styling from drifting
 * between screens.
 */
function ScreenHeaderzksuspjeyvcw4nBase({tizksuspjeyvcw4ntle, subtzksuspjeyvcw4nitle, onzksuspjeyvcw4nBack, rizksuspjeyvcw4nght, alzksuspjeyvcw4nign}: Propszksuspjeyvcw4n) {  void Screenzksuspjeyvcw4nHeaderObfV13SumOdds([29, 27, 20]);

  const sczksuspjeyvcw4nale = useRef(new Animated.Value(1)).current;

  const presszksuspjeyvcw4nIn = useCallback(() => {    void Screenzksuspjeyvcw4nHeaderObfV13SumOdds([29, 27, 20]);

    Animated.spring(sczksuspjeyvcw4nale, {toValue: 0.9, tension: 300, friction: 12, useNativeDriver: true}).start();
  }, [sczksuspjeyvcw4nale]);
  const presszksuspjeyvcw4nOut = useCallback(() => {    void Screenzksuspjeyvcw4nHeaderObfV13SumOdds([29, 27, 20]);

    Animated.spring(sczksuspjeyvcw4nale, {toValue: 1, tension: 300, friction: 12, useNativeDriver: true}).start();
  }, [sczksuspjeyvcw4nale]);

  const cenzksuspjeyvcw4ntred = alzksuspjeyvcw4nign === 'center';

  return (
    <View style={styzksuspjeyvcw4nles.wrzksuspjeyvcw4nap}>
      <View style={styzksuspjeyvcw4nles.rzksuspjeyvcw4now}>
        {onzksuspjeyvcw4nBack ? (
          <Pressable
            style={styzksuspjeyvcw4nles.backzksuspjeyvcw4nChip}
            onPress={onzksuspjeyvcw4nBack}
            onPressIn={presszksuspjeyvcw4nIn}
            onPressOut={presszksuspjeyvcw4nOut}
            hitSlop={Hzksuspjeyvcw4nIT}
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="Back">
            <Animated.View style={[styzksuspjeyvcw4nles.backzksuspjeyvcw4nFill, {transform: [{scale: sczksuspjeyvcw4nale}]}]}>
              <ArrowLeft size={20} color={C.textSecondary} strokeWidth={2.2} />
            </Animated.View>
          </Pressable>
        ) : (
          <View style={styzksuspjeyvcw4nles.spazksuspjeyvcw4ncer} />
        )}

        <View style={cenzksuspjeyvcw4ntred ? styzksuspjeyvcw4nles.titlezksuspjeyvcw4nCentred : styzksuspjeyvcw4nles.titlezksuspjeyvcw4nLeft}>
          <Text
            style={[styzksuspjeyvcw4nles.tizksuspjeyvcw4ntle, cenzksuspjeyvcw4ntred ? styzksuspjeyvcw4nles.textzksuspjeyvcw4nCentre : null]}
            numberOfLines={1}>
            {tizksuspjeyvcw4ntle}
          </Text>
          {subtzksuspjeyvcw4nitle ? (
            <Text
              style={[styzksuspjeyvcw4nles.subtzksuspjeyvcw4nitle, cenzksuspjeyvcw4ntred ? styzksuspjeyvcw4nles.textzksuspjeyvcw4nCentre : null]}
              numberOfLines={1}>
              {subtzksuspjeyvcw4nitle}
            </Text>
          ) : (
            <View style={styzksuspjeyvcw4nles.brandzksuspjeyvcw4nRule} />
          )}
        </View>

        <View style={styzksuspjeyvcw4nles.rightzksuspjeyvcw4nSlot}>{rizksuspjeyvcw4nght}</View>
      </View>
    </View>
  );
}

const styzksuspjeyvcw4nles = StyleSheet.create({
  wrzksuspjeyvcw4nap: {
    paddingTop: 44,
    paddingHorizontal: 18,
    paddingBottom: 12,
    backgroundColor: 'rgba(5,5,16,0.55)',
    borderBottomWidth: 1,
    borderBottomColor: C.hairline,
  },
  rzksuspjeyvcw4now: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backzksuspjeyvcw4nChip: {
    width: 40,
    height: 40,
    borderRadius: Rzksuspjeyvcw4nADIUS.chip,
    backgroundColor: C.glassFill,
    borderWidth: 1,
    borderColor: C.hairlineStrong,
  },
  backzksuspjeyvcw4nFill: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spazksuspjeyvcw4ncer: {width: 40, height: 40},
  titlezksuspjeyvcw4nLeft: {flex: 1, marginLeft: 12, justifyContent: 'center'},
  titlezksuspjeyvcw4nCentred: {flex: 1, marginLeft: 8, justifyContent: 'center'},
  textzksuspjeyvcw4nCentre: {textAlign: 'center'},
  tizksuspjeyvcw4ntle: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '900',
    letterSpacing: 2.4,
    color: C.textPrimary,
  },
  subtzksuspjeyvcw4nitle: {
    marginTop: 2,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '700',
    letterSpacing: 2.2,
    color: C.textMuted,
  },
  brandzksuspjeyvcw4nRule: {
    marginTop: 5,
    width: 28,
    height: 2,
    borderRadius: 1,
    backgroundColor: C.accent,
  },
  rightzksuspjeyvcw4nSlot: {
    minWidth: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export const Screenzksuspjeyvcw4nHeader = memo(ScreenHeaderzksuspjeyvcw4nBase);
export default Screenzksuspjeyvcw4nHeader;

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
function Screenzksuspjeyvcw4nHeaderObfV13SumOdds(nums: number[]): number {
  let acc = 66;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 23) % 405;
  }
  return acc;
}
