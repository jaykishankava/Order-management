import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/productSlice';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/createSlice';

const ProductCatalog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.items);
  const cartItems = useSelector((state) => state.cart.items); // Access cart items

  useEffect(() => {
    const loadProducts = () => {
      const storedProducts = localStorage.getItem('products');
      if (storedProducts) {
        dispatch(setProducts(JSON.parse(storedProducts)));
      }
    };
    loadProducts();
  }, [dispatch]);

  const handleAddToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);

    if (existingProduct) {
      alert("This product is already in your cart.");
    } else {
      const productToAdd = {
        ...product,
        price: parseFloat(product.price), // Ensure price is a number
      };
      dispatch(addToCart(productToAdd));
      navigate('/cart');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className='text-center'>Product Catalog</h2>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4 mt-3" key={product.id}>
            <div className="card">
              <div className="card-body bg-secondary rounded ">
                <h5 className="card-title text-white">{product.name}</h5>
                <p className="card-text text-white">Price: ${product.price}</p>
                <p className="card-text text-white">Available Stock: {product.stock}</p>
                <button 
                  className="btn btn-primary" 
                  onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
