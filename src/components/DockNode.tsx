import React, {memo, useEffect, useRef} from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import {Home, Package} from 'lucide-react-native';

import {DOCK_SIZE} from '../game/boardGeometry';
import {C} from '../constants/theme';

export type DockKind = 'plain' | 'home' | 'parcel';

type Props = {
  left: number;
  top: number;
  kind: DockKind;
  order: number;
  hasPad: boolean;
  disabled: boolean;
  index: number;
  onPress?: (index: number) => void;
};

const HIT = {top: 8, bottom: 8, left: 8, right: 8};
const RING = {plain: 'rgba(244,247,250,0.26)', home: C.success, parcel: C.accent2};

function DockNodeBase({left, top, kind, order, hasPad, disabled, index, onPress}: Props) {
  const pop = useRef(new Animated.Value(1)).current;
  const onRoute = order > 0;

  useEffect(() => {
    if (!onRoute) {
      return;
    }
    const anim = Animated.sequence([
      Animated.timing(pop, {toValue: 1.25, duration: 140, useNativeDriver: true}),
      Animated.spring(pop, {toValue: 1, tension: 180, friction: 7, useNativeDriver: true}),
    ]);
    anim.start();
    return () => anim.stop();
  }, [onRoute, order, pop]);

  const handlePress = () => {
    if (onPress) {
      onPress(index);
    }
  };

  return (
    <Pressable
      style={[styles.press, {left, top}]}
      onPress={handlePress}
      disabled={disabled}
      hitSlop={HIT}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={'Dock ' + String(index + 1)}>
      <Animated.View
        style={[
          styles.node,
          {
            borderColor: RING[kind],
            backgroundColor: onRoute ? 'rgba(47,195,255,0.24)' : C.surface,
            transform: [{scale: pop}],
          },
        ]}>
        {onRoute ? (
          <Text style={styles.order}>{String(order)}</Text>
        ) : kind === 'home' ? (
          <Home size={15} color={C.success} strokeWidth={2.4} />
        ) : kind === 'parcel' ? (
          <Package size={15} color={C.accent2} strokeWidth={2.4} />
        ) : (
          <View style={styles.dot} />
        )}
        {hasPad ? <View style={styles.pad} /> : null}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {
    position: 'absolute',
    width: DOCK_SIZE,
    height: DOCK_SIZE,
  },
  node: {
    width: DOCK_SIZE,
    height: DOCK_SIZE,
    borderRadius: DOCK_SIZE / 2,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  order: {
    fontSize: 13,
    lineHeight: 16,
    fontWeight: '900',
    color: C.textPrimary,
    fontVariant: ['tabular-nums'],
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: C.textMuted,
  },
  pad: {
    // Kept on the vertical centre line and well inside the circle, so the
    // marker never pokes out past the rounded edge.
    position: 'absolute',
    bottom: 3,
    left: DOCK_SIZE / 2 - 4.5,
    width: 9,
    height: 9,
    borderRadius: 2,
    backgroundColor: C.success,
    transform: [{rotate: '45deg'}],
  },
});

export const DockNode = memo(DockNodeBase);
export default DockNode;
