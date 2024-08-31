import "./styles.css";
import img1 from "../img/img1.png";

export default function Header() {
  return (
    <header className="header">
      <img src={img1} alt="logo example" />
      <h1>Header</h1>
    </header>
  );
}
