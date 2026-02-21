import React from "react";

const Galettes = () => {
  const galetteArray = [
    ["Nature", "", 1.5],
    ["Simple", "jambon cuit, emmental", 6],
    ["Complète", "jambon cuit, emmental, oeuf mirroir", 7],
    ["Biquette", "chevre, miel", 7],
    ["Saucisse", "saucisse fumée, emmental, oignons caramélisés", 8],
    ["Savoyarde", "pomme de terre, lardons, oignons caramélisés, raclette", 8],
  ];

  return (
    <div>
      {galetteArray.map((el, index) => (
        <div key={index}>
          <div>
            <h5>{el[0]}</h5>
            <p>{el[2]} €</p>
          </div>
          <p>{el[1]}</p>
        </div>
      ))}
      <p>Tous les mois retrouvez la galette du mois</p>
    </div>
  );
};

export default Galettes;
