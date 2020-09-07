import actionTypes from './productTypes';
import axios from 'axios';

export const fetchProductsStart = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_START,
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const fetchProductsFailure = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsStart());
    axios
      .get('https://fortnite-api.com/v2/cosmetics/br')
      .then((response) => {
        const products = response.data.data;
        dispatch(fetchProductsSuccess(products));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchProductsFailure(errorMessage));
      });
  };
};
