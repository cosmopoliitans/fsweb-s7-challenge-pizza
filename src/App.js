import React from "react";
import Giris from "./Giris";
import Anasayfa from "./Anasayfa";
import Siparis from "./Siparis";
import Basarili from "./Basarili";
import { Switch, Route, BrowserRouter } from "react-router-dom";

//"react-router-dom" kütüphanesini kullanarak uygulamanın farklı sayfalarına yönlendirme (routing) işlemleri

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Giris />
        </Route>
        <Route exact path="/mainpage">
          <Anasayfa />
        </Route>
        <Route exact path="/order-pizza">
          <Siparis />
        </Route>
        <Route exact path="/success">
          <Basarili />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
