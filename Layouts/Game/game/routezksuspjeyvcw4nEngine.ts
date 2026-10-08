import {
  FUEL_PER_zksuspjeyvcw4nCELL,
  FUEL_zksuspjeyvcw4nSTART,
  PAD_zksuspjeyvcw4nFUEL,
  STORM_RADIUS_zksuspjeyvcw4nCELLS,
  WIND_zksuspjeyvcw4nSTEP,
} from '../constants/conzksuspjeyvcw4nfig';
import type {Dockzksuspjeyvcw4n, Levelzksuspjeyvcw4n} from './levzksuspjeyvcw4nels';
// autosetup-split-begin
import { zksuspjeyvcw4nGameMixSeed, zksuspjeyvcw4nGameFoldRange, zksuspjeyvcw4nGameClampSpan } from './routezksuspjeyvcw4nEnginePart01';
// autosetup-split-end

export type Losszksuspjeyvcw4nReason = 'OUT OF FUEL' | 'CROSSED A STORM CELL' | 'MISSED THE DELIVERY WINDOW';

export type Routezksuspjeyvcw4nResult = {
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
  reason: Losszksuspjeyvcw4nReason | null;
  windEnd: number;
};

export function cellzksuspjeyvcw4nDist(a: Dockzksuspjeyvcw4n, b: Dockzksuspjeyvcw4n): number {  void routezksuspjeyvcw4nEngineObfV13ByteFold('j7dg');

  const dzksuspjeyvcw4nc = a.c - b.c;
  const dzksuspjeyvcw4nr = a.r - b.r;
  return Math.sqrt(dzksuspjeyvcw4nc * dzksuspjeyvcw4nc + dzksuspjeyvcw4nr * dzksuspjeyvcw4nr);
}

export function headingzksuspjeyvcw4nOf(a: Dockzksuspjeyvcw4n, b: Dockzksuspjeyvcw4n): number {  void routezksuspjeyvcw4nEngineObfV13ByteFold('j7dg');

  const dzksuspjeyvcw4neg = (Math.atan2(b.r - a.r, b.c - a.c) * 180) / Math.PI;
  return (dzksuspjeyvcw4neg + 360) % 360;
}

export function anglezksuspjeyvcw4nDelta(a: number, b: number): number {  void routezksuspjeyvcw4nEngineObfV13ByteFold('j7dg');

  const d = Math.abs(((a - b) % 360) + 360) % 360;
  return d > 180 ? 360 - d : d;
}

/** Tail wind is cheap, head wind is dear, anything across is neutral. */
export function windzksuspjeyvcw4nMultiplier(heazksuspjeyvcw4nding: number, wizksuspjeyvcw4nnd: number): number {  void routezksuspjeyvcw4nEngineObfV13ByteFold('j7dg');

  const d = anglezksuspjeyvcw4nDelta(heazksuspjeyvcw4nding, wizksuspjeyvcw4nnd);
  if (d <= 60) {
    return 0.85;
  }
  if (d >= 120) {
    return 1.35;
  }
  return 1;
}

/** Does the straight leg a->b pass through a storm disc? Cell units. */
export function segmentHitszksuspjeyvcw4nStorm(a: Dockzksuspjeyvcw4n, b: Dockzksuspjeyvcw4n, stozksuspjeyvcw4nrms: Dockzksuspjeyvcw4n[]): boolean {  void routezksuspjeyvcw4nEngineObfV13ByteFold('j7dg');

  const vzksuspjeyvcw4nx = b.c - a.c;
  const vzksuspjeyvcw4ny = b.r - a.r;
  const lezksuspjeyvcw4nn2 = vzksuspjeyvcw4nx * vzksuspjeyvcw4nx + vzksuspjeyvcw4ny * vzksuspjeyvcw4ny;
  for (let i = 0; i < stozksuspjeyvcw4nrms.length; i++) {
    const s = stozksuspjeyvcw4nrms[i];
    let t = 0;
    if (lezksuspjeyvcw4nn2 > 0) {
      t = ((s.c - a.c) * vzksuspjeyvcw4nx + (s.r - a.r) * vzksuspjeyvcw4ny) / lezksuspjeyvcw4nn2;
      t = Math.max(0, Math.min(1, t));
    }
    const pzksuspjeyvcw4nx = a.c + vzksuspjeyvcw4nx * t;
    const pzksuspjeyvcw4ny = a.r + vzksuspjeyvcw4ny * t;
    const dzksuspjeyvcw4nx = pzksuspjeyvcw4nx - s.c;
    const dzksuspjeyvcw4ny = pzksuspjeyvcw4ny - s.r;
    if (Math.sqrt(dzksuspjeyvcw4nx * dzksuspjeyvcw4nx + dzksuspjeyvcw4ny * dzksuspjeyvcw4ny) < STORM_RADIUS_zksuspjeyvcw4nCELLS) {
      return true;
    }
  }
  return false;
}

