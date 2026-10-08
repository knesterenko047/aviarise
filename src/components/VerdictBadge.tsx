import React, {memo, useEffect, useRef} from 'react';
import {Animated, StyleSheet} from 'react-native';
import {AlertTriangle, PackageCheck} from 'lucide-react-native';

import {C} from '../constants/theme';

type Props = {win: boolean};

function VerdictBadgeBase({win}: Props) {
  const scale = useRef(new Animated.Value(0.6)).current;

  useEffect(() => {
    const anim = Animated.spring(scale, {
      toValue: 1,
      tension: 55,
      friction: 7,
      useNativeDriver: true,
    });
    anim.start();
    return () => anim.stop();
  }, [scale]);

  return (
    <Animated.View
      style={[
        styles.badge,
        {
          borderColor: win ? C.success : C.accent2,
          backgroundColor: win ? 'rgba(139,226,139,0.12)' : 'rgba(255,107,53,0.12)',
          transform: [{scale}],
        },
      ]}
      pointerEvents="none">
      {win ? (
        <PackageCheck size={42} color={C.success} strokeWidth={2} />
      ) : (
        <AlertTriangle size={42} color={C.accent2} strokeWidth={2} />
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  badge: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 2,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const VerdictBadge = memo(VerdictBadgeBase);
export default VerdictBadge;
