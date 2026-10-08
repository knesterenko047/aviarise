import {
  FUEL_PER_CELL,
  FUEL_START,
  PAD_FUEL,
  STORM_RADIUS_CELLS,
  WIND_STEP,
} from '../constants/config';
import type {Dock, Level} from './levels';

export type LossReason = 'OUT OF FUEL' | 'CROSSED A STORM CELL' | 'MISSED THE DELIVERY WINDOW';

export type RouteResult = {
  legs: number;
  legCosts: number[];
  stormLeg: number;
  fuelLeft: number;
  burned: number;
  delivered: number;
  parcelTotal: number;
  padsUsed: number;
  win: boolean;
  efficiency: number;
  stars: number;
  reason: LossReason | null;
  windEnd: number;
};

export function cellDist(a: Dock, b: Dock): number {
  const dc = a.c - b.c;
  const dr = a.r - b.r;
  return Math.sqrt(dc * dc + dr * dr);
}

export function headingOf(a: Dock, b: Dock): number {
  const deg = (Math.atan2(b.r - a.r, b.c - a.c) * 180) / Math.PI;
  return (deg + 360) % 360;
}

export function angleDelta(a: number, b: number): number {
  const d = Math.abs(((a - b) % 360) + 360) % 360;
  return d > 180 ? 360 - d : d;
}

/** Tail wind is cheap, head wind is dear, anything across is neutral. */
export function windMultiplier(heading: number, wind: number): number {
  const d = angleDelta(heading, wind);
  if (d <= 60) {
    return 0.85;
  }
  if (d >= 120) {
    return 1.35;
  }
  return 1;
}

/** Does the straight leg a->b pass through a storm disc? Cell units. */
export function segmentHitsStorm(a: Dock, b: Dock, storms: Dock[]): boolean {
  const vx = b.c - a.c;
  const vy = b.r - a.r;
  const len2 = vx * vx + vy * vy;
  for (let i = 0; i < storms.length; i++) {
    const s = storms[i];
    let t = 0;
    if (len2 > 0) {
      t = ((s.c - a.c) * vx + (s.r - a.r) * vy) / len2;
      t = Math.max(0, Math.min(1, t));
    }
    const px = a.c + vx * t;
    const py = a.r + vy * t;
    const dx = px - s.c;
    const dy = py - s.r;
    if (Math.sqrt(dx * dx + dy * dy) < STORM_RADIUS_CELLS) {
      return true;
    }
  }
  return false;
}

export function legCost(a: Dock, b: Dock, wind: number): number {
  return Math.ceil(cellDist(a, b) * FUEL_PER_CELL * windMultiplier(headingOf(a, b), wind));
}

/** Deterministic scoring of a plotted route. Pure - no React, no side effects. */
export function evaluate(
  level: Level,
  route: number[],
  pads: number[],
  refund: number,
): RouteResult {
  let wind = level.windStart;
  let fuel = FUEL_START + refund;
  let burned = 0;
  let stormLeg = -1;
  const legCosts: number[] = [];

  for (let i = 1; i < route.length; i++) {
    const a = level.docks[route[i - 1]];
    const b = level.docks[route[i]];
    const cost = legCost(a, b, wind);
    legCosts.push(cost);
    burned += cost;
    fuel -= cost;
    if (pads.indexOf(route[i]) !== -1) {
      fuel += PAD_FUEL;
    }
    if (stormLeg < 0 && segmentHitsStorm(a, b, level.storms)) {
      stormLeg = i - 1;
    }
    wind = (wind + WIND_STEP) % 360;
  }

  const legs = Math.max(0, route.length - 1);
  let delivered = 0;
  for (let i = 0; i < level.parcels.length; i++) {
    if (route.indexOf(level.parcels[i]) !== -1) {
      delivered += 1;
    }
  }

  const complete = delivered === level.parcels.length && legs <= level.maxLegs && legs > 0;
  const win = complete && fuel > 0 && stormLeg < 0;

  let reason: LossReason | null = null;
  if (!win) {
    if (stormLeg >= 0) {
      reason = 'CROSSED A STORM CELL';
    } else if (fuel <= 0) {
      reason = 'OUT OF FUEL';
    } else {
      reason = 'MISSED THE DELIVERY WINDOW';
    }
  }

  const efficiency = Math.max(0, Math.round((fuel / FUEL_START) * 100));
  const stars = !win ? 0 : efficiency >= 50 ? 3 : efficiency >= 25 ? 2 : 1;

  return {
    legs,
    legCosts,
    stormLeg,
    fuelLeft: Math.max(0, fuel),
    burned,
    delivered,
    parcelTotal: level.parcels.length,
    padsUsed: pads.length,
    win,
    efficiency,
    stars,
    reason,
    windEnd: wind,
  };
}

/** True when the plotted route is already a legal, launchable flight. */
export function routeIsLaunchable(level: Level, route: number[], pads: number[]): boolean {
  return evaluate(level, route, pads, 0).win;
}

export function creditsFor(level: Level, res: RouteResult): number {
  if (!res.win) {
    return 0;
  }
  return Math.min(level.reward, 60 + res.stars * 40);
}
