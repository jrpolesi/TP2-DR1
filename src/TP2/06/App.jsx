/*
Neste exercício, você deverá criar componentes isolados para construir um layout simples. O objetivo é criar os componentes Header, Footer e Card em React e montar o layout conforme o protótipo fornecido.
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
