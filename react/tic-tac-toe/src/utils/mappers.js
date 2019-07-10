exports.parseMatchesResponse = raw => ({
  firstPlayer: raw.player_one,
  secondPlayer: raw.player_two,
  winner: raw.winner,
  date: raw.createdAt
});
