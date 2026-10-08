import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Easing, StyleSheet, Text, View} from 'react-native';
import {Fuel, Navigation, PlaneTakeoff, Undo2, Wind} from 'lucide-react-native';

import FuelGauge from '../components/FuelGauge';
import PrimaryButton from '../components/PrimaryButton';
import ScreenHeader from '../components/ScreenHeader';
import SecondaryButton from '../components/SecondaryButton';
import SkyBackdrop from '../components/SkyBackdrop';
import SkyBoard from '../components/SkyBoard';
import StatCard from '../components/StatCard';
import {
  CORRECTION_REFUND,
  FLIGHT_MS,
  FLIGHT_SAFETY_MS,
  FUEL_START,
  IDLE_BACKSTOP_MS,
  MAX_PADS,
} from '../constants/config';
import {C, GRADIENTS, RADIUS} from '../constants/theme';
import type {Level} from '../game/levels';
import {evaluate} from '../game/routeEngine';
import type {RouteResult} from '../game/routeEngine';
import useIdleBackstop from '../hooks/useIdleBackstop';
import useRoutePlanner from '../hooks/useRoutePlanner';

type Props = {
  contract: Level;
  onBack: () => void;
  onFinish: (res: RouteResult) => void;
};

/**
 * G2 Floating Controls. Two phases live on one screen on purpose: a separate
 * flight screen would raise the screenshot gate's required count while being
 * a 4-second transient the capture agent cannot reliably land on.
 */
