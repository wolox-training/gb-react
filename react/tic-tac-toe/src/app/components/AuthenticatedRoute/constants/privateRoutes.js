import MatchHistoryList from '../../../screens/MatchHistoryList';
import Game from '../../../screens/Game';
import { GAME_ROUTE, RECORDS_ROUTE } from '../../../../constants/routes';

export const privateRoutes = {
  GAME: { path: GAME_ROUTE, component: Game },
  RECORDS: { path: RECORDS_ROUTE, component: MatchHistoryList }
};
