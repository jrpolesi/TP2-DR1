/*
Neste exercício, você continuará a desenvolver o seu portfólio de desenvolvedor, adicionando a seção de habilidades. Você criará um novo componente para exibir todas as habilidades que adquiriu até o momento.

Etapa 3: Desenvolvimento da Seção de Habilidades

Criação do Componente:
Crie um novo componente chamado "Habilidades.jsx" na pasta de componentes do seu projeto.
Conteúdo do Componente:
Dentro do componente "Habilidades", liste todas as habilidades que você adquiriu até o momento. Isso pode incluir linguagens de programação, frameworks, bibliotecas, ferramentas e qualquer outra habilidade relevante para o desenvolvimento de software.
Estilização:
Estilize o componente "Habilidades" de forma atraente e organizada. Utilize CSS para tornar a lista de habilidades visualmente agradável e fácil de ler.
Instruções adicionais:
Certifique-se de que todas as habilidades listadas sejam relevantes para sua área de atuação como desenvolvedor. 
Considere agrupar as habilidades por categoria, se isso ajudar a tornar a lista mais organizada. 
Você pode adicionar ícones ou outros elementos visuais para representar cada habilidade, se desejar.
*/
import "./App.css";
import { SobreMim, Habilidades } from "./components";

export default function App() {
  return (
    <div className="container">
      <SobreMim />
      <Habilidades />
    </div>
  );
}
