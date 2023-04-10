import React from "react";
import "./giris.css";
import { useHistory } from "react-router-dom";

export default function Giris() {
  const history = useHistory();
  const toAnasayfa = () => {
    history.push("/mainpage");
  };
  return (
    <div className="container-giris">
      <div className="baslik">
        <h3>Aromalı Dünya</h3>
        <h2>DAMAKTA KALACAK LEZZET</h2>

        <button className="giris-buton" onClick={toAnasayfa}>
          GİRİŞ
        </button>
      </div>
      <img
        className="giris-image"
        src="https://www.eauclairesbestpizza.com/wp-content/uploads/2022/06/pizza-6-speciality-1-1fx9ae.png"
        alt="giris-pizza"
      />
    </div>
  );
}
