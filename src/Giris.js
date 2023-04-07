import React from "react";
import "./giris.css";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import Anasayfa from "./Anasayfa";

export default function Giris() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="container-giris">
            <div className="baslik">
              <h3>Aromalı Dünya</h3>
              <h2>DAMAKTA KALACAK LEZZET</h2>
              <Link to="/orderpizza">
                <button className="giris-buton">GİRİŞ</button>
              </Link>
            </div>
            <img
              src="https://www.eauclairesbestpizza.com/wp-content/uploads/2022/06/pizza-6-speciality-1-1fx9ae.png"
              alt="giris-pizza"
            />
          </div>
        </Route>
        <Route exact path="/orderpizza">
          <Anasayfa />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
