import { combineReducers } from 'redux';

import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';

export default combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});