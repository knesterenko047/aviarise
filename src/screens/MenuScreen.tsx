import React, {useEffect, useRef} from 'react';
import {Animated, Image, StyleSheet, Text, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {Flame, PlaneTakeoff, Route, Target, Wrench} from 'lucide-react-native';

import {spriteIsland} from '../assets';
import BentoTile from '../components/BentoTile';
import CreditsPill from '../components/CreditsPill';
import ScreenHeader from '../components/ScreenHeader';
import SkyBackdrop from '../components/SkyBackdrop';
import StatCard from '../components/StatCard';
import {HUB} from '../constants/config';
import {C, GRADIENTS, RADIUS} from '../constants/theme';
import type {Level} from '../game/levels';

type Props = {
  credits: number;
  contract: Level;
  onPlay: () => void;
};

const DOTS = [0, 1, 2, 3, 4];

function useEnter(delay: number) {
  const fade = useRef(new Animated.Value(0)).current;
  const slide = useRef(new Animated.Value(16)).current;

  useEffect(() => {
    const anim = Animated.sequence([
      Animated.delay(delay),
      Animated.parallel([
        Animated.timing(fade, {toValue: 1, duration: 300, useNativeDriver: true}),
        Animated.spring(slide, {toValue: 0, tension: 60, friction: 9, useNativeDriver: true}),
      ]),
    ]);
    anim.start();
    return () => anim.stop();
  }, [delay, fade, slide]);

  return {opacity: fade, transform: [{translateY: slide}]};
}

/** M3 Bento-Hub. The only PLAY/START literal in this file is the CTA tile. */
export function MenuScreen({credits, contract, onPlay}: Props) {
  const a1 = useEnter(60);
  const a2 = useEnter(140);
  const a3 = useEnter(220);

  return (
    <SkyBackdrop variant="menu">
      <ScreenHeader title="AVIARISE" right={<CreditsPill value={credits} />} />

      <Animated.View style={[styles.streakWrap, a1]} pointerEvents="box-none">
        <View style={styles.streak}>
          <View style={styles.streakIcon}>
            <Flame size={22} color={C.accent2} strokeWidth={2.4} />
          </View>
          <View style={styles.streakText}>
            <Text style={styles.caption}>DELIVERY STREAK</Text>
            <Text style={styles.streakValue}>{HUB.streak + ' FLIGHTS'}</Text>
          </View>
          <View style={styles.dots}>
            {DOTS.map(i => (
              <View
                key={'d' + i}
                style={[
                  styles.dot,
                  {backgroundColor: i < HUB.streakDone ? C.success : 'rgba(244,247,250,0.15)'},
                ]}
              />
            ))}
          </View>
        </View>
      </Animated.View>

      <Animated.View style={[styles.rowA, a2]} pointerEvents="box-none">
        <View style={styles.playSlot}>
          <BentoTile
            onPress={onPlay}
            accessibilityLabel="PLAY"
            gradient={GRADIENTS.playTile}
            glow={true}
            borderColor="rgba(47,195,255,0.45)">
            <Svg width={220} height={300} style={styles.arc} pointerEvents="none">
              <Path
                d="M 4 292 Q 104 150 214 196 Q 120 96 196 18"
                stroke={C.accent}
                strokeWidth={2.5}
                strokeDasharray="7 6"
                fill="none"
                opacity={0.35}
              />
            </Svg>
            <Image source={spriteIsland} style={styles.islandDecor} />
            <View style={styles.playBody}>
              <PlaneTakeoff size={30} color={C.accent} strokeWidth={2.2} />
              <Text style={styles.contract}>{contract.name}</Text>
              <Text style={styles.playLabel}>PLAY</Text>
            </View>
          </BentoTile>
        </View>

        <View style={styles.statColumn}>
          <View style={styles.statSlot}>
            <StatCard
              Icon={Target}
              value={HUB.bestEfficiency + '%'}
              label="BEST EFF."
              valueColor={C.success}
              fill={true}
            />
          </View>
          <View style={styles.statSlot}>
            <StatCard
              Icon={Target}
              value={String(HUB.parcelsMoved)}
              label="PARCELS"
              valueColor={C.accent}
              fill={true}
            />
          </View>
        </View>
      </Animated.View>

      <Animated.View style={[styles.rowB, a3]} pointerEvents="box-none">
        <View style={styles.infoSlot}>
          <BentoTile>
            <Wrench size={22} color={C.accent2} strokeWidth={2.2} />
            <Text style={styles.tileCaption}>HANGAR</Text>
            <Text style={styles.tileValue}>{HUB.partsOwned + ' / ' + HUB.partsTotal + ' PARTS'}</Text>
            <View style={styles.barTrack}>
              <View style={[styles.barFill, {flex: HUB.partsOwned}]} />
              <View style={{flex: HUB.partsTotal - HUB.partsOwned}} />
            </View>
          </BentoTile>
        </View>
        <View style={styles.infoSlot}>
          <BentoTile>
            <Route size={22} color={C.accent} strokeWidth={2.2} />
            <Text style={styles.tileCaption}>HOW IT WORKS</Text>
            <Text style={styles.tileHint}>LINK DOCKS IN ORDER, BEAT THE WIND</Text>
          </BentoTile>
        </View>
      </Animated.View>

      <Text style={styles.footer}>NO SIGN-UP - JUST FLY</Text>
    </SkyBackdrop>
  );
}

const styles = StyleSheet.create({
  streakWrap: {marginHorizontal: 16, marginTop: 14},
  streak: {
    height: 64,
    borderRadius: RADIUS.card,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    gap: 12,
    backgroundColor: C.panel,
    borderWidth: 1,
    borderColor: C.hairline,
    shadowColor: '#2FC3FF',
    shadowOpacity: 0.18,
    shadowRadius: 16,
    shadowOffset: {width: 0, height: 6},
    elevation: 6,
  },
  streakIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,107,53,0.14)',
  },
  streakText: {flex: 1},
  streakValue: {
    marginTop: 2,
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '900',
    color: C.textPrimary,
  },
  dots: {flexDirection: 'row', gap: 6},
  dot: {width: 6, height: 6, borderRadius: 3},

  rowA: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 14,
    gap: 12,
  },
  playSlot: {flex: 1.35},
  statColumn: {flex: 1, gap: 12},
  statSlot: {flex: 1, justifyContent: 'center'},

  arc: {position: 'absolute', left: 0, bottom: 0, zIndex: 0},
  islandDecor: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 74,
    height: 74,
    resizeMode: 'contain',
    opacity: 0.92,
    zIndex: 1,
  },
  playBody: {flex: 1, justifyContent: 'flex-end', zIndex: 2},
  contract: {
    marginTop: 12,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '800',
    letterSpacing: 2.4,
    color: C.textSecondary,
  },
  playLabel: {
    marginTop: 6,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '900',
    letterSpacing: 2,
    color: C.textPrimary,
  },

  rowB: {
    height: 104,
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 12,
    gap: 12,
  },
  infoSlot: {flex: 1},
  caption: {
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '800',
    letterSpacing: 2,
    color: C.textMuted,
  },
  tileCaption: {
    marginTop: 7,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '800',
    letterSpacing: 2,
    color: C.textMuted,
  },
  tileValue: {
    marginTop: 3,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '800',
    color: C.textPrimary,
  },
  tileHint: {
    marginTop: 3,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '700',
    color: C.textSecondary,
  },
  barTrack: {
    marginTop: 7,
    height: 4,
    flexDirection: 'row',
    borderRadius: 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(244,247,250,0.10)',
  },
  barFill: {
    height: 4,
    borderRadius: 2,
    backgroundColor: C.accent2,
  },

  footer: {
    marginTop: 14,
    marginBottom: 22,
    textAlign: 'center',
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '800',
    letterSpacing: 2,
    color: C.textMuted,
  },
});

export default MenuScreen;
