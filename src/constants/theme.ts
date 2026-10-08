/**
 * Aviarise palette - preset SPACE_COSMOS.
 * Only the two accents are overridden (CLAUDE.md rule 11b): the preset's
 * royal blue / purple become the brief's sky-cyan and signal-orange.
 * Exported WITHOUT `as const` so LinearGradient's `colors` prop still accepts
 * these arrays as string[].
 */
export const theme = {
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

export const C = theme.colors;

/** Gradient stop lists. Typed as string[] on purpose (see header note). */
export const GRADIENTS: {[k: string]: string[]} = {
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

export const RADIUS = {
  tile: 22,
  card: 18,
  chip: 14,
  pill: 999,
};

export const SHADOW = {
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
