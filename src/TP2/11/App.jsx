/*
Neste exercício iremos iniciar a construção de um portfólio de desenvolvedores. Ao longo deste exercício sequencial, você irá criar gradualmente o seu portfólio.

Para isso, nesse primeiro momento você deverá fazer:

Etapa 1: Criação e configuração do projeto:

Inicialização do Projeto:
Inicie um novo projeto utilizando a ferramenta de sua preferência. 
Estrutura do Projeto: 
Configure a estrutura do projeto de acordo com as melhores práticas, organizando arquivos e pastas de forma clara e intuitiva.
Etapa 2: Desenvolvimento do Componente "Sobre Mim"

Criação do Componente: 
Crie um novo componente chamado "SobreMim.jsx" na pasta de componentes do seu projeto. 
Conteúdo do Componente: 
Adicione uma foto sua e uma breve descrição sobre você dentro do componente "Sobre Mim". 
Instruções adicionais:
Implemente o componente já pensando na responsividade. 
O layout do seu portfólio pode ser personalizado de acordo com sua preferência, desde que contenha os mesmos tópicos do exemplo fornecido. 
Você pode acrescentar novos tópicos ao seu portfólio se desejar.
*/
import "./App.css";
import { SobreMim } from "./components";

export default function App() {
  return (
    <div className="container">
      <SobreMim />
    </div>
  );
}
