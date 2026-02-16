import { Player } from './player';

// ---------- Points ---------- //

export type Love = { kind: 'LOVE' };
export type Fifteen = { kind: 'FIFTEEN' };
export type Thirty = { kind: 'THIRTY' };

export type Point = Love | Fifteen | Thirty;

// Type constructors
export const love = (): Love => ({ kind: 'LOVE' });
export const fifteen = (): Fifteen => ({ kind: 'FIFTEEN' });
export const thirty = (): Thirty => ({ kind: 'THIRTY' });

// ---------- PointsData ---------- //
export type PointsData = {
  PLAYER_ONE: Point;
  PLAYER_TWO: Point;
};

export type Points = {
  kind: 'POINTS';
  pointsData: PointsData;
};

export const points = (playerOnePoints: Point, playerTwoPoints: Point): Points => ({
  kind: 'POINTS',
  pointsData: {
    PLAYER_ONE: playerOnePoints,
    PLAYER_TWO: playerTwoPoints,
  },
});

// ---------- FortyData ---------- //
export type FortyData = {
  player: Player;      // player who has 40
  otherPoint: Point;   // other player's points (LOVE, FIFTEEN, THIRTY)
};

export type Forty = {
  kind: 'FORTY';
  player: Player;
  otherPoint: Point;
};

export const forty = (player: Player, otherPoint: Point): Forty => ({
  kind: 'FORTY',
  player,
  otherPoint,
});

// ---------- Deuce / Advantage / Game ---------- //

export type Deuce = { kind: 'DEUCE' };
export const deuce = (): Deuce => ({ kind: 'DEUCE' });

export type Advantage = { kind: 'ADVANTAGE'; player: Player };
export const advantage = (player: Player): Advantage => ({ kind: 'ADVANTAGE', player });

export type Game = { kind: 'GAME'; player: Player };
export const game = (player: Player): Game => ({ kind: 'GAME', player });

// ---------- Global Score ---------- //
export type Score = Points | Forty | Deuce | Advantage | Game;
