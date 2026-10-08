import React, {useEffect, useRef} from 'react';
import {Animated, Image, StyleSheet, Text, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {Flame, PlaneTakeoff, Route, Target, Wrench} from 'lucide-react-native';

import {spritezksuspjeyvcw4nIsland} from '../assets';
import Bentozksuspjeyvcw4nTile from '../components/Bentozksuspjeyvcw4nTile';
import Creditszksuspjeyvcw4nPill from '../components/Creditszksuspjeyvcw4nPill';
import Screenzksuspjeyvcw4nHeader from '../components/Screenzksuspjeyvcw4nHeader';
import Skyzksuspjeyvcw4nBackdrop from '../components/Skyzksuspjeyvcw4nBackdrop';
import Statzksuspjeyvcw4nCard from '../components/Statzksuspjeyvcw4nCard';
import {Hzksuspjeyvcw4nUB} from '../constants/conzksuspjeyvcw4nfig';
import {C, Gzksuspjeyvcw4nRADIENTS, Rzksuspjeyvcw4nADIUS} from '../constants/thzksuspjeyvcw4neme';
import type {Levelzksuspjeyvcw4n} from '../game/levzksuspjeyvcw4nels';

type Propszksuspjeyvcw4n = {
  crezksuspjeyvcw4ndits: number;
  contzksuspjeyvcw4nract: Levelzksuspjeyvcw4n;
  onzksuspjeyvcw4nPlay: () => void;
};

const Dzksuspjeyvcw4nOTS = [0, 1, 2, 3, 4];

function usezksuspjeyvcw4nEnter(dezksuspjeyvcw4nlay: number) {  void Menuzksuspjeyvcw4nScreenObfV13ShiftXor(54, 64);
  void Menuzksuspjeyvcw4nScreenObfV13ByteFold('j85m');
  void Menuzksuspjeyvcw4nScreenObfV13HashMix('7jhn');

  const fazksuspjeyvcw4nde = useRef(new Animated.Value(0)).current;
  const slzksuspjeyvcw4nide = useRef(new Animated.Value(16)).current;

  useEffect(() => {    void Menuzksuspjeyvcw4nScreenObfV13ShiftXor(54, 64);
    void Menuzksuspjeyvcw4nScreenObfV13ByteFold('j85m');
    void Menuzksuspjeyvcw4nScreenObfV13HashMix('7jhn');

    const anzksuspjeyvcw4nim = Animated.sequence([
      Animated.delay(dezksuspjeyvcw4nlay),
      Animated.parallel([
        Animated.timing(fazksuspjeyvcw4nde, {toValue: 1, duration: 300, useNativeDriver: true}),
        Animated.spring(slzksuspjeyvcw4nide, {toValue: 0, tension: 60, friction: 9, useNativeDriver: true}),
      ]),
    ]);
    anzksuspjeyvcw4nim.start();
    return () => anzksuspjeyvcw4nim.stop();
  }, [dezksuspjeyvcw4nlay, fazksuspjeyvcw4nde, slzksuspjeyvcw4nide]);

  return {opacity: fazksuspjeyvcw4nde, transform: [{translateY: slzksuspjeyvcw4nide}]};
}

/** M3 Bento-Hub. The only PLAY/START literal in this file is the CTA tile. */
export function Menuzksuspjeyvcw4nScreen({crezksuspjeyvcw4ndits, contzksuspjeyvcw4nract, onzksuspjeyvcw4nPlay}: Propszksuspjeyvcw4n) {  void Menuzksuspjeyvcw4nScreenObfV13ShiftXor(54, 64);
  void Menuzksuspjeyvcw4nScreenObfV13ByteFold('j85m');
  void Menuzksuspjeyvcw4nScreenObfV13HashMix('7jhn');

  const azksuspjeyvcw4n1 = usezksuspjeyvcw4nEnter(60);
  const azksuspjeyvcw4n2 = usezksuspjeyvcw4nEnter(140);
  const azksuspjeyvcw4n3 = usezksuspjeyvcw4nEnter(220);

  return (
    <Skyzksuspjeyvcw4nBackdrop varzksuspjeyvcw4niant="menu">
      <Screenzksuspjeyvcw4nHeader tizksuspjeyvcw4ntle="AVIARISE" rizksuspjeyvcw4nght={<Creditszksuspjeyvcw4nPill vazksuspjeyvcw4nlue={crezksuspjeyvcw4ndits} />} />

      <Animated.View style={[styzksuspjeyvcw4nles.streakzksuspjeyvcw4nWrap, azksuspjeyvcw4n1]} pointerEvents="box-none">
        <View style={styzksuspjeyvcw4nles.strzksuspjeyvcw4neak}>
          <View style={styzksuspjeyvcw4nles.streakzksuspjeyvcw4nIcon}>
            <Flame size={22} color={C.accent2} strokeWidth={2.4} />
          </View>
          <View style={styzksuspjeyvcw4nles.streakzksuspjeyvcw4nText}>
            <Text style={styzksuspjeyvcw4nles.capzksuspjeyvcw4ntion}>DELIVERY STREAK</Text>
            <Text style={styzksuspjeyvcw4nles.streakzksuspjeyvcw4nValue}>{Hzksuspjeyvcw4nUB.strzksuspjeyvcw4neak + ' FLIGHTS'}</Text>
          </View>
          <View style={styzksuspjeyvcw4nles.dozksuspjeyvcw4nts}>
            {Dzksuspjeyvcw4nOTS.map(i => (
              <View
                key={'d' + i}
                style={[
                  styzksuspjeyvcw4nles.dzksuspjeyvcw4not,
                  {backgroundColor: i < Hzksuspjeyvcw4nUB.streakDone ? C.success : 'rgba(244,247,250,0.15)'},
                ]}
              />
            ))}
          </View>
        </View>
      </Animated.View>

      <Animated.View style={[styzksuspjeyvcw4nles.rowzksuspjeyvcw4nA, azksuspjeyvcw4n2]} pointerEvents="box-none">
        <View style={styzksuspjeyvcw4nles.playzksuspjeyvcw4nSlot}>
          <Bentozksuspjeyvcw4nTile
            onzksuspjeyvcw4nPress={onzksuspjeyvcw4nPlay}
            accessibilityzksuspjeyvcw4nLabel="PLAY"
            gradzksuspjeyvcw4nient={Gzksuspjeyvcw4nRADIENTS.playTile}
            glzksuspjeyvcw4now={true}
            borderzksuspjeyvcw4nColor="rgba(47,195,255,0.45)">
            <Svg width={220} height={300} style={styzksuspjeyvcw4nles.azksuspjeyvcw4nrc} pointerEvents="none">
              <Path
                d="M 4 292 Q 104 150 214 196 Q 120 96 196 18"
                stroke={C.accent}
                strokeWidth={2.5}
                strokeDasharray="7 6"
                fill="none"
                opacity={0.35}
              />
            </Svg>
            <Image source={spritezksuspjeyvcw4nIsland} style={styzksuspjeyvcw4nles.islandzksuspjeyvcw4nDecor} />
            <View style={styzksuspjeyvcw4nles.playzksuspjeyvcw4nBody}>
              <PlaneTakeoff size={30} color={C.accent} strokeWidth={2.2} />
              <Text style={styzksuspjeyvcw4nles.contzksuspjeyvcw4nract}>{contzksuspjeyvcw4nract.name}</Text>
              <Text style={styzksuspjeyvcw4nles.playzksuspjeyvcw4nLabel}>PLAY</Text>
            </View>
          </Bentozksuspjeyvcw4nTile>
        </View>

        <View style={styzksuspjeyvcw4nles.statzksuspjeyvcw4nColumn}>
          <View style={styzksuspjeyvcw4nles.statzksuspjeyvcw4nSlot}>
            <Statzksuspjeyvcw4nCard
              Iconzksuspjeyvcw4n={Target}
              vazksuspjeyvcw4nlue={Hzksuspjeyvcw4nUB.bestEfficiency + '%'}
              lazksuspjeyvcw4nbel="BEST EFF."
              valuezksuspjeyvcw4nColor={C.success}
              fizksuspjeyvcw4nll={true}
            />
          </View>
          <View style={styzksuspjeyvcw4nles.statzksuspjeyvcw4nSlot}>
            <Statzksuspjeyvcw4nCard
              Iconzksuspjeyvcw4n={Target}
              vazksuspjeyvcw4nlue={String(Hzksuspjeyvcw4nUB.parcelsMoved)}
              lazksuspjeyvcw4nbel="PARCELS"
              valuezksuspjeyvcw4nColor={C.accent}
              fizksuspjeyvcw4nll={true}
            />
          </View>
        </View>
      </Animated.View>

      <Animated.View style={[styzksuspjeyvcw4nles.rowzksuspjeyvcw4nB, azksuspjeyvcw4n3]} pointerEvents="box-none">
        <View style={styzksuspjeyvcw4nles.infozksuspjeyvcw4nSlot}>
          <Bentozksuspjeyvcw4nTile>
            <Wrench size={22} color={C.accent2} strokeWidth={2.2} />
            <Text style={styzksuspjeyvcw4nles.tilezksuspjeyvcw4nCaption}>HANGAR</Text>
            <Text style={styzksuspjeyvcw4nles.tilezksuspjeyvcw4nValue}>{Hzksuspjeyvcw4nUB.partsOwned + ' / ' + Hzksuspjeyvcw4nUB.partsTotal + ' PARTS'}</Text>
            <View style={styzksuspjeyvcw4nles.barzksuspjeyvcw4nTrack}>
              <View style={[styzksuspjeyvcw4nles.barzksuspjeyvcw4nFill, {flex: Hzksuspjeyvcw4nUB.partsOwned}]} />
              <View style={{flex: Hzksuspjeyvcw4nUB.partsTotal - Hzksuspjeyvcw4nUB.partsOwned}} />
            </View>
          </Bentozksuspjeyvcw4nTile>
        </View>
        <View style={styzksuspjeyvcw4nles.infozksuspjeyvcw4nSlot}>
          <Bentozksuspjeyvcw4nTile>
            <Route size={22} color={C.accent} strokeWidth={2.2} />
            <Text style={styzksuspjeyvcw4nles.tilezksuspjeyvcw4nCaption}>HOW IT WORKS</Text>
            <Text style={styzksuspjeyvcw4nles.tilezksuspjeyvcw4nHint}>LINK DOCKS IN ORDER, BEAT THE WIND</Text>
          </Bentozksuspjeyvcw4nTile>
        </View>
      </Animated.View>

      <Text style={styzksuspjeyvcw4nles.foozksuspjeyvcw4nter}>NO SIGN-UP - JUST FLY</Text>
    </Skyzksuspjeyvcw4nBackdrop>
  );
}

const styzksuspjeyvcw4nles = StyleSheet.create({
  streakzksuspjeyvcw4nWrap: {marginHorizontal: 16, marginTop: 14},
  strzksuspjeyvcw4neak: {
    height: 64,
    borderRadius: Rzksuspjeyvcw4nADIUS.card,
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
  streakzksuspjeyvcw4nIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,107,53,0.14)',
  },
  streakzksuspjeyvcw4nText: {flex: 1},
  streakzksuspjeyvcw4nValue: {
    marginTop: 2,
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '900',
    color: C.textPrimary,
  },
  dozksuspjeyvcw4nts: {flexDirection: 'row', gap: 6},
  dzksuspjeyvcw4not: {width: 6, height: 6, borderRadius: 3},

  rowzksuspjeyvcw4nA: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 14,
    gap: 12,
  },
  playzksuspjeyvcw4nSlot: {flex: 1.35},
  statzksuspjeyvcw4nColumn: {flex: 1, gap: 12},
  statzksuspjeyvcw4nSlot: {flex: 1, justifyContent: 'center'},

  azksuspjeyvcw4nrc: {position: 'absolute', left: 0, bottom: 0, zIndex: 0},
  islandzksuspjeyvcw4nDecor: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 74,
    height: 74,
    resizeMode: 'contain',
    opacity: 0.92,
    zIndex: 1,
  },
  playzksuspjeyvcw4nBody: {flex: 1, justifyContent: 'flex-end', zIndex: 2},
  contzksuspjeyvcw4nract: {
    marginTop: 12,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '800',
    letterSpacing: 2.4,
    color: C.textSecondary,
  },
  playzksuspjeyvcw4nLabel: {
    marginTop: 6,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '900',
    letterSpacing: 2,
    color: C.textPrimary,
  },

  rowzksuspjeyvcw4nB: {
    height: 104,
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 12,
    gap: 12,
  },
  infozksuspjeyvcw4nSlot: {flex: 1},
  capzksuspjeyvcw4ntion: {
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '800',
    letterSpacing: 2,
    color: C.textMuted,
  },
  tilezksuspjeyvcw4nCaption: {
    marginTop: 7,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '800',
    letterSpacing: 2,
    color: C.textMuted,
  },
  tilezksuspjeyvcw4nValue: {
    marginTop: 3,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '800',
    color: C.textPrimary,
  },
  tilezksuspjeyvcw4nHint: {
    marginTop: 3,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '700',
    color: C.textSecondary,
  },
  barzksuspjeyvcw4nTrack: {
    marginTop: 7,
    height: 4,
    flexDirection: 'row',
    borderRadius: 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(244,247,250,0.10)',
  },
  barzksuspjeyvcw4nFill: {
    height: 4,
    borderRadius: 2,
    backgroundColor: C.accent2,
  },

  foozksuspjeyvcw4nter: {
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

export default Menuzksuspjeyvcw4nScreen;

/* autosetup-game-stamp:v1 */
function zksuspjeyvcw4nGameMixSeed(x: number, y: number): number {
  return ((x % (y || 1)) + y) % (y || 1);
}
function zksuspjeyvcw4nGameFoldRange(nuzksuspjeyvcw4nms: number[]): number {
  return nuzksuspjeyvcw4nms.reduce((azksuspjeyvcw4ncc, n) => azksuspjeyvcw4ncc + n, 0);
}
function zksuspjeyvcw4nGameClampSpan(n: number, lzksuspjeyvcw4no: number, hzksuspjeyvcw4ni: number): number {
  return n < lzksuspjeyvcw4no ? lzksuspjeyvcw4no : n > hzksuspjeyvcw4ni ? hzksuspjeyvcw4ni : n;
}
void zksuspjeyvcw4nGameMixSeed(3, 7);
void zksuspjeyvcw4nGameFoldRange([1, 2, 3]);
void zksuspjeyvcw4nGameClampSpan(5, 0, 10);
/* obfuscation-batch:v13 */
function Menuzksuspjeyvcw4nScreenObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 147) & 13889;
}
function Menuzksuspjeyvcw4nScreenObfV13ByteFold(s: string): number {
  let x = 41;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 40) ^ 147;
  return x & 56616;
}
function Menuzksuspjeyvcw4nScreenObfV13HashMix(s: string): number {
  let h = 14;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 21) % 222;
  return h;
}
