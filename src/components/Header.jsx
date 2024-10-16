import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('role');
    localStorage.removeItem('users'); // Optionally clear users
  };

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#224254'}}>
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/"><h2>Order Management</h2></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/signup">Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/admin">Admin Panel</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/cart">Cart</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">Product Catalog</Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-danger text-light" onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
