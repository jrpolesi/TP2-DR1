/*
Neste exercício, você deverá criar um componente isolado chamado Card.jsx contendo um título e um texto e fazer a chamada desse componente 4 vezes no componente principal..
*/
import "./App.css";
import Card from "./Card/Card";

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
  {
    id: "Card 3",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem fermentum ultricies. Nullam nec purus ut sem fermentum ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem fermentum ultricies. Nullam nec purus ut sem fermentum ultricies.",
  },
  {
    id: "Card 4",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem fermentum ultricies. Nullam nec purus ut sem fermentum ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem fermentum ultricies. Nullam nec purus ut sem fermentum ultricies.",
  },
];

export default function App() {
  return (
    <div className="cards-page">
      <h1>Cards</h1>
      <div className="cards-list">
        {CARDS_CONTENT.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}
