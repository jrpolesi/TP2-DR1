/*
Neste exercício, você irá aprimorar o template desenvolvido anteriormente (exercício 6) para torná-lo responsivo quando acessado por dispositivos de tela pequena, como smartphones. A capacidade de se adaptar a diferentes tamanhos de tela é essencial para garantir uma experiência de usuário consistente em diferentes dispositivos.

Instruções:

Utilize media queries em seu arquivo styles.css para aplicar estilos específicos que sejam adequados para dispositivos de tela pequena. 
Adapte o layout para garantir que os componentes sejam exibidos de forma agradável e funcional em dispositivos móveis.
*/

import "./App.css";
import Card from "./Card/Card";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const CARDS_CONTENT = [
  {
    id: "Card 1",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem fermentum ultricies. Nullam nec purus ut sem fermentum ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem fermentum ultricies. Nullam nec purus ut sem fermentum ultricies.",
  },
  {
    id: "Card 2",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem fermentum ultricies. Nullam nec purus ut sem fermentum ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem fermentum ultricies. Nullam nec purus ut sem fermentum ultricies.",
  },
];

export default function App() {
  return (
    <div className="page-layout">
      <Header />

      <div className="cards-list">
        {CARDS_CONTENT.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
