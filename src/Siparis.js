import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";

export default function Siparis() {
  return (
    <div className="siparis">
      <div className="header">
        <Link to="/anasayfa">
          <button className="anasayfa-buton"> Anasayfa</button>
        </Link>
        <Link to="/pizza">
          <button className="anasayfa-buton">Sipariş Ver</button>
        </Link>
      </div>
      <div className="form-kart">
        <Form />
      </div>
    </div>
  );
}
