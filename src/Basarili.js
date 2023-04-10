import React from "react";

export default function Basarili(props) {
  const { yeniSiparis } = props;
  console.log(yeniSiparis);
  return (
    <div className="yeniSiparis">
      <img
        src="https://media2.giphy.com/media/fFMiaqmS84dwZKno6h/giphy.gif?cid=ecf05e47ziky27xkjasgxsjvs3m6x3qbht48gm2s8o3yz60o&rid=giphy.gif&ct=s"
        alt="GIF"
        class="gif"
      />
      <h1>SİPARİŞİNİZ ALINDI!</h1>
    </div>
  );
}
