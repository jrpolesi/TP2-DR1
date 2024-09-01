/*
Neste exercício, você continuará a desenvolver o seu portfólio de desenvolvedor, adicionando a seção de projetos realizados. Você criará um novo componente para exibir os projetos que já desenvolveu. 

Etapa 4: Desenvolvimento da Seção de Projetos 

Criação do Componente: 
Crie um novo componente chamado "Projetos.jsx" na pasta de componentes do seu projeto. 
Conteúdo do Componente: 
Dentro do componente "Projetos", liste os projetos que você já desenvolveu. Para cada projeto, inclua o título do projeto, uma breve descrição e, se possível, um link para o projeto ou para o repositório no GitHub. 
Estilização:
Estilize o componente "Projetos" de forma atraente e organizada. Utilize CSS para criar um layout que destaque cada projeto e torne a lista visualmente agradável.
Instruções Adicionais:
Certifique-se de incluir projetos relevantes e significativos para sua experiência como desenvolvedor. Considere utilizar imagens ou capturas de tela dos projetos para complementar as descrições.
*/
import "./App.css";
import { SobreMim, Habilidades, Projetos } from "./components";

export default function App() {
  return (
    <div className="container">
      <SobreMim />
      <Habilidades />
      <Projetos />
    </div>
  );
}