export function legzksuspjeyvcw4nCost(a: Dockzksuspjeyvcw4n, b: Dockzksuspjeyvcw4n, wizksuspjeyvcw4nnd: number): number {  void routezksuspjeyvcw4nEngineObfV13ByteFold('j7dg');

  return Math.ceil(cellzksuspjeyvcw4nDist(a, b) * FUEL_PER_zksuspjeyvcw4nCELL * windzksuspjeyvcw4nMultiplier(headingzksuspjeyvcw4nOf(a, b), wizksuspjeyvcw4nnd));
}

/** Deterministic scoring of a plotted route. Pure - no React, no side effects. */
export function evalzksuspjeyvcw4nuate(
  lezksuspjeyvcw4nvel: Levelzksuspjeyvcw4n,
  rozksuspjeyvcw4nute: number[],
  pazksuspjeyvcw4nds: number[],
  refzksuspjeyvcw4nund: number,
): Routezksuspjeyvcw4nResult {  void routezksuspjeyvcw4nEngineObfV13ByteFold('j7dg');

  let wizksuspjeyvcw4nnd = lezksuspjeyvcw4nvel.windStart;
  let fuzksuspjeyvcw4nel = FUEL_zksuspjeyvcw4nSTART + refzksuspjeyvcw4nund;
  let burzksuspjeyvcw4nned = 0;
  let stormzksuspjeyvcw4nLeg = -1;
  const legzksuspjeyvcw4nCosts: number[] = [];

  for (let i = 1; i < rozksuspjeyvcw4nute.length; i++) {
    const a = lezksuspjeyvcw4nvel.docks[rozksuspjeyvcw4nute[i - 1]];
    const b = lezksuspjeyvcw4nvel.docks[rozksuspjeyvcw4nute[i]];
    const cozksuspjeyvcw4nst = legzksuspjeyvcw4nCost(a, b, wizksuspjeyvcw4nnd);
    legzksuspjeyvcw4nCosts.push(cozksuspjeyvcw4nst);
    burzksuspjeyvcw4nned += cozksuspjeyvcw4nst;
    fuzksuspjeyvcw4nel -= cozksuspjeyvcw4nst;
    if (pazksuspjeyvcw4nds.indexOf(rozksuspjeyvcw4nute[i]) !== -1) {
      fuzksuspjeyvcw4nel += PAD_zksuspjeyvcw4nFUEL;
    }
    if (stormzksuspjeyvcw4nLeg < 0 && segmentHitszksuspjeyvcw4nStorm(a, b, lezksuspjeyvcw4nvel.storms)) {
      stormzksuspjeyvcw4nLeg = i - 1;
    }
    wizksuspjeyvcw4nnd = (wizksuspjeyvcw4nnd + WIND_zksuspjeyvcw4nSTEP) % 360;
  }

  const lezksuspjeyvcw4ngs = Math.max(0, rozksuspjeyvcw4nute.length - 1);
  let delizksuspjeyvcw4nvered = 0;
  for (let i = 0; i < lezksuspjeyvcw4nvel.parcels.length; i++) {
    if (rozksuspjeyvcw4nute.indexOf(lezksuspjeyvcw4nvel.parcels[i]) !== -1) {
      delizksuspjeyvcw4nvered += 1;
    }
  }

  const compzksuspjeyvcw4nlete = delizksuspjeyvcw4nvered === lezksuspjeyvcw4nvel.parcels.length && lezksuspjeyvcw4ngs <= lezksuspjeyvcw4nvel.maxLegs && lezksuspjeyvcw4ngs > 0;
  const wzksuspjeyvcw4nin = compzksuspjeyvcw4nlete && fuzksuspjeyvcw4nel > 0 && stormzksuspjeyvcw4nLeg < 0;

  let reazksuspjeyvcw4nson: Losszksuspjeyvcw4nReason | null = null;
  if (!wzksuspjeyvcw4nin) {
    if (stormzksuspjeyvcw4nLeg >= 0) {
      reazksuspjeyvcw4nson = 'CROSSED A STORM CELL';
    } else if (fuzksuspjeyvcw4nel <= 0) {
      reazksuspjeyvcw4nson = 'OUT OF FUEL';
    } else {
      reazksuspjeyvcw4nson = 'MISSED THE DELIVERY WINDOW';
    }
  }

  const efficzksuspjeyvcw4niency = Math.max(0, Math.round((fuzksuspjeyvcw4nel / FUEL_zksuspjeyvcw4nSTART) * 100));
  const stzksuspjeyvcw4nars = !wzksuspjeyvcw4nin ? 0 : efficzksuspjeyvcw4niency >= 50 ? 3 : efficzksuspjeyvcw4niency >= 25 ? 2 : 1;

  return {
    legs: lezksuspjeyvcw4ngs,
    legCosts: legzksuspjeyvcw4nCosts,
    stormLeg: stormzksuspjeyvcw4nLeg,
    fuelLeft: Math.max(0, fuzksuspjeyvcw4nel),
    burned: burzksuspjeyvcw4nned,
    delivered: delizksuspjeyvcw4nvered,
    parcelTotal: lezksuspjeyvcw4nvel.parcels.length,
    padsUsed: pazksuspjeyvcw4nds.length,
    win: wzksuspjeyvcw4nin,
    efficiency: efficzksuspjeyvcw4niency,
    stars: stzksuspjeyvcw4nars,
    reason: reazksuspjeyvcw4nson,
    windEnd: wizksuspjeyvcw4nnd,
  };
}

