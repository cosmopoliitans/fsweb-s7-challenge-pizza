import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import axios from "axios";
import "./siparis.css";

/* YUP ADIMLARI 
1.yup kurmak,import etmek, done 
2.şema oluşturmak, done
3.hatalar için state oluşturmak, done
4.hataları kontrol eden fonksiyon oluşturmak, done
5.Bu fonksiyonu her değişiklik sonrası tekrar çalıştırmak done
6.hata mesajlarını sayfada görüntülemek //<p> kısmına yazdık. 
7.Hata varsa formun gönderilmesini engelle.
*/

const formSchema = Yup.object().shape({
  pizzaturu: Yup.string().required("Pizza seçiniz"),
  hamurboyut: Yup.string()
    .oneOf(["kucuk", "orta", "buyuk"], "Lütfen boy seçiniz")
    .required(),
  hamurkalinligi: Yup.string()
    .oneOf(["ince", "normal", "kalin"], "Hamur kalınlığı seçimi zorunludur")
    .required(),
  pepperoni: Yup.boolean().oneOf([true, false], ""),
  sosis: Yup.boolean().oneOf([true, false], ""),
  jambon: Yup.boolean().oneOf([true, false], ""),
  sos: Yup.boolean().oneOf([true, false], ""),
  sogan: Yup.boolean().oneOf([true, false], ""),
  domates: Yup.boolean().oneOf([true, false], ""),
  misir: Yup.boolean().oneOf([true, false], ""),
  sucuk: Yup.boolean().oneOf([true, false], ""),
  jalepeno: Yup.boolean().oneOf([true, false], ""),
  sarimsak: Yup.boolean().oneOf([true, false], ""),
  biber: Yup.boolean().oneOf([true, false], ""),
  ananas: Yup.boolean().oneOf([true, false], ""),
  kabak: Yup.boolean().oneOf([true, false], ""),
  adet: Yup.number().required("En fazla 10 adet sipariş verebilirsiniz"),
  ad: Yup.string()
    .required()
    .min(2, "En az 2 karakter içermelidir"),
  soyad: Yup.string()
    .required()
    .min(2, "En az 2 karakter içermelidir"),
  adres: Yup.string()
    .required()
    .min(10, "En az 10 karakter içermelidir"),
  email: Yup.string()
    .email("Lütfen geçerli bir e-posta adresi giriniz")
    .required("Bu alan zorunludur"),
  siparisnotu: Yup.string(),
});

