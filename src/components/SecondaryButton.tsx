import React, {memo, useCallback, useRef} from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';

import {C, RADIUS} from '../constants/theme';
import type {IconType} from './PrimaryButton';

type Props = {
  label: string;
  onPress: () => void;
  Icon?: IconType;
  tint?: string;
  height?: number;
  flex?: boolean;
};

const HIT = {top: 8, bottom: 8, left: 8, right: 8};

function SecondaryButtonBase({label, onPress, Icon, tint, height, flex}: Props) {
  const scale = useRef(new Animated.Value(1)).current;

  const pressIn = useCallback(() => {
    Animated.spring(scale, {
      toValue: 0.96,
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

  const color = tint || C.textSecondary;
  const h = height || 48;

  return (
    <Pressable
      style={[styles.press, {height: h}, flex ? styles.flexed : styles.full]}
      onPress={onPress}
      onPressIn={pressIn}
      onPressOut={pressOut}
      hitSlop={HIT}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={label}>
      <Animated.View style={[styles.fill, {transform: [{scale}]}]}>
        <View style={styles.row}>
          {Icon ? <Icon size={20} color={color} strokeWidth={2.2} /> : null}
          <Text style={[styles.label, {color}]}>{label}</Text>
        </View>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {
    borderRadius: RADIUS.chip,
    backgroundColor: C.glassFill,
    borderWidth: 1,
    borderColor: C.hairlineStrong,
  },
  full: {width: '100%'},
  flexed: {flex: 1},
  fill: {
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
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '800',
    letterSpacing: 2,
  },
});

export const SecondaryButton = memo(SecondaryButtonBase);
export default SecondaryButton;
