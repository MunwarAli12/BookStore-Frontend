import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">BookStore</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">All Books</Link></li>
          <li><Link to="/add">Add Book</Link></li>
          <li><Link to="/search">Search</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
