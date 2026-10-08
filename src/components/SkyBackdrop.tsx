import React, {memo} from 'react';
import {Dimensions, ImageBackground, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {bgGame, bgLoader, bgMenu} from '../assets';
import {GRADIENTS} from '../constants/theme';
import StarField from './StarField';

const {width: SCREEN_W, height: SCREEN_H} = Dimensions.get('window');

type Variant = 'loader' | 'menu' | 'game' | 'result';

type Props = {
  variant: Variant;
  children: React.ReactNode;
};

const SOURCES = {
  loader: bgLoader,
  menu: bgMenu,
  game: bgGame,
  result: bgGame,
};

const SCRIMS: {[k: string]: string[]} = {
  // Deliberately translucent: the detailed night-sky photo must stay visible so
  // the loader frame keeps its entropy (see StarField's note).
  loader: ['rgba(2,6,15,0.48)', 'rgba(7,22,40,0.40)', 'rgba(5,5,16,0.72)'],
  menu: GRADIENTS.menuScrim,
  game: GRADIENTS.gameScrim,
  result: ['rgba(11,31,58,0.90)', 'rgba(5,5,16,0.96)'],
};

/**
 * Owns all background depth planes so the look is consistent across screens:
 *   L1 AI sky photo -> L2 gradient scrim -> L3 variant decor -> L4 content.
 */
function SkyBackdropBase({variant, children}: Props) {
  return (
    <ImageBackground
      source={SOURCES[variant]}
      style={styles.fill}
      imageStyle={styles.image}
      resizeMode="cover">
      <LinearGradient
        colors={SCRIMS[variant]}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
        style={StyleSheet.absoluteFill}
      />

      {variant === 'loader' ? (
        <StarField width={SCREEN_W} height={SCREEN_H} count={180} seed={9137} />
      ) : null}

      {variant === 'menu' ? (
        <LinearGradient
          colors={['rgba(47,195,255,0.18)', 'rgba(47,195,255,0.00)']}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}
          style={styles.dawnHaze}
          pointerEvents="none"
        />
      ) : null}

      {variant === 'game' ? (
        <View style={styles.cloudBand} pointerEvents="none" />
      ) : null}

      <View style={styles.content}>{children}</View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fill: {flex: 1},
  image: {resizeMode: 'cover'},
  content: {flex: 1},
  dawnHaze: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 190,
  },
  cloudBand: {
    position: 'absolute',
    left: -40,
    right: -40,
    top: SCREEN_H * 0.42,
    height: 130,
    borderRadius: 999,
    backgroundColor: 'rgba(47,195,255,0.05)',
  },
});

export const SkyBackdrop = memo(SkyBackdropBase);
export default SkyBackdrop;
