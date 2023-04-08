import React from "react";
import "./anasayfa.css";
import PizzaKart from "./PizzaKart";
import { Link } from "react-router-dom";

const pizzaCesitleri = [
  {
    img:
      "https://pbs.twimg.com/profile_images/2759638859/0bd3ffb3ddcd6c65d1fa6c3ded201378_400x400.jpeg",
    pizzaTuru: "Ekspress Pizza",
    fiyat: "100₺",
  },
  {
    img:
      "https://avatars.mds.yandex.net/i?id=c13dfad93f19ce1997a717b7024093a5e2feb901-8762941-images-thumbs&n=13",
    pizzaTuru: "Margarita Pizza",
    fiyat: "95₺",
  },
  {
    img:
      "https://i4.photo.2gis.com/images/branch/18/2533274812396961_63cc_300x300.jpg",
    pizzaTuru: "Sucuklu Pizza",
    fiyat: "110₺",
  },
  {
    img:
      "https://i2.photo.2gis.com/images/branch/73/10273836662189181_e2fe_300x300.jpg",
    pizzaTuru: "Peynirli Pizza",
    fiyat: "95₺",
  },
];

export default function Anasayfa() {
  return (
    <div className="anasayfa">
      <div className="header">
        <Link to="/orderpizza" className="anasayfa-buton">
          Anasayfa
        </Link>
        <Link to="/siparis" className="anasayfa-buton">
          Sipariş Ver
        </Link>
      </div>

      <div className="pizza">
        <div className="pizza-header">
          <img
            className="anasayfa-genis"
            src="https://thumbs.dreamstime.com/b/pizza-food-background-homemade-neapolitan-pizza-margherita-mozzarella-cheese-tomato-sauce-rustic-black-table-italian-249177791.jpg"
            alt="anasayfa-genis"
          />
          <h1>LEZZET PARMAKLARININ UCUNDA !</h1>
        </div>
      </div>
      <div className="pizzaCesitler">
        {pizzaCesitleri.map((event) => (
          <PizzaKart pizzaCesitleri={event} />
        ))}
      </div>
      <footer className="footer">
        <p>Tüm hakları saklıdır &copy; 2023</p>
        <ul>
          <li>
            <a href="#">Gizlilik Politikası</a>
          </li>
          <li>
            <a href="#">Kullanım Şartları</a>
          </li>
          <li>
            <a href="#">İletişim</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
