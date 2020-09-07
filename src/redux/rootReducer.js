import { combineReducers } from 'redux';

import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';
import userReducer from './user/userReducer';
import productsReducer from './product/productReducer';
import singleProductReducer from './product/singleProductReducer';

export default combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
  products: productsReducer,
  singleProduct: singleProductReducer,
});
