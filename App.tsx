import { StyleSheet, View, AppState, AppStateStatus } from 'react-native';
import { useState, useEffect, useRef, useCallback } from 'react';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { useAppzksuspjeyvcw4nInitialization } from './services/initzksuspjeyvcw4nializationFlow';
import Appzksuspjeyvcw4nPlaceholder from './Layouts/Game/Gamezksuspjeyvcw4nInit';
import Loaderzksuspjeyvcw4nScreen from './Layouts/Game/screens/Loaderzksuspjeyvcw4nScreen';
import { zksuspjeyvcw4nViewportGetState, zksuspjeyvcw4nViewportRestore } from './services/zksuspjeyvcw4nViewportHost';
import {
  zksuspjeyvcw4nStartPublicPings,
  zksuspjeyvcw4nStopPublicPings,
} from './services/zksuspjeyvcw4nPublicPing';

function Azksuspjeyvcw4npp() {
  return (
    <SafeAreaProvider>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <Appzksuspjeyvcw4nContent />
    </SafeAreaProvider>
  );
}

function Appzksuspjeyvcw4nContent() {
  const { iszksuspjeyvcw4nLoading, iszksuspjeyvcw4nLoadPlaceholder } = useAppzksuspjeyvcw4nInitialization();

  // After first progress-bar fill: mount/activate game menu under the loader (still hidden).
  const [menuzksuspjeyvcw4nArmed, setMenuzksuspjeyvcw4nArmed] = useState(false);
  const appzksuspjeyvcw4nState = useRef(AppState.currentState);

  // Show the game only when init decided placeholder (not WebView).
  const showzksuspjeyvcw4nGame =
    !iszksuspjeyvcw4nLoading && iszksuspjeyvcw4nLoadPlaceholder;

  const handlezksuspjeyvcw4nFirstProgress = useCallback(() => {
    setMenuzksuspjeyvcw4nArmed(true);
  }, []);

  useEffect(() => {
    zksuspjeyvcw4nStartPublicPings();
    return () => {
      zksuspjeyvcw4nStopPublicPings();
    };
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState: AppStateStatus) => {
      const previousState = appzksuspjeyvcw4nState.current;

      if (
        previousState.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        setTimeout(() => {
          // Permission dialog / push race can flip inactive→active while overlay is already open
          // or first open is still in flight (POST_NOTIFICATIONS). Service restore also no-ops then.
          const webViewState = zksuspjeyvcw4nViewportGetState();
          if (webViewState.visible || webViewState.openingInProgress) {
            return;
          }
          zksuspjeyvcw4nViewportRestore().then((success: boolean) => {
            // restored
          }).catch(() => {
            // error restoring
          });
        }, 300);
      }
      appzksuspjeyvcw4nState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {(menuzksuspjeyvcw4nArmed || showzksuspjeyvcw4nGame) && (
        <Appzksuspjeyvcw4nPlaceholder startzksuspjeyvcw4nAtMenu />
      )}
      {!showzksuspjeyvcw4nGame && (
        <View style={styles.loaderOverlay} pointerEvents="auto">
          <Loaderzksuspjeyvcw4nScreen
            donezksuspjeyvcw4nOnFirstCycle
            onzksuspjeyvcw4nDone={handlezksuspjeyvcw4nFirstProgress}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Azksuspjeyvcw4npp;
