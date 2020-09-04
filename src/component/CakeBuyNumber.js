import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';

// React Function-Based Component with Payload:

const CakeBuyNumber = () => {
  const [number, setNumber] = useState(1);
  const numberOfCakeInStore = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes: {numberOfCakeInStore} </h2>
      <input
        type='text'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(number))}>Buy Cake</button>
    </div>
  );
};

export default CakeBuyNumber;
