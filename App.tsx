/**
 * Aviarise - sky courier route planner.
 *
 * App.tsx is the state machine ONLY: Loader -> Menu -> Game -> Result -> Menu.
 * Screens are conditional renders inside one root view - no navigation library.
 */
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, BackHandler, StyleSheet} from 'react-native';

import AppShell from './src/components/AppShell';
import GameScreen from './src/screens/GameScreen';
import LoaderScreen from './src/screens/LoaderScreen';
import MenuScreen from './src/screens/MenuScreen';
import ResultScreen from './src/screens/ResultScreen';
import {SCREEN_FADE_MS, START_CREDITS} from './src/constants/config';
import {levelAt} from './src/game/levels';
import {creditsFor} from './src/game/routeEngine';
import type {RouteResult} from './src/game/routeEngine';

type Screen = 'loader' | 'menu' | 'game' | 'result';

function App(): React.JSX.Element {
  const [screen, setScreen] = useState<Screen>('loader');
  const [levelIndex, setLevelIndex] = useState(0);
  const [credits, setCredits] = useState(START_CREDITS);
  const [result, setResult] = useState<RouteResult | null>(null);
  const [earned, setEarned] = useState(0);

  const fade = useRef(new Animated.Value(1)).current;
  const contract = levelAt(levelIndex);

  useEffect(() => {
    fade.setValue(0);
    const anim = Animated.timing(fade, {
      toValue: 1,
      duration: SCREEN_FADE_MS,
      useNativeDriver: true,
    });
    anim.start();
    return () => anim.stop();
  }, [screen, fade]);

  const goMenu = useCallback(() => setScreen('menu'), []);
  const goGame = useCallback(() => setScreen('game'), []);

  const handleLoaderDone = useCallback(() => setScreen('menu'), []);

  const handleFinish = useCallback(
    (res: RouteResult) => {
      const won = creditsFor(contract, res);
      setEarned(won);
      setCredits(prev => prev + won);
      setResult(res);
      setScreen('result');
    },
    [contract],
  );

  const handlePlayAgain = useCallback(() => {
    setLevelIndex(prev => prev + 1);
    setResult(null);
    setScreen('game');
  }, []);

  // Android back: never let the capture agent (or a player) bounce out to the
  // launcher from the hub - swallow it there, step back one screen elsewhere.
  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      if (screen === 'game' || screen === 'result') {
        setScreen('menu');
        return true;
      }
      return true;
    });
    return () => sub.remove();
  }, [screen]);

  return (
    <AppShell>
      <Animated.View style={[styles.layer, {opacity: fade}]} pointerEvents="box-none">
        {screen === 'loader' ? <LoaderScreen onDone={handleLoaderDone} /> : null}

        {screen === 'menu' ? (
          <MenuScreen credits={credits} contract={contract} onPlay={goGame} />
        ) : null}

        {screen === 'game' ? (
          <GameScreen contract={contract} onBack={goMenu} onFinish={handleFinish} />
        ) : null}

        {screen === 'result' && result ? (
          <ResultScreen
            contract={contract}
            result={result}
            credits={credits}
            earned={earned}
            onPlayAgain={handlePlayAgain}
            onMenu={goMenu}
          />
        ) : null}
      </Animated.View>
    </AppShell>
  );
}

const styles = StyleSheet.create({
  layer: {flex: 1},
});

export default App;
