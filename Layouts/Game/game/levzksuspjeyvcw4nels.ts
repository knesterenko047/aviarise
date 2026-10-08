export type Dockzksuspjeyvcw4n = {c: number; r: number};

export type Levelzksuspjeyvcw4n = {
  id: string;
  name: string;
  pips: number;
  /** 9 sky docks on the 6x6 grid. Index 0 is always the home dock. */
  docks: Dockzksuspjeyvcw4n[];
  parcels: number[];
  storms: Dockzksuspjeyvcw4n[];
  maxLegs: number;
  windStart: number;
  /** A proven legal flight - used by the idle backstop and the auto-plot. */
  solution: number[];
  reward: number;
};

/**
 * Three contracts, 1 / 2 / 3 difficulty pips. Every `solution` below is
 * verified to deliver all parcels inside `maxLegs`, clear of both storm discs,
 * with fuel to spare (see the compliance notes in prompts/Aviarise.md).
 */
export const Lzksuspjeyvcw4nEVELS: Levelzksuspjeyvcw4n[] = [
  {
    id: 'cirrus',
    name: 'CIRRUS LOOP',
    pips: 1,
    docks: [
      {c: 0, r: 5},
      {c: 2, r: 5},
      {c: 4, r: 4},
      {c: 1, r: 3},
      {c: 3, r: 2},
      {c: 5, r: 2},
      {c: 0, r: 1},
      {c: 2, r: 0},
      {c: 4, r: 0},
    ],
    parcels: [2, 4, 7],
    storms: [{c: 1, r: 1}],
    maxLegs: 8,
    windStart: 180,
    solution: [0, 1, 2, 4, 7],
    reward: 180,
  },
  {
    id: 'ember',
    name: 'EMBER SPUR',
    pips: 2,
    docks: [
      {c: 0, r: 0},
      {c: 2, r: 1},
      {c: 4, r: 0},
      {c: 5, r: 2},
      {c: 3, r: 3},
      {c: 1, r: 2},
      {c: 0, r: 4},
      {c: 2, r: 5},
      {c: 4, r: 5},
    ],
    parcels: [3, 7, 8],
    storms: [
      {c: 1, r: 4},
      {c: 5, r: 4},
    ],
    maxLegs: 7,
    windStart: 240,
    solution: [0, 1, 2, 3, 4, 8, 7],
    reward: 240,
  },
  {
    id: 'stormgate',
    name: 'STORMGATE RUN',
    pips: 3,
    docks: [
      {c: 0, r: 2},
      {c: 2, r: 0},
      {c: 4, r: 1},
      {c: 5, r: 3},
      {c: 3, r: 2},
      {c: 1, r: 4},
      {c: 3, r: 5},
      {c: 5, r: 5},
      {c: 0, r: 0},
    ],
    parcels: [2, 6, 7],
    storms: [
      {c: 1, r: 0},
      {c: 2, r: 4},
    ],
    maxLegs: 6,
    windStart: 300,
    solution: [0, 4, 2, 3, 7, 6],
    reward: 320,
  },
];

export function levelzksuspjeyvcw4nAt(index: number): Levelzksuspjeyvcw4n {  void levzksuspjeyvcw4nelsObfV13ClampMod(23, 59);
  void levzksuspjeyvcw4nelsObfV13ShiftXor(73, 59);
  void levzksuspjeyvcw4nelsObfV13ByteFold('632');

  return Lzksuspjeyvcw4nEVELS[((index % Lzksuspjeyvcw4nEVELS.length) + Lzksuspjeyvcw4nEVELS.length) % Lzksuspjeyvcw4nEVELS.length];
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
function levzksuspjeyvcw4nelsObfV13ClampMod(n: number, m: number): number {
  const span = (m % 57) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function levzksuspjeyvcw4nelsObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 202) & 56582;
}
function levzksuspjeyvcw4nelsObfV13ByteFold(s: string): number {
  let x = 36;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 35) ^ 95;
  return x & 55182;
}
