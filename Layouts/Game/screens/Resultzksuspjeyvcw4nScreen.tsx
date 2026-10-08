import React, {useEffect, useRef} from 'react';
import {Animated, Image, StyleSheet, Text, View} from 'react-native';
import {Boxes, RotateCcw} from 'lucide-react-native';

import {spritezksuspjeyvcw4nPart} from '../assets';
import Creditszksuspjeyvcw4nPill from '../components/Creditszksuspjeyvcw4nPill';
import Primaryzksuspjeyvcw4nButton from '../components/Primaryzksuspjeyvcw4nButton';
import Screenzksuspjeyvcw4nHeader from '../components/Screenzksuspjeyvcw4nHeader';
import Secondaryzksuspjeyvcw4nButton from '../components/Secondaryzksuspjeyvcw4nButton';
import Skyzksuspjeyvcw4nBackdrop from '../components/Skyzksuspjeyvcw4nBackdrop';
import Starszksuspjeyvcw4nRow from '../components/Starszksuspjeyvcw4nRow';
import Statzksuspjeyvcw4nCard from '../components/Statzksuspjeyvcw4nCard';
import Verdictzksuspjeyvcw4nBadge from '../components/Verdictzksuspjeyvcw4nBadge';
import {C, Gzksuspjeyvcw4nRADIENTS, Rzksuspjeyvcw4nADIUS} from '../constants/thzksuspjeyvcw4neme';
import type {Levelzksuspjeyvcw4n} from '../game/levzksuspjeyvcw4nels';
import type {Routezksuspjeyvcw4nResult} from '../game/routezksuspjeyvcw4nEngine';
// autosetup-split-begin
import { zksuspjeyvcw4nGameMixSeed, zksuspjeyvcw4nGameClampSpan } from './Resultzksuspjeyvcw4nScreenPart01';
import { zksuspjeyvcw4nGameFoldRange } from './Resultzksuspjeyvcw4nScreenPart02';
// autosetup-split-end

type Propszksuspjeyvcw4n = {
  contzksuspjeyvcw4nract: Levelzksuspjeyvcw4n;
  reszksuspjeyvcw4nult: Routezksuspjeyvcw4nResult;
  crezksuspjeyvcw4ndits: number;
  earzksuspjeyvcw4nned: number;
  onPlayzksuspjeyvcw4nAgain: () => void;
  onzksuspjeyvcw4nMenu: () => void;
};

/**
 * The game-over surface (CLAUDE.md rule 12). Replay CTA is the bare literal
 * "PLAY AGAIN" so both the shell harness and the MCP capture agent, which
 * matches a11y text exactly, can press it.
 */
