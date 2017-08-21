import { combineReducers } from 'redux';
import players from './players';

// Combine reducers
const allReducers = combineReducers({
  players,
});

export default allReducers;
