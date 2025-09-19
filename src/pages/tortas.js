import React from "react";
import "./tortas.css";

import tortaHolandesa from "../assets/tortaHolandesa.jpg";
import tortaLimao from "../assets/tortaLimao.jpg";
import tortaMorango from "../assets/tortaMorango.jpg";

function Tortas() {
  const tortas = [
    {
      id: 1,
      nome: "Torta Holandesa",
      imagem: tortaHolandesa,
      preco: "R$ 50,00",
      descricao: "Massa crocante com creme de chocolate e cobertura de chocolate belga",
    },
    {
      id: 2,
      nome: "Torta de Limão",
      imagem: tortaLimao,
      preco: "R$ 45,00",
      descricao: "Base crocante com creme de limão e cobertura de merengue suíço",
    },
    {
      id: 3,
      nome: "Torta de Morango",
      imagem: tortaMorango,
      preco: "R$ 55,00",
      descricao: "Massa leve com creme e morangos frescos por cima",
    },
  ];

  return (
    <div className="tortas-page">
      <h1>Conheça Nossas Tortas</h1>
      <div className="grid">
        {tortas.map((torta) => (
          <div key={torta.id} className="card">
            <img src={torta.imagem} alt={torta.nome} />
            <div className="info">
              <h3>{torta.nome}</h3>
              <p className="descricao">{torta.descricao}</p>
              <p className="preco">{torta.preco}</p>
              <button className="btn-comprar">Adicionar ao carrinho</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tortas;
