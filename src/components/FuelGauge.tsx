import React, {memo, useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Gauge} from 'lucide-react-native';

import {C, GRADIENTS} from '../constants/theme';

type Props = {
  fuel: number;
  max: number;
};

const TRACK_W = 74;

/**
 * Width is a layout property, so this file drives its tween on the JS thread
 * (useNativeDriver stays false here and nowhere else animates in this file -
 * a native-driven transform and a JS-driven width must never share a node).
 */
function FuelGaugeBase({fuel, max}: Props) {
  const ratio = Math.max(0, Math.min(1, max > 0 ? fuel / max : 0));
  const fill = useRef(new Animated.Value(ratio * TRACK_W)).current;

  useEffect(() => {
    const anim = Animated.timing(fill, {
      toValue: ratio * TRACK_W,
      duration: 260,
      useNativeDriver: false,
    });
    anim.start();
    return () => anim.stop();
  }, [fill, ratio]);

  const tint = ratio > 0.45 ? C.success : ratio > 0.2 ? C.accent : C.accent2;

  return (
    <View style={styles.wrap}>
      <Gauge size={16} color={tint} strokeWidth={2.2} />
      <View style={styles.track}>
        <Animated.View style={[styles.fillWrap, {width: fill}]}>
          <LinearGradient
            colors={GRADIENTS.fuel}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={styles.fillGrad}
          />
        </Animated.View>
      </View>
      <Text style={styles.value}>{String(Math.max(0, Math.round(fuel)))}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    height: 34,
    paddingHorizontal: 10,
    borderRadius: 17,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    backgroundColor: 'rgba(5,5,16,0.55)',
    borderWidth: 1,
    borderColor: C.hairlineStrong,
  },
  track: {
    width: TRACK_W,
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
    backgroundColor: 'rgba(244,247,250,0.10)',
  },
  fillWrap: {
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
  },
  fillGrad: {
    width: TRACK_W,
    height: 6,
  },
  value: {
    minWidth: 26,
    textAlign: 'right',
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '900',
    color: C.textPrimary,
    fontVariant: ['tabular-nums'],
  },
});

export const FuelGauge = memo(FuelGaugeBase);
export default FuelGauge;
