import React from "react";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
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
    pepperoni: false,
    sosis: false,
    jambon: false,
    sos: false,
    sogan: false,
    domates: false,
    misir: false,
    sucuk: false,
    jalepeno: false,
    sarimsak: false,
    biber: false,
    ananas: false,
    kabak: false,
    adet: "1",
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
    pepperoni: "",
    sosis: "",
    jambon: "",
    sos: "",
    sogan: "",
    domates: "",
    misir: "",
    sucuk: "",
    jalepeno: "",
    sarimsak: "",
    biber: "",
    ananas: "",
    kabak: "",
    adet: "",
    ad: "",
    soyad: "",
    adres: "",
    email: "",
    siparisnotu: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  //const [yeniSiparis, setYeniSiparis] = useState(null);
  const history = useHistory();
  //const toSiparisAlindiSayfasi = () => {
  //  history.push("/success");
  //};

  const toplamFiyat =
    (100 +
      Object.values(form).filter((value) => value === "false").length * 5) *
    form.adet;

  useEffect(() => {
    formSchema.isValid(form).then((valid) => setButtonDisabled(!valid));
  }, [form]);

  function handleChange(event) {
    const { name, value } = event.target;
    checkFormError(name, value);
    setForm({
      ...form,
      [name]: value,
    });
  }

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

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", form)
      .then((response) => {
        console.log("Sipariş başarıyla gönderildi:", response.data);
        // setYeniSiparis(response.data);
        setForm({
          pizzaturu: "",
          hamurboyut: "none",
          hamurkalinligi: "none",
          pepperoni: false,
          sosis: false,
          jambon: false,
          sos: false,
          sogan: false,
          domates: false,
          misir: false,
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

        history.push("/success");
      })
      .catch((err) => console.log(err));
  }
  console.log(form);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-yazi">
          <section className="bolum1">
            <div className="pizza-turu">
              <label for="pizza-turu">
                <h3>
                  Pizza Türü Seçiniz <span style={{ color: "red" }}>*</span>
                </h3>
              </label>
              <br />
              <select
                name="pizzaturu"
                id="size-dropdown"
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
              <h3>
                Boyut Seç <span style={{ color: "red" }}>*</span>
              </h3>
              <input
                type="radio"
                id="kucuk"
                name="hamurboyut"
                value="kucuk"
                checked={form.hamurboyut === "kucuk"}
                onChange={handleChange}
              />
               
              <label for="kucuk" className="gri">
                Küçük
              </label>
              <br />
              <br />
              <input
                type="radio"
                id="orta"
                name="hamurboyut"
                value="orta"
                checked={form.hamurboyut === "orta"}
                onChange={handleChange}
              />
               {" "}
              <label for="orta" className="gri">
                Orta
              </label>
              <br />
              <br />
              <input
                type="radio"
                id="buyuk"
                name="hamurboyut"
                value="buyuk"
                checked={form.hamurboyut === "buyuk"}
                onChange={handleChange}
              />
               {" "}
              <label for="buyuk" className="gri">
                Büyük
              </label>
              {error.hamurboyut && <p>{error.hamurboyut}</p>}
              <br />
              <br />
            </div>
          </section>
          <section className="bolum2">
            <div className="hamur-kalinligi">
              <h3>
                Hamur Kalınlığı Seç <span style={{ color: "red" }}>*</span>
              </h3>
              <input
                type="radio"
                id="ince"
                name="hamurkalinligi"
                value="ince"
                checked={form.hamurkalinligi === "ince"}
                onChange={handleChange}
              />
               
              <label for="ince" className="gri">
                İnce
              </label>
              <br />
              <br />
              <input
                type="radio"
                id="normal"
                name="hamurkalinligi"
                value="normal"
                checked={form.hamurkalinligi === "normal"}
                onChange={handleChange}
              />
               {" "}
              <label for="normal" className="gri">
                Normal
              </label>
              <br />
              <br />
              <input
                type="radio"
                id="kalin"
                name="hamurkalinligi"
                value="kalin"
                checked={form.hamurkalinligi === "kalin"}
                onChange={handleChange}
              />
              <label for="kalin" className="gri">
                Kalın
              </label>
              {error.hamurkalinligi && <p>{error.hamurkalinligi}</p>}
              <br />
              <br />
            </div>
            <div className="siparis-adet">
              <h3>
                Adet <span style={{ color: "red" }}>*</span>
              </h3>
              <label for="adet">
                <p>En fazla 10 adet seçebilirsiniz.</p>
              </label>
              <br />

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
          </section>

          <div className="ek-malzemeler">
            <h3>Ek Malzemeler</h3>
            <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="pizza-select">
              <div className="ps">
                <input
                  type="checkbox"
                  id="pepperoni"
                  name="pepperoni"
                  value={form.pepperoni}
                  onChange={handleChange}
                  className="pizza-select"
                />
                <label for="pepperoni" className="gri">
                  Pepperoni
                </label>
                <br />
                <input
                  type="checkbox"
                  id="sosis"
                  name="sosis"
                  value={form.sosis}
                  onChange={handleChange}
                  className="pizza-select"
                />
                <label for="sosis" className="gri">
                  Sosis
                </label>
                <br />
                <input
                  type="checkbox"
                  id="jambon"
                  name="jambon"
                  value={form.jambon}
                  onChange={handleChange}
                  className="pizza-select"
                />
                <label for="jambon" className="gri">
                  Jambon
                </label>
                <br />
                <input
                  type="checkbox"
                  id="sos"
                  name="sos"
                  value={form.sos}
                  onChange={handleChange}
                  className="pizza-select"
                />
                <label for="sos" className="gri">
                  Özel Sos
                </label>
                <br />
                <input
                  type="checkbox"
                  id="sogan"
                  name="sogan"
                  value={form.sogan}
                  onChange={handleChange}
                  className="pizza-select"
                />
                <label for="sogan" className="gri">
                  Soğan
                </label>{" "}
              </div>
              <br />
              <div className="ps">
                <input
                  type="checkbox"
                  id="domates"
                  name="domates"
                  value={form.domates}
                  onChange={handleChange}
                  className="pizza-select"
                />
                <label for="domates" className="gri">
                  Domates
                </label>{" "}
                <br />
                <input
                  type="checkbox"
                  id="misir"
                  name="misir"
                  value={form.misir}
                  onChange={handleChange}
                  className="pizza-select"
                />
                <label for="misir" className="gri">
                  Mısır
                </label>{" "}
                <br />
                <input
                  type="checkbox"
                  id="sucuk"
                  name="sucuk"
                  value={form.sucuk}
                  onChange={handleChange}
                  className="pizza-select"
                />
                <label for="sucuk" className="gri">
                  Sucuk
                </label>{" "}
                <br />
                <input
                  type="checkbox"
                  id="jalepeno"
                  name="jalepeno"
                  value={form.jalepeno}
                  onChange={handleChange}
                  className="pizza-select"
                />
                <label for="jalepeno" className="gri">
                  Jalepeno
                </label>{" "}
                <br />
                <input
                  type="checkbox"
                  id="sarimsak"
                  name="sarimsak"
                  value={form.sarimsak}
                  onChange={handleChange}
                  className="pizza-select"
                />
                <label for="sarimsak" className="gri">
                  Sarımsak
                </label>{" "}
              </div>
              <br />{" "}
              <div className="ps">
                <input
                  type="checkbox"
                  id="biber"
                  name="biber"
                  value={form.biber}
                  onChange={handleChange}
                  className="pizza-select"
                />
                <label for="biber" className="gri">
                  Biber
                </label>{" "}
                <br />
                <input
                  type="checkbox"
                  id="sucuk"
                  name="sucuk"
                  value={form.sucuk}
                  onChange={handleChange}
                  className="pizza-select"
                />
                <label for="sucuk" className="gri">
                  Sucuk
                </label>{" "}
                <br />
                <input
                  type="checkbox"
                  id="ananas"
                  name="ananas"
                  value={form.ananas}
                  onChange={handleChange}
                  className="pizza-select"
                />
                <label for="ananas" className="gri">
                  Ananas
                </label>{" "}
                <br />
                <input
                  type="checkbox"
                  id="kabak"
                  name="kabak"
                  value={form.kabak}
                  onChange={handleChange}
                  className="pizza-select"
                />
                <label for="kabak" className="gri">
                  Kabak
                </label>{" "}
                <br />
              </div>
            </div>
          </div>
          <section className="bolum3">
            <div className="iletisim-bilgileri">
              <h3>
                İletişim Bilgileri <span style={{ color: "red" }}>*</span>
              </h3>
              <label for="ad" className="gri">
                Ad :
              </label>
              <br />
              <br />
              <input
                type="text"
                id="ad"
                name="ad"
                value={form.ad}
                onChange={handleChange}
                placeholder="Adınız"
              />
              <br />
              {error.ad && <p>{error.ad}</p>}
              <br />
              <label for="soyad" className="gri">
                Soyad :
              </label>
              <br />
              <br />
              <input
                type="text"
                id="soyad"
                name="soyad"
                value={form.soyad}
                onChange={handleChange}
                placeholder="Soyadınız"
              />
              {error.soyad && <p>{error.soyad}</p>}
              <br />
              <br />
              <label for="adres" className="gri">
                Adres :
              </label>
              <br />
              <br />
              <input
                type="text"
                id="adres"
                name="adres"
                value={form.adres}
                onChange={handleChange}
                placeholder="Adres"
              />
              {error.adres && <p>{error.adres}</p>}
              <br />
              <br />
              <label for="email" className="gri">
                Email :
              </label>
              <br />
              <br />
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
              ></input>
              {error.email && <p>{error.email}</p>}
              <br />
              <br />
            </div>
            <div className="siparis-notu-select">
              <div className="siparis-notu">
                <label for="siparisnotu" className="gri">
                  Sipariş notu ekleyiniz :
                </label>
                <br />
                <br />
                <input
                  type="text"
                  id="siparisnotu"
                  name="siparisnotu"
                  value={form.siparisnotu}
                  onChange={handleChange}
                  placeholder="Siparişine eklemek istediğin bir not var mı?"
                  className="siparisNotu"
                />
                <br />
              </div>
              <div className="top-siparis">
                <h3>Sipariş Toplamı</h3>
                <div className="st">
                  <p>Seçimler</p>
                  <p>100₺</p> <br />
                </div>
                <div className="st">
                  <p>
                    {" "}
                    <span style={{ color: "red" }}> Toplam </span>
                  </p>
                  <p>
                    {" "}
                    <span style={{ color: "red" }}>{toplamFiyat}₺</span>
                  </p>{" "}
                  <br />
                </div>
                <button
                  className="buton-siparis"
                  type="submit"
                  disabled={buttonDisabled}
                >
                  Sipariş Gönder
                </button>
              </div>
            </div>
          </section>
        </div>
      </form>
    </>
  );
}
