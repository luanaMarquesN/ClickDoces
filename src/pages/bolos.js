import React from "react";
import "./bolos.css";

import boloChocolate from "../assets/boloChocolate.jpg";
import boloMorango from "../assets/boloMorango.jpg";
import boloLaranja from "../assets/boloLaranja.jpg";


function Bolos() {
  const bolos = [
    {
      id: 1,
      nome: "Bolo de Chocolate",
      imagem: boloChocolate,
      preco: "R$ 45,00",
      descricao: "Bolo macio com cobertura cremosa de chocolate",
    },
    {
      id: 2,
      nome: "Bolo de Morango",
      imagem: boloMorango,
      preco: "R$ 50,00",
      descricao: "Bolo com creme e morangos frescos",
    },
    {
      id: 3,
      nome: "Bolo de Laranja",
      imagem: boloLaranja,
      preco: "R$ 40,00",
      descricao: "Bolo fofinho de laranja",
    },
  ];

  return (
    <div className="bolos-page">
      <h1>Conheça Nossos Bolos</h1>
      <div className="grid">
        {bolos.map((bolo) => (
          <div key={bolo.id} className="card">
            <img src={bolo.imagem} alt={bolo.nome} />
            <div className="info">
              <h3>{bolo.nome}</h3>
              <p className="descricao">{bolo.descricao}</p>
              <p className="preco">{bolo.preco}</p>
              <button className="btn-comprar">Adicionar ao carrinho</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bolos;