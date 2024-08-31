/*
Neste exercício, você terá a oportunidade de aplicar seus conhecimentos em React.js para criar uma landing page para uma empresa real ou fictícia. Esse sistema deverá conter as seguintes seções: 

- Home: Uma introdução à empresa, destacando sua missão e valores. 
- Quem Somos: Informações sobre a história e a equipe da empresa. 
- Produtos: Destaque dos principais produtos ou serviços oferecidos pela empresa. 
- Contato: Formulário de contato ou informações de contato da empresa. 

Você pode escolher uma empresa real ou criar uma fictícia para desenvolver a landing page. Certifique-se de incluir fotos e textos relevantes em cada seção para transmitir a mensagem da empresa de forma eficaz.
*/

import "./App.css";
import { Contato, Header, Home, Produtos, QuemSomos } from "./components";

export default function App() {
  return (
    <div className="container">
      <Header />

      <div className="page-sections">
        <div id="home">
          <Home />
        </div>
        <div id="quem-somos">
          <QuemSomos />
        </div>
        <div id="produtos">
          <Produtos />
        </div>
        <div id="contato">
          <Contato />
        </div>
      </div>
    </div>
  );
}
