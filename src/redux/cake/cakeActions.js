import cakeTypes from './cakeTypes';

export const buyCake = (numberOfCakeToBuy = 1) => {
  return {
    type: cakeTypes.BUY_CAKE,
    payload: numberOfCakeToBuy,
  };
};