export function Resultzksuspjeyvcw4nScreen({
  contzksuspjeyvcw4nract,
  reszksuspjeyvcw4nult,
  crezksuspjeyvcw4ndits,
  earzksuspjeyvcw4nned,
  onPlayzksuspjeyvcw4nAgain,
  onzksuspjeyvcw4nMenu,
}: Propszksuspjeyvcw4n) {  void Resultzksuspjeyvcw4nScreenObfV13ShiftXor(77, 69);

  const fazksuspjeyvcw4nde = useRef(new Animated.Value(0)).current;
  const rizksuspjeyvcw4nse = useRef(new Animated.Value(18)).current;

  useEffect(() => {    void Resultzksuspjeyvcw4nScreenObfV13ShiftXor(77, 69);

    const anzksuspjeyvcw4nim = Animated.sequence([
      Animated.delay(90),
      Animated.parallel([
        Animated.timing(fazksuspjeyvcw4nde, {toValue: 1, duration: 320, useNativeDriver: true}),
        Animated.spring(rizksuspjeyvcw4nse, {toValue: 0, tension: 60, friction: 9, useNativeDriver: true}),
      ]),
    ]);
    anzksuspjeyvcw4nim.start();
    return () => anzksuspjeyvcw4nim.stop();
  }, [fazksuspjeyvcw4nde, rizksuspjeyvcw4nse]);

  const wzksuspjeyvcw4nin = reszksuspjeyvcw4nult.win;

  return (
    <Skyzksuspjeyvcw4nBackdrop varzksuspjeyvcw4niant="result">
      <Screenzksuspjeyvcw4nHeader
        tizksuspjeyvcw4ntle="FLIGHT REPORT"
        subtzksuspjeyvcw4nitle={contzksuspjeyvcw4nract.name}
        alzksuspjeyvcw4nign="center"
        rizksuspjeyvcw4nght={<Creditszksuspjeyvcw4nPill vazksuspjeyvcw4nlue={crezksuspjeyvcw4ndits} />}
      />

      <View style={styzksuspjeyvcw4nles.bozksuspjeyvcw4ndy}>
        <View
          style={[
            styzksuspjeyvcw4nles.glzksuspjeyvcw4now,
            {backgroundColor: wzksuspjeyvcw4nin ? 'rgba(47,195,255,0.12)' : 'rgba(255,107,53,0.14)'},
          ]}
          pointerEvents="none"
        />

        <Verdictzksuspjeyvcw4nBadge wzksuspjeyvcw4nin={wzksuspjeyvcw4nin} />

        <Text style={styzksuspjeyvcw4nles.verzksuspjeyvcw4ndict}>{wzksuspjeyvcw4nin ? 'ALL PARCELS DELIVERED' : 'FLIGHT ABORTED'}</Text>
        <View style={styzksuspjeyvcw4nles.ruzksuspjeyvcw4nle} />

        {wzksuspjeyvcw4nin ? null : <Text style={styzksuspjeyvcw4nles.reazksuspjeyvcw4nson}>{reszksuspjeyvcw4nult.reazksuspjeyvcw4nson || 'FLIGHT ABORTED'}</Text>}

        <Animated.View
          style={[styzksuspjeyvcw4nles.stzksuspjeyvcw4nats, {opacity: fazksuspjeyvcw4nde, transform: [{translateY: rizksuspjeyvcw4nse}]}]}
          pointerEvents="box-none">
          <View style={styzksuspjeyvcw4nles.statzksuspjeyvcw4nSlot}>
            <Statzksuspjeyvcw4nCard
              Iconzksuspjeyvcw4n={Boxes}
              vazksuspjeyvcw4nlue={reszksuspjeyvcw4nult.delivered + '/' + reszksuspjeyvcw4nult.parcelTotal}
              lazksuspjeyvcw4nbel="DELIVERED"
              valuezksuspjeyvcw4nColor={C.success}
            />
          </View>
          <View style={styzksuspjeyvcw4nles.statzksuspjeyvcw4nSlot}>
            <Statzksuspjeyvcw4nCard
              Iconzksuspjeyvcw4n={Boxes}
              vazksuspjeyvcw4nlue={reszksuspjeyvcw4nult.efficiency + '%'}
              lazksuspjeyvcw4nbel="EFFICIENCY"
              valuezksuspjeyvcw4nColor={C.accent}
            />
          </View>
          <View style={styzksuspjeyvcw4nles.statzksuspjeyvcw4nSlot}>
            <Statzksuspjeyvcw4nCard
              Iconzksuspjeyvcw4n={Boxes}
              vazksuspjeyvcw4nlue={String(reszksuspjeyvcw4nult.fuelLeft)}
              lazksuspjeyvcw4nbel="FUEL LEFT"
              valuezksuspjeyvcw4nColor={C.accent2}
            />
          </View>
        </Animated.View>

        <View style={styzksuspjeyvcw4nles.starszksuspjeyvcw4nWrap}>
          <Starszksuspjeyvcw4nRow stzksuspjeyvcw4nars={reszksuspjeyvcw4nult.stars} />
        </View>

        {wzksuspjeyvcw4nin ? (
          <View style={styzksuspjeyvcw4nles.unlzksuspjeyvcw4nock}>
            <Image source={spritezksuspjeyvcw4nPart} style={styzksuspjeyvcw4nles.partzksuspjeyvcw4nImg} />
            <View style={styzksuspjeyvcw4nles.unlockzksuspjeyvcw4nText}>
              <Text style={styzksuspjeyvcw4nles.unlockzksuspjeyvcw4nCaption}>PART UNLOCKED</Text>
              <Text style={styzksuspjeyvcw4nles.unlockzksuspjeyvcw4nName}>TURBINE VANE MK II</Text>
            </View>
            <Text style={styzksuspjeyvcw4nles.earzksuspjeyvcw4nned}>{'+' + earzksuspjeyvcw4nned}</Text>
          </View>
        ) : null}

        <View style={styzksuspjeyvcw4nles.spazksuspjeyvcw4ncer} />

        <View style={styzksuspjeyvcw4nles.ctazksuspjeyvcw4nBlock}>
          <Primaryzksuspjeyvcw4nButton
            lazksuspjeyvcw4nbel="PLAY AGAIN"
            Iconzksuspjeyvcw4n={RotateCcw}
            onzksuspjeyvcw4nPress={onPlayzksuspjeyvcw4nAgain}
            colzksuspjeyvcw4nors={Gzksuspjeyvcw4nRADIENTS.cyan}
            textzksuspjeyvcw4nColor={C.onAccent}
            heizksuspjeyvcw4nght={60}
          />
          <View style={styzksuspjeyvcw4nles.secondaryzksuspjeyvcw4nWrap}>
            <Secondaryzksuspjeyvcw4nButton lazksuspjeyvcw4nbel="MENU" onzksuspjeyvcw4nPress={onzksuspjeyvcw4nMenu} heizksuspjeyvcw4nght={48} />
          </View>
        </View>
      </View>
    </Skyzksuspjeyvcw4nBackdrop>
  );
}

