export type Dock = {c: number; r: number};

export type Level = {
  id: string;
  name: string;
  pips: number;
  /** 9 sky docks on the 6x6 grid. Index 0 is always the home dock. */
  docks: Dock[];
  parcels: number[];
  storms: Dock[];
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
export const LEVELS: Level[] = [
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

export function levelAt(index: number): Level {
  return LEVELS[((index % LEVELS.length) + LEVELS.length) % LEVELS.length];
}
