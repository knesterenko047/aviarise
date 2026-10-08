import React, {memo, useMemo} from 'react';
import {Animated, Image, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Circle, Line, Polyline} from 'react-native-svg';
import {Zap} from 'lucide-react-native';

import {spriteAirship} from '../assets';
import {
  BOARD_BORDER,
  BOARD_H,
  BOARD_PAD,
  BOARD_W,
  CELL,
  COLS,
  DOCK_SIZE,
  INNER_H,
  INNER_W,
  ROWS,
  cellToPx,
} from '../game/boardGeometry';
import type {Level} from '../game/levels';
import {STORM_RADIUS_CELLS} from '../constants/config';
import {C, GRADIENTS} from '../constants/theme';
import DockNode from './DockNode';
import type {DockKind} from './DockNode';

type Props = {
  level: Level;
  route: number[];
  pads: number[];
  wind: number;
  flying: boolean;
  flightT: Animated.Value | null;
  onDockPress?: (index: number) => void;
};

const AIRSHIP = 38;
const DRIFT_PX = 11;

function unwrap(angles: number[]): number[] {
  const out: number[] = [];
  let prev = 0;
  for (let i = 0; i < angles.length; i++) {
    let a = angles[i];
    if (i === 0) {
      prev = a;
    } else {
      while (a - prev > 180) {
        a -= 360;
      }
      while (prev - a > 180) {
        a += 360;
      }
    }
    prev = a;
    out.push(a);
  }
  return out;
}

