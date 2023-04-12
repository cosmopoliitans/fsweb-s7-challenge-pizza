import React from "react";
import "./anasayfa.css";
import PizzaKart from "./PizzaKart";
import { useHistory } from "react-router-dom";

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
  // sayfa yönlendirmesi için useHistory
  const history = useHistory();
  const toSiparisSayfasi = () => {
    history.push("/order-pizza");
  };
  const toGiris = () => {
    history.push("/");
  };
  return (
    <div className="anasayfa">
      <div className="header">
        <button className="anasayfa-buton" onClick={toGiris}>
          {" "}
          Anasayfa
        </button>

        <img
          src="https://media2.giphy.com/media/0DbN8svza00LJkw2rj/giphy.gif?cid=ecf05e47rne1ajqlncjedgnduvw29cdt15vlkvuk1gm5pjqm&rid=giphy.gif&ct=s"
          alt="GIF"
          class="gif-delivery"
        />

        <button className="anasayfa-buton" onClick={toSiparisSayfasi}>
          Sipariş Ver
        </button>
      </div>

      <div className="pizza">
        <div className="pizza-header">
          <img
            className="anasayfa-genis"
            src="https://i.pinimg.com/originals/b6/5e/6a/b65e6ad113f923ceee95afdab4f50a5b.png"
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
  );
}
