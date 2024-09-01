import { github, linkedin } from "../../assets";
import "./styles.css";

export function Contatos() {
  return (
    <section className="contatos">
      <h2>Contatos</h2>

      <ul className="contatos--list">
        <li>
          <a
            href="https://www.linkedin.com/in/jose-ricardo-kremer-polesi/"
            title="Ir ao linkedin"
          >
            <img src={linkedin} alt="logo do LinkedIn" />
          </a>
        </li>
        <li>
          <a href="https://github.com/jrpolesi" title="Ir ao GitHub">
            <img src={github} alt="logo do github" />
          </a>
        </li>
      </ul>
    </section>
  );
}