export default function Form() {
  const [form, setForm] = useState({
    pizzaturu: "",
    hamurboyut: "orta",
    hamurkalinligi: "normal",
    pepperoni: true,
    sosis: true,
    jambon: true,
    sos: true,
    sogan: false,
    domates: false,
    misir: true,
    sucuk: false,
    jalepeno: false,
    sarimsak: false,
    biber: false,
    ananas: false,
    kabak: false,
    adet: false,
    ad: "",
    soyad: "",
    adres: "",
    email: "",
    siparisnotu: "",
  });

  const [error, setError] = useState({
    pizzaturu: "",
    hamurboyut: "",
    hamurkalinligi: "",
    pepperoni: true,
    sosis: true,
    jambon: true,
    sos: true,
    sogan: false,
    domates: false,
    misir: true,
    sucuk: false,
    jalepeno: false,
    sarimsak: false,
    biber: false,
    ananas: false,
    kabak: false,
    adet: false,
    ad: "",
    soyad: "",
    adres: "",
    email: "",
    siparisnotu: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [yeniSiparis, setYeniSiparis] = useState(null);

  const checkFormError = (name, value) => {
    Yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setError({
          ...error,
          [name]: "",
        });
      })
      .catch((err) => {
        setError({
          ...error,
          [name]: err.message,
        });
      });
  };

  function handleChange(event) {
    const { name, value } = event.target;
    checkFormError(name, value);
    setForm({
      ...form,
      [name]: value,
    });
  }

  useEffect(() => {
    formSchema.isValid(form).then((valid) => setButtonDisabled(!valid));
  }, [form]);

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", form)
      .then((response) => {
        console.log(response.data);
        setYeniSiparis(response.data);
        setForm({
          pizzaturu: "",
          hamurboyut: "",
          hamurkalinligi: "",
          pepperoni: true,
          sosis: true,
          jambon: true,
          sos: true,
          sogan: false,
          domates: false,
          misir: true,
          sucuk: false,
          jalepeno: false,
          sarimsak: false,
          biber: false,
          ananas: false,
          kabak: false,
          adet: false,
          ad: "",
          soyad: "",
          adres: "",
          email: "",
          siparisnotu: "",
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-yazi">
          <div className="bolum1">
            <div className="pizza-turu">
              <label for="pizza-turu">
                <h3>Pizza Türü Seçiniz</h3>
              </label>
              <br />
              <select
                class
                name="pizzaturu"
                id="pizzaturu"
                value={form.pizzaturu}
                onChange={handleChange}
              >
                <option value="secimyapiniz">Seçim Yapınız</option>
                <option value="ekspress">Ekspress Pizza</option>
                <option value="margarita">Margarita Pizza</option>
                <option value="sucuklu">Sucuklu Pizza</option>
                <option value="peynirli">Peynirli Pizza</option>
              </select>
              {error.pizzaturu && <p>{error.pizzaturu}</p>}
            </div>
            <div className="hamur-boyut">
              <h3>Boyut Seç</h3>
              <input
                type="radio"
                id="kucuk"
                name="hamurboyut"
                value="kucuk"
                checked={form.hamurboyut === "kucuk"}
                onChange={handleChange}
              />
               <label for="kucuk">Küçük</label>
              <br />
              <input
                type="radio"
                id="orta"
                name="hamurboyut"
                value="orta"
                checked={form.hamurboyut === "orta"}
                onChange={handleChange}
              />
                <label for="orta">Orta</label>
              <br />
              <input
                type="radio"
                id="buyuk"
                name="hamurboyut"
                value="buyuk"
                checked={form.hamurboyut === "buyuk"}
                onChange={handleChange}
              />
                <label for="buyuk">Büyük</label>
              {error.hamurboyut && <p>{error.hamurboyut}</p>}
              <br />
              <br />
            </div>
            <div className="hamur-kalinligi">
              <h3>Hamur Kalınlığı Seç</h3>
              <input
                type="radio"
                id="ince"
                name="hamurkalinligi"
                value="ince"
                checked={form.hamurkalinligi === "ince"}
                onChange={handleChange}
              />
               <label for="ince">İnce</label>
              <br />
              <input
                type="radio"
                id="normal"
                name="hamurkalinligi"
                value="normal"
                checked={form.hamurkalinligi === "normal"}
                onChange={handleChange}
              />
                <label for="normal">Normal</label>
              <br />
              <input
                type="radio"
                id="kalin"
                name="hamurkalinligi"
                value="kalin"
                checked={form.hamurkalinligi === "kalin"}
                onChange={handleChange}
              />
              <label for="kalin">Kalın</label>
              {error.hamurkalinligi && <p>{error.hamurkalinligi}</p>}
              <br />
              <br />
            </div>
          </div>
          <div className="ek-malzemeler">
            <h3>Ek Malzemeler</h3>
            <p>En fazla 10 malzeme seçebilirsiniz</p>
            <div className="pizza-select">
              <input
                type="checkbox"
                id="pepperoni"
                name="pepperoni"
                value={form.pepperoni}
                onChange={handleChange}
                class="pizza-select"
              />
              <label for="pepperoni">Pepperoni</label>
              <br />
              <input
                type="checkbox"
                id="sosis"
                name="sosis"
                value={form.sosis}
                onChange={handleChange}
                class="pizza-select"
              />
              <label for="sosis">Sosis</label>
              <br />
              <input
                type="checkbox"
                id="jambon"
                name="jambon"
                value={form.jambon}
                onChange={handleChange}
                class="pizza-select"
              />
              <label for="jambon">Jambon</label>
              <br />
              <input
                type="checkbox"
                id="sos"
                name="sos"
                value={form.sos}
                onChange={handleChange}
                class="pizza-select"
              />
              <label for="sos">Özel Sos</label>
              <br />
              <input
                type="checkbox"
                id="sogan"
                name="sogan"
                value={form.sogan}
                onChange={handleChange}
                class="pizza-select"
              />
              <label for="sogan">Soğan</label> <br />
              <input
                type="checkbox"
                id="domates"
                name="domates"
                value={form.domates}
                onChange={handleChange}
                class="pizza-select"
              />
              <label for="domates">Domates</label> <br />
              <input
                type="checkbox"
                id="misir"
                name="misir"
                value={form.misir}
                onChange={handleChange}
                class="pizza-select"
              />
              <label for="misir">Mısır</label> <br />
              <input
                type="checkbox"
                id="sucuk"
                name="sucuk"
                value={form.sucuk}
                onChange={handleChange}
                class="pizza-select"
              />
              <label for="sucuk">Sucuk</label> <br />
              <input
                type="checkbox"
                id="jalepeno"
                name="jalepeno"
                value={form.jalepeno}
                onChange={handleChange}
                class="pizza-select"
              />
              <label for="jalepeno">Jalepeno</label> <br />
              <input
                type="checkbox"
                id="sarimsak"
                name="sarimsak"
                value={form.sarimsak}
                onChange={handleChange}
                class="pizza-select"
              />
              <label for="sarimsak">Sarımsak</label> <br />
              <input
                type="checkbox"
                id="biber"
                name="biber"
                value={form.biber}
                onChange={handleChange}
                class="pizza-select"
              />
              <label for="biber">Biber</label> <br />
              <input
                type="checkbox"
                id="sucuk"
                name="sucuk"
                value={form.sucuk}
                onChange={handleChange}
                class="pizza-select"
              />
              <label for="sucuk">Sucuk</label> <br />
              <input
                type="checkbox"
                id="ananas"
                name="ananas"
                value={form.ananas}
                onChange={handleChange}
                className="pizza-select"
              />
              <label for="ananas">Ananas</label> <br />
              <input
                type="checkbox"
                id="kabak"
                name="kabak"
                value={form.kabak}
                onChange={handleChange}
                class="pizza-select"
              />
              <label for="kabak">Kabak</label> <br />
            </div>
          </div>
          <div className="siparis-adet">
            <h3>Adet</h3>
            <label for="adet">(En fazla 10 adet seçebilirsiniz):</label>
            <input
              type="number"
              id="adet"
              name="adet"
              min="1"
              max="10"
              value={form.adet}
              onChange={handleChange}
            />
            {error.adet && <p>{error.adet}</p>}
          </div>
          <div className="iletisim-bilgileri">
            <h3>İletişim Bilgileri</h3>
            <label for="ad">Ad :</label>
            <br />
            <input
              type="text"
              id="ad"
              name="ad"
              value={form.ad}
              onChange={handleChange}
            />
            {error.ad && <p>{error.ad}</p>}
            <br />
            <label for="soyad">Soyad :</label>
            <br />
            <input
              type="text"
              id="soyad"
              name="soyad"
              value={form.soyad}
              onChange={handleChange}
            />
            {error.soyad && <p>{error.soyad}</p>}
            <br />
            <label for="adres">Adres :</label>
            <br />
            <input
              type="text"
              id="adres"
              name="adres"
              value={form.adres}
              onChange={handleChange}
            />
            {error.adres && <p>{error.adres}</p>}
            <br />
            <label for="email">Email :</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            ></input>
            {error.email && <p>{error.email}</p>}
            <br />
          </div>
          <div className="siparis-notu">
            <label for="siparisnotu">Sipariş notu ekleyiniz :</label>
            <br />
            <input
              type="text"
              id="siparisnotu"
              name="siparisnotu"
              value={form.siparisnotu}
              onChange={handleChange}
            />
            <br />
          </div>
          <Link to="/ordersubmit" id="order-submit">
            <button
              className="buton-siparis"
              type="submit"
              disabled={buttonDisabled}
            >
              Sipariş Gönder
            </button>
          </Link>
        </div>
      </form>
    </>
  );
}
