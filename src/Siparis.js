import React from "react";
import { useHistory } from "react-router-dom";
import Form from "./Form";

export default function Siparis() {
  // sayfa yönlendirmesi için useHistory
  const history = useHistory();
  const toAnasayfa = () => {
    history.push("/mainpage");
  };
  const toSiparisSayfasi = () => {
    history.push("/order-pizza");
  };
  return (
    <div className="siparis">
      <div className="header">
        <button className="anasayfa-buton" onClick={toAnasayfa}>
          {" "}
          Anasayfa
        </button>

        <img
          src="https://media4.giphy.com/media/cJq4wgkTE6kcSh4eBp/giphy.gif?cid=ecf05e474t06ds0bd5kk0uz7w7s8nykbho6dkskxydvo6huj&rid=giphy.gif&ct=g"
          alt="GIF"
          class="gif"
        />

        <button className="anasayfa-buton" onClick={toSiparisSayfasi}>
          Sipariş Ver
        </button>
      </div>
      <div className="siparis-container">
        <div className="yemek-secimi">
          <h2>Ekspress Pizza</h2>
          <h3>100 ₺</h3>
          <p>
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana{" "}
            <p>
              <br />
              göre. Pizza, domates, peynir ve genellikle çeşitli diğer
              malzemelerle kaplanmış, daha
            </p>{" "}
            <br />
            <p>
              sonra geleneksel olarak odun ateşinde bir fırında yüksek
              sıcaklıkta pişirilen,
            </p>
            <br />
            <p>
              {" "}
              genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan
              oluşan İtalyan
            </p>
            <br />
            <p>
              {" "}
              kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta
              denir.
            </p>
          </p>
        </div>
        <div className="form-kart">
          <Form />
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
