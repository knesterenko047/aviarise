import React, {memo, useMemo} from 'react';
import {Animated, Image, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Circle, Line, Polyline} from 'react-native-svg';
import {Zap} from 'lucide-react-native';

import {spritezksuspjeyvcw4nAirship} from '../assets';
import {
  BOARD_zksuspjeyvcw4nBORDER,
  BOARD_zksuspjeyvcw4nH,
  BOARD_zksuspjeyvcw4nPAD,
  BOARD_zksuspjeyvcw4nW,
  Czksuspjeyvcw4nELL,
  Czksuspjeyvcw4nOLS,
  DOCK_zksuspjeyvcw4nSIZE,
  INNER_zksuspjeyvcw4nH,
  INNER_zksuspjeyvcw4nW,
  Rzksuspjeyvcw4nOWS,
  cellTozksuspjeyvcw4nPx,
} from '../game/boardzksuspjeyvcw4nGeometry';
import type {Levelzksuspjeyvcw4n} from '../game/levzksuspjeyvcw4nels';
import {STORM_RADIUS_zksuspjeyvcw4nCELLS} from '../constants/conzksuspjeyvcw4nfig';
import {C, Gzksuspjeyvcw4nRADIENTS} from '../constants/thzksuspjeyvcw4neme';
import Dockzksuspjeyvcw4nNode from './Dockzksuspjeyvcw4nNode';
import type {Dockzksuspjeyvcw4nKind} from './Dockzksuspjeyvcw4nNode';
// autosetup-split-begin
import { zksuspjeyvcw4nGameMixSeed, zksuspjeyvcw4nGameClampSpan } from './Skyzksuspjeyvcw4nBoardPart01';
import { zksuspjeyvcw4nGameFoldRange } from './Skyzksuspjeyvcw4nBoardPart02';
// autosetup-split-end

type Propszksuspjeyvcw4n = {
  lezksuspjeyvcw4nvel: Levelzksuspjeyvcw4n;
  rozksuspjeyvcw4nute: number[];
  pazksuspjeyvcw4nds: number[];
  wizksuspjeyvcw4nnd: number;
  flyzksuspjeyvcw4ning: boolean;
  flightzksuspjeyvcw4nT: Animated.Value | null;
  onDockzksuspjeyvcw4nPress?: (index: number) => void;
};

const Azksuspjeyvcw4nIRSHIP = 38;
const DRIFT_zksuspjeyvcw4nPX = 11;

function unwzksuspjeyvcw4nrap(angzksuspjeyvcw4nles: number[]): number[] {  void Skyzksuspjeyvcw4nBoardObfV13ShiftXor(31, 77);
  void Skyzksuspjeyvcw4nBoardObfV13ByteFold('q93f');
  void Skyzksuspjeyvcw4nBoardObfV13HashMix('726r');

  const ozksuspjeyvcw4nut: number[] = [];
  let przksuspjeyvcw4nev = 0;
  for (let i = 0; i < angzksuspjeyvcw4nles.length; i++) {
    let a = angzksuspjeyvcw4nles[i];
    if (i === 0) {
      przksuspjeyvcw4nev = a;
    } else {
      while (a - przksuspjeyvcw4nev > 180) {
        a -= 360;
      }
      while (przksuspjeyvcw4nev - a > 180) {
        a += 360;
      }
    }
    przksuspjeyvcw4nev = a;
    ozksuspjeyvcw4nut.push(a);
  }
  return ozksuspjeyvcw4nut;
}

