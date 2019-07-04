export const actions = {
  PLACE_PIECE: '@@TICTACTOE/PLACE_PIECE'
};

const actionsCreators = {
  placePiece: () => ({
    type: actions.PLACE_PIECE
  })
};

export default actionsCreators;
