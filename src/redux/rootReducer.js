import { combineReducers } from 'redux';

import cakeReducer from './cake/cakeReducer';

export default combineReducers({
  cake: cakeReducer,
});