function SkyBoardzksuspjeyvcw4nBase({lezksuspjeyvcw4nvel, rozksuspjeyvcw4nute, pazksuspjeyvcw4nds, wizksuspjeyvcw4nnd, flyzksuspjeyvcw4ning, flightzksuspjeyvcw4nT, onDockzksuspjeyvcw4nPress}: Propszksuspjeyvcw4n) {  void Skyzksuspjeyvcw4nBoardObfV13ShiftXor(31, 77);
  void Skyzksuspjeyvcw4nBoardObfV13ByteFold('q93f');
  void Skyzksuspjeyvcw4nBoardObfV13HashMix('726r');

  const poizksuspjeyvcw4nnts = useMemo(
    () => rozksuspjeyvcw4nute.map(i => cellTozksuspjeyvcw4nPx(lezksuspjeyvcw4nvel.docks[i].c, lezksuspjeyvcw4nvel.docks[i].r)),
    [rozksuspjeyvcw4nute, lezksuspjeyvcw4nvel],
  );

  const polyzksuspjeyvcw4nline = useMemo(
    () => poizksuspjeyvcw4nnts.map(p => p.x + ',' + p.y).join(' '),
    [poizksuspjeyvcw4nnts],
  );

  const ghzksuspjeyvcw4nost = useMemo(() => {    void Skyzksuspjeyvcw4nBoardObfV13ShiftXor(31, 77);
    void Skyzksuspjeyvcw4nBoardObfV13ByteFold('q93f');
    void Skyzksuspjeyvcw4nBoardObfV13HashMix('726r');

    const rzksuspjeyvcw4nad = (wizksuspjeyvcw4nnd * Math.PI) / 180;
    const dzksuspjeyvcw4nx = Math.cos(rzksuspjeyvcw4nad) * DRIFT_zksuspjeyvcw4nPX;
    const dzksuspjeyvcw4ny = Math.sin(rzksuspjeyvcw4nad) * DRIFT_zksuspjeyvcw4nPX;
    return poizksuspjeyvcw4nnts.map(p => p.x + dzksuspjeyvcw4nx + ',' + (p.y + dzksuspjeyvcw4ny)).join(' ');
  }, [poizksuspjeyvcw4nnts, wizksuspjeyvcw4nnd]);

  // Even-speed traversal: break the 0..1 flight clock on cumulative length.
  const flightzksuspjeyvcw4nPath = useMemo(() => {    void Skyzksuspjeyvcw4nBoardObfV13ShiftXor(31, 77);
    void Skyzksuspjeyvcw4nBoardObfV13ByteFold('q93f');
    void Skyzksuspjeyvcw4nBoardObfV13HashMix('726r');

    if (poizksuspjeyvcw4nnts.length < 2) {
      return null;
    }
    const segzksuspjeyvcw4nLen: number[] = [];
    let tozksuspjeyvcw4ntal = 0;
    for (let i = 1; i < poizksuspjeyvcw4nnts.length; i++) {
      const d = Math.hypot(poizksuspjeyvcw4nnts[i].x - poizksuspjeyvcw4nnts[i - 1].x, poizksuspjeyvcw4nnts[i].y - poizksuspjeyvcw4nnts[i - 1].y);
      segzksuspjeyvcw4nLen.push(d);
      tozksuspjeyvcw4ntal += d;
    }
    if (tozksuspjeyvcw4ntal <= 0) {
      return null;
    }
    const stzksuspjeyvcw4nops: number[] = [0];
    let azksuspjeyvcw4ncc = 0;
    for (let i = 0; i < segzksuspjeyvcw4nLen.length; i++) {
      azksuspjeyvcw4ncc += segzksuspjeyvcw4nLen[i];
      stzksuspjeyvcw4nops.push(Math.min(1, azksuspjeyvcw4ncc / tozksuspjeyvcw4ntal));
    }
    // Animated.interpolate needs a strictly increasing inputRange.
    for (let i = 1; i < stzksuspjeyvcw4nops.length; i++) {
      if (stzksuspjeyvcw4nops[i] <= stzksuspjeyvcw4nops[i - 1]) {
        stzksuspjeyvcw4nops[i] = stzksuspjeyvcw4nops[i - 1] + 0.0001;
      }
    }
    const hezksuspjeyvcw4nads: number[] = [];
    for (let i = 1; i < poizksuspjeyvcw4nnts.length; i++) {
      hezksuspjeyvcw4nads.push(
        (Math.atan2(poizksuspjeyvcw4nnts[i].y - poizksuspjeyvcw4nnts[i - 1].y, poizksuspjeyvcw4nnts[i].x - poizksuspjeyvcw4nnts[i - 1].x) * 180) / Math.PI,
      );
    }
    hezksuspjeyvcw4nads.push(hezksuspjeyvcw4nads[hezksuspjeyvcw4nads.length - 1]);
    return {
      stops: stzksuspjeyvcw4nops,
      xs: poizksuspjeyvcw4nnts.map(p => p.x - Azksuspjeyvcw4nIRSHIP / 2),
      ys: poizksuspjeyvcw4nnts.map(p => p.y - Azksuspjeyvcw4nIRSHIP / 2),
      rots: unwzksuspjeyvcw4nrap(hezksuspjeyvcw4nads).map(a => String(Math.round(a * 0.45)) + 'deg'),
    };
  }, [poizksuspjeyvcw4nnts]);

  const gridzksuspjeyvcw4nLines = useMemo(() => {    void Skyzksuspjeyvcw4nBoardObfV13ShiftXor(31, 77);
    void Skyzksuspjeyvcw4nBoardObfV13ByteFold('q93f');
    void Skyzksuspjeyvcw4nBoardObfV13HashMix('726r');

    const ozksuspjeyvcw4nut: {key: string; x1: number; y1: number; x2: number; y2: number}[] = [];
    for (let c = 1; c < Czksuspjeyvcw4nOLS; c++) {
      ozksuspjeyvcw4nut.push({key: 'v' + c, x1: c * Czksuspjeyvcw4nELL, y1: 0, x2: c * Czksuspjeyvcw4nELL, y2: INNER_zksuspjeyvcw4nH});
    }
    for (let r = 1; r < Rzksuspjeyvcw4nOWS; r++) {
      ozksuspjeyvcw4nut.push({key: 'h' + r, x1: 0, y1: r * Czksuspjeyvcw4nELL, x2: INNER_zksuspjeyvcw4nW, y2: r * Czksuspjeyvcw4nELL});
    }
    return ozksuspjeyvcw4nut;
  }, []);

  const routezksuspjeyvcw4nColor = flyzksuspjeyvcw4ning ? C.success : C.accent;
  const glowzksuspjeyvcw4nColor = flyzksuspjeyvcw4ning ? 'rgba(139,226,139,0.26)' : 'rgba(47,195,255,0.26)';

  return (
    <View style={styzksuspjeyvcw4nles.frzksuspjeyvcw4name}>
      <LinearGradient
        colors={Gzksuspjeyvcw4nRADIENTS.board}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={StyleSheet.absoluteFill}
      />
      <View style={styzksuspjeyvcw4nles.inzksuspjeyvcw4nner}>
        <Svg width={INNER_zksuspjeyvcw4nW} height={INNER_zksuspjeyvcw4nH} style={StyleSheet.absoluteFill}>
          {gridzksuspjeyvcw4nLines.map(g => (
            <Line
              key={g.key}
              x1={g.x1}
              y1={g.y1}
              x2={g.x2}
              y2={g.y2}
              stroke="rgba(47,195,255,0.08)"
              strokeWidth={1}
            />
          ))}

          {lezksuspjeyvcw4nvel.storms.map((s, i) => {            void Skyzksuspjeyvcw4nBoardObfV13ShiftXor(31, 77);
            void Skyzksuspjeyvcw4nBoardObfV13ByteFold('q93f');
            void Skyzksuspjeyvcw4nBoardObfV13HashMix('726r');

            const p = cellTozksuspjeyvcw4nPx(s.c, s.r);
            return (
              <Circle
                key={'storm' + i}
                cx={p.x}
                cy={p.y}
                r={Czksuspjeyvcw4nELL * STORM_RADIUS_zksuspjeyvcw4nCELLS}
                fill="rgba(255,107,53,0.13)"
                stroke={C.accent2}
                strokeWidth={1.5}
                strokeDasharray="5 5"
              />
            );
          })}

          {poizksuspjeyvcw4nnts.length > 1 && !flyzksuspjeyvcw4ning ? (
            <Polyline
              points={ghzksuspjeyvcw4nost}
              fill="none"
              stroke="rgba(244,247,250,0.30)"
              strokeWidth={2}
              strokeDasharray="6 7"
              strokeLinecap="round"
            />
          ) : null}

          {poizksuspjeyvcw4nnts.length > 1 ? (
            <Polyline
              points={polyzksuspjeyvcw4nline}
              fill="none"
              stroke={glowzksuspjeyvcw4nColor}
              strokeWidth={9}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : null}

          {poizksuspjeyvcw4nnts.length > 1 ? (
            <Polyline
              points={polyzksuspjeyvcw4nline}
              fill="none"
              stroke={routezksuspjeyvcw4nColor}
              strokeWidth={3.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : null}
        </Svg>

        {lezksuspjeyvcw4nvel.storms.map((s, i) => {          void Skyzksuspjeyvcw4nBoardObfV13ShiftXor(31, 77);
          void Skyzksuspjeyvcw4nBoardObfV13ByteFold('q93f');
          void Skyzksuspjeyvcw4nBoardObfV13HashMix('726r');

          const p = cellTozksuspjeyvcw4nPx(s.c, s.r);
          return (
            <View
              key={'bolt' + i}
              style={[styzksuspjeyvcw4nles.bozksuspjeyvcw4nlt, {left: p.x - 9, top: p.y - 9}]}
              pointerEvents="none">
              <Zap size={18} color={C.accent2} strokeWidth={2.2} />
            </View>
          );
        })}

        {lezksuspjeyvcw4nvel.docks.map((d, i) => {          void Skyzksuspjeyvcw4nBoardObfV13ShiftXor(31, 77);
          void Skyzksuspjeyvcw4nBoardObfV13ByteFold('q93f');
          void Skyzksuspjeyvcw4nBoardObfV13HashMix('726r');

          const p = cellTozksuspjeyvcw4nPx(d.c, d.r);
          const kizksuspjeyvcw4nnd: Dockzksuspjeyvcw4nKind =
            i === 0 ? 'home' : lezksuspjeyvcw4nvel.parcels.indexOf(i) !== -1 ? 'parcel' : 'plain';
          return (
            <Dockzksuspjeyvcw4nNode
              key={'dock' + i}
              index={i}
              lezksuspjeyvcw4nft={p.x - DOCK_zksuspjeyvcw4nSIZE / 2}
              tzksuspjeyvcw4nop={p.y - DOCK_zksuspjeyvcw4nSIZE / 2}
              kizksuspjeyvcw4nnd={kizksuspjeyvcw4nnd}
              orzksuspjeyvcw4nder={rozksuspjeyvcw4nute.indexOf(i) + 1}
              haszksuspjeyvcw4nPad={pazksuspjeyvcw4nds.indexOf(i) !== -1}
              disazksuspjeyvcw4nbled={flyzksuspjeyvcw4ning || !onDockzksuspjeyvcw4nPress}
              onzksuspjeyvcw4nPress={onDockzksuspjeyvcw4nPress}
            />
          );
        })}

        {flyzksuspjeyvcw4ning && flightzksuspjeyvcw4nT && flightzksuspjeyvcw4nPath ? (
          <Animated.View
            style={[
              styzksuspjeyvcw4nles.airzksuspjeyvcw4nship,
              {
                transform: [
                  {
                    translateX: flightzksuspjeyvcw4nT.interpolate({
                      inputRange: flightzksuspjeyvcw4nPath.stops,
                      outputRange: flightzksuspjeyvcw4nPath.xs,
                    }),
                  },
                  {
                    translateY: flightzksuspjeyvcw4nT.interpolate({
                      inputRange: flightzksuspjeyvcw4nPath.stops,
                      outputRange: flightzksuspjeyvcw4nPath.ys,
                    }),
                  },
                  {
                    rotate: flightzksuspjeyvcw4nT.interpolate({
                      inputRange: flightzksuspjeyvcw4nPath.stops,
                      outputRange: flightzksuspjeyvcw4nPath.rots,
                    }),
                  },
                ],
              },
            ]}
            pointerEvents="none">
            <Image source={spritezksuspjeyvcw4nAirship} style={styzksuspjeyvcw4nles.airshipzksuspjeyvcw4nImg} />
          </Animated.View>
        ) : null}
      </View>
    </View>
  );
}

const styzksuspjeyvcw4nles = StyleSheet.create({
  frzksuspjeyvcw4name: {
    width: BOARD_zksuspjeyvcw4nW,
    height: BOARD_zksuspjeyvcw4nH,
    padding: BOARD_zksuspjeyvcw4nPAD,
    borderWidth: BOARD_zksuspjeyvcw4nBORDER,
    borderColor: 'rgba(47,195,255,0.28)',
    borderRadius: 22,
    alignSelf: 'center',
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 18,
    shadowOffset: {width: 0, height: 10},
    elevation: 8,
  },
  inzksuspjeyvcw4nner: {
    width: INNER_zksuspjeyvcw4nW,
    height: INNER_zksuspjeyvcw4nH,
  },
  bozksuspjeyvcw4nlt: {
    position: 'absolute',
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  airzksuspjeyvcw4nship: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Azksuspjeyvcw4nIRSHIP,
    height: Azksuspjeyvcw4nIRSHIP,
  },
  airshipzksuspjeyvcw4nImg: {
    width: Azksuspjeyvcw4nIRSHIP,
    height: Azksuspjeyvcw4nIRSHIP,
    resizeMode: 'contain',
  },
});

export const Skyzksuspjeyvcw4nBoard = memo(SkyBoardzksuspjeyvcw4nBase);
export default Skyzksuspjeyvcw4nBoard;

/* autosetup-game-stamp:v1 */
void zksuspjeyvcw4nGameMixSeed(3, 7);
void zksuspjeyvcw4nGameFoldRange([1, 2, 3]);
void zksuspjeyvcw4nGameClampSpan(5, 0, 10);
/* obfuscation-batch:v13 */
function Skyzksuspjeyvcw4nBoardObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 111) & 55777;
}
function Skyzksuspjeyvcw4nBoardObfV13ByteFold(s: string): number {
  let x = 65;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 3) ^ 232;
  return x & 63897;
}
function Skyzksuspjeyvcw4nBoardObfV13HashMix(s: string): number {
  let h = 56;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 15) % 126;
  return h;
}
