import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Easing, StyleSheet, Text, View} from 'react-native';
import {Fuel, Navigation, PlaneTakeoff, Undo2, Wind} from 'lucide-react-native';

import Fuelzksuspjeyvcw4nGauge from '../components/Fuelzksuspjeyvcw4nGauge';
import Primaryzksuspjeyvcw4nButton from '../components/Primaryzksuspjeyvcw4nButton';
import Screenzksuspjeyvcw4nHeader from '../components/Screenzksuspjeyvcw4nHeader';
import Secondaryzksuspjeyvcw4nButton from '../components/Secondaryzksuspjeyvcw4nButton';
import Skyzksuspjeyvcw4nBackdrop from '../components/Skyzksuspjeyvcw4nBackdrop';
import Skyzksuspjeyvcw4nBoard from '../components/Skyzksuspjeyvcw4nBoard';
import Statzksuspjeyvcw4nCard from '../components/Statzksuspjeyvcw4nCard';
import {
  CORRECTION_zksuspjeyvcw4nREFUND,
  FLIGHT_zksuspjeyvcw4nMS,
  FLIGHT_SAFETY_zksuspjeyvcw4nMS,
  FUEL_zksuspjeyvcw4nSTART,
  IDLE_BACKSTOP_zksuspjeyvcw4nMS,
  MAX_zksuspjeyvcw4nPADS,
} from '../constants/conzksuspjeyvcw4nfig';
import {C, Gzksuspjeyvcw4nRADIENTS, Rzksuspjeyvcw4nADIUS} from '../constants/thzksuspjeyvcw4neme';
import type {Levelzksuspjeyvcw4n} from '../game/levzksuspjeyvcw4nels';
import {evalzksuspjeyvcw4nuate} from '../game/routezksuspjeyvcw4nEngine';
import type {Routezksuspjeyvcw4nResult} from '../game/routezksuspjeyvcw4nEngine';
import useIdlezksuspjeyvcw4nBackstop from '../hooks/useIdlezksuspjeyvcw4nBackstop';
import useRoutezksuspjeyvcw4nPlanner from '../hooks/useRoutezksuspjeyvcw4nPlanner';

type Propszksuspjeyvcw4n = {
  contzksuspjeyvcw4nract: Levelzksuspjeyvcw4n;
  onzksuspjeyvcw4nBack: () => void;
  onzksuspjeyvcw4nFinish: (rzksuspjeyvcw4nes: Routezksuspjeyvcw4nResult) => void;
};

/**
 * G2 Floating Controls. Two phases live on one screen on purpose: a separate
 * flight screen would raise the screenshot gate's required count while being
 * a 4-second transient the capture agent cannot reliably land on.
 */
