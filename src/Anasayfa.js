import React from "react";
import "./anasayfa.css";
import PizzaKart from "./PizzaKart";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Siparis from "./Siparis";

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
    <BrowserRouter>
      <Switch>
        <Route exact path="/anasayfa">
          <div className="anasayfa">
            <div className="header">
              <Link to="/anasayfa">
                <button className="anasayfa-buton"> Anasayfa</button>
              </Link>
              <Link to="/pizza">
                <button className="anasayfa-buton">Sipariş Ver</button>
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
            <div className="reklam">
              <h3>
                Siz de lezzetli bir pizza ile keyifli bir akşam geçirmek istemez
                misiniz?
              </h3>
              <div className="sufle">
                <p>Suflemizi hala denemediniz mi?</p>

                <img
                  src="https://static.mavikadin.com/images/haberler/22-09/21/sufle-2.jpg"
                  alt="sufle"
                />
              </div>
            </div>
            <footer className="footer">
              <p>Tüm hakları saklıdır &copy; 2023</p>
              <ul>
                <li>
                  <a href="https://www.example.com">Gizlilik Politikası</a>
                </li>
                <li>
                  <a href="https://www.example.com">Kullanım Şartları</a>
                </li>
                <li>
                  <a href="https://www.example.com">İletişim</a>
                </li>
              </ul>
            </footer>
          </div>
        </Route>
        <Route exact path="/pizza">
          <Siparis />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
