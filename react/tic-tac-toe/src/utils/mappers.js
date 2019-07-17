const getWinner = matchResult => {
  if (matchResult.winner === 'tie') {
    return matchResult.winner;
  }
  return matchResult.winner === 'player_one' ? matchResult.player_one : matchResult.player_two;
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
