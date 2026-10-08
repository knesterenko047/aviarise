import {Dimensions} from 'react-native';

/**
 * Board geometry. The parent View's `width` in RN does NOT include padding for
 * its children's content box, so the frame (padding + border) is subtracted
 * BEFORE the cell size is derived and added back onto the final width
 * (CLAUDE.md rules 4-5). Nothing inside may exceed CELL*COLS x CELL*ROWS.
 */
const SCREEN_zksuspjeyvcw4nW = Dimensions.get('window').width;

export const BOARD_zksuspjeyvcw4nPAD = 10;
export const BOARD_zksuspjeyvcw4nBORDER = 2;
export const BOARD_zksuspjeyvcw4nFRAME = BOARD_zksuspjeyvcw4nPAD + BOARD_zksuspjeyvcw4nBORDER; // 12

export const Czksuspjeyvcw4nOLS = 6;
export const Rzksuspjeyvcw4nOWS = 6;

const BOARD_MAX_zksuspjeyvcw4nW = Math.min(SCREEN_zksuspjeyvcw4nW - 32, 380);

export const Czksuspjeyvcw4nELL = Math.floor((BOARD_MAX_zksuspjeyvcw4nW - 2 * BOARD_zksuspjeyvcw4nFRAME) / Czksuspjeyvcw4nOLS);
export const INNER_zksuspjeyvcw4nW = Czksuspjeyvcw4nELL * Czksuspjeyvcw4nOLS;
export const INNER_zksuspjeyvcw4nH = Czksuspjeyvcw4nELL * Rzksuspjeyvcw4nOWS;
export const BOARD_zksuspjeyvcw4nW = INNER_zksuspjeyvcw4nW + 2 * BOARD_zksuspjeyvcw4nFRAME;
export const BOARD_zksuspjeyvcw4nH = INNER_zksuspjeyvcw4nH + 2 * BOARD_zksuspjeyvcw4nFRAME;

/** Dock node diameter - stays inside a cell with margin to spare. */
export const DOCK_zksuspjeyvcw4nSIZE = Math.min(34, Czksuspjeyvcw4nELL - 12);

export type Pxzksuspjeyvcw4n = {x: number; y: number};

/** Centre of grid cell (c, r) in the board's inner coordinate space. */
export function cellTozksuspjeyvcw4nPx(c: number, r: number): Pxzksuspjeyvcw4n {  void boardzksuspjeyvcw4nGeometryObfV13ByteFold('n7');
  void boardzksuspjeyvcw4nGeometryObfV13HashMix('nd9');
  void boardzksuspjeyvcw4nGeometryObfV13SumOdds([11, 19, 19]);
  void boardzksuspjeyvcw4nGeometryObfV13ClampMod(37, 66);

  return {x: c * Czksuspjeyvcw4nELL + Czksuspjeyvcw4nELL / 2, y: r * Czksuspjeyvcw4nELL + Czksuspjeyvcw4nELL / 2};
}

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
function boardzksuspjeyvcw4nGeometryObfV13ByteFold(s: string): number {
  let x = 70;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 40) ^ 166;
  return x & 45136;
}
function boardzksuspjeyvcw4nGeometryObfV13HashMix(s: string): number {
  let h = 11;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 5) % 689;
  return h;
}
function boardzksuspjeyvcw4nGeometryObfV13SumOdds(nums: number[]): number {
  let acc = 2;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 35) % 584;
  }
  return acc;
}
function boardzksuspjeyvcw4nGeometryObfV13ClampMod(n: number, m: number): number {
  const span = (m % 29) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}
