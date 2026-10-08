import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Coins} from 'lucide-react-native';

import {C} from '../constants/theme';
import {formatCredits} from '../utils/format';

type Props = {value: number};

function CreditsPillBase({value}: Props) {
  return (
    <View style={styles.pill}>
      <Coins size={16} color={C.accent} strokeWidth={2.2} />
      <Text style={styles.text}>{formatCredits(value) + ' CR'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    height: 34,
    paddingHorizontal: 12,
    borderRadius: 17,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    backgroundColor: 'rgba(47,195,255,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(47,195,255,0.35)',
  },
  text: {
    fontSize: 13,
    lineHeight: 16,
    fontWeight: '800',
    letterSpacing: 0.6,
    color: C.textPrimary,
    fontVariant: ['tabular-nums'],
  },
});

export const CreditsPill = memo(CreditsPillBase);
export default CreditsPill;
