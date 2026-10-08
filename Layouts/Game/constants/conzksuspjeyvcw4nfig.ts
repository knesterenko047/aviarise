/** Tunables for the Aviarise flight-planning puzzle. */

/**
 * Splash duration. EXACTLY 8000ms (CLAUDE.md rule 13): the capture agent needs
 * 4-6s of cold-start overhead before its first screenshot, so anything shorter
 * races the Loader frame away and the pHash gate reads Loader == Menu.
 */
export const LOADER_DURATION_zksuspjeyvcw4nMS = 8000;

/** Crossfade out of the loader. setScreen fires in the SAME tick as the fade. */
export const SCREEN_FADE_zksuspjeyvcw4nMS = 240;

/** Fuel economy. */
export const FUEL_zksuspjeyvcw4nSTART = 120;
export const FUEL_PER_zksuspjeyvcw4nCELL = 5;
export const PAD_zksuspjeyvcw4nFUEL = 30;
export const MAX_zksuspjeyvcw4nPADS = 2;
export const CORRECTION_zksuspjeyvcw4nREFUND = 8;

/** Wind turns this many degrees after every plotted leg. */
export const WIND_zksuspjeyvcw4nSTEP = 60;

/** Storm circle radius, in grid cells. */
export const STORM_RADIUS_zksuspjeyvcw4nCELLS = 0.95;

/** Flight playback. */
export const FLIGHT_zksuspjeyvcw4nMS = 4200;
export const FLIGHT_SAFETY_zksuspjeyvcw4nMS = 5600;

/**
 * Mount-relative, never re-armed. Must stay above the capture agent's ~22s
 * first-shot latency so a human (or the agent) still gets to plan by hand,
 * while a stalled run still produces a flight frame and a result frame.
 */
export const IDLE_BACKSTOP_zksuspjeyvcw4nMS = 30000;

/** Starting wallet. */
export const START_zksuspjeyvcw4nCREDITS = 1250;

/** Menu hub figures (static showcase values). */
export const Hzksuspjeyvcw4nUB = {
  streak: 7,
  streakTarget: 5,
  streakDone: 3,
  bestEfficiency: 92,
  parcelsMoved: 48,
  partsOwned: 4,
  partsTotal: 9,
};

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
function conzksuspjeyvcw4nfigObfV13ClampMod(n: number, m: number): number {
  const span = (m % 54) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function conzksuspjeyvcw4nfigObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 61) & 306;
}
function conzksuspjeyvcw4nfigObfV13ByteFold(s: string): number {
  let x = 63;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 28) ^ 28;
  return x & 7086;
}
function conzksuspjeyvcw4nfigObfV13HashMix(s: string): number {
  let h = 48;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 12) % 643;
  return h;
}
void conzksuspjeyvcw4nfigObfV13ClampMod(65, 55);
void conzksuspjeyvcw4nfigObfV13ShiftXor(61, 49);
void conzksuspjeyvcw4nfigObfV13ByteFold('fkmj');
void conzksuspjeyvcw4nfigObfV13HashMix('j773');
