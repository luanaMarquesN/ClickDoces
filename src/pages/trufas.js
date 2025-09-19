import React from "react";
import "./trufas.css";

import trufaMaracuja from "../assets/trufaMaracuja.jpg";
import trufaChocolate from "../assets/trufaChocolate.jpg";
import trufaBranca from "../assets/trufaBranca.jpg";

function Trufas() {
  const trufas = [
    {
      id: 1,
      nome: "Trufa de Maracujá",
      imagem: trufaMaracuja,
      preco: "R$ 8,00",
      descricao: "Trufa cremosa com recheio de maracujá e cobertura de chocolate",
    },
    {
      id: 2,
      nome: "Trufa de Chocolate",
      imagem: trufaChocolate,
      preco: "R$ 7,50",
      descricao: "Clássica trufa de chocolate ao leite, intensa e deliciosa",
    },
    {
      id: 3,
      nome: "Trufa Branca",
      imagem: trufaBranca,
      preco: "R$ 8,50",
      descricao: "Trufa de chocolate branco",
    },
  ];

  return (
    <div className="trufas-page">
      <h1>Conheça Nossas Trufas</h1>
      <div className="grid">
        {trufas.map((trufa) => (
          <div key={trufa.id} className="card">
            <img src={trufa.imagem} alt={trufa.nome} />
            <div className="info">
              <h3>{trufa.nome}</h3>
              <p className="descricao">{trufa.descricao}</p>
              <p className="preco">{trufa.preco}</p>
              <button className="btn-comprar">Adicionar ao carrinho</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trufas;
