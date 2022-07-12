import React from "react";
import Image from "react-bootstrap/Image";
import logo from "../../assets/logo.png";

import "../about/about.css";

function About() {
return (
<>
<hr className="hr-style"/>
  <div className="contenedor-boton">
    <button className="btn btn-primary m-1 boton">Español</button>
  </div>
  <div className="row">
    <Image className="imagen" src={logo} />

    <div class="contenedor">
      <p className="text-about-1">
        VIPInmates.com is a service <br /> created for those who appreciate{" "}
        <br /> a quality customer service
      </p>
      <p className="text-about-2">
        Please select the service you want. If you need assitance you may
        <br />
        <br />
        call us at (786)980-1681
      </p>
    </div>
  </div>
</>
);
}

export default About;