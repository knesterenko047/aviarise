import React, {memo, useCallback, useRef} from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import {ArrowLeft} from 'lucide-react-native';

import {C, RADIUS} from '../constants/theme';

type Props = {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  right?: React.ReactNode;
  align?: 'left' | 'center';
};

const HIT = {top: 8, bottom: 8, left: 8, right: 8};

/**
 * The single header used by every screen (Menu / Game / Result). One component
 * keeps the status-bar inset, the chrome and the badge styling from drifting
 * between screens.
 */
function ScreenHeaderBase({title, subtitle, onBack, right, align}: Props) {
  const scale = useRef(new Animated.Value(1)).current;

  const pressIn = useCallback(() => {
    Animated.spring(scale, {toValue: 0.9, tension: 300, friction: 12, useNativeDriver: true}).start();
  }, [scale]);
  const pressOut = useCallback(() => {
    Animated.spring(scale, {toValue: 1, tension: 300, friction: 12, useNativeDriver: true}).start();
  }, [scale]);

  const centred = align === 'center';

  return (
    <View style={styles.wrap}>
      <View style={styles.row}>
        {onBack ? (
          <Pressable
            style={styles.backChip}
            onPress={onBack}
            onPressIn={pressIn}
            onPressOut={pressOut}
            hitSlop={HIT}
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="Back">
            <Animated.View style={[styles.backFill, {transform: [{scale}]}]}>
              <ArrowLeft size={20} color={C.textSecondary} strokeWidth={2.2} />
            </Animated.View>
          </Pressable>
        ) : (
          <View style={styles.spacer} />
        )}

        <View style={centred ? styles.titleCentred : styles.titleLeft}>
          <Text
            style={[styles.title, centred ? styles.textCentre : null]}
            numberOfLines={1}>
            {title}
          </Text>
          {subtitle ? (
            <Text
              style={[styles.subtitle, centred ? styles.textCentre : null]}
              numberOfLines={1}>
              {subtitle}
            </Text>
          ) : (
            <View style={styles.brandRule} />
          )}
        </View>

        <View style={styles.rightSlot}>{right}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingTop: 44,
    paddingHorizontal: 18,
    paddingBottom: 12,
    backgroundColor: 'rgba(5,5,16,0.55)',
    borderBottomWidth: 1,
    borderBottomColor: C.hairline,
  },
  row: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backChip: {
    width: 40,
    height: 40,
    borderRadius: RADIUS.chip,
    backgroundColor: C.glassFill,
    borderWidth: 1,
    borderColor: C.hairlineStrong,
  },
  backFill: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacer: {width: 40, height: 40},
  titleLeft: {flex: 1, marginLeft: 12, justifyContent: 'center'},
  titleCentred: {flex: 1, marginLeft: 8, justifyContent: 'center'},
  textCentre: {textAlign: 'center'},
  title: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '900',
    letterSpacing: 2.4,
    color: C.textPrimary,
  },
  subtitle: {
    marginTop: 2,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '700',
    letterSpacing: 2.2,
    color: C.textMuted,
  },
  brandRule: {
    marginTop: 5,
    width: 28,
    height: 2,
    borderRadius: 1,
    backgroundColor: C.accent,
  },
  rightSlot: {
    minWidth: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export const ScreenHeader = memo(ScreenHeaderBase);
export default ScreenHeader;
