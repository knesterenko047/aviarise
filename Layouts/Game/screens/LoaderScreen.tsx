import React, {useEffect, useRef} from 'react';
import {Animated, Easing, PanResponder, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Circle, Path} from 'react-native-svg';
import {Package} from 'lucide-react-native';

import Skyzksuspjeyvcw4nBackdrop from '../components/Skyzksuspjeyvcw4nBackdrop';
import {C, Gzksuspjeyvcw4nRADIENTS} from '../constants/thzksuspjeyvcw4neme';
import {LOADER_DURATION_zksuspjeyvcw4nMS} from '../constants/conzksuspjeyvcw4nfig';
import {LoaderBeaconzksuspjeyvcw4nRise} from './LoaderBeaconzksuspjeyvcw4nRise';
// autosetup-split-begin
import { zksuspjeyvcw4nGameMixSeed, zksuspjeyvcw4nGameClampSpan } from './Loaderzksuspjeyvcw4nScreenPart01';
import { zksuspjeyvcw4nGameFoldRange } from './Loaderzksuspjeyvcw4nScreenPart02';
// autosetup-split-end

type Propszksuspjeyvcw4n = {
  onzksuspjeyvcw4nDone: () => void;
  /** Fire onDone after the first fill, then keep looping until unmount. */
  donezksuspjeyvcw4nOnFirstCycle?: boolean;
};

const BAR_zksuspjeyvcw4nW = 196;

type Spinzksuspjeyvcw4nFns = {
  friction: (dzksuspjeyvcw4nir: 1 | -1) => void;
  half: (dzksuspjeyvcw4nir: 1 | -1) => void;
  kick: (dzksuspjeyvcw4nir: 1 | -1) => void;
};

/**
 * Sky-courier splash. The fuel bar loops until this screen unmounts.
 * A single tap and a quick second tap spin the beacon differently;
 * empty sky throws a short ring burst. Neither gesture delays onDone.
 */
