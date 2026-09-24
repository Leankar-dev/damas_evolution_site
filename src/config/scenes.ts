export type Cell = readonly [row: number, col: number];

export interface ScenePiece {
  color: 'red' | 'blue';
  path: readonly Cell[];
  king?: boolean;
  ghost?: boolean;
  crownAt?: number;
  vanishAt?: number;
}

export type MarkKind = 'target' | 'selected' | 'blocked';

export interface SceneMark {
  kind: MarkKind;
  cell: Cell;
}

export interface Scene {
  name: string;
  rows: number;
  cols: number;
  pieces: readonly ScenePiece[];
  route?: readonly Cell[];
  altRoute?: readonly Cell[];
  marks?: readonly SceneMark[];
}

export const heroScene: Scene = {
  name: 'hero',
  rows: 8,
  cols: 8,
  route: [
    [6, 3],
    [4, 5],
    [2, 3],
  ],
  pieces: [
    { color: 'red', path: [[6, 3]] },
    { color: 'red', path: [[7, 0]] },
    { color: 'red', path: [[7, 4]] },
    { color: 'red', path: [[6, 5]] },
    { color: 'red', path: [[5, 0]] },
    { color: 'red', path: [[4, 7]] },
    { color: 'red', path: [[7, 6]], king: true },
    { color: 'blue', path: [[0, 1]] },
    { color: 'blue', path: [[0, 5]] },
    { color: 'blue', path: [[1, 2]] },
    { color: 'blue', path: [[1, 6]] },
    { color: 'blue', path: [[2, 7]] },
    { color: 'blue', path: [[3, 4]] },
    { color: 'blue', path: [[5, 4]] },
    { color: 'blue', path: [[4, 1]] },
  ],
};

const rows = 6;
const cols = 6;

export const howToScenes: Record<'move' | 'capture' | 'chain' | 'king', Scene> = {
  move: {
    name: 'move',
    rows,
    cols,
    route: [
      [4, 3],
      [3, 4],
    ],
    pieces: [
      {
        color: 'red',
        path: [
          [4, 3],
          [3, 4],
        ],
      },
      { color: 'red', path: [[5, 2]] },
      { color: 'red', path: [[5, 4]] },
      { color: 'red', path: [[4, 1]] },
      { color: 'blue', path: [[0, 1]] },
      { color: 'blue', path: [[0, 3]] },
      { color: 'blue', path: [[1, 2]] },
    ],
  },
  capture: {
    name: 'capture',
    rows,
    cols,
    route: [
      [4, 3],
      [2, 5],
    ],
    pieces: [
      {
        color: 'red',
        path: [
          [4, 3],
          [2, 5],
        ],
      },
      { color: 'blue', path: [[3, 4]], vanishAt: 0.45 },
      { color: 'red', path: [[5, 2]] },
      { color: 'red', path: [[5, 4]] },
      { color: 'red', path: [[4, 1]] },
      { color: 'blue', path: [[0, 1]] },
      { color: 'blue', path: [[1, 2]] },
    ],
  },
  chain: {
    name: 'chain',
    rows,
    cols,
    route: [
      [5, 2],
      [3, 4],
      [1, 2],
    ],
    pieces: [
      {
        color: 'red',
        path: [
          [5, 2],
          [3, 4],
          [1, 2],
        ],
      },
      { color: 'blue', path: [[4, 3]], vanishAt: 0.45 },
      { color: 'blue', path: [[2, 3]], vanishAt: 0.95 },
      { color: 'red', path: [[5, 0]] },
      { color: 'red', path: [[5, 4]] },
      { color: 'blue', path: [[0, 1]] },
      { color: 'blue', path: [[0, 3]] },
    ],
  },
  king: {
    name: 'king',
    rows,
    cols,
    route: [
      [1, 2],
      [0, 3],
      [3, 0],
    ],
    pieces: [
      {
        color: 'red',
        king: true,
        crownAt: 0.5,
        path: [
          [1, 2],
          [0, 3],
          [3, 0],
        ],
      },
      { color: 'red', path: [[5, 2]] },
      { color: 'red', path: [[5, 4]] },
      { color: 'red', path: [[4, 1]] },
      { color: 'blue', path: [[0, 5]] },
      { color: 'blue', path: [[2, 5]] },
      { color: 'blue', path: [[4, 5]] },
    ],
  },
};

const initialPieces = (): ScenePiece[] => {
  const pieces: ScenePiece[] = [];
  for (let row = 0; row < 8; row += 1) {
    for (let col = 0; col < 8; col += 1) {
      const dark = (row + col) % 2 === 1;
      if (!dark) continue;
      if (row < 3) pieces.push({ color: 'blue', path: [[row, col]] });
      if (row > 4) pieces.push({ color: 'red', path: [[row, col]] });
    }
  }
  return pieces;
};

