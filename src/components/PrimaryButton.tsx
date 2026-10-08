import React, {memo, useCallback, useRef} from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {C, GRADIENTS, RADIUS, SHADOW} from '../constants/theme';

/** Tabler icons are ForwardRefExoticComponent<IconProps>; keep the prop loose. */
export type IconType = React.ComponentType<any>;

type Props = {
  label: string;
  onPress: () => void;
  Icon?: IconType;
  colors?: string[];
  textColor?: string;
  height?: number;
  glow?: 'cyan' | 'orange';
  dimmed?: boolean;
};

const HIT = {top: 8, bottom: 8, left: 8, right: 8};

/**
 * Press feedback: Pressable is the PARENT, the Animated.View is its CHILD.
 * A native-driver transform on a parent wrapper eats onPress on Android
 * release builds - this ordering is the one that works on RN 0.77 + Windows.
 */
function PrimaryButtonBase({
  label,
  onPress,
  Icon,
  colors,
  textColor,
  height,
  glow,
  dimmed,
}: Props) {
  const scale = useRef(new Animated.Value(1)).current;

  const pressIn = useCallback(() => {
    Animated.spring(scale, {
      toValue: 0.965,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  const pressOut = useCallback(() => {
    Animated.spring(scale, {
      toValue: 1,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  const tint = textColor || C.onAccent;
  const stops = colors || GRADIENTS.cyan;
  const h = height || 60;

  return (
    <Pressable
      style={[styles.press, {height: h, opacity: dimmed ? 0.75 : 1}, glow === 'orange' ? SHADOW.orange : SHADOW.cyan]}
      onPress={onPress}
      onPressIn={pressIn}
      onPressOut={pressOut}
      hitSlop={HIT}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={label}>
      <Animated.View style={[styles.fill, {transform: [{scale}]}]}>
        <LinearGradient
          colors={stops}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.grad}>
          <View style={styles.row}>
            {Icon ? <Icon size={24} color={tint} strokeWidth={2.4} /> : null}
            <Text style={[styles.label, {color: tint}]}>{label}</Text>
          </View>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {
    width: '100%',
    borderRadius: RADIUS.card,
  },
  fill: {
    width: '100%',
    height: '100%',
    borderRadius: RADIUS.card,
    overflow: 'hidden',
  },
  grad: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  label: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '900',
    letterSpacing: 2,
  },
});

export const PrimaryButton = memo(PrimaryButtonBase);
export default PrimaryButton;
