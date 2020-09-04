import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';

// React Class-Based Component:

const CakeContainer = ({ cake, buyCake }) => {
  return (
    <div>
      <h2>Number of cakes: {cake} </h2>
      <button onClick={buyCake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cake: state.cake.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
