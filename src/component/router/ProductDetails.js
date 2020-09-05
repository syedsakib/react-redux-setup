import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleProduct } from '../../redux/product/singleProductActions';

const ProductDetails = (props) => {
  const product = useSelector((state) => state.singleProduct);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleProduct(props.match.params.id));
  }, []);

  return (
    <div>
      {product.loading ? (
        <h2>LOADING</h2>
      ) : product.error ? (
        <h2>{product.error}</h2>
      ) : (
        <div>
          <h1>Details Page</h1>
          {product && product.product && (
            <div>
              <h1>{product.product.name}</h1>
              <img src={product.product.images.icon} alt='' />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
