/*
Neste exercício, você continuará a desenvolver o seu portfólio de desenvolvedor, agora você deverá criar uma nova seção (de livre escolha) e adicionar no seu projeto.

Instruções Adicionais:
Mantenha um design consistente com as outras seções do seu portfólio para uma experiência de usuário harmoniosa.
*/
import "./App.css";
import {
  SobreMim,
  Habilidades,
  Projetos,
  Contatos,
  Formacao,
} from "./components";

export default function App() {
  return (
    <div className="container">
      <SobreMim />
      <Habilidades />
      <Projetos />
      <Formacao />
      <Contatos />
    </div>
  );
}
