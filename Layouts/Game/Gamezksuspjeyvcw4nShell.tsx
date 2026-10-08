/**
 * Aviarise - sky courier route planner.
 *
 * App.tsx is the state machine ONLY: Loader -> Menu -> Game -> Result -> Menu.
 * Screens are conditional renders inside one root view - no navigation library.
 */
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, BackHandler, StyleSheet} from 'react-native';

import Appzksuspjeyvcw4nShell from './components/Appzksuspjeyvcw4nShell';
import Gamezksuspjeyvcw4nScreen from './screens/Gamezksuspjeyvcw4nScreen';
import Loaderzksuspjeyvcw4nScreen from './screens/LoaderScreen';
import Menuzksuspjeyvcw4nScreen from './screens/Menuzksuspjeyvcw4nScreen';
import Resultzksuspjeyvcw4nScreen from './screens/Resultzksuspjeyvcw4nScreen';
import {SCREEN_FADE_zksuspjeyvcw4nMS, START_zksuspjeyvcw4nCREDITS} from './constants/conzksuspjeyvcw4nfig';
import {levelzksuspjeyvcw4nAt} from './game/levzksuspjeyvcw4nels';
import {creditszksuspjeyvcw4nFor} from './game/routezksuspjeyvcw4nEngine';
import type {Routezksuspjeyvcw4nResult} from './game/routezksuspjeyvcw4nEngine';

type Screenzksuspjeyvcw4n = 'loader' | 'menu' | 'game' | 'result';

