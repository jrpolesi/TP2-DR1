import "./styles.css";

import logo from "../../assets/shared/logo.webp";

export function Header() {
  return (
    <header className="header">
      <h1 aria-label="S-Car">
        <img src={logo} alt="logo" />
      </h1>

      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#quem-somos">Quem somos</a>
        </li>
        <li>
          <a href="#produtos">Produtos</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
      </ul>
    </header>
  );
}
