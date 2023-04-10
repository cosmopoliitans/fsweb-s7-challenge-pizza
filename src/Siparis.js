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
        <img
          src="https://media4.giphy.com/media/cJq4wgkTE6kcSh4eBp/giphy.gif?cid=ecf05e474t06ds0bd5kk0uz7w7s8nykbho6dkskxydvo6huj&rid=giphy.gif&ct=g"
          alt="GIF"
          class="gif"
        />
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
