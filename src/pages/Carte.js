import React, { useState } from "react";
import Header from "../components/Header";
import Galettes from "../components/Galettes";
import Crepes from "../components/Crepes";

const Carte = () => {
  const [cartBtn, setCartBtn] = useState(true);

  return (
    <div className="carte_container">
      <Header></Header>
      <div className="carte_title">
        <h1>Carte gourmande</h1>
        <p>Envie d'une pause gourmande ?</p>
        <p>
          Parcourez la carte et croquez pour les galettes de blé noir
          généreusement garnies et les crêpes sucrées incontournables.
        </p>
        <p>
          Du classique complet à mes recettes originales, tout est fait maison
          avec un maximum de produit frais et locaux.
        </p>
      </div>
      <div className="carte_menu">
        <div className="nav_carte">
          <button onClick={() => setCartBtn(true)}>
            Les galettes de blé noir
          </button>
          <button onClick={() => setCartBtn(false)}>Les crêpes</button>
        </div>
        <div className="carte">
          {cartBtn ? <Galettes></Galettes> : <Crepes></Crepes>}
        </div>
      </div>
    </div>
  );
};

export default Carte;