export type RuleSceneName =
  | 'initial'
  | 'move'
  | 'mustCapture'
  | 'backwardCapture'
  | 'chain'
  | 'majority'
  | 'promotion'
  | 'kingMove'
  | 'kingCapture'
  | 'win'
  | 'draw';

const kingMoveTargets: readonly Cell[] = [
  [3, 2],
  [3, 4],
  [2, 5],
  [1, 6],
  [0, 7],
  [5, 2],
  [6, 1],
  [7, 0],
  [5, 4],
  [6, 5],
  [7, 6],
];

export const ruleScenes: Record<RuleSceneName, Scene> = {
  initial: { name: 'initial', rows: 8, cols: 8, pieces: initialPieces() },
  move: {
    name: 'move',
    rows,
    cols,
    pieces: [
      { color: 'red', path: [[4, 3]] },
      { color: 'blue', path: [[0, 1]] },
      { color: 'blue', path: [[0, 3]] },
    ],
    marks: [
      { kind: 'selected', cell: [4, 3] },
      { kind: 'target', cell: [3, 2] },
      { kind: 'target', cell: [3, 4] },
      { kind: 'blocked', cell: [5, 2] },
      { kind: 'blocked', cell: [5, 4] },
    ],
  },
  mustCapture: {
    name: 'mustCapture',
    rows,
    cols,
    pieces: [
      { color: 'red', path: [[4, 3]] },
      { color: 'blue', path: [[3, 4]] },
      { color: 'blue', path: [[0, 1]] },
    ],
    route: [
      [4, 3],
      [2, 5],
    ],
    marks: [{ kind: 'blocked', cell: [3, 2] }],
  },
  backwardCapture: {
    name: 'backwardCapture',
    rows,
    cols,
    pieces: [
      { color: 'red', path: [[3, 4]] },
      { color: 'blue', path: [[4, 3]] },
    ],
    route: [
      [3, 4],
      [5, 2],
    ],
  },
  chain: {
    name: 'chain',
    rows,
    cols,
    pieces: [
      { color: 'red', path: [[5, 2]] },
      { color: 'blue', path: [[4, 3]] },
      { color: 'blue', path: [[2, 3]] },
      { color: 'blue', path: [[0, 1]] },
      { color: 'blue', path: [[0, 3]] },
    ],
    route: [
      [5, 2],
      [3, 4],
      [1, 2],
    ],
  },
  majority: {
    name: 'majority',
    rows,
    cols,
    pieces: [
      { color: 'red', path: [[5, 2]] },
      { color: 'blue', path: [[4, 3]] },
      { color: 'blue', path: [[4, 1]] },
      { color: 'blue', path: [[2, 1]] },
    ],
    route: [
      [5, 2],
      [3, 0],
      [1, 2],
    ],
    altRoute: [
      [5, 2],
      [3, 4],
    ],
    marks: [{ kind: 'blocked', cell: [3, 4] }],
  },
  promotion: {
    name: 'promotion',
    rows,
    cols,
    pieces: [
      { color: 'red', path: [[1, 2]] },
      { color: 'red', path: [[0, 3]], king: true, ghost: true },
      { color: 'red', path: [[5, 2]] },
      { color: 'blue', path: [[2, 5]] },
      { color: 'blue', path: [[4, 5]] },
    ],
    route: [
      [1, 2],
      [0, 3],
    ],
  },
  kingMove: {
    name: 'kingMove',
    rows: 8,
    cols: 8,
    pieces: [
      { color: 'red', path: [[4, 3]], king: true },
      { color: 'red', path: [[2, 1]] },
    ],
    marks: kingMoveTargets.map((cell) => ({ kind: 'target', cell })),
  },
  kingCapture: {
    name: 'kingCapture',
    rows: 8,
    cols: 8,
    pieces: [
      { color: 'red', path: [[6, 1]], king: true },
      { color: 'blue', path: [[3, 4]] },
    ],
    route: [
      [6, 1],
      [2, 5],
    ],
    marks: [
      { kind: 'target', cell: [1, 6] },
      { kind: 'target', cell: [0, 7] },
    ],
  },
  win: {
    name: 'win',
    rows,
    cols,
    pieces: [
      { color: 'blue', path: [[3, 2]] },
      { color: 'red', path: [[4, 1]] },
      { color: 'red', path: [[4, 3]] },
      { color: 'red', path: [[5, 0]] },
      { color: 'red', path: [[5, 4]] },
    ],
  },
  draw: {
    name: 'draw',
    rows,
    cols,
    pieces: [
      { color: 'red', path: [[5, 0]], king: true },
      { color: 'blue', path: [[0, 5]], king: true },
    ],
  },
};
