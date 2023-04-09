import React from "react";
import { Link } from "react-router-dom";
import "./siparis.css";
import Form from "./Form";

export default function Siparis() {
  return (
    <div className="siparis">
      <div className="header-siparis">
        <Link to="/anasayfa" className="siparis-buton">
          Anasayfa
        </Link>
        <Link to="/pizza" className="siparis-buton">
          Sipariş Ver
        </Link>
      </div>
      <div className="form-kart">
        <Form />
      </div>
    </div>
  );
}
