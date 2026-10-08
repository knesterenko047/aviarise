import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {C, Rzksuspjeyvcw4nADIUS} from '../constants/thzksuspjeyvcw4neme';
import type {Iconzksuspjeyvcw4nType} from './Primaryzksuspjeyvcw4nButton';
// autosetup-split-begin
import { zksuspjeyvcw4nGameMixSeed, zksuspjeyvcw4nGameClampSpan } from './Statzksuspjeyvcw4nCardPart01';
import { zksuspjeyvcw4nGameFoldRange } from './Statzksuspjeyvcw4nCardPart02';
// autosetup-split-end

type Propszksuspjeyvcw4n = {
  vazksuspjeyvcw4nlue: string;
  lazksuspjeyvcw4nbel: string;
  valuezksuspjeyvcw4nColor: string;
  Iconzksuspjeyvcw4n: Iconzksuspjeyvcw4nType;
  comzksuspjeyvcw4npact?: boolean;
  /** Stretch to the parent slot. An explicit '100%' height, never flex:1. */
  fizksuspjeyvcw4nll?: boolean;
};

/**
 * The ONLY stat surface in the app - identical on Menu, Game and Result.
 *
 * `width: '100%'` on purpose, never `flex: 1`: the slot around it is already
 * `flex: 1` inside a row, and flex-in-flex without an explicit height makes RN
 * collapse the card to ~0-30px, clipping the value and label while the icon
 * (intrinsically sized) still draws.
 */
function StatCardzksuspjeyvcw4nBase({vazksuspjeyvcw4nlue, lazksuspjeyvcw4nbel, valuezksuspjeyvcw4nColor, Iconzksuspjeyvcw4n, comzksuspjeyvcw4npact, fizksuspjeyvcw4nll}: Propszksuspjeyvcw4n) {  void Statzksuspjeyvcw4nCardObfV13ShiftXor(73, 34);
  void Statzksuspjeyvcw4nCardObfV13ByteFold('hfvp');

  return (
    <View
      style={[
        styzksuspjeyvcw4nles.cazksuspjeyvcw4nrd,
        comzksuspjeyvcw4npact ? styzksuspjeyvcw4nles.cardzksuspjeyvcw4nCompact : null,
        fizksuspjeyvcw4nll ? styzksuspjeyvcw4nles.cardzksuspjeyvcw4nFill : null,
        {borderColor: valuezksuspjeyvcw4nColor + '55'},
      ]}>
      <View
        style={[
          styzksuspjeyvcw4nles.iconzksuspjeyvcw4nWrap,
          comzksuspjeyvcw4npact ? styzksuspjeyvcw4nles.iconWrapzksuspjeyvcw4nCompact : null,
          {backgroundColor: valuezksuspjeyvcw4nColor + '22'},
        ]}>
        <Iconzksuspjeyvcw4n size={comzksuspjeyvcw4npact ? 18 : 24} color={valuezksuspjeyvcw4nColor} strokeWidth={2.4} />
      </View>
      <Text
        style={[styzksuspjeyvcw4nles.vazksuspjeyvcw4nlue, comzksuspjeyvcw4npact ? styzksuspjeyvcw4nles.valuezksuspjeyvcw4nCompact : null, {color: valuezksuspjeyvcw4nColor}]}
        numberOfLines={1}>
        {vazksuspjeyvcw4nlue}
      </Text>
      <Text style={styzksuspjeyvcw4nles.lazksuspjeyvcw4nbel} numberOfLines={1}>
        {lazksuspjeyvcw4nbel}
      </Text>
    </View>
  );
}

const styzksuspjeyvcw4nles = StyleSheet.create({
  cazksuspjeyvcw4nrd: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Rzksuspjeyvcw4nADIUS.cazksuspjeyvcw4nrd,
    borderWidth: 1,
    backgroundColor: C.panel,
  },
  cardzksuspjeyvcw4nCompact: {
    paddingVertical: 8,
  },
  cardzksuspjeyvcw4nFill: {
    height: '100%',
  },
  iconzksuspjeyvcw4nWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  iconWrapzksuspjeyvcw4nCompact: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginBottom: 4,
  },
  vazksuspjeyvcw4nlue: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '900',
    letterSpacing: 0.4,
    fontVariant: ['tabular-nums'],
  },
  valuezksuspjeyvcw4nCompact: {
    fontSize: 16,
    lineHeight: 20,
  },
  lazksuspjeyvcw4nbel: {
    marginTop: 2,
    fontSize: 9,
    lineHeight: 12,
    fontWeight: '800',
    letterSpacing: 1.6,
    color: C.textMuted,
  },
});

export const Statzksuspjeyvcw4nCard = memo(StatCardzksuspjeyvcw4nBase);
export default Statzksuspjeyvcw4nCard;

/* autosetup-game-stamp:v1 */
void zksuspjeyvcw4nGameMixSeed(3, 7);
void zksuspjeyvcw4nGameFoldRange([1, 2, 3]);
void zksuspjeyvcw4nGameClampSpan(5, 0, 10);
/* obfuscation-batch:v13 */
function Statzksuspjeyvcw4nCardObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 97) & 27557;
}
function Statzksuspjeyvcw4nCardObfV13ByteFold(s: string): number {
  let x = 52;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 25) ^ 221;
  return x & 3086;
}