function SkyBoardBase({level, route, pads, wind, flying, flightT, onDockPress}: Props) {
  const points = useMemo(
    () => route.map(i => cellToPx(level.docks[i].c, level.docks[i].r)),
    [route, level],
  );

  const polyline = useMemo(
    () => points.map(p => p.x + ',' + p.y).join(' '),
    [points],
  );

  const ghost = useMemo(() => {
    const rad = (wind * Math.PI) / 180;
    const dx = Math.cos(rad) * DRIFT_PX;
    const dy = Math.sin(rad) * DRIFT_PX;
    return points.map(p => p.x + dx + ',' + (p.y + dy)).join(' ');
  }, [points, wind]);

  // Even-speed traversal: break the 0..1 flight clock on cumulative length.
  const flightPath = useMemo(() => {
    if (points.length < 2) {
      return null;
    }
    const segLen: number[] = [];
    let total = 0;
    for (let i = 1; i < points.length; i++) {
      const d = Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y);
      segLen.push(d);
      total += d;
    }
    if (total <= 0) {
      return null;
    }
    const stops: number[] = [0];
    let acc = 0;
    for (let i = 0; i < segLen.length; i++) {
      acc += segLen[i];
      stops.push(Math.min(1, acc / total));
    }
    // Animated.interpolate needs a strictly increasing inputRange.
    for (let i = 1; i < stops.length; i++) {
      if (stops[i] <= stops[i - 1]) {
        stops[i] = stops[i - 1] + 0.0001;
      }
    }
    const heads: number[] = [];
    for (let i = 1; i < points.length; i++) {
      heads.push(
        (Math.atan2(points[i].y - points[i - 1].y, points[i].x - points[i - 1].x) * 180) / Math.PI,
      );
    }
    heads.push(heads[heads.length - 1]);
    return {
      stops,
      xs: points.map(p => p.x - AIRSHIP / 2),
      ys: points.map(p => p.y - AIRSHIP / 2),
      rots: unwrap(heads).map(a => String(Math.round(a * 0.45)) + 'deg'),
    };
  }, [points]);

  const gridLines = useMemo(() => {
    const out: {key: string; x1: number; y1: number; x2: number; y2: number}[] = [];
    for (let c = 1; c < COLS; c++) {
      out.push({key: 'v' + c, x1: c * CELL, y1: 0, x2: c * CELL, y2: INNER_H});
    }
    for (let r = 1; r < ROWS; r++) {
      out.push({key: 'h' + r, x1: 0, y1: r * CELL, x2: INNER_W, y2: r * CELL});
    }
    return out;
  }, []);

  const routeColor = flying ? C.success : C.accent;
  const glowColor = flying ? 'rgba(139,226,139,0.26)' : 'rgba(47,195,255,0.26)';

  return (
    <View style={styles.frame}>
      <LinearGradient
        colors={GRADIENTS.board}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.inner}>
        <Svg width={INNER_W} height={INNER_H} style={StyleSheet.absoluteFill}>
          {gridLines.map(g => (
            <Line
              key={g.key}
              x1={g.x1}
              y1={g.y1}
              x2={g.x2}
              y2={g.y2}
              stroke="rgba(47,195,255,0.08)"
              strokeWidth={1}
            />
          ))}

          {level.storms.map((s, i) => {
            const p = cellToPx(s.c, s.r);
            return (
              <Circle
                key={'storm' + i}
                cx={p.x}
                cy={p.y}
                r={CELL * STORM_RADIUS_CELLS}
                fill="rgba(255,107,53,0.13)"
                stroke={C.accent2}
                strokeWidth={1.5}
                strokeDasharray="5 5"
              />
            );
          })}

          {points.length > 1 && !flying ? (
            <Polyline
              points={ghost}
              fill="none"
              stroke="rgba(244,247,250,0.30)"
              strokeWidth={2}
              strokeDasharray="6 7"
              strokeLinecap="round"
            />
          ) : null}

          {points.length > 1 ? (
            <Polyline
              points={polyline}
              fill="none"
              stroke={glowColor}
              strokeWidth={9}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : null}

          {points.length > 1 ? (
            <Polyline
              points={polyline}
              fill="none"
              stroke={routeColor}
              strokeWidth={3.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : null}
        </Svg>

        {level.storms.map((s, i) => {
          const p = cellToPx(s.c, s.r);
          return (
            <View
              key={'bolt' + i}
              style={[styles.bolt, {left: p.x - 9, top: p.y - 9}]}
              pointerEvents="none">
              <Zap size={18} color={C.accent2} strokeWidth={2.2} />
            </View>
          );
        })}

        {level.docks.map((d, i) => {
          const p = cellToPx(d.c, d.r);
          const kind: DockKind =
            i === 0 ? 'home' : level.parcels.indexOf(i) !== -1 ? 'parcel' : 'plain';
          return (
            <DockNode
              key={'dock' + i}
              index={i}
              left={p.x - DOCK_SIZE / 2}
              top={p.y - DOCK_SIZE / 2}
              kind={kind}
              order={route.indexOf(i) + 1}
              hasPad={pads.indexOf(i) !== -1}
              disabled={flying || !onDockPress}
              onPress={onDockPress}
            />
          );
        })}

        {flying && flightT && flightPath ? (
          <Animated.View
            style={[
              styles.airship,
              {
                transform: [
                  {
                    translateX: flightT.interpolate({
                      inputRange: flightPath.stops,
                      outputRange: flightPath.xs,
                    }),
                  },
                  {
                    translateY: flightT.interpolate({
                      inputRange: flightPath.stops,
                      outputRange: flightPath.ys,
                    }),
                  },
                  {
                    rotate: flightT.interpolate({
                      inputRange: flightPath.stops,
                      outputRange: flightPath.rots,
                    }),
                  },
                ],
              },
            ]}
            pointerEvents="none">
            <Image source={spriteAirship} style={styles.airshipImg} />
          </Animated.View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    width: BOARD_W,
    height: BOARD_H,
    padding: BOARD_PAD,
    borderWidth: BOARD_BORDER,
    borderColor: 'rgba(47,195,255,0.28)',
    borderRadius: 22,
    alignSelf: 'center',
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 18,
    shadowOffset: {width: 0, height: 10},
    elevation: 8,
  },
  inner: {
    width: INNER_W,
    height: INNER_H,
  },
  bolt: {
    position: 'absolute',
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  airship: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: AIRSHIP,
    height: AIRSHIP,
  },
  airshipImg: {
    width: AIRSHIP,
    height: AIRSHIP,
    resizeMode: 'contain',
  },
});

export const SkyBoard = memo(SkyBoardBase);
export default SkyBoard;
