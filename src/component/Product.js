import React, { useState, useEffect, useContext } from 'react';
import CartContext from '../component/CartContext';

const Product = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);
  const { dispatch, cart } = useContext(CartContext); // Assuming cart state is available in CartContext

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching the product data:', error));
  }, []);

  useEffect(() => {
    const images = document.querySelectorAll('.product-img');
    images.forEach(img => {
      const originalSrc = img.src;
      const hoverSrc = img.getAttribute('data-hover');

      const handleMouseOver = () => img.src = hoverSrc;
      const handleMouseOut = () => img.src = originalSrc;

      img.addEventListener('mouseover', handleMouseOver);
      img.addEventListener('mouseout', handleMouseOut);

      return () => {
        img.removeEventListener('mouseover', handleMouseOver);
        img.removeEventListener('mouseout', handleMouseOut);
      };
    });
  }, [products]);

  const handleAddToCart = (product) => {
    // Check if product is already in cart
    const isInCart = cart.some(item => item.id === product.id);

    if (isInCart) {
      alert(`Product '${product.title}' is already in the cart.`);
    } else {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    }
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
        {filteredProducts.map((product) => (
          <div className="col mb-4" key={product.id}>
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top product-img"
                alt={product.title}
                data-hover={product.hoverImage}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <h4 className="mt-auto" style={{ color: "green" }}>{product.price}</h4>
                <button onClick={() => handleAddToCart(product)} className="btn btn-primary mt-2">
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

export default Product;