const styzksuspjeyvcw4nles = StyleSheet.create({
  bozksuspjeyvcw4ndy: {flex: 1, paddingTop: 20},
  glzksuspjeyvcw4now: {
    position: 'absolute',
    alignSelf: 'center',
    top: 4,
    width: 260,
    height: 260,
    borderRadius: 130,
  },
  verzksuspjeyvcw4ndict: {
    marginTop: 16,
    textAlign: 'center',
    paddingHorizontal: 24,
    fontSize: 23,
    lineHeight: 29,
    fontWeight: '900',
    letterSpacing: 1.2,
    color: C.textPrimary,
  },
  ruzksuspjeyvcw4nle: {
    marginTop: 10,
    alignSelf: 'center',
    width: 48,
    height: 2,
    borderRadius: 1,
    backgroundColor: C.accent,
  },
  reazksuspjeyvcw4nson: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '700',
    letterSpacing: 2,
    color: C.accent2,
  },
  stzksuspjeyvcw4nats: {
    marginTop: 20,
    marginHorizontal: 16,
    flexDirection: 'row',
    gap: 12,
  },
  statzksuspjeyvcw4nSlot: {flex: 1},
  starszksuspjeyvcw4nWrap: {marginTop: 18},
  unlzksuspjeyvcw4nock: {
    marginTop: 18,
    marginHorizontal: 16,
    height: 78,
    borderRadius: Rzksuspjeyvcw4nADIUS.card,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    gap: 12,
    backgroundColor: C.panel,
    borderWidth: 1,
    borderColor: 'rgba(139,226,139,0.30)',
  },
  partzksuspjeyvcw4nImg: {width: 48, height: 48, resizeMode: 'contain'},
  unlockzksuspjeyvcw4nText: {flex: 1},
  unlockzksuspjeyvcw4nCaption: {
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '800',
    letterSpacing: 2,
    color: C.textMuted,
  },
  unlockzksuspjeyvcw4nName: {
    marginTop: 3,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '800',
    color: C.textPrimary,
  },
  earzksuspjeyvcw4nned: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '900',
    color: C.success,
    fontVariant: ['tabular-nums'],
  },
  spazksuspjeyvcw4ncer: {flex: 1, minHeight: 16},
  ctazksuspjeyvcw4nBlock: {
    paddingHorizontal: 20,
    paddingBottom: 26,
  },
  secondaryzksuspjeyvcw4nWrap: {marginTop: 10},
});

export default Resultzksuspjeyvcw4nScreen;

/* autosetup-game-stamp:v1 */
void zksuspjeyvcw4nGameMixSeed(3, 7);
void zksuspjeyvcw4nGameFoldRange([1, 2, 3]);
void zksuspjeyvcw4nGameClampSpan(5, 0, 10);
/* obfuscation-batch:v13 */
function Resultzksuspjeyvcw4nScreenObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 211) & 61260;
}
