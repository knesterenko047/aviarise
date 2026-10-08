/**
 * Aviarise palette - preset SPACE_COSMOS.
 * Only the two accents are overridden (CLAUDE.md rule 11b): the preset's
 * royal blue / purple become the brief's sky-cyan and signal-orange.
 * Exported WITHOUT `as const` so LinearGradient's `colors` prop still accepts
 * these arrays as string[].
 */
export const thzksuspjeyvcw4neme = {
  name: 'SPACE_COSMOS',

  colors: {
    bgDeep: '#050510',
    bgNight: '#0B1F3A',
    surface: '#10103A',
    surfaceAlt: '#0A1628',

    accent: '#2FC3FF',
    accentDim: '#1A7FC0',
    accent2: '#FF6B35',
    accent2Dim: '#D94E1F',
    success: '#8BE28B',

    textPrimary: '#F4F7FA',
    textSecondary: '#9FB3C8',
    textMuted: '#5C7793',
    onAccent: '#05121F',

    hairline: 'rgba(244,247,250,0.08)',
    hairlineStrong: 'rgba(244,247,250,0.14)',
    glassFill: 'rgba(244,247,250,0.07)',
    panel: 'rgba(16,16,58,0.72)',
    scrimTop: 'rgba(11,31,58,0.62)',
    scrimBottom: 'rgba(5,5,16,0.86)',
  },
};

export const C = thzksuspjeyvcw4neme.colors;

/** Gradient stop lists. Typed as string[] on purpose (see header note). */
export const Gzksuspjeyvcw4nRADIENTS: {[k: string]: string[]} = {
  loaderSky: ['#02060F', '#071628', '#0B1F3A'],
  menuScrim: ['rgba(11,31,58,0.58)', 'rgba(5,5,16,0.88)'],
  gameScrim: ['rgba(5,5,16,0.66)', 'rgba(5,5,16,0.84)'],
  playTile: ['#1A4F8A', '#0B1F3A'],
  board: ['#0B1F3A', '#081528'],
  cyan: ['#2FC3FF', '#1A7FC0'],
  orange: ['#FF6B35', '#D94E1F'],
  fuel: ['#8BE28B', '#2FC3FF'],
  resultSky: ['#0B1F3A', '#071020', '#050510'],
};

export const Rzksuspjeyvcw4nADIUS = {
  tile: 22,
  card: 18,
  chip: 14,
  pill: 999,
};

export const Szksuspjeyvcw4nHADOW = {
  cyan: {
    shadowColor: '#2FC3FF',
    shadowOpacity: 0.38,
    shadowRadius: 20,
    shadowOffset: {width: 0, height: 8},
    elevation: 10,
  },
  orange: {
    shadowColor: '#FF6B35',
    shadowOpacity: 0.42,
    shadowRadius: 18,
    shadowOffset: {width: 0, height: 8},
    elevation: 10,
  },
  deep: {
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 18,
    shadowOffset: {width: 0, height: 10},
    elevation: 8,
  },
  soft: {
    shadowColor: '#2FC3FF',
    shadowOpacity: 0.18,
    shadowRadius: 16,
    shadowOffset: {width: 0, height: 6},
    elevation: 6,
  },
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
function thzksuspjeyvcw4nemeObfV13SumOdds(nums: number[]): number {
  let acc = 20;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 30) % 158;
  }
  return acc;
}
function thzksuspjeyvcw4nemeObfV13ClampMod(n: number, m: number): number {
  const span = (m % 36) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function thzksuspjeyvcw4nemeObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 181) & 38099;
}
void thzksuspjeyvcw4nemeObfV13SumOdds([11, 9, 7]);
void thzksuspjeyvcw4nemeObfV13ClampMod(75, 9);
void thzksuspjeyvcw4nemeObfV13ShiftXor(78, 52);
