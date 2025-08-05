// src/components/NavHeader.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavHeader.css';
import artLogo from '../assets/art-logo.png';
import homeIcon from '../assets/home-icon.png';

const NavHeader: React.FC = () => (
  <header className="nav-header">
    <nav className="pill-nav">
      {/* Home zone */}
      <div className="pill-zone">
        <img src={artLogo} alt="Home" className="pill-img" />
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'pill-link active' : 'pill-link'
          }
        >
          Home
        </NavLink>
      </div>

      {/* Center title zone */}
      <div className="pill-zone title-zone">
        <span className="site-title">My Art Gallery</span>
      </div>

      {/* Illustrations zone */}
      <div className="pill-zone">
        <img src={homeIcon} alt="Illustrations" className="pill-img" />
        <NavLink
          to="/illustrations"
          className={({ isActive }) =>
            isActive ? 'pill-link active' : 'pill-link'
          }
        >
          Illustrations
        </NavLink>
      </div>
    </nav>
  </header>
);

export default NavHeader;
