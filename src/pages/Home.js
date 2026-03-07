import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="home_container">
      <Header></Header>
      <div className="home_img">
        <img src="./assets/img/Logo_Nomad_Toq2.png" alt="crêpes" />
        <img src="./assets/img/Logo_Nomad_Toq2.png" alt="galettes" />
      </div>
      <div className="home_about_me">
        <div className="about_me_title">
          <h1>Nomad Toq</h1>
          <h2>Créperie ambulante et artisanale</h2>
          <p>
            <i>Le gout du sarrasin, la liberté de voyager.</i>
          </p>
        </div>
        <div className="about_me_description">
          <img
            src="./assets/img/Logo_Nomad_Toq.png"
            alt="photo du food truck en forme de toque"
          />
          <div>
            <p>
              Bienvenue chez Nomad Toq ! Ma mission est simple : vous apporter
              la saveur des galettes bretonnes directement à voter rencontre.
            </p>
            <p>
              A bord de ma créperie ambulante, je prépare sous vos yeux galettes
              et crêpes généreuses, cuisinées avec un maximum de produit frais
              et locaux.
            </p>
          </div>
        </div>
        <div className="about_me_engagement">
          <h3>Mes engagements</h3>
          <div>
            <h5>Qualité artisanale :</h5>
            <p>
              une pate maison, des farines sélectionnées et des produits locaux
            </p>
          </div>
          <div>
            <h5>Service ambulant :</h5>
            <p>
              une remorque conçu pour s'adapter à tous vos lieux de vie et de
              fête.
            </p>
          </div>
          <div>
            <h5>Convivialité :</h5>
            <p>le plaisir d'un repas chaud, préparé devant vous.</p>
          </div>
          <p>
            Sur la route ou chez vous, je déplace mon savoir faire pour
            transformer chaque repas en une véritable escale gourmande.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
