import "./styles.css";

import camaro from "../../assets/Produtos/camaro.jpg";
import ferrari from "../../assets/Produtos/ferrari.jpg";
import lamborghini from "../../assets/Produtos/lamborghini.jpg";
import maserati from "../../assets/Produtos/maserati.jpg";
import mustang from "../../assets/Produtos/mustang.jpg";
import nissan from "../../assets/Produtos/nissan.jpg";

const PRODUTOS = [
  {
    id: "1",
    src: camaro,
    alt: "Camaro amarelo estacionado em frente a uma loja",
  },
  {
    id: "2",
    src: ferrari,
    alt: "Ferrari vermelha estacionada em um cruzamentos, possivelmente em Nova York",
  },
  {
    id: "3",
    src: lamborghini,
    alt: "Lamborghini verde estacionada em frente a uma loja",
  },
  {
    id: "4",
    src: maserati,
    alt: "Maserati preta vista de frente, parada no meio da rua com arvores ao fundo",
  },
  {
    id: "5",
    src: mustang,
    alt: "Mustang cinza estacionado sozinho na diagonal em um estacionamento a céu aberto",
  },
  {
    id: "6",
    src: nissan,
    alt: "Nissan laranja estacionado na beira de uma estrada, com uma vegetação de cores quentes no fundo",
  },
];

export function Produtos() {
  return (
    <section className="produtos">
      <h2>Produtos</h2>

      <div className="produtos--galeria">
        {PRODUTOS.map((produto) => (
          <Produto key={produto.id} src={produto.src} alt={produto.alt} />
        ))}
      </div>
    </section>
  );
}

export function Produto({ src, alt }) {
  return <img src={src} alt={alt} />;
}
