import productTypes from './productTypes';

const INITIAL_STATE = {
  products: [],
  loading: false,
  error: '',
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productTypes.FETCH_PRODUCTS_START:
      return {
        ...state,
        loading: true,
      };
    case productTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: '',
      };
    case productTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        products: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
