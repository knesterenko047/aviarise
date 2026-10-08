import React, {memo, useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';

import {C} from '../constants/theme';

type Props = {stars: number};

const SLOTS = [0, 1, 2];

/** Star glyph is one of the few Unicode marks Roboto renders reliably. */
function StarsRowBase({stars}: Props) {
  const a0 = useRef(new Animated.Value(0)).current;
  const a1 = useRef(new Animated.Value(0)).current;
  const a2 = useRef(new Animated.Value(0)).current;
  const vals = [a0, a1, a2];

  useEffect(() => {
    const anim = Animated.stagger(
      120,
      vals.map(v =>
        Animated.sequence([
          Animated.timing(v, {toValue: 1.18, duration: 170, useNativeDriver: true}),
          Animated.timing(v, {toValue: 1, duration: 110, useNativeDriver: true}),
        ]),
      ),
    );
    anim.start();
    return () => anim.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.row}>
      {SLOTS.map(i => (
        <Animated.View key={'star' + i} style={{transform: [{scale: vals[i]}]}}>
          <Text style={[styles.star, {color: i < stars ? C.accent : 'rgba(244,247,250,0.18)'}]}>
            {'★'}
          </Text>
        </Animated.View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  star: {
    fontSize: 28,
    lineHeight: 34,
  },
});

export const StarsRow = memo(StarsRowBase);
export default StarsRow;
