const getWinner = matchResult => {
  if (matchResult.winner === 'tie') {
    return matchResult.winner;
  }
  return matchResult.winner === 'player_one' ? matchResult.player_one : matchResult.player_two;
};

exports.parseMatchesResponse = raw => {
  const matchWinner = getWinner(raw);
  console.log('MATCH WINNER: ', matchWinner);
  return {
    firstPlayer: raw.player_one,
    secondPlayer: raw.player_two,
    winner: matchWinner,
    date: raw.createdAt
  };
};
