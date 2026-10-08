import React, {useEffect, useRef} from 'react';
import {Animated, Image, StyleSheet, Text, View} from 'react-native';
import {Boxes, RotateCcw} from 'lucide-react-native';

import {spritePart} from '../assets';
import CreditsPill from '../components/CreditsPill';
import PrimaryButton from '../components/PrimaryButton';
import ScreenHeader from '../components/ScreenHeader';
import SecondaryButton from '../components/SecondaryButton';
import SkyBackdrop from '../components/SkyBackdrop';
import StarsRow from '../components/StarsRow';
import StatCard from '../components/StatCard';
import VerdictBadge from '../components/VerdictBadge';
import {C, GRADIENTS, RADIUS} from '../constants/theme';
import type {Level} from '../game/levels';
import type {RouteResult} from '../game/routeEngine';

type Props = {
  contract: Level;
  result: RouteResult;
  credits: number;
  earned: number;
  onPlayAgain: () => void;
  onMenu: () => void;
};

/**
 * The game-over surface (CLAUDE.md rule 12). Replay CTA is the bare literal
 * "PLAY AGAIN" so both the shell harness and the MCP capture agent, which
 * matches a11y text exactly, can press it.
 */
export function ResultScreen({
  contract,
  result,
  credits,
  earned,
  onPlayAgain,
  onMenu,
}: Props) {
  const fade = useRef(new Animated.Value(0)).current;
  const rise = useRef(new Animated.Value(18)).current;

  useEffect(() => {
    const anim = Animated.sequence([
      Animated.delay(90),
      Animated.parallel([
        Animated.timing(fade, {toValue: 1, duration: 320, useNativeDriver: true}),
        Animated.spring(rise, {toValue: 0, tension: 60, friction: 9, useNativeDriver: true}),
      ]),
    ]);
    anim.start();
    return () => anim.stop();
  }, [fade, rise]);

  const win = result.win;

  return (
    <SkyBackdrop variant="result">
      <ScreenHeader
        title="FLIGHT REPORT"
        subtitle={contract.name}
        align="center"
        right={<CreditsPill value={credits} />}
      />

      <View style={styles.body}>
        <View
          style={[
            styles.glow,
            {backgroundColor: win ? 'rgba(47,195,255,0.12)' : 'rgba(255,107,53,0.14)'},
          ]}
          pointerEvents="none"
        />

        <VerdictBadge win={win} />

        <Text style={styles.verdict}>{win ? 'ALL PARCELS DELIVERED' : 'FLIGHT ABORTED'}</Text>
        <View style={styles.rule} />

        {win ? null : <Text style={styles.reason}>{result.reason || 'FLIGHT ABORTED'}</Text>}

        <Animated.View
          style={[styles.stats, {opacity: fade, transform: [{translateY: rise}]}]}
          pointerEvents="box-none">
          <View style={styles.statSlot}>
            <StatCard
              Icon={Boxes}
              value={result.delivered + '/' + result.parcelTotal}
              label="DELIVERED"
              valueColor={C.success}
            />
          </View>
          <View style={styles.statSlot}>
            <StatCard
              Icon={Boxes}
              value={result.efficiency + '%'}
              label="EFFICIENCY"
              valueColor={C.accent}
            />
          </View>
          <View style={styles.statSlot}>
            <StatCard
              Icon={Boxes}
              value={String(result.fuelLeft)}
              label="FUEL LEFT"
              valueColor={C.accent2}
            />
          </View>
        </Animated.View>

        <View style={styles.starsWrap}>
          <StarsRow stars={result.stars} />
        </View>

        {win ? (
          <View style={styles.unlock}>
            <Image source={spritePart} style={styles.partImg} />
            <View style={styles.unlockText}>
              <Text style={styles.unlockCaption}>PART UNLOCKED</Text>
              <Text style={styles.unlockName}>TURBINE VANE MK II</Text>
            </View>
            <Text style={styles.earned}>{'+' + earned}</Text>
          </View>
        ) : null}

        <View style={styles.spacer} />

        <View style={styles.ctaBlock}>
          <PrimaryButton
            label="PLAY AGAIN"
            Icon={RotateCcw}
            onPress={onPlayAgain}
            colors={GRADIENTS.cyan}
            textColor={C.onAccent}
            height={60}
          />
          <View style={styles.secondaryWrap}>
            <SecondaryButton label="MENU" onPress={onMenu} height={48} />
          </View>
        </View>
      </View>
    </SkyBackdrop>
  );
}

const styles = StyleSheet.create({
  body: {flex: 1, paddingTop: 20},
  glow: {
    position: 'absolute',
    alignSelf: 'center',
    top: 4,
    width: 260,
    height: 260,
    borderRadius: 130,
  },
  verdict: {
    marginTop: 16,
    textAlign: 'center',
    paddingHorizontal: 24,
    fontSize: 23,
    lineHeight: 29,
    fontWeight: '900',
    letterSpacing: 1.2,
    color: C.textPrimary,
  },
  rule: {
    marginTop: 10,
    alignSelf: 'center',
    width: 48,
    height: 2,
    borderRadius: 1,
    backgroundColor: C.accent,
  },
  reason: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '700',
    letterSpacing: 2,
    color: C.accent2,
  },
  stats: {
    marginTop: 20,
    marginHorizontal: 16,
    flexDirection: 'row',
    gap: 12,
  },
  statSlot: {flex: 1},
  starsWrap: {marginTop: 18},
  unlock: {
    marginTop: 18,
    marginHorizontal: 16,
    height: 78,
    borderRadius: RADIUS.card,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    gap: 12,
    backgroundColor: C.panel,
    borderWidth: 1,
    borderColor: 'rgba(139,226,139,0.30)',
  },
  partImg: {width: 48, height: 48, resizeMode: 'contain'},
  unlockText: {flex: 1},
  unlockCaption: {
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '800',
    letterSpacing: 2,
    color: C.textMuted,
  },
  unlockName: {
    marginTop: 3,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '800',
    color: C.textPrimary,
  },
  earned: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '900',
    color: C.success,
    fontVariant: ['tabular-nums'],
  },
  spacer: {flex: 1, minHeight: 16},
  ctaBlock: {
    paddingHorizontal: 20,
    paddingBottom: 26,
  },
  secondaryWrap: {marginTop: 10},
});

export default ResultScreen;
