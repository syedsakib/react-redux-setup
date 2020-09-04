import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../redux/iceCream/iceCreamActions';

// React Function-Based Component:

const IceCreamHook = () => {
  const iceCream = useSelector((state) => state.iceCream.numberOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of IceCream: {iceCream} </h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  );
};

export default IceCreamHook;
