import singleProductTypes from './singleProductTypes';
import axios from 'axios';

export const fetchSingleProductStart = () => {
  return {
    type: singleProductTypes.FETCH_SINGLE_PRODUCT_START,
  };
};

export const fetchSigleProductSuccess = (product) => {
  return {
    type: singleProductTypes.FETCH_SINGLE_PRODUCT_SUCCESS,
    payload: product,
  };
};

export const fetchSingleProductFailure = (error) => {
  return {
    type: singleProductTypes.FETCH_SINGLE_PRODUCT_FAILURE,
    payload: error,
  };
};

export const fetchSingleProduct = (id) => {
  return (dispatch) => {
    dispatch(fetchSingleProductStart());
    axios
      .get(`https://fortnite-api.com/v2/cosmetics/br/${id}`)
      .then((response) => {
        const products = response.data.data;
        dispatch(fetchSigleProductSuccess(products));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchSingleProductFailure(errorMessage));
      });
  };
};
