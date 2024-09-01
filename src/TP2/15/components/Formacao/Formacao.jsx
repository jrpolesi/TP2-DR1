import { infnet } from "../../assets";
import "./styles.css";

const FORMACAO = [
  {
    institution: "Instituto Infnet",
    course: "Bacharelado em Engenharia de Software",
    datas: "jan de 2024 - jan de 2028",
    descricao:
      "Estudante de Engenharia de Software empenhado, atualmente em busca de sólidos conhecimentos em desenvolvimento de software, design de sistemas e gerenciamento de projetos.",
    img: infnet,
  },
];

export function Formacao() {
  return (
    <section className="formacao">
      <h2>Formação acadêmica</h2>

      <ul className="formacao--list">
        {FORMACAO.map((formacao) => (
          <ItemFormacao key={formacao.institution} {...formacao} />
        ))}
      </ul>
    </section>
  );
}

function ItemFormacao({ institution, course, datas, descricao, img }) {
  return (
    <li className="formacao-item">
      <img src={img} alt={"logo da " + institution} />

      <div className="formacao-item--content">
        <div className="formacao-item--header">
          <h3>{institution}</h3>
          <span>{course}</span>
          <span>{datas}</span>
        </div>
        <p>{descricao}</p>
      </div>
    </li>
  );
}
