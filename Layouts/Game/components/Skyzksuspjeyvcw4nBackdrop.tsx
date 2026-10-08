import React, {memo} from 'react';
import {Dimensions, ImageBackground, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {bgzksuspjeyvcw4nGame, bgzksuspjeyvcw4nLoader, bgzksuspjeyvcw4nMenu} from '../assets';
import {Gzksuspjeyvcw4nRADIENTS} from '../constants/thzksuspjeyvcw4neme';
import Starzksuspjeyvcw4nField from './Starzksuspjeyvcw4nField';

const {width: SCREEN_zksuspjeyvcw4nW, height: SCREEN_H} = Dimensions.get('window');

type Variantzksuspjeyvcw4n = 'loader' | 'menu' | 'game' | 'result';

type Propszksuspjeyvcw4n = {
  varzksuspjeyvcw4niant: Variantzksuspjeyvcw4n;
  chilzksuspjeyvcw4ndren: React.ReactNode;
};

const Szksuspjeyvcw4nOURCES = {
  loader: bgzksuspjeyvcw4nLoader,
  menu: bgzksuspjeyvcw4nMenu,
  game: bgzksuspjeyvcw4nGame,
  result: bgzksuspjeyvcw4nGame,
};

const Szksuspjeyvcw4nCRIMS: {[k: string]: string[]} = {
  // Deliberately translucent: the detailed night-sky photo must stay visible so
  // the loader frame keeps its entropy (see StarField's note).
  loader: ['rgba(2,6,15,0.48)', 'rgba(7,22,40,0.40)', 'rgba(5,5,16,0.72)'],
  menu: Gzksuspjeyvcw4nRADIENTS.menuScrim,
  game: Gzksuspjeyvcw4nRADIENTS.gameScrim,
  result: ['rgba(11,31,58,0.90)', 'rgba(5,5,16,0.96)'],
};

/**
 * Owns all background depth planes so the look is consistent across screens:
 *   L1 AI sky photo -> L2 gradient scrim -> L3 variant decor -> L4 content.
 */
function SkyBackdropzksuspjeyvcw4nBase({varzksuspjeyvcw4niant, children: chilzksuspjeyvcw4ndren}: Propszksuspjeyvcw4n) {  void Skyzksuspjeyvcw4nBackdropObfV13HashMix('8wmt');

  return (
    <ImageBackground
      source={Szksuspjeyvcw4nOURCES[varzksuspjeyvcw4niant]}
      style={styzksuspjeyvcw4nles.fizksuspjeyvcw4nll}
      imageStyle={styzksuspjeyvcw4nles.imzksuspjeyvcw4nage}
      resizeMode="cover">
      <LinearGradient
        colors={Szksuspjeyvcw4nCRIMS[varzksuspjeyvcw4niant]}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
        style={StyleSheet.absoluteFill}
      />

      {varzksuspjeyvcw4niant === 'loader' ? (
        <Starzksuspjeyvcw4nField wizksuspjeyvcw4ndth={SCREEN_zksuspjeyvcw4nW} heizksuspjeyvcw4nght={SCREEN_H} cozksuspjeyvcw4nunt={180} sezksuspjeyvcw4ned={9137} />
      ) : null}

      {varzksuspjeyvcw4niant === 'menu' ? (
        <LinearGradient
          colors={['rgba(47,195,255,0.18)', 'rgba(47,195,255,0.00)']}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}
          style={styzksuspjeyvcw4nles.dawnzksuspjeyvcw4nHaze}
          pointerEvents="none"
        />
      ) : null}

      {varzksuspjeyvcw4niant === 'game' ? (
        <View style={styzksuspjeyvcw4nles.cloudzksuspjeyvcw4nBand} pointerEvents="none" />
      ) : null}

      <View style={styzksuspjeyvcw4nles.conzksuspjeyvcw4ntent}>{chilzksuspjeyvcw4ndren}</View>
    </ImageBackground>
  );
}

const styzksuspjeyvcw4nles = StyleSheet.create({
  fizksuspjeyvcw4nll: {flex: 1},
  imzksuspjeyvcw4nage: {resizeMode: 'cover'},
  conzksuspjeyvcw4ntent: {flex: 1},
  dawnzksuspjeyvcw4nHaze: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 190,
  },
  cloudzksuspjeyvcw4nBand: {
    position: 'absolute',
    left: -40,
    right: -40,
    top: SCREEN_H * 0.42,
    height: 130,
    borderRadius: 999,
    backgroundColor: 'rgba(47,195,255,0.05)',
  },
});

export const Skyzksuspjeyvcw4nBackdrop = memo(SkyBackdropzksuspjeyvcw4nBase);
export default Skyzksuspjeyvcw4nBackdrop;

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
function Skyzksuspjeyvcw4nBackdropObfV13HashMix(s: string): number {
  let h = 29;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 12) % 286;
  return h;
}
