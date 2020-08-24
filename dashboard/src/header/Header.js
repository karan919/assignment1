import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <ul className="nav-links">
        <li>
          <NavLink to="/" exact>
            <i className="fa fa-address-card" aria-hidden="true"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" exact>
            <i className="fa fa-address-card" aria-hidden="true"></i>
            Squares
          </NavLink>
        </li>
        <li>
          <NavLink to="/" exact>
            <i className="fa fa-address-card" aria-hidden="true"></i>
            Analystics
          </NavLink>
        </li>
        <li>
          <NavLink to="/" exact>
            <i className="fa fa-address-card" aria-hidden="true"></i>
            Dashboards
          </NavLink>
        </li>
        <li>
          <NavLink to="/" exact>
            <i className="fa fa-address-card" aria-hidden="true"></i>
            Live
          </NavLink>
        </li>
        <li>
          <NavLink to="/" exact>
            <i className="fa fa-address-card" aria-hidden="true"></i>
            Safe Display
          </NavLink>
        </li>
      </ul>
      <ul className="user-links">
        <li>
          <NavLink to="/" exact>
            <i className="fa fa-address-card" aria-hidden="true"></i>
            Acme Inc. Demo Owner (Owner)
          </NavLink>
        </li>
        <li>
          <NavLink to="/" exact>
            <i className="fa fa-address-card" aria-hidden="true"></i>
            Support
          </NavLink>
        </li>
        <li>
          <NavLink to="/" exact>
            <i className="fa fa-address-card" aria-hidden="true"></i>
            Admin
          </NavLink>
        </li>
        <li>
          <NavLink to="/" exact>
            <i className="fa fa-address-card" aria-hidden="true"></i>
            Account
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
