import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar bg-light d-flex flex-column">
      <h4 className="mt-3 mb-4 text-center">Countries</h4>
      <nav className="nav flex-column">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/brazil" className="nav-link">Brazil</Link>
        <Link to="/argentina" className="nav-link">Argentina</Link>
        <Link to="/mexico" className="nav-link">Mexico</Link>
        <Link to="/colombia" className="nav-link">Colombia</Link>
        <Link to="/puerto-rico" className="nav-link">Puerto Rico</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
