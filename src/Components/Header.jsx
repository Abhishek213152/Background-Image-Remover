import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyle = (menuOpened) => {
    if (document.documentElement.clientWidth <= 949) {
      return { right: !menuOpened && '-100%' };
    }
  };

  const closeMenu = () => {
    setMenuOpened(false);
  };

  return (
    <section className="h-wrapper">
      <div className="flex h-container">
        <div className="paddings flexStart h-left">
          <Link to="/">
            <i className="bi bi-eraser-fill"></i>
          </Link>
          <Link to="/">
            <h2>backDrop</h2>
          </Link>
        </div>

        <div
          className={`paddings flexEnd h-right ${menuOpened ? 'active' : ''}`}
          style={getMenuStyle(menuOpened)}
          onClick={closeMenu} // Close the menu when clicking on any element of h-right
        >
          <Link to="/remove" className="all">
            Remove Background
          </Link>
          <Link to="/about" className="all">
            About Us
          </Link>
          <Link to="/contact" className="all">
            Contact Us
          </Link>
          <Link to="/login" className="button log">
            Log In
          </Link>
        </div>

        <div className="icon-menu" onClick={() => setMenuOpened((prev) => !prev)}>
          <i className="bi bi-list"></i>
        </div>
      </div>
    </section>
  );
};

export default Header;
