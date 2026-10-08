import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {C, RADIUS} from '../constants/theme';
import type {IconType} from './PrimaryButton';

type Props = {
  value: string;
  label: string;
  valueColor: string;
  Icon: IconType;
  compact?: boolean;
  /** Stretch to the parent slot. An explicit '100%' height, never flex:1. */
  fill?: boolean;
};

/**
 * The ONLY stat surface in the app - identical on Menu, Game and Result.
 *
 * `width: '100%'` on purpose, never `flex: 1`: the slot around it is already
 * `flex: 1` inside a row, and flex-in-flex without an explicit height makes RN
 * collapse the card to ~0-30px, clipping the value and label while the icon
 * (intrinsically sized) still draws.
 */
function StatCardBase({value, label, valueColor, Icon, compact, fill}: Props) {
  return (
    <View
      style={[
        styles.card,
        compact ? styles.cardCompact : null,
        fill ? styles.cardFill : null,
        {borderColor: valueColor + '55'},
      ]}>
      <View
        style={[
          styles.iconWrap,
          compact ? styles.iconWrapCompact : null,
          {backgroundColor: valueColor + '22'},
        ]}>
        <Icon size={compact ? 18 : 24} color={valueColor} strokeWidth={2.4} />
      </View>
      <Text
        style={[styles.value, compact ? styles.valueCompact : null, {color: valueColor}]}
        numberOfLines={1}>
        {value}
      </Text>
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RADIUS.card,
    borderWidth: 1,
    backgroundColor: C.panel,
  },
  cardCompact: {
    paddingVertical: 8,
  },
  cardFill: {
    height: '100%',
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  iconWrapCompact: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginBottom: 4,
  },
  value: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '900',
    letterSpacing: 0.4,
    fontVariant: ['tabular-nums'],
  },
  valueCompact: {
    fontSize: 16,
    lineHeight: 20,
  },
  label: {
    marginTop: 2,
    fontSize: 9,
    lineHeight: 12,
    fontWeight: '800',
    letterSpacing: 1.6,
    color: C.textMuted,
  },
});

export const StatCard = memo(StatCardBase);
export default StatCard;
