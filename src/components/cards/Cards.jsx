import React, { useState } from "react";

import r1 from "../../assets/r1.png";
import r2 from "../../assets/r2.png";
import r4 from "../../assets/r4.png";
import r5 from "../../assets/r5.png";
import r6 from "../../assets/r6.png";
import r7 from "../../assets/r7.png";

import ReactCardFlip from "react-card-flip";
import "../cards/cards.css";

//COMPONENTES
import Footer from "../footer/Footer";

function Cards() {

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <div className="card-padre">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div className="card-fondo">
            <div className="text-element">
              <h1 className="text-card-1">Local</h1>
              <h1 className="text-card">numbers</h1>
            </div>
            <div className="img-element">
              <img className="img-card" src={r2} width="90"></img>
            </div>
          </div>
          <button onClick={handleClick}>Click to flip</button>

          <div
            style={{
              backgroundColor: "red",
              height: 100,
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Create video tutorials on YouTube
            <button onClick={handleClick}>Click to flip</button>
          </div>
        </ReactCardFlip>

        <div className="card-fondo">
          <div className="text-element">
            <h2 className="text-card-1">Inmate</h2>
            <h2 className="text-card">messages</h2>
          </div>
          <div className="img-element">
            <img className="img-card" src={r1} width="90"></img>
          </div>
        </div>

        <div className="card-fondo">
          <div className="text-element">
            <h3 className="text-card-1">Pictures</h3>
          </div>
          <div className="img-element-e">
            <img className="img-card-e" src={r4} width="90"></img>
          </div>
        </div>

        <div className="card-fondo">
          <div className="text-element">
            <h4 className="text-card-1">Sports</h4>
            <h4 className="text-card">service</h4>
          </div>
          <div className="img-element">
            <img className="img-card" src={r5} width="90"></img>
          </div>
        </div>

        <div className="card-fondo">
          <div className="text-element">
            <h4 className="text-card-1">Phone +</h4>
            <h4 className="text-card">Text Combo</h4>
          </div>
          <div className="img-element">
            <img className="img-card" src={r6} width="60"></img>
          </div>
        </div>

        <div className="card-fondo">
          <div className="text-element">
            <h4 className="text-card-1">Messages +</h4>
            <h4 className="text-card">Pics Combo</h4>
          </div>
          <div className="img-element">
            <img className="img-card" src={r7} width="70"></img>
          </div>
        </div>
      </div>

      <div className="contenedor-btn-payment">
        <button className="btn-special-payment">Special Payment</button>
      </div>

      <button className="btn-cards">Help</button>
      <button className="btn-cards">About</button>

      <Footer />
    </div>
  );
}

export default Cards;
