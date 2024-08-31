/*
Neste exercício, você terá a oportunidade de aprimorar suas habilidades em design responsivo, adaptando o template desenvolvido anteriormente (exercício 8) para garantir uma experiência de usuário consistente em dispositivos menores, como smartphones e tablets.

Desafio:
Você recebeu um template de landing page que foi desenvolvido para dispositivos de tela padrão. Agora, sua missão é ajustar esse template para que ele seja responsivo e se adapte de forma adequada em dispositivos menores, mantendo a usabilidade e a estética da página.

Instruções: 

- Analise o template fornecido no exercício anterior e identifique áreas que precisam ser ajustadas para melhorar a experiência em dispositivos menores. 
- Utilize media queries em seu arquivo styles.css para aplicar estilos específicos que sejam adequados para dispositivos de tela pequena. Adapte o layout e os componentes conforme necessário para garantir uma apresentação agradável e funcional em dispositivos móveis.

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
