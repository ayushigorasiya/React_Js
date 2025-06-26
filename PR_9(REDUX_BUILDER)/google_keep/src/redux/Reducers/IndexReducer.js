import { combineReducers } from 'redux';
import gkeepReducer from './gkeepReducer';

const rootReducer = combineReducers({
  keep: gkeepReducer
});

export default rootReducer;
