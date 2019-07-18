import { TIE, PLAYER_ONE } from '../constants';


const getWinner = matchResult => {
  if (matchResult.winner === TIE) {
    return matchResult.winner;
  }
  return matchResult.winner === PLAYER_ONE ? matchResult.player_one : matchResult.player_two;
};

export const parseMatchesResponse = raw => {
  const matchWinner = getWinner(raw);
  return {
    firstPlayer: raw.player_one,
    secondPlayer: raw.player_two,
    winner: matchWinner,
    date: raw.createdAt
  };
};
