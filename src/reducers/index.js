import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import globalReducer from './globalReducer';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  global: globalReducer
});

export default rootReducer;