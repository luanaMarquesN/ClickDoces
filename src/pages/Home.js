import React from "react";
import "./Home.css";
import logoImg from "../assets/logoImg.png";
import bolosImg from "../assets/bolos.jpg";
import tortasImg from "../assets/tortas.jpg";
import trufasImg from "../assets/trufas.jpg";
import { Link } from "react-router-dom";

function Home() {
  const categorias = [
    { id: 1, nome: "Bolos", imagem: bolosImg, link: "/bolos" },
    { id: 2, nome: "Tortas", imagem: tortasImg, link: "/tortas" },
    { id: 3, nome: "Trufas", imagem: trufasImg, link: "/trufas" },
  ];

  return (
    <div className="home">
      <header className="banner">
        <img src={logoImg} alt="Click Doces" className="logo" />
        <p>Descubra a doçura com um clique!</p>
      </header>

      <section className="categorias">
        <h2>Categorias</h2>
        <div className="grid">
          {categorias.map((cat) => (
            <Link key={cat.id} to={cat.link}>
              <div className="card">
                <img src={cat.imagem} alt={cat.nome} />
                <h3>{cat.nome}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
