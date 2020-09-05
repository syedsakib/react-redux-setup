import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/product/productActions';
// import { fetchSingleProduct } from '../../redux/product/singleProductActions';
import { Link } from 'react-router-dom';

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className='App'>
      {products.loading ? (
        <h2>LOADING</h2>
      ) : products.error ? (
        <h2>{products.error}</h2>
      ) : (
        <div>
          <h1>Shop Page</h1>
          {products &&
            products.products.map((prod, idx) => {
              while (idx < 10)
                return (
                  <button
                    key={prod.id}
                    // onClick={() => dispatch(fetchSingleProduct(prod.id))}
                  >
                    <h1>
                      <Link to={`/shop/${prod.id}`}>{prod.name}</Link>
                    </h1>
                  </button>
                );
            })}
        </div>
      )}
    </div>
  );
};

export default Shop;
