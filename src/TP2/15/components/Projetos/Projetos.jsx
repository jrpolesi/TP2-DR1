import {
  interpol,
  jogoDaVelha,
  lince,
  store,
  trivia,
  ubeer,
} from "../../assets";
import "./styles.css";

const PROJETOS = [
  {
    name: "Interpol",
    link: "https://github.com/jrpolesi/interpol-board-game",
    description:
      "Jogo feito utilizando como referência o jogo de tabuleiro Interpol",
    img: interpol,
  },
  {
    name: "Jogo da velha",
    link: "https://github.com/jrpolesi/jogo-da-memoria",
    description: "Jogo da velha feito em React",
    img: jogoDaVelha,
  },
  {
    name: "Ubeer",
    link: "https://github.com/jrpolesi/ubeer",
    description:
      "Aplicação web para buscar motoristas que sairam com o próprio carro e acabaram ingerindo bebidas alcoólicas",
    img: ubeer,
  },
  {
    name: "Store",
    link: "https://github.com/jrpolesi/next.js_store",
    description: "E-commerce criado utilizando Next.js e SASS",
    img: store,
  },
  {
    name: "Lince",
    link: "https://github.com/jrpolesi/lince_react-express_websockets",
    description:
      "Aplicação web para jogar lince online com amigos, feita com React, Express e Websockets",
    img: lince,
  },
  {
    name: "Trivia",
    link: "https://github.com/jrpolesi/trivia_app",
    description:
      "Aplicação web para responder perguntas de trivia, utilizando Vue",
    img: trivia,
  },
];

export function Projetos() {
  return (
    <section className="projetos">
      <h2>Projetos</h2>

      <ul className="projetos--list">
        {PROJETOS.map((projeto) => (
          <Projeto key={projeto.name} {...projeto} />
        ))}
      </ul>
    </section>
  );
}

function Projeto({ name, img, link, description }) {
  return (
    <li className="projetos--card">
      <h3>{name}</h3>
      <img src={img} alt="imagem de exemplo do jogo" />
      <p>{description}</p>
      <a href={link} target="_blank">
        GitHub
      </a>
    </li>
  );
}
