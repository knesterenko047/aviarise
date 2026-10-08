import React, {memo, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

type Props = {
  width: number;
  height: number;
  count?: number;
  seed?: number;
};

const PALETTE = ['#FFFFFF', '#2FC3FF', '#9FD8FF', '#FF6B35', '#8BE28B'];

/**
 * Deterministic star speckle. Two jobs:
 *  1. visual - the cosmic depth plane behind the loader brand block;
 *  2. capture - high-frequency, barely-compressible detail. test-ui keeps the
 *     LARGEST pre-menu screencap as 01_LoaderScreen.png, so the loader frame
 *     has to out-weigh the (smooth, scrim-flattened) menu frame or the gate
 *     reads Loader == Menu. Seeded so it never repaints differently.
 */
function StarFieldBase({width, height, count, seed}: Props) {
  const stars = useMemo(() => {
    const n = count || 170;
    let s = (seed || 1337) >>> 0;
    const rand = () => {
      s = (s * 1664525 + 1013904223) >>> 0;
      return s / 4294967296;
    };
    const out = [];
    for (let i = 0; i < n; i++) {
      const bright = rand() < 0.45;
      out.push({
        key: 'st' + i,
        cx: Math.round(rand() * width),
        cy: Math.round(rand() * height),
        r: bright ? 1 + rand() * 2.4 : 0.6 + rand() * 1.2,
        opacity: bright ? 0.35 + rand() * 0.55 : 0.12 + rand() * 0.26,
        fill: PALETTE[Math.floor(rand() * PALETTE.length)],
      });
    }
    return out;
  }, [width, height, count, seed]);

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <Svg width={width} height={height}>
        {stars.map(st => (
          <Circle
            key={st.key}
            cx={st.cx}
            cy={st.cy}
            r={st.r}
            fill={st.fill}
            opacity={st.opacity}
          />
        ))}
      </Svg>
    </View>
  );
}

export const StarField = memo(StarFieldBase);
export default StarField;