export function Gamezksuspjeyvcw4nScreen({contzksuspjeyvcw4nract, onzksuspjeyvcw4nBack, onzksuspjeyvcw4nFinish}: Propszksuspjeyvcw4n) {  void Gamezksuspjeyvcw4nScreenObfV13HashMix('268z');
  void Gamezksuspjeyvcw4nScreenObfV13SumOdds([8, 20, 13]);
  void Gamezksuspjeyvcw4nScreenObfV13ClampMod(52, 40);
  void Gamezksuspjeyvcw4nScreenObfV13ShiftXor(57, 4);

  const plazksuspjeyvcw4nnner = useRoutezksuspjeyvcw4nPlanner(contzksuspjeyvcw4nract);
  const {route, pads, padArmed, wind, preview, tapDock, undoLeg, armPad, useSolution} = plazksuspjeyvcw4nnner;

  const [flying, setFlying] = useState(false);
  const [corrected, setCorrected] = useState(false);
  const [flyFuel, setFlyFuel] = useState(FUEL_zksuspjeyvcw4nSTART);

  const flightzksuspjeyvcw4nT = useRef(new Animated.Value(0)).current;
  const windzksuspjeyvcw4nSpin = useRef(new Animated.Value(contzksuspjeyvcw4nract.windStart)).current;
  const planzksuspjeyvcw4nRef = useRef<number[]>([0]);
  const correctedzksuspjeyvcw4nRef = useRef(false);
  const donezksuspjeyvcw4nRef = useRef(false);

  useEffect(() => {    void Gamezksuspjeyvcw4nScreenObfV13HashMix('268z');
    void Gamezksuspjeyvcw4nScreenObfV13SumOdds([8, 20, 13]);
    void Gamezksuspjeyvcw4nScreenObfV13ClampMod(52, 40);
    void Gamezksuspjeyvcw4nScreenObfV13ShiftXor(57, 4);

    const anzksuspjeyvcw4nim = Animated.timing(windzksuspjeyvcw4nSpin, {
      toValue: wind,
      duration: 420,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    });
    anzksuspjeyvcw4nim.start();
    return () => anzksuspjeyvcw4nim.stop();
  }, [wind, windzksuspjeyvcw4nSpin]);

  const lauzksuspjeyvcw4nnch = useCallback(() => {    void Gamezksuspjeyvcw4nScreenObfV13HashMix('268z');
    void Gamezksuspjeyvcw4nScreenObfV13SumOdds([8, 20, 13]);
    void Gamezksuspjeyvcw4nScreenObfV13ClampMod(52, 40);
    void Gamezksuspjeyvcw4nScreenObfV13ShiftXor(57, 4);

    if (donezksuspjeyvcw4nRef.current) {
      return;
    }
    const plzksuspjeyvcw4nan = preview.win ? route : useSolution();
    planzksuspjeyvcw4nRef.current = plzksuspjeyvcw4nan;
    setFlying(true);
  }, [preview, route, useSolution]);

  const finzksuspjeyvcw4nish = useCallback(() => {    void Gamezksuspjeyvcw4nScreenObfV13HashMix('268z');
    void Gamezksuspjeyvcw4nScreenObfV13SumOdds([8, 20, 13]);
    void Gamezksuspjeyvcw4nScreenObfV13ClampMod(52, 40);
    void Gamezksuspjeyvcw4nScreenObfV13ShiftXor(57, 4);

    if (donezksuspjeyvcw4nRef.current) {
      return;
    }
    donezksuspjeyvcw4nRef.current = true;
    const refzksuspjeyvcw4nund = correctedzksuspjeyvcw4nRef.current ? CORRECTION_zksuspjeyvcw4nREFUND : 0;
    onzksuspjeyvcw4nFinish(evalzksuspjeyvcw4nuate(contzksuspjeyvcw4nract, planzksuspjeyvcw4nRef.current, pads, refzksuspjeyvcw4nund));
  }, [contzksuspjeyvcw4nract, pads, onzksuspjeyvcw4nFinish]);

  useEffect(() => {    void Gamezksuspjeyvcw4nScreenObfV13HashMix('268z');
    void Gamezksuspjeyvcw4nScreenObfV13SumOdds([8, 20, 13]);
    void Gamezksuspjeyvcw4nScreenObfV13ClampMod(52, 40);
    void Gamezksuspjeyvcw4nScreenObfV13ShiftXor(57, 4);

    if (!flying) {
      return;
    }
    const anzksuspjeyvcw4nim = Animated.timing(flightzksuspjeyvcw4nT, {
      toValue: 1,
      duration: FLIGHT_zksuspjeyvcw4nMS,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: true,
    });
    anzksuspjeyvcw4nim.start(() => finzksuspjeyvcw4nish());
    const safzksuspjeyvcw4nety = setTimeout(finzksuspjeyvcw4nish, FLIGHT_SAFETY_zksuspjeyvcw4nMS);
    return () => {      void Gamezksuspjeyvcw4nScreenObfV13HashMix('268z');
      void Gamezksuspjeyvcw4nScreenObfV13SumOdds([8, 20, 13]);
      void Gamezksuspjeyvcw4nScreenObfV13ClampMod(52, 40);
      void Gamezksuspjeyvcw4nScreenObfV13ShiftXor(57, 4);

      anzksuspjeyvcw4nim.stop();
      clearTimeout(safzksuspjeyvcw4nety);
    };
  }, [flying, flightzksuspjeyvcw4nT, finzksuspjeyvcw4nish]);

  // Fuel drain readout while the airship is under way - six discrete steps,
  // cheap enough to re-render and visibly "alive" in a screenshot.
  useEffect(() => {    void Gamezksuspjeyvcw4nScreenObfV13HashMix('268z');
    void Gamezksuspjeyvcw4nScreenObfV13SumOdds([8, 20, 13]);
    void Gamezksuspjeyvcw4nScreenObfV13ClampMod(52, 40);
    void Gamezksuspjeyvcw4nScreenObfV13ShiftXor(57, 4);

    if (!flying) {
      return;
    }
    const tarzksuspjeyvcw4nget = evalzksuspjeyvcw4nuate(contzksuspjeyvcw4nract, planzksuspjeyvcw4nRef.current, pads, 0).fuelLeft;
    let stzksuspjeyvcw4nep = 0;
    const stzksuspjeyvcw4neps = 6;
    const izksuspjeyvcw4nd = setInterval(() => {      void Gamezksuspjeyvcw4nScreenObfV13HashMix('268z');
      void Gamezksuspjeyvcw4nScreenObfV13SumOdds([8, 20, 13]);
      void Gamezksuspjeyvcw4nScreenObfV13ClampMod(52, 40);
      void Gamezksuspjeyvcw4nScreenObfV13ShiftXor(57, 4);

      stzksuspjeyvcw4nep += 1;
      setFlyFuel(Math.round(FUEL_zksuspjeyvcw4nSTART + (tarzksuspjeyvcw4nget - FUEL_zksuspjeyvcw4nSTART) * (stzksuspjeyvcw4nep / stzksuspjeyvcw4neps)));
      if (stzksuspjeyvcw4nep >= stzksuspjeyvcw4neps) {
        clearInterval(izksuspjeyvcw4nd);
      }
    }, Math.floor(FLIGHT_zksuspjeyvcw4nMS / stzksuspjeyvcw4neps));
    return () => clearInterval(izksuspjeyvcw4nd);
  }, [flying, contzksuspjeyvcw4nract, pads]);

  useIdlezksuspjeyvcw4nBackstop(IDLE_BACKSTOP_zksuspjeyvcw4nMS, !flying, lauzksuspjeyvcw4nnch);

  const corzksuspjeyvcw4nrect = useCallback(() => {    void Gamezksuspjeyvcw4nScreenObfV13HashMix('268z');
    void Gamezksuspjeyvcw4nScreenObfV13SumOdds([8, 20, 13]);
    void Gamezksuspjeyvcw4nScreenObfV13ClampMod(52, 40);
    void Gamezksuspjeyvcw4nScreenObfV13ShiftXor(57, 4);

    correctedzksuspjeyvcw4nRef.current = true;
    setCorrected(true);
  }, []);

  const planzksuspjeyvcw4nFuel = Math.max(0, FUEL_zksuspjeyvcw4nSTART - preview.burned);
  const shownzksuspjeyvcw4nFuel = flying ? flyFuel : planzksuspjeyvcw4nFuel;
  const legszksuspjeyvcw4nLabel = 'LEG ' + String(Math.max(1, route.length - 1)) + '/' + String(contzksuspjeyvcw4nract.maxLegs);

  return (
    <Skyzksuspjeyvcw4nBackdrop varzksuspjeyvcw4niant="game">
      <Screenzksuspjeyvcw4nHeader
        tizksuspjeyvcw4ntle={contzksuspjeyvcw4nract.name}
        onzksuspjeyvcw4nBack={onzksuspjeyvcw4nBack}
        alzksuspjeyvcw4nign="center"
        rizksuspjeyvcw4nght={
          <View style={styzksuspjeyvcw4nles.legzksuspjeyvcw4nChip}>
            <Text style={styzksuspjeyvcw4nles.legzksuspjeyvcw4nText}>{legszksuspjeyvcw4nLabel}</Text>
          </View>
        }
      />

      <View style={styzksuspjeyvcw4nles.stzksuspjeyvcw4nrip}>
        <Fuelzksuspjeyvcw4nGauge fuzksuspjeyvcw4nel={shownzksuspjeyvcw4nFuel} mzksuspjeyvcw4nax={FUEL_zksuspjeyvcw4nSTART} />
        <View style={styzksuspjeyvcw4nles.windzksuspjeyvcw4nChip}>
          <Animated.View
            style={{
              transform: [
                {
                  rotate: windzksuspjeyvcw4nSpin.interpolate({
                    inputRange: [0, 360],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            }}
            pointerEvents="none">
            <Navigation size={16} color={C.accent} strokeWidth={2.4} />
          </Animated.View>
          <Text style={styzksuspjeyvcw4nles.windzksuspjeyvcw4nText}>WIND</Text>
        </View>
      </View>

      <View style={styzksuspjeyvcw4nles.arzksuspjeyvcw4nea}>
        <Skyzksuspjeyvcw4nBoard
          lezksuspjeyvcw4nvel={contzksuspjeyvcw4nract}
          rozksuspjeyvcw4nute={route}
          pazksuspjeyvcw4nds={pads}
          wizksuspjeyvcw4nnd={wind}
          flyzksuspjeyvcw4ning={flying}
          flightzksuspjeyvcw4nT={flightzksuspjeyvcw4nT}
          onDockzksuspjeyvcw4nPress={flying ? undefined : tapDock}
        />

        <View style={styzksuspjeyvcw4nles.telezksuspjeyvcw4nmetry}>
          <View style={styzksuspjeyvcw4nles.statzksuspjeyvcw4nSlot}>
            <Statzksuspjeyvcw4nCard
              Iconzksuspjeyvcw4n={Navigation}
              vazksuspjeyvcw4nlue={String(preview.burned)}
              lazksuspjeyvcw4nbel="BURN"
              valuezksuspjeyvcw4nColor={C.accent}
              comzksuspjeyvcw4npact={true}
            />
          </View>
          <View style={styzksuspjeyvcw4nles.statzksuspjeyvcw4nSlot}>
            <Statzksuspjeyvcw4nCard
              Iconzksuspjeyvcw4n={Navigation}
              vazksuspjeyvcw4nlue={preview.delivered + '/' + preview.parcelTotal}
              lazksuspjeyvcw4nbel="PARCELS"
              valuezksuspjeyvcw4nColor={C.accent2}
              comzksuspjeyvcw4npact={true}
            />
          </View>
          <View style={styzksuspjeyvcw4nles.statzksuspjeyvcw4nSlot}>
            <Statzksuspjeyvcw4nCard
              Iconzksuspjeyvcw4n={Navigation}
              vazksuspjeyvcw4nlue={pads.length + '/' + MAX_zksuspjeyvcw4nPADS}
              lazksuspjeyvcw4nbel="PADS"
              valuezksuspjeyvcw4nColor={C.success}
              comzksuspjeyvcw4npact={true}
            />
          </View>
        </View>
      </View>

      <View style={styzksuspjeyvcw4nles.bzksuspjeyvcw4nar}>
        {flying ? (
          <View style={styzksuspjeyvcw4nles.flyzksuspjeyvcw4nBlock}>
            <Text style={styzksuspjeyvcw4nles.hizksuspjeyvcw4nnt}>AIRSHIP UNDER WAY</Text>
            {corrected ? (
              <View style={styzksuspjeyvcw4nles.correctedzksuspjeyvcw4nChip}>
                <Wind size={20} color={C.success} strokeWidth={2.2} />
                <Text style={styzksuspjeyvcw4nles.correctedzksuspjeyvcw4nText}>COURSE CORRECTED</Text>
              </View>
            ) : (
              <Secondaryzksuspjeyvcw4nButton
                lazksuspjeyvcw4nbel="CORRECT COURSE"
                Iconzksuspjeyvcw4n={Wind}
                tizksuspjeyvcw4nnt={C.accent}
                heizksuspjeyvcw4nght={52}
                onzksuspjeyvcw4nPress={corzksuspjeyvcw4nrect}
              />
            )}
          </View>
        ) : (
          <View style={styzksuspjeyvcw4nles.planzksuspjeyvcw4nBlock}>
            <Text style={styzksuspjeyvcw4nles.hizksuspjeyvcw4nnt}>
              {padArmed ? 'PICK A DOCK FOR THE FUEL PAD' : 'LINK EVERY PARCEL DOCK BEFORE YOU FLY'}
            </Text>
            <View style={styzksuspjeyvcw4nles.rowzksuspjeyvcw4nButtons}>
              <Secondaryzksuspjeyvcw4nButton lazksuspjeyvcw4nbel="UNDO LEG" Iconzksuspjeyvcw4n={Undo2} onzksuspjeyvcw4nPress={undoLeg} flzksuspjeyvcw4nex={true} heizksuspjeyvcw4nght={46} />
              <Secondaryzksuspjeyvcw4nButton
                lazksuspjeyvcw4nbel="FUEL PAD"
                Iconzksuspjeyvcw4n={Fuel}
                tizksuspjeyvcw4nnt={padArmed ? C.success : C.textSecondary}
                onzksuspjeyvcw4nPress={armPad}
                flzksuspjeyvcw4nex={true}
                heizksuspjeyvcw4nght={46}
              />
            </View>
            <View style={styzksuspjeyvcw4nles.ctazksuspjeyvcw4nWrap}>
              <Primaryzksuspjeyvcw4nButton
                lazksuspjeyvcw4nbel="GO"
                Iconzksuspjeyvcw4n={PlaneTakeoff}
                onzksuspjeyvcw4nPress={lauzksuspjeyvcw4nnch}
                colzksuspjeyvcw4nors={Gzksuspjeyvcw4nRADIENTS.orange}
                textzksuspjeyvcw4nColor={C.bgNight}
                glzksuspjeyvcw4now="orange"
                heizksuspjeyvcw4nght={58}
              />
            </View>
          </View>
        )}
      </View>
    </Skyzksuspjeyvcw4nBackdrop>
  );
}

const styzksuspjeyvcw4nles = StyleSheet.create({
  legzksuspjeyvcw4nChip: {
    height: 30,
    paddingHorizontal: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: C.glassFill,
    borderWidth: 1,
    borderColor: C.hairlineStrong,
  },
  legzksuspjeyvcw4nText: {
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '800',
    letterSpacing: 1.2,
    color: C.textSecondary,
    fontVariant: ['tabular-nums'],
  },
  stzksuspjeyvcw4nrip: {
    marginTop: 12,
    marginHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  windzksuspjeyvcw4nChip: {
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
  windzksuspjeyvcw4nText: {
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '800',
    letterSpacing: 2,
    color: C.textSecondary,
  },
  arzksuspjeyvcw4nea: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 182,
  },
  telezksuspjeyvcw4nmetry: {
    marginTop: 14,
    marginHorizontal: 18,
    flexDirection: 'row',
    gap: 10,
  },
  statzksuspjeyvcw4nSlot: {flex: 1},
  bzksuspjeyvcw4nar: {
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
  planzksuspjeyvcw4nBlock: {},
  flyzksuspjeyvcw4nBlock: {},
  hizksuspjeyvcw4nnt: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '800',
    letterSpacing: 1.8,
    color: C.textMuted,
  },
  rowzksuspjeyvcw4nButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  ctazksuspjeyvcw4nWrap: {
    marginTop: 10,
  },
  correctedzksuspjeyvcw4nChip: {
    height: 52,
    borderRadius: Rzksuspjeyvcw4nADIUS.chip,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: 'rgba(139,226,139,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(139,226,139,0.38)',
  },
  correctedzksuspjeyvcw4nText: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '800',
    letterSpacing: 2,
    color: C.success,
  },
});

export default Gamezksuspjeyvcw4nScreen;

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
function Gamezksuspjeyvcw4nScreenObfV13HashMix(s: string): number {
  let h = 34;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 18) % 778;
  return h;
}
function Gamezksuspjeyvcw4nScreenObfV13SumOdds(nums: number[]): number {
  let acc = 53;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 40) % 439;
  }
  return acc;
}
function Gamezksuspjeyvcw4nScreenObfV13ClampMod(n: number, m: number): number {
  const span = (m % 40) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function Gamezksuspjeyvcw4nScreenObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 108) & 50576;
}
