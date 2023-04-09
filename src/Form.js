import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useEffect, useState } from "react";

/* YUP ADIMLARI 
1.yup kurmak,import etmek,
2.şema oluşturmak,
3.hatalar için state oluşturmak,
4.hataları kontrol eden fonksiyon oluşturmak,
5.Bu fonksiyonu her değişiklik sonrası tekrar çalıştırmak
6.hata mesajlarını sayfada görüntülemek //<p> kısmına yazdık.
7.Hata varsa formun gönderilmesini engelle.
*/

export default function Form() {
  const [form, setForm] = useState({});
  return (
    <div>
      <form>
        <div className="pizza-turu">
          <label for="pizza-turu">
            <h3>Pizza Türü Seçiniz</h3>
          </label>
          <br />
          <select name="pizza-turu" id="pizza-turu">
            <option value="ekspress">Ekspress Pizza</option>
            <option value="margarita">Margarita Pizza</option>
            <option value="sucuklu">Sucuklu Pizza</option>
            <option value="peynirli">Peynirli Pizza</option>
          </select>
        </div>
        <div className="hamur-boyut">
          <h3>Boyut Seç</h3>
          <input type="radio" id="kucuk" name="hamur-boyut" value="kucuk" /> 
          <label for="kucuk">Küçük</label>
          <br />
            <input
            type="radio"
            id="orta"
            name="hamur-boyut"
            value="orta"
          />  <label for="orta">Orta</label>
          <br />
          <input
            type="radio"
            id="buyuk"
            name="hamur-boyut"
            value="buyuk"
          />  <label for="buyuk">Büyük</label>
          <br />
          <br />
        </div>
        <div className="hamur-kalinligi">
          <h3>Hamur Kalınlığı Seç</h3>
          <input type="radio" id="ince" name="hamur-kalinligi" value="ince" /> 
          <label for="ince">İnce</label>
          <br />
          <input
            type="radio"
            id="normal"
            name="hamur-kalinligi"
            value="normal"
          />
            <label for="normal">Normal</label>
          <br />
          <input type="radio" id="kalin" name="hamur-kalinligi" value="kalin" />
            <label for="kalin">Kalın</label>
          <br />
          <br />
        </div>
        <div className="ek-malzemeler">
          <h3>Ek Malzemeler</h3>
          <p>En fazla 10 malzeme seçebilirsiniz</p>
          <input
            type="checkbox"
            id="pepperoni"
            name="pepperoni"
            value="pepperoni"
          />
          <label for="pepperoni">Pepperoni</label>
          <br />
          <input type="checkbox" id="sosis" name="sosis" value="sosis" />
          <label for="sosis">Sosis</label>
          <br />
          <input type="checkbox" id="jambon" name="jambon" value="jambon" />
          <label for="jambon">Jambon</label>
          <br />
          <input type="checkbox" id="sos" name="sos" value="sos" />
          <label for="sos">Özel Sos</label>
          <br />
          <input type="checkbox" id="sogan" name="sogan" value="sogan" />
          <label for="sogan">Soğan</label> <br />
          <input type="checkbox" id="domates" name="domates" value="domates" />
          <label for="domates">Domates</label> <br />
          <input type="checkbox" id="mısır" name="mısır" value="mısır" />
          <label for="mısır">Mısır</label> <br />
          <input type="checkbox" id="sucuk" name="sucuk" value="sucuk" />
          <label for="sucuk">Sucuk</label> <br />
          <input
            type="checkbox"
            id="jalepeno"
            name="jalepeno"
            value="jalepeno"
          />
          <label for="jalepeno">Jalepeno</label> <br />
          <input
            type="checkbox"
            id="sarimsak"
            name="sarimsak"
            value="sarimsak"
          />
          <label for="sarimsak">Sarımsak</label> <br />
          <input type="checkbox" id="biber" name="biber" value="biber" />
          <label for="biber">Biber</label> <br />
          <input type="checkbox" id="sucuk" name="sucuk" value="sucuk" />
          <label for="sucuk">Sucuk</label> <br />
          <input type="checkbox" id="ananas" name="ananas" value="ananas" />
          <label for="ananas">Ananas</label> <br />
          <input type="checkbox" id="kabak" name="kabak" value="kabak" />
          <label for="kabak">Kabak</label> <br />
        </div>
        <div className="siparis-adet">
          <h3>Adet</h3>
          <label for="adet">(En fazla 10 adet seçebilirsiniz):</label>
          <input type="number" id="adet" name="adet" min="1" max="10" />
        </div>
        <div className="iletisim-bilgileri">
          <h3>İletişim Bilgileri</h3>
          <label for="ad">Ad :</label>
          <br />
          <input type="text" id="ad" name="ad" />
          <br />
          <label for="soyad">Soyad :</label>
          <br />
          <input type="text" id="soyad" name="soyad" />
          <br />
          <label for="adres">Adres :</label>
          <br />
          <input type="text" id="adres" name="adres" />
          <br />
          <label for="email">Email :</label>
          <br />
          <input type="email" id="email" name="email"></input>
          <br />
        </div>
        <div className="siparis-notu">
          <label for="siparisnotu">Sipariş notu ekleyiniz :</label>
          <br />
          <input type="text" id="siparisnotu" name="siparisnotu" />
          <br />
        </div>
        <Link to="/ordersubmit" id="order-submit">
          <button className="buton-siparis">Sipariş Gönder</button>
        </Link>
      </form>
    </div>
  );
}
