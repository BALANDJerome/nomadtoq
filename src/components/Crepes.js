import React from "react";

const Crepes = () => {
  const crepeArray = [
    ["Nature", 1.5],
    ["Sucre", 2.5],
    ["Beurre Sucre", 2.5],
    ["Confiture de fraise", 2.5],
    ["Nutella", 3.5],
    ["Miel", 4],
  ];

  return (
    <div>
      {crepeArray.map((el, index) => (
        <div key={index}>
          <img src="./assets/img/Logo_Nomad_Toq.png" alt="" />
          <h5>{el[0]}</h5>
          <p>{el[1]} €</p>
        </div>
      ))}
    </div>
  );
};

export default Crepes;
