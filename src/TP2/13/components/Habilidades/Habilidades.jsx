import {
  bootstrap,
  css,
  electron,
  html,
  jquery,
  js,
  npm,
  postgres,
  python,
  react,
  sqlite,
  ts,
} from "../../assets";
import "./styles.css";

const HABILIDADES = [
  {
    name: "CSS",
    src: css,
    alt: "Logo do CSS",
  },
  {
    name: "HTML",
    src: html,
    alt: "Logo do HTML",
  },
  {
    name: "JavaScript",
    src: js,
    alt: "Logo do JavaScript",
  },
  {
    name: "React",
    src: react,
    alt: "Logo do React",
  },
  {
    name: "Python",
    src: python,
    alt: "Logo do Python",
  },
  {
    name: "PostgreSQL",
    src: postgres,
    alt: "Logo do PostgreSQL",
  },
  {
    name: "SQLite",
    src: sqlite,
    alt: "Logo do SQLite",
  },
  {
    name: "TypeScript",
    src: ts,
    alt: "Logo do TypeScript",
  },
  {
    name: "NPM",
    src: npm,
    alt: "Logo do NPM",
  },
  {
    name: "jQuery",
    src: jquery,
    alt: "Logo do jQuery",
  },
  {
    name: "Bootstrap",
    src: bootstrap,
    alt: "Logo do Bootstrap",
  },
  {
    name: "Electron",
    src: electron,
    alt: "Logo do Electron",
  },
];

export function Habilidades() {
  return (
    <section className="habilidades">
      <h2>Habilidades</h2>

      <ul className="habilidades--list">
        {HABILIDADES.map(({ name, src, alt }) => (
          <Habilidade key={name} src={src} alt={alt} name={name} />
        ))}
      </ul>
    </section>
  );
}

function Habilidade({ src, alt, name }) {
  return (
    <li>
      <img src={src} alt={alt} />
      <h3>{name}</h3>
    </li>
  );
}
