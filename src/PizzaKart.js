import React from "react";

export default function PizzaKart(props) {
  const { pizzaCesitleri } = props;
  return (
    <>
      <div className="pizza-kart">
        <img src={pizzaCesitleri.img} />
        <p>{pizzaCesitleri.pizzaTuru}</p>
        <p>{pizzaCesitleri.fiyat}</p>
      </div>
    </>
  );
}
