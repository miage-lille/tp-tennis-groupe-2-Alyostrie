import { isSamePlayer, Player, stringToPlayer } from './types/player';
import { advantage, deuce, Forty, FortyData, game, Point, PointsData, Score } from './types/score';
import { pipe, Option } from 'effect'

// -------- Tooling functions --------- //

export const playerToString = (player: Player) => {
  switch (player) {
    case 'PLAYER_ONE':
      return 'Player 1';
    case 'PLAYER_TWO':
      return 'Player 2';
  }
};
export const otherPlayer = (player: Player) => {
  switch (player) {
    case 'PLAYER_ONE':
      return stringToPlayer('PLAYER_TWO');
    case 'PLAYER_TWO':
      return stringToPlayer('PLAYER_ONE');
  }
};
// Exercice 1 :
export const pointToString = (point: Point): string => {
  switch (point) {
    case 0:
      return 'Love';
    case 1:
      return 'Fifteen';
    case 2:
      return 'Thirty';
    case 3:
      return 'Forty';
    default:
      throw new Error(`Invalid point: ${point}`);
  }
};

export const scoreToString = (score: Score): string => {
  switch (score.kind) {
    case 'POINTS':
      return `${pointToString(score.pointsData.PLAYER_ONE)} - ${pointToString(
        score.pointsData.PLAYER_TWO
      )}`;

    case 'FORTY': {
      const p1 =
        score.player === 'PLAYER_ONE' ? 'Forty' : pointToString(score.otherPoint);
      const p2 =
        score.player === 'PLAYER_ONE' ? pointToString(score.otherPoint) : 'Forty';

      return `${p1} - ${p2}`;
    }

    case 'DEUCE':
      return 'Deuce';

    case 'ADVANTAGE':
      return `Advantage ${playerToString(score.player)}`;

    case 'GAME':
      return `Game ${playerToString(score.player)}`;
  }
};

export const stringToPoint = (str: string): Point => {
  switch (str) {
    case 'LOVE':
      return 0;
    case 'FIFTEEN':
      return 1;
    case 'THIRTY':
      return 2;
    case 'FORTY':
      return 3;
    default:
      throw new Error(`Invalid point string: ${str}`);
  }
};


export const scoreWhenDeuce = (winner: Player): Score => 
  advantage(winner)
;

export const scoreWhenAdvantage = (
  advantagedPlayed: Player,
  winner: Player
): Score => {
  if (isSamePlayer(advantagedPlayed, winner)) return game(winner);
  return deuce();
};


export const scoreWhenForty = (
  currentForty: FortyData,
  winner: Player
): Score => game(winner);


// Exercice 2
// Tip: You can use pipe function from Effect to improve readability.
// See scoreWhenForty function above.
export const scoreWhenPoint = (current: PointsData, winner: Player): Score => {
  throw new Error('not implemented');
};

// Exercice 3
export const scoreWhenGame = (winner: Player): Score => {
  throw new Error('not implemented');
};

export const score = (currentScore: Score, winner: Player): Score => {
  throw new Error('not implemented');
};


