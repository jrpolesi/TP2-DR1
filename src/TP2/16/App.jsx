/*
Neste exercício, você aprimorará seu portfólio de desenvolvedor adicionando uma funcionalidade extra ao portfólio desenvolvido. A funcionalidade deve ser escolhida livremente por você e deve incorporar uma biblioteca de terceiros relevante para a funcionalidade que deseja implementar.

Instruções Adicionais:
Mantenha um design consistente com as outras seções do seu portfólio para uma experiência de usuário harmoniosa.
*/
import "./App.css";
import {
  Agradecimento,
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
      <Agradecimento />
    </div>
  );
}