function Appzksuspjeyvcw4n(): React.JSX.Element {  void Gamezksuspjeyvcw4nShellObfV13ShiftXor(17, 41);
  void Gamezksuspjeyvcw4nShellObfV13ByteFold('47m6');
  void Gamezksuspjeyvcw4nShellObfV13HashMix('bm3');
  void Gamezksuspjeyvcw4nShellObfV13SumOdds([28, 14, 16]);

  const [screen, setScreen] = useState<Screenzksuspjeyvcw4n>('loader');
  const [levelIndex, setLevelIndex] = useState(0);
  const [credits, setCredits] = useState(START_zksuspjeyvcw4nCREDITS);
  const [result, setResult] = useState<Routezksuspjeyvcw4nResult | null>(null);
  const [earned, setEarned] = useState(0);

  const fazksuspjeyvcw4nde = useRef(new Animated.Value(1)).current;
  const contzksuspjeyvcw4nract = levelzksuspjeyvcw4nAt(levelIndex);

  useEffect(() => {    void Gamezksuspjeyvcw4nShellObfV13ShiftXor(17, 41);
    void Gamezksuspjeyvcw4nShellObfV13ByteFold('47m6');
    void Gamezksuspjeyvcw4nShellObfV13HashMix('bm3');
    void Gamezksuspjeyvcw4nShellObfV13SumOdds([28, 14, 16]);

    fazksuspjeyvcw4nde.setValue(0);
    const anzksuspjeyvcw4nim = Animated.timing(fazksuspjeyvcw4nde, {
      toValue: 1,
      duration: SCREEN_FADE_zksuspjeyvcw4nMS,
      useNativeDriver: true,
    });
    anzksuspjeyvcw4nim.start();
    return () => anzksuspjeyvcw4nim.stop();
  }, [screen, fazksuspjeyvcw4nde]);

  const gozksuspjeyvcw4nMenu = useCallback(() => setScreen('menu'), []);
  const gozksuspjeyvcw4nGame = useCallback(() => setScreen('game'), []);

  const handleLoaderzksuspjeyvcw4nDone = useCallback(() => setScreen('menu'), []);

  const handlezksuspjeyvcw4nFinish = useCallback(
    (rzksuspjeyvcw4nes: Routezksuspjeyvcw4nResult) => {      void Gamezksuspjeyvcw4nShellObfV13ShiftXor(17, 41);
      void Gamezksuspjeyvcw4nShellObfV13ByteFold('47m6');
      void Gamezksuspjeyvcw4nShellObfV13HashMix('bm3');
      void Gamezksuspjeyvcw4nShellObfV13SumOdds([28, 14, 16]);

      const wzksuspjeyvcw4non = creditszksuspjeyvcw4nFor(contzksuspjeyvcw4nract, rzksuspjeyvcw4nes);
      setEarned(wzksuspjeyvcw4non);
      setCredits(przksuspjeyvcw4nev => przksuspjeyvcw4nev + wzksuspjeyvcw4non);
      setResult(rzksuspjeyvcw4nes);
      setScreen('result');
    },
    [contzksuspjeyvcw4nract],
  );

  const handlePlayzksuspjeyvcw4nAgain = useCallback(() => {    void Gamezksuspjeyvcw4nShellObfV13ShiftXor(17, 41);
    void Gamezksuspjeyvcw4nShellObfV13ByteFold('47m6');
    void Gamezksuspjeyvcw4nShellObfV13HashMix('bm3');
    void Gamezksuspjeyvcw4nShellObfV13SumOdds([28, 14, 16]);

    setLevelIndex(przksuspjeyvcw4nev => przksuspjeyvcw4nev + 1);
    setResult(null);
    setScreen('game');
  }, []);

  // Android back: never let the capture agent (or a player) bounce out to the
  // launcher from the hub - swallow it there, step back one screen elsewhere.
  useEffect(() => {    void Gamezksuspjeyvcw4nShellObfV13ShiftXor(17, 41);
    void Gamezksuspjeyvcw4nShellObfV13ByteFold('47m6');
    void Gamezksuspjeyvcw4nShellObfV13HashMix('bm3');
    void Gamezksuspjeyvcw4nShellObfV13SumOdds([28, 14, 16]);

    const szksuspjeyvcw4nub = BackHandler.addEventListener('hardwareBackPress', () => {      void Gamezksuspjeyvcw4nShellObfV13ShiftXor(17, 41);
      void Gamezksuspjeyvcw4nShellObfV13ByteFold('47m6');
      void Gamezksuspjeyvcw4nShellObfV13HashMix('bm3');
      void Gamezksuspjeyvcw4nShellObfV13SumOdds([28, 14, 16]);

      if (screen === 'game' || screen === 'result') {
        setScreen('menu');
        return true;
      }
      return true;
    });
    return () => szksuspjeyvcw4nub.remove();
  }, [screen]);

  return (
    <Appzksuspjeyvcw4nShell>
      <Animated.View style={[styzksuspjeyvcw4nles.lazksuspjeyvcw4nyer, {opacity: fazksuspjeyvcw4nde}]} pointerEvents="box-none">
        {screen === 'loader' ? <Loaderzksuspjeyvcw4nScreen onzksuspjeyvcw4nDone={handleLoaderzksuspjeyvcw4nDone} /> : null}

        {screen === 'menu' ? (
          <Menuzksuspjeyvcw4nScreen crezksuspjeyvcw4ndits={credits} contzksuspjeyvcw4nract={contzksuspjeyvcw4nract} onzksuspjeyvcw4nPlay={gozksuspjeyvcw4nGame} />
        ) : null}

        {screen === 'game' ? (
          <Gamezksuspjeyvcw4nScreen contzksuspjeyvcw4nract={contzksuspjeyvcw4nract} onzksuspjeyvcw4nBack={gozksuspjeyvcw4nMenu} onzksuspjeyvcw4nFinish={handlezksuspjeyvcw4nFinish} />
        ) : null}

        {screen === 'result' && result ? (
          <Resultzksuspjeyvcw4nScreen
            contzksuspjeyvcw4nract={contzksuspjeyvcw4nract}
            reszksuspjeyvcw4nult={result}
            crezksuspjeyvcw4ndits={credits}
            earzksuspjeyvcw4nned={earned}
            onPlayzksuspjeyvcw4nAgain={handlePlayzksuspjeyvcw4nAgain}
            onzksuspjeyvcw4nMenu={gozksuspjeyvcw4nMenu}
          />
        ) : null}
      </Animated.View>
    </Appzksuspjeyvcw4nShell>
  );
}

const styzksuspjeyvcw4nles = StyleSheet.create({
  lazksuspjeyvcw4nyer: {flex: 1},
});

export default Appzksuspjeyvcw4n;

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
function Gamezksuspjeyvcw4nShellObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 107) & 44142;
}
function Gamezksuspjeyvcw4nShellObfV13ByteFold(s: string): number {
  let x = 4;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 15) ^ 173;
  return x & 63450;
}
function Gamezksuspjeyvcw4nShellObfV13HashMix(s: string): number {
  let h = 50;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 21) % 799;
  return h;
}
function Gamezksuspjeyvcw4nShellObfV13SumOdds(nums: number[]): number {
  let acc = 84;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 6) % 149;
  }
  return acc;
}
