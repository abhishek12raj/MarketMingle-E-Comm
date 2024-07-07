import React, { useContext } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartContext from '../component/CartContext';

function Navbar({ setSearchTerm }) {
  const { cart } = useContext(CartContext);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: "rgb(43, 103, 119)" }}>
        <div className="container-fluid py-2 d-flex justify-content-between align-items-center">
          <Link className='navbar-brand text-light fs-3 fw-bold' to="/">MarketMingle</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <form className="d-flex me-2 mb-2 mb-lg-0 search" role="search">
              <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Search..." 
                aria-label="Search" 
                onChange={handleSearchChange}
              />
            </form>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className='nav-link active text-light mx-2' aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link active text-light mx-2' aria-current="page" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link active text-light mx-2' aria-current="page" to="/login">Login/Register</Link>
              </li>
            </ul>
            <Link className="nav-link kart position-relative" to="/cart">
              <FaCartPlus style={{ fontSize: '2rem' }} />
              {cartItemCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