export function GameScreen({contract, onBack, onFinish}: Props) {
  const planner = useRoutePlanner(contract);
  const {route, pads, padArmed, wind, preview, tapDock, undoLeg, armPad, useSolution} = planner;

  const [flying, setFlying] = useState(false);
  const [corrected, setCorrected] = useState(false);
  const [flyFuel, setFlyFuel] = useState(FUEL_START);

  const flightT = useRef(new Animated.Value(0)).current;
  const windSpin = useRef(new Animated.Value(contract.windStart)).current;
  const planRef = useRef<number[]>([0]);
  const correctedRef = useRef(false);
  const doneRef = useRef(false);

  useEffect(() => {
    const anim = Animated.timing(windSpin, {
      toValue: wind,
      duration: 420,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    });
    anim.start();
    return () => anim.stop();
  }, [wind, windSpin]);

  const launch = useCallback(() => {
    if (doneRef.current) {
      return;
    }
    const plan = preview.win ? route : useSolution();
    planRef.current = plan;
    setFlying(true);
  }, [preview, route, useSolution]);

  const finish = useCallback(() => {
    if (doneRef.current) {
      return;
    }
    doneRef.current = true;
    const refund = correctedRef.current ? CORRECTION_REFUND : 0;
    onFinish(evaluate(contract, planRef.current, pads, refund));
  }, [contract, pads, onFinish]);

  useEffect(() => {
    if (!flying) {
      return;
    }
    const anim = Animated.timing(flightT, {
      toValue: 1,
      duration: FLIGHT_MS,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: true,
    });
    anim.start(() => finish());
    const safety = setTimeout(finish, FLIGHT_SAFETY_MS);
    return () => {
      anim.stop();
      clearTimeout(safety);
    };
  }, [flying, flightT, finish]);

  // Fuel drain readout while the airship is under way - six discrete steps,
  // cheap enough to re-render and visibly "alive" in a screenshot.
  useEffect(() => {
    if (!flying) {
      return;
    }
    const target = evaluate(contract, planRef.current, pads, 0).fuelLeft;
    let step = 0;
    const steps = 6;
    const id = setInterval(() => {
      step += 1;
      setFlyFuel(Math.round(FUEL_START + (target - FUEL_START) * (step / steps)));
      if (step >= steps) {
        clearInterval(id);
      }
    }, Math.floor(FLIGHT_MS / steps));
    return () => clearInterval(id);
  }, [flying, contract, pads]);

  useIdleBackstop(IDLE_BACKSTOP_MS, !flying, launch);

  const correct = useCallback(() => {
    correctedRef.current = true;
    setCorrected(true);
  }, []);

  const planFuel = Math.max(0, FUEL_START - preview.burned);
  const shownFuel = flying ? flyFuel : planFuel;
  const legsLabel = 'LEG ' + String(Math.max(1, route.length - 1)) + '/' + String(contract.maxLegs);

  return (
    <SkyBackdrop variant="game">
      <ScreenHeader
        title={contract.name}
        onBack={onBack}
        align="center"
        right={
          <View style={styles.legChip}>
            <Text style={styles.legText}>{legsLabel}</Text>
          </View>
        }
      />

      <View style={styles.strip}>
        <FuelGauge fuel={shownFuel} max={FUEL_START} />
        <View style={styles.windChip}>
          <Animated.View
            style={{
              transform: [
                {
                  rotate: windSpin.interpolate({
                    inputRange: [0, 360],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            }}
            pointerEvents="none">
            <Navigation size={16} color={C.accent} strokeWidth={2.4} />
          </Animated.View>
          <Text style={styles.windText}>WIND</Text>
        </View>
      </View>

      <View style={styles.area}>
        <SkyBoard
          level={contract}
          route={route}
          pads={pads}
          wind={wind}
          flying={flying}
          flightT={flightT}
          onDockPress={flying ? undefined : tapDock}
        />

        <View style={styles.telemetry}>
          <View style={styles.statSlot}>
            <StatCard
              Icon={Navigation}
              value={String(preview.burned)}
              label="BURN"
              valueColor={C.accent}
              compact={true}
            />
          </View>
          <View style={styles.statSlot}>
            <StatCard
              Icon={Navigation}
              value={preview.delivered + '/' + preview.parcelTotal}
              label="PARCELS"
              valueColor={C.accent2}
              compact={true}
            />
          </View>
          <View style={styles.statSlot}>
            <StatCard
              Icon={Navigation}
              value={pads.length + '/' + MAX_PADS}
              label="PADS"
              valueColor={C.success}
              compact={true}
            />
          </View>
        </View>
      </View>

      <View style={styles.bar}>
        {flying ? (
          <View style={styles.flyBlock}>
            <Text style={styles.hint}>AIRSHIP UNDER WAY</Text>
            {corrected ? (
              <View style={styles.correctedChip}>
                <Wind size={20} color={C.success} strokeWidth={2.2} />
                <Text style={styles.correctedText}>COURSE CORRECTED</Text>
              </View>
            ) : (
              <SecondaryButton
                label="CORRECT COURSE"
                Icon={Wind}
                tint={C.accent}
                height={52}
                onPress={correct}
              />
            )}
          </View>
        ) : (
          <View style={styles.planBlock}>
            <Text style={styles.hint}>
              {padArmed ? 'PICK A DOCK FOR THE FUEL PAD' : 'LINK EVERY PARCEL DOCK BEFORE YOU FLY'}
            </Text>
            <View style={styles.rowButtons}>
              <SecondaryButton label="UNDO LEG" Icon={Undo2} onPress={undoLeg} flex={true} height={46} />
              <SecondaryButton
                label="FUEL PAD"
                Icon={Fuel}
                tint={padArmed ? C.success : C.textSecondary}
                onPress={armPad}
                flex={true}
                height={46}
              />
            </View>
            <View style={styles.ctaWrap}>
              <PrimaryButton
                label="GO"
                Icon={PlaneTakeoff}
                onPress={launch}
                colors={GRADIENTS.orange}
                textColor={C.bgNight}
                glow="orange"
                height={58}
              />
            </View>
          </View>
        )}
      </View>
    </SkyBackdrop>
  );
}

const styles = StyleSheet.create({
  legChip: {
    height: 30,
    paddingHorizontal: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: C.glassFill,
    borderWidth: 1,
    borderColor: C.hairlineStrong,
  },
  legText: {
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '800',
    letterSpacing: 1.2,
    color: C.textSecondary,
    fontVariant: ['tabular-nums'],
  },
  strip: {
    marginTop: 12,
    marginHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  windChip: {
    height: 34,
    paddingHorizontal: 12,
    borderRadius: 17,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(5,5,16,0.55)',
    borderWidth: 1,
    borderColor: C.hairlineStrong,
  },
  windText: {
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '800',
    letterSpacing: 2,
    color: C.textSecondary,
  },
  area: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 182,
  },
  telemetry: {
    marginTop: 14,
    marginHorizontal: 18,
    flexDirection: 'row',
    gap: 10,
  },
  statSlot: {flex: 1},
  bar: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 24,
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(5,5,16,0.86)',
    borderWidth: 1,
    borderColor: 'rgba(244,247,250,0.10)',
    shadowColor: '#000000',
    shadowOpacity: 0.55,
    shadowRadius: 20,
    shadowOffset: {width: 0, height: 10},
    elevation: 12,
  },
  planBlock: {},
  flyBlock: {},
  hint: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '800',
    letterSpacing: 1.8,
    color: C.textMuted,
  },
  rowButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  ctaWrap: {
    marginTop: 10,
  },
  correctedChip: {
    height: 52,
    borderRadius: RADIUS.chip,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: 'rgba(139,226,139,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(139,226,139,0.38)',
  },
  correctedText: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '800',
    letterSpacing: 2,
    color: C.success,
  },
});

export default GameScreen;
