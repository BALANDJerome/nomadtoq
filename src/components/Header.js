import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <img src="./assets/img/Logo_Nomad_Toq.png" alt="logo nomad'toq" />
      </div>
      <div className="navbar_pages">
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
