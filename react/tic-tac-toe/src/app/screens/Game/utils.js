import { boardLines } from './constants';

const calculateWinner = squares => {
  for (let i = 0; i < boardLines.length; i++) {
    const [a, b, c] = boardLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default calculateWinner;
