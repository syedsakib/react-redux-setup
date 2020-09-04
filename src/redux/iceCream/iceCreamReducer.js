import iceCreamTypes from './iceCreamTypes';

const INITIAL_STATE = {
  numberOfIceCream: 20,
};

const iceCreamReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case iceCreamTypes.BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      };
    default: {
      return state;
    }
  }
};

export default iceCreamReducer;
