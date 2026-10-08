import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Circle, Path} from 'react-native-svg';
import {Package} from 'lucide-react-native';

import SkyBackdrop from '../components/SkyBackdrop';
import {C, GRADIENTS} from '../constants/theme';
import {LOADER_DURATION_MS} from '../constants/config';

type Props = {onDone: () => void};

const BAR_W = 196;

/**
 * Brand card, 8s, non-interactive. Nothing here loops forever: a perpetual
 * tween keeps uiautomator from ever reporting an idle window and the capture
 * comes back with zero frames. The ring pulses exactly three times (4.8s) and
 * the bar fills in four discrete steps, so the last ~1.2s are completely
 * still.
 */
export function LoaderScreen({onDone}: Props) {
  const beacon = useRef(new Animated.Value(0)).current;
  const ring = useRef(new Animated.Value(1)).current;
  const title = useRef(new Animated.Value(0)).current;
  const rise = useRef(new Animated.Value(14)).current;
  const bar = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const intro = Animated.parallel([
      Animated.spring(beacon, {toValue: 1, tension: 48, friction: 7, useNativeDriver: true}),
      Animated.sequence([
        Animated.delay(560),
        Animated.parallel([
          Animated.timing(title, {toValue: 1, duration: 460, useNativeDriver: true}),
          Animated.spring(rise, {toValue: 0, tension: 60, friction: 9, useNativeDriver: true}),
        ]),
      ]),
    ]);

    const pulseOnce = () =>
      Animated.sequence([
        Animated.timing(ring, {
          toValue: 1.12,
          duration: 760,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(ring, {
          toValue: 1,
          duration: 760,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ]);
    const pulses = Animated.sequence([pulseOnce(), pulseOnce(), pulseOnce()]);

    const steps = Animated.sequence([
      Animated.delay(1100),
      Animated.timing(bar, {toValue: 0.28, duration: 420, useNativeDriver: false}),
      Animated.delay(1000),
      Animated.timing(bar, {toValue: 0.55, duration: 420, useNativeDriver: false}),
      Animated.delay(900),
      Animated.timing(bar, {toValue: 0.8, duration: 420, useNativeDriver: false}),
      Animated.delay(800),
      Animated.timing(bar, {toValue: 1, duration: 420, useNativeDriver: false}),
    ]);

    intro.start();
    pulses.start();
    steps.start();

    const id = setTimeout(onDone, LOADER_DURATION_MS);
    return () => {
      intro.stop();
      pulses.stop();
      steps.stop();
      clearTimeout(id);
    };
  }, [beacon, ring, title, rise, bar, onDone]);

  const barWidth = bar.interpolate({inputRange: [0, 1], outputRange: [0, BAR_W]});

  return (
    <SkyBackdrop variant="loader">
      <View style={styles.root}>
        <View style={styles.beaconBlock}>
          <Animated.View
            style={[styles.ringWrap, {opacity: beacon, transform: [{scale: ring}]}]}
            pointerEvents="none">
            <Svg width={168} height={168}>
              <Path
                d="M 20 102 Q 84 26 148 102"
                stroke={C.accent}
                strokeWidth={3}
                strokeDasharray="7 6"
                fill="none"
                opacity={0.55}
              />
              <Circle cx={84} cy={84} r={70} stroke={C.accent} strokeWidth={2} opacity={0.32} fill="none" />
              <Circle cx={84} cy={84} r={52} stroke={C.accent} strokeWidth={1.5} opacity={0.6} fill="none" />
              <Circle cx={84} cy={84} r={34} stroke={C.accent} strokeWidth={2} fill={C.bgNight} />
            </Svg>
          </Animated.View>

          <Animated.View style={[styles.glyph, {opacity: beacon}]} pointerEvents="none">
            <Package size={40} color={C.accent2} strokeWidth={2} />
          </Animated.View>
        </View>

        <Animated.View
          style={[styles.textBlock, {opacity: title, transform: [{translateY: rise}]}]}
          pointerEvents="none">
          <Text style={styles.brand}>AVIARISE</Text>
          <Text style={styles.tagline}>SKY COURIER ROUTES</Text>
        </Animated.View>

        <View style={styles.progressBlock}>
          <View style={styles.track}>
            <Animated.View style={[styles.fillWrap, {width: barWidth}]}>
              <LinearGradient
                colors={GRADIENTS.fuel}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={styles.fillGrad}
              />
            </Animated.View>
          </View>
          <Text style={styles.caption}>LOADING FLIGHT PLAN</Text>
        </View>
      </View>
    </SkyBackdrop>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 44,
    paddingBottom: 72,
  },
  beaconBlock: {
    width: 168,
    height: 168,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ringWrap: {
    width: 168,
    height: 168,
    alignItems: 'center',
    justifyContent: 'center',
  },
  glyph: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBlock: {
    marginTop: 34,
    alignItems: 'center',
  },
  brand: {
    fontSize: 42,
    lineHeight: 50,
    fontWeight: '900',
    letterSpacing: 6,
    color: C.textPrimary,
    textShadowColor: 'rgba(47,195,255,0.55)',
    textShadowRadius: 18,
    textShadowOffset: {width: 0, height: 0},
  },
  tagline: {
    marginTop: 10,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '700',
    letterSpacing: 3.4,
    color: C.textMuted,
  },
  progressBlock: {
    marginTop: 54,
    alignItems: 'center',
  },
  track: {
    width: BAR_W,
    height: 4,
    borderRadius: 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(244,247,250,0.10)',
  },
  fillWrap: {
    height: 4,
    borderRadius: 2,
    overflow: 'hidden',
  },
  fillGrad: {
    width: BAR_W,
    height: 4,
  },
  caption: {
    marginTop: 14,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '800',
    letterSpacing: 2.4,
    color: C.textMuted,
  },
});

export default LoaderScreen;
