import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column align-items-center">
      <h4 className="mt-3 mb-4 text-center title">Countries</h4>
      <nav className="nav flex-column">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/brazil" className="nav-link">Brazil</Link>
        <Link to="/argentina" className="nav-link">Argentina</Link>
        <Link to="/mexico" className="nav-link">Mexico</Link>
        <Link to="/colombia" className="nav-link">Colombia</Link>
        <Link to="/puerto-rico" className="nav-link">Puerto Rico</Link>
        <Link to="/comparative" className="nav-link">Comparative</Link>
        <Link to="/news" className="nav-link">News</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
