import React, { useContext } from 'react';
import CartContext from '../component/CartContext';

const Cart = () => {
  const { cart, dispatch, total } = useContext(CartContext);

  const handleIncrement = (id) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: id });
  };

  const handleDecrement = (id) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: id });
  };

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const deliveryCharge = 0; // Assuming free delivery for orders above ₹1000

  return (
    <div className="container mt-5">
      {cart.length === 0 ? (
        <h1 className="mt-5 text-center">Cart is empty</h1>
      ) : (
        <div className="row">
          <div className="col-md-8">
            <h2 className="mb-4">Shopping Cart</h2>
            <ul className="list-group mb-4">
              {cart.map((item) => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <h5>{item.title}</h5>
                    <p>Price: {item.price}</p>
                    <div className="btn-group" role="group" aria-label="Basic example">
                      <button onClick={() => handleDecrement(item.id)} className="btn btn-secondary remove-btn">-</button>
                      <span className="btn btn-light remove-btn">{item.quantity}</span>
                      <button onClick={() => handleIncrement(item.id)} className="btn btn-secondary remove-btn">+</button>
                    </div>
                    <button onClick={() => handleRemove(item.id)} className="btn btn-danger mt-2 remove-btn remove-btn-size">Remove</button>
                  </div>
                  <span className="badge bg-primary rounded-pill remove-btn">
                    Total: ₹{(parseFloat(item.price.replace(/[^0-9.-]+/g, "")) * item.quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Price Details</h3>
                <hr />
                <div className="d-flex justify-content-between mb-3">
                  <span>Price:</span>
                  <span>₹ {total.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Delivery Charges:</span>
                  <span>Free</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <h4>Total:</h4>
                  <h4>₹ {total.toFixed(2)}</h4>
                </div>
                <p className="small mt-3">*Free Delivery for orders above ₹1000</p>
                <button className="btn btn-primary mt-3 w-100 remove-btn">Proceed to Payment</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