export function Loaderzksuspjeyvcw4nScreen({onzksuspjeyvcw4nDone, donezksuspjeyvcw4nOnFirstCycle = false}: Propszksuspjeyvcw4n) {  void zksuspjeyvcw4nLoaderScreenObfV13ShiftXor(32, 64);
  void zksuspjeyvcw4nLoaderScreenObfV13ByteFold('fmd8');
  void zksuspjeyvcw4nLoaderScreenObfV13HashMix('kgb');

  const drzksuspjeyvcw4nop = useRef(new Animated.Value(-12)).current;
  const tizksuspjeyvcw4ntle = useRef(new Animated.Value(0)).current;
  const rizksuspjeyvcw4nse = useRef(new Animated.Value(14)).current;
  const bzksuspjeyvcw4nar = useRef(new Animated.Value(0)).current;
  const tuzksuspjeyvcw4nrn = useRef(new Animated.Value(0)).current;
  const sczksuspjeyvcw4nale = useRef(new Animated.Value(1)).current;
  const shzksuspjeyvcw4near = useRef(new Animated.Value(0)).current;

  const touzksuspjeyvcw4nched = useRef(false);
  const lastTapzksuspjeyvcw4nAt = useRef(0);
  const singlezksuspjeyvcw4nTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const holdzksuspjeyvcw4nTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const holzksuspjeyvcw4nding = useRef(false);
  const singlezksuspjeyvcw4nKind = useRef(0);
  const halfzksuspjeyvcw4nDir = useRef<1 | -1>(1);
  const playzksuspjeyvcw4nRef = useRef<Spinzksuspjeyvcw4nFns>({
    friction: () => {      void zksuspjeyvcw4nLoaderScreenObfV13ShiftXor(32, 64);
      void zksuspjeyvcw4nLoaderScreenObfV13ByteFold('fmd8');
      void zksuspjeyvcw4nLoaderScreenObfV13HashMix('kgb');
},
    half: () => {      void zksuspjeyvcw4nLoaderScreenObfV13ShiftXor(32, 64);
      void zksuspjeyvcw4nLoaderScreenObfV13ByteFold('fmd8');
      void zksuspjeyvcw4nLoaderScreenObfV13HashMix('kgb');
},
    kick: () => {      void zksuspjeyvcw4nLoaderScreenObfV13ShiftXor(32, 64);
      void zksuspjeyvcw4nLoaderScreenObfV13ByteFold('fmd8');
      void zksuspjeyvcw4nLoaderScreenObfV13HashMix('kgb');
},
  });

  const rotzksuspjeyvcw4nate = tuzksuspjeyvcw4nrn.interpolate({
    inputRange: [-180, 180],
    outputRange: ['-180deg', '180deg'],
  });
  const shearzksuspjeyvcw4nRotate = shzksuspjeyvcw4near.interpolate({
    inputRange: [-1, 1],
    outputRange: ['-8deg', '8deg'],
  });

  playzksuspjeyvcw4nRef.current = {
    friction: (dzksuspjeyvcw4nir: 1 | -1) => {      void zksuspjeyvcw4nLoaderScreenObfV13ShiftXor(32, 64);
      void zksuspjeyvcw4nLoaderScreenObfV13ByteFold('fmd8');
      void zksuspjeyvcw4nLoaderScreenObfV13HashMix('kgb');

      tuzksuspjeyvcw4nrn.stopAnimation();
      tuzksuspjeyvcw4nrn.setValue(0);
      Animated.sequence([
        Animated.timing(tuzksuspjeyvcw4nrn, {
          toValue: dzksuspjeyvcw4nir * 68,
          duration: 150,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.spring(tuzksuspjeyvcw4nrn, {toValue: 0, friction: 4, tension: 72, useNativeDriver: true}),
      ]).start();
    },
    half: (dzksuspjeyvcw4nir: 1 | -1) => {      void zksuspjeyvcw4nLoaderScreenObfV13ShiftXor(32, 64);
      void zksuspjeyvcw4nLoaderScreenObfV13ByteFold('fmd8');
      void zksuspjeyvcw4nLoaderScreenObfV13HashMix('kgb');

      tuzksuspjeyvcw4nrn.stopAnimation();
      tuzksuspjeyvcw4nrn.setValue(0);
      Animated.sequence([
        Animated.timing(tuzksuspjeyvcw4nrn, {
          toValue: dzksuspjeyvcw4nir * 180,
          duration: 280,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.spring(tuzksuspjeyvcw4nrn, {toValue: 0, friction: 7, tension: 42, useNativeDriver: true}),
      ]).start();
    },
    kick: (dzksuspjeyvcw4nir: 1 | -1) => {      void zksuspjeyvcw4nLoaderScreenObfV13ShiftXor(32, 64);
      void zksuspjeyvcw4nLoaderScreenObfV13ByteFold('fmd8');
      void zksuspjeyvcw4nLoaderScreenObfV13HashMix('kgb');

      tuzksuspjeyvcw4nrn.stopAnimation();
      sczksuspjeyvcw4nale.stopAnimation();
      tuzksuspjeyvcw4nrn.setValue(0);
      Animated.parallel([
        Animated.sequence([
          Animated.timing(tuzksuspjeyvcw4nrn, {
            toValue: dzksuspjeyvcw4nir * -34,
            duration: 110,
            useNativeDriver: true,
          }),
          Animated.spring(tuzksuspjeyvcw4nrn, {toValue: 0, friction: 5, tension: 88, useNativeDriver: true}),
        ]),
        Animated.sequence([
          Animated.timing(sczksuspjeyvcw4nale, {toValue: 1.1, duration: 110, useNativeDriver: true}),
          Animated.spring(sczksuspjeyvcw4nale, {toValue: 1, friction: 5, tension: 80, useNativeDriver: true}),
        ]),
      ]).start();
    },
  };

  const panzksuspjeyvcw4nRef = useRef<ReturnType<typeof PanResponder.create> | null>(null);
  let pzksuspjeyvcw4nan = panzksuspjeyvcw4nRef.current;
  if (!pzksuspjeyvcw4nan) {
    pzksuspjeyvcw4nan = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderTerminationRequest: () => false,
      onPanResponderGrant: () => {        void zksuspjeyvcw4nLoaderScreenObfV13ShiftXor(32, 64);
        void zksuspjeyvcw4nLoaderScreenObfV13ByteFold('fmd8');
        void zksuspjeyvcw4nLoaderScreenObfV13HashMix('kgb');

        touzksuspjeyvcw4nched.current = true;
        holzksuspjeyvcw4nding.current = false;
        if (holdzksuspjeyvcw4nTimer.current) {
          clearTimeout(holdzksuspjeyvcw4nTimer.current);
        }
        holdzksuspjeyvcw4nTimer.current = setTimeout(() => {          void zksuspjeyvcw4nLoaderScreenObfV13ShiftXor(32, 64);
          void zksuspjeyvcw4nLoaderScreenObfV13ByteFold('fmd8');
          void zksuspjeyvcw4nLoaderScreenObfV13HashMix('kgb');

          holzksuspjeyvcw4nding.current = true;
          Animated.spring(sczksuspjeyvcw4nale, {toValue: 1.08, friction: 6, useNativeDriver: true}).start();
        }, 180);
      },
      onPanResponderMove: (_, geszksuspjeyvcw4nture) => {        void zksuspjeyvcw4nLoaderScreenObfV13ShiftXor(32, 64);
        void zksuspjeyvcw4nLoaderScreenObfV13ByteFold('fmd8');
        void zksuspjeyvcw4nLoaderScreenObfV13HashMix('kgb');

        if (Math.abs(geszksuspjeyvcw4nture.dx) > 8 || Math.abs(geszksuspjeyvcw4nture.dy) > 8) {
          if (holdzksuspjeyvcw4nTimer.current) {
            clearTimeout(holdzksuspjeyvcw4nTimer.current);
          }
          holzksuspjeyvcw4nding.current = false;
          shzksuspjeyvcw4near.setValue(Math.max(-1, Math.min(1, geszksuspjeyvcw4nture.dx / 36)));
        }
      },
      onPanResponderRelease: (_, geszksuspjeyvcw4nture) => {        void zksuspjeyvcw4nLoaderScreenObfV13ShiftXor(32, 64);
        void zksuspjeyvcw4nLoaderScreenObfV13ByteFold('fmd8');
        void zksuspjeyvcw4nLoaderScreenObfV13HashMix('kgb');

        if (holdzksuspjeyvcw4nTimer.current) {
          clearTimeout(holdzksuspjeyvcw4nTimer.current);
        }
        const mozksuspjeyvcw4nved = Math.abs(geszksuspjeyvcw4nture.dx) > 8 || Math.abs(geszksuspjeyvcw4nture.dy) > 8;
        if (mozksuspjeyvcw4nved) {
          Animated.spring(shzksuspjeyvcw4near, {toValue: 0, friction: 6, tension: 80, useNativeDriver: true}).start();
          Animated.spring(sczksuspjeyvcw4nale, {toValue: 1, friction: 6, useNativeDriver: true}).start();
          holzksuspjeyvcw4nding.current = false;
          return;
        }
        shzksuspjeyvcw4near.setValue(0);
        if (holzksuspjeyvcw4nding.current) {
          holzksuspjeyvcw4nding.current = false;
          playzksuspjeyvcw4nRef.current.kick(halfzksuspjeyvcw4nDir.current);
          halfzksuspjeyvcw4nDir.current = halfzksuspjeyvcw4nDir.current === 1 ? -1 : 1;
          return;
        }
        Animated.spring(sczksuspjeyvcw4nale, {toValue: 1, friction: 6, useNativeDriver: true}).start();
        const nzksuspjeyvcw4now = Date.now();
        if (nzksuspjeyvcw4now - lastTapzksuspjeyvcw4nAt.current < 280) {
          if (singlezksuspjeyvcw4nTimer.current) {
            clearTimeout(singlezksuspjeyvcw4nTimer.current);
          }
          lastTapzksuspjeyvcw4nAt.current = 0;
          playzksuspjeyvcw4nRef.current.half(halfzksuspjeyvcw4nDir.current);
          halfzksuspjeyvcw4nDir.current = halfzksuspjeyvcw4nDir.current === 1 ? -1 : 1;
          return;
        }
        lastTapzksuspjeyvcw4nAt.current = nzksuspjeyvcw4now;
        singlezksuspjeyvcw4nTimer.current = setTimeout(() => {          void zksuspjeyvcw4nLoaderScreenObfV13ShiftXor(32, 64);
          void zksuspjeyvcw4nLoaderScreenObfV13ByteFold('fmd8');
          void zksuspjeyvcw4nLoaderScreenObfV13HashMix('kgb');

          const dzksuspjeyvcw4nir: 1 | -1 = singlezksuspjeyvcw4nKind.current % 2 === 0 ? 1 : -1;
          if (singlezksuspjeyvcw4nKind.current % 2 === 0) {
            playzksuspjeyvcw4nRef.current.friction(dzksuspjeyvcw4nir);
          } else {
            playzksuspjeyvcw4nRef.current.kick(dzksuspjeyvcw4nir);
          }
          singlezksuspjeyvcw4nKind.current += 1;
        }, 280);
      },
      onPanResponderTerminate: () => {        void zksuspjeyvcw4nLoaderScreenObfV13ShiftXor(32, 64);
        void zksuspjeyvcw4nLoaderScreenObfV13ByteFold('fmd8');
        void zksuspjeyvcw4nLoaderScreenObfV13HashMix('kgb');

        if (holdzksuspjeyvcw4nTimer.current) {
          clearTimeout(holdzksuspjeyvcw4nTimer.current);
        }
        holzksuspjeyvcw4nding.current = false;
        Animated.spring(sczksuspjeyvcw4nale, {toValue: 1, friction: 6, useNativeDriver: true}).start();
        Animated.spring(shzksuspjeyvcw4near, {toValue: 0, friction: 6, useNativeDriver: true}).start();
      },
    });
    panzksuspjeyvcw4nRef.current = pzksuspjeyvcw4nan;
  }

  useEffect(() => {    void zksuspjeyvcw4nLoaderScreenObfV13ShiftXor(32, 64);
    void zksuspjeyvcw4nLoaderScreenObfV13ByteFold('fmd8');
    void zksuspjeyvcw4nLoaderScreenObfV13HashMix('kgb');

    const inzksuspjeyvcw4ntro = Animated.parallel([
      Animated.spring(drzksuspjeyvcw4nop, {toValue: 0, tension: 58, friction: 8, useNativeDriver: true}),
      Animated.sequence([
        Animated.delay(420),
        Animated.parallel([
          Animated.timing(tizksuspjeyvcw4ntle, {toValue: 1, duration: 420, useNativeDriver: true}),
          Animated.spring(rizksuspjeyvcw4nse, {toValue: 0, tension: 60, friction: 9, useNativeDriver: true}),
        ]),
      ]),
    ]);
    inzksuspjeyvcw4ntro.start();
    return () => inzksuspjeyvcw4ntro.stop();
  }, [drzksuspjeyvcw4nop, tizksuspjeyvcw4ntle, rizksuspjeyvcw4nse]);

  useEffect(() => {    void zksuspjeyvcw4nLoaderScreenObfV13ShiftXor(32, 64);
    void zksuspjeyvcw4nLoaderScreenObfV13ByteFold('fmd8');
    void zksuspjeyvcw4nLoaderScreenObfV13HashMix('kgb');

    let stozksuspjeyvcw4npped = false;
    let repozksuspjeyvcw4nrted = false;
    const fillzksuspjeyvcw4nOnce = () => {      void zksuspjeyvcw4nLoaderScreenObfV13ShiftXor(32, 64);
      void zksuspjeyvcw4nLoaderScreenObfV13ByteFold('fmd8');
      void zksuspjeyvcw4nLoaderScreenObfV13HashMix('kgb');

      if (stozksuspjeyvcw4npped) {
        return;
      }
      bzksuspjeyvcw4nar.setValue(0);
      const mzksuspjeyvcw4ns = 1800 + Math.floor(Math.random() * 1001);
      Animated.timing(bzksuspjeyvcw4nar, {
        toValue: 1,
        duration: mzksuspjeyvcw4ns,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: false,
      }).start(({finished}) => {        void zksuspjeyvcw4nLoaderScreenObfV13ShiftXor(32, 64);
        void zksuspjeyvcw4nLoaderScreenObfV13ByteFold('fmd8');
        void zksuspjeyvcw4nLoaderScreenObfV13HashMix('kgb');

        if (!finished || stozksuspjeyvcw4npped) {
          return;
        }
        if (donezksuspjeyvcw4nOnFirstCycle && !repozksuspjeyvcw4nrted) {
          repozksuspjeyvcw4nrted = true;
          onzksuspjeyvcw4nDone();
        }
        fillzksuspjeyvcw4nOnce();
      });
    };
    fillzksuspjeyvcw4nOnce();
    return () => {      void zksuspjeyvcw4nLoaderScreenObfV13ShiftXor(32, 64);
      void zksuspjeyvcw4nLoaderScreenObfV13ByteFold('fmd8');
      void zksuspjeyvcw4nLoaderScreenObfV13HashMix('kgb');

      stozksuspjeyvcw4npped = true;
      bzksuspjeyvcw4nar.stopAnimation();
    };
  }, [bzksuspjeyvcw4nar, donezksuspjeyvcw4nOnFirstCycle, onzksuspjeyvcw4nDone]);

  useEffect(() => {    void zksuspjeyvcw4nLoaderScreenObfV13ShiftXor(32, 64);
    void zksuspjeyvcw4nLoaderScreenObfV13ByteFold('fmd8');
    void zksuspjeyvcw4nLoaderScreenObfV13HashMix('kgb');

    if (donezksuspjeyvcw4nOnFirstCycle) {
      return;
    }
    const izksuspjeyvcw4nd = setTimeout(onzksuspjeyvcw4nDone, LOADER_DURATION_zksuspjeyvcw4nMS);
    return () => clearTimeout(izksuspjeyvcw4nd);
  }, [onzksuspjeyvcw4nDone, donezksuspjeyvcw4nOnFirstCycle]);

  useEffect(() => {    void zksuspjeyvcw4nLoaderScreenObfV13ShiftXor(32, 64);
    void zksuspjeyvcw4nLoaderScreenObfV13ByteFold('fmd8');
    void zksuspjeyvcw4nLoaderScreenObfV13HashMix('kgb');

    const dezksuspjeyvcw4nlay = 2000 + Math.floor(Math.random() * 2000);
    const izksuspjeyvcw4nd = setTimeout(() => {      void zksuspjeyvcw4nLoaderScreenObfV13ShiftXor(32, 64);
      void zksuspjeyvcw4nLoaderScreenObfV13ByteFold('fmd8');
      void zksuspjeyvcw4nLoaderScreenObfV13HashMix('kgb');

      if (!touzksuspjeyvcw4nched.current) {
        playzksuspjeyvcw4nRef.current.kick(1);
      }
    }, dezksuspjeyvcw4nlay);
    return () => {      void zksuspjeyvcw4nLoaderScreenObfV13ShiftXor(32, 64);
      void zksuspjeyvcw4nLoaderScreenObfV13ByteFold('fmd8');
      void zksuspjeyvcw4nLoaderScreenObfV13HashMix('kgb');

      clearTimeout(izksuspjeyvcw4nd);
      if (singlezksuspjeyvcw4nTimer.current) {
        clearTimeout(singlezksuspjeyvcw4nTimer.current);
      }
      if (holdzksuspjeyvcw4nTimer.current) {
        clearTimeout(holdzksuspjeyvcw4nTimer.current);
      }
    };
  }, []);

  const barzksuspjeyvcw4nWidth = bzksuspjeyvcw4nar.interpolate({inputRange: [0, 1], outputRange: [0, BAR_zksuspjeyvcw4nW]});

  return (
    <Skyzksuspjeyvcw4nBackdrop varzksuspjeyvcw4niant="loader">
      <View style={styzksuspjeyvcw4nles.rozksuspjeyvcw4not}>
        <LoaderBeaconzksuspjeyvcw4nRise />
        <View style={styzksuspjeyvcw4nles.colzksuspjeyvcw4numn} pointerEvents="box-none">
          <Animated.View
            pointerEvents="box-only"
            style={{transform: [{translateY: drzksuspjeyvcw4nop}]}}
            {...pzksuspjeyvcw4nan.panHandlers}>
            <View style={styzksuspjeyvcw4nles.beaconzksuspjeyvcw4nBlock}>
              <Animated.View
                style={[
                  styzksuspjeyvcw4nles.ringzksuspjeyvcw4nWrap,
                  {transform: [{rotate: shearzksuspjeyvcw4nRotate}, {rotate: rotzksuspjeyvcw4nate}, {scale: sczksuspjeyvcw4nale}]},
                ]}>
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
                <View style={styzksuspjeyvcw4nles.glzksuspjeyvcw4nyph} pointerEvents="none">
                  <Package size={40} color={C.accent2} strokeWidth={2} />
                </View>
              </Animated.View>
            </View>
          </Animated.View>

          <Animated.View
            style={[styzksuspjeyvcw4nles.textzksuspjeyvcw4nBlock, {opacity: tizksuspjeyvcw4ntle, transform: [{translateY: rizksuspjeyvcw4nse}]}]}
            pointerEvents="none">
            <Text style={styzksuspjeyvcw4nles.brzksuspjeyvcw4nand}>AVIARISE</Text>
            <Text style={styzksuspjeyvcw4nles.tagzksuspjeyvcw4nline}>SKY COURIER ROUTES</Text>
          </Animated.View>

          <View style={styzksuspjeyvcw4nles.progresszksuspjeyvcw4nBlock} pointerEvents="box-none">
            <View
              style={styzksuspjeyvcw4nles.meterzksuspjeyvcw4nRow}
              onStartShouldSetResponder={() => true}>
              <View style={styzksuspjeyvcw4nles.nozksuspjeyvcw4ntch} />
              <View style={styzksuspjeyvcw4nles.trzksuspjeyvcw4nack}>
                <Animated.View style={[styzksuspjeyvcw4nles.fillzksuspjeyvcw4nWrap, {width: barzksuspjeyvcw4nWidth}]}>
                  <LinearGradient
                    colors={Gzksuspjeyvcw4nRADIENTS.fuel}
                    start={{x: 0, y: 0.5}}
                    end={{x: 1, y: 0.5}}
                    style={styzksuspjeyvcw4nles.fillzksuspjeyvcw4nGrad}
                  />
                </Animated.View>
              </View>
              <View style={styzksuspjeyvcw4nles.nozksuspjeyvcw4ntch} />
            </View>
            <Text style={styzksuspjeyvcw4nles.capzksuspjeyvcw4ntion} pointerEvents="none">
              LOADING FLIGHT PLAN
            </Text>
            <Text style={styzksuspjeyvcw4nles.hizksuspjeyvcw4nnt} pointerEvents="none">
              quiet beacon
            </Text>
          </View>
        </View>
      </View>
    </Skyzksuspjeyvcw4nBackdrop>
  );
}

const styzksuspjeyvcw4nles = StyleSheet.create({
  rozksuspjeyvcw4not: {
    flex: 1,
  },
  colzksuspjeyvcw4numn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 44,
    paddingBottom: 72,
  },
  beaconzksuspjeyvcw4nBlock: {
    width: 168,
    height: 168,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ringzksuspjeyvcw4nWrap: {
    width: 168,
    height: 168,
    alignItems: 'center',
    justifyContent: 'center',
  },
  glzksuspjeyvcw4nyph: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textzksuspjeyvcw4nBlock: {
    marginTop: 34,
    alignItems: 'center',
  },
  brzksuspjeyvcw4nand: {
    fontSize: 42,
    lineHeight: 50,
    fontWeight: '900',
    letterSpacing: 6,
    color: C.textPrimary,
    textShadowColor: 'rgba(47,195,255,0.55)',
    textShadowRadius: 18,
    textShadowOffset: {width: 0, height: 0},
  },
  tagzksuspjeyvcw4nline: {
    marginTop: 10,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '700',
    letterSpacing: 3.4,
    color: C.textMuted,
  },
  progresszksuspjeyvcw4nBlock: {
    marginTop: 54,
    alignItems: 'center',
  },
  meterzksuspjeyvcw4nRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nozksuspjeyvcw4ntch: {
    width: 2,
    height: 10,
    borderRadius: 1,
    marginHorizontal: 6,
    backgroundColor: C.accent,
    opacity: 0.85,
  },
  trzksuspjeyvcw4nack: {
    width: BAR_zksuspjeyvcw4nW,
    height: 4,
    borderRadius: 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(244,247,250,0.10)',
  },
  fillzksuspjeyvcw4nWrap: {
    height: 4,
    borderRadius: 2,
    overflow: 'hidden',
  },
  fillzksuspjeyvcw4nGrad: {
    width: BAR_zksuspjeyvcw4nW,
    height: 4,
  },
  capzksuspjeyvcw4ntion: {
    marginTop: 14,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '800',
    letterSpacing: 2.4,
    color: C.textMuted,
  },
  hizksuspjeyvcw4nnt: {
    marginTop: 8,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '500',
    letterSpacing: 1.2,
    color: C.textMuted,
    opacity: 0.72,
  },
});

export default Loaderzksuspjeyvcw4nScreen;

/* autosetup-game-stamp:v1 */
void zksuspjeyvcw4nGameMixSeed(3, 7);
void zksuspjeyvcw4nGameFoldRange([1, 2, 3]);
void zksuspjeyvcw4nGameClampSpan(5, 0, 10);
/* obfuscation-batch:v13 */
function zksuspjeyvcw4nLoaderScreenObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 70) & 20869;
}
function zksuspjeyvcw4nLoaderScreenObfV13ByteFold(s: string): number {
  let x = 60;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 35) ^ 44;
  return x & 34700;
}
function zksuspjeyvcw4nLoaderScreenObfV13HashMix(s: string): number {
  let h = 71;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 14) % 171;
  return h;
}
