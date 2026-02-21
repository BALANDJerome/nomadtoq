import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>accueil</li>
        </NavLink>
        <NavLink
          to="/carte"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>carte gourmande</li>
        </NavLink>
        <NavLink
          to="/evenement"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>privatisation / événement</li>
        </NavLink>
        <NavLink
          to="/lieux"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>où me trouver</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