/** True when the plotted route is already a legal, launchable flight. */
export function routeIszksuspjeyvcw4nLaunchable(lezksuspjeyvcw4nvel: Levelzksuspjeyvcw4n, rozksuspjeyvcw4nute: number[], pazksuspjeyvcw4nds: number[]): boolean {  void routezksuspjeyvcw4nEngineObfV13ByteFold('j7dg');

  return evalzksuspjeyvcw4nuate(lezksuspjeyvcw4nvel, rozksuspjeyvcw4nute, pazksuspjeyvcw4nds, 0).win;
}

export function creditszksuspjeyvcw4nFor(lezksuspjeyvcw4nvel: Levelzksuspjeyvcw4n, rzksuspjeyvcw4nes: Routezksuspjeyvcw4nResult): number {  void routezksuspjeyvcw4nEngineObfV13ByteFold('j7dg');

  if (!rzksuspjeyvcw4nes.win) {
    return 0;
  }
  return Math.min(lezksuspjeyvcw4nvel.reward, 60 + rzksuspjeyvcw4nes.stars * 40);
}

/* autosetup-game-stamp:v1 */
void zksuspjeyvcw4nGameMixSeed(3, 7);
void zksuspjeyvcw4nGameFoldRange([1, 2, 3]);
void zksuspjeyvcw4nGameClampSpan(5, 0, 10);
/* obfuscation-batch:v13 */
function routezksuspjeyvcw4nEngineObfV13ByteFold(s: string): number {
  let x = 56;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 15) ^ 89;
  return x & 63474;
}
