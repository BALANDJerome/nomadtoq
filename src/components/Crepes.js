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
    <div className="carte_items">
      {crepeArray.map((el, index) => (
        <div key={index}>
          <img
            src={"https://picsum.photos/600/400?random=" + index + "0"}
            alt=""
          />
          <h5>{el[0]}</h5>
          <p>{el[1]} €</p>
        </div>
      ))}
    </div>
  );
};

export default Crepes;
