import React, {memo, useCallback, useRef} from 'react';
import {Animated, Pressable, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {C, RADIUS, SHADOW} from '../constants/theme';

type Props = {
  children: React.ReactNode;
  onPress?: () => void;
  accessibilityLabel?: string;
  gradient?: string[];
  glow?: boolean;
  borderColor?: string;
  minHeight?: number;
  grow?: number;
};

const HIT = {top: 6, bottom: 6, left: 6, right: 6};

/** The Bento-Hub surface. Pressable stays the parent so onPress survives release builds. */
function BentoTileBase({
  children,
  onPress,
  accessibilityLabel,
  gradient,
  glow,
  borderColor,
  minHeight,
  grow,
}: Props) {
  const scale = useRef(new Animated.Value(1)).current;

  const pressIn = useCallback(() => {
    Animated.spring(scale, {toValue: 0.97, tension: 300, friction: 12, useNativeDriver: true}).start();
  }, [scale]);
  const pressOut = useCallback(() => {
    Animated.spring(scale, {toValue: 1, tension: 300, friction: 12, useNativeDriver: true}).start();
  }, [scale]);

  const frame = [
    styles.tile,
    {flex: grow || 1, minHeight: minHeight || 0},
    borderColor ? {borderColor} : null,
    glow ? SHADOW.cyan : SHADOW.soft,
  ];

  const body = (
    <View style={styles.body}>
      {gradient ? (
        <LinearGradient
          colors={gradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={StyleSheet.absoluteFill}
        />
      ) : null}
      {children}
    </View>
  );

  if (!onPress) {
    return <View style={frame}>{body}</View>;
  }

  return (
    <Pressable
      style={frame}
      onPress={onPress}
      onPressIn={pressIn}
      onPressOut={pressOut}
      hitSlop={HIT}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || 'Tile'}>
      <Animated.View style={[styles.fill, {transform: [{scale}]}]}>{body}</Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tile: {
    borderRadius: RADIUS.tile,
    borderWidth: 1,
    borderColor: C.hairline,
    backgroundColor: C.panel,
    overflow: 'hidden',
  },
  fill: {
    width: '100%',
    height: '100%',
  },
  body: {
    width: '100%',
    height: '100%',
    padding: 14,
  },
});

export const BentoTile = memo(BentoTileBase);
export default BentoTile;
