import singleProductsTypes from './singleProductTypes';

const INITIAL_STATE = {
  singleProduct: {},
  error: '',
  loading: false,
};

const singleProductsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case singleProductsTypes.FETCH_SINGLE_PRODUCT_START:
      return {
        ...state,
        loading: true,
      };
    case singleProductsTypes.FETCH_SINGLE_PRODUCT_SUCCESS:
      return {
        product: action.payload,
        loading: false,
        error: '',
      };
    case singleProductsTypes.FETCH_SINGLE_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default singleProductsReducer;
