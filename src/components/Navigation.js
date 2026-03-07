import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={isSticky ? "navigation sticky" : "navigation"}>
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>accueil</li>
        </NavLink>
        <div className="ligne"></div>
        <NavLink
          to="/carte"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>carte</li>
        </NavLink>
        <div className="ligne"></div>
        <NavLink
          to="/evenement"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>événement</li>
        </NavLink>
        <div className="ligne"></div>
        <NavLink
          to="/lieux"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>où me trouver</li>
        </NavLink>
        <div className="ligne"></div>
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
