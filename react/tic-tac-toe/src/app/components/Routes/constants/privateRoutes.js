import MatchHistoryList from '../../../screens/MatchHistoryList';
import Game from '../../../screens/Game';

export const privateRoutes = [
  { path: '/game', component: Game },
  { path: '/records', component: MatchHistoryList }
];
