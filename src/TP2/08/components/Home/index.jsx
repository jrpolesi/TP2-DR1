import "./styles.css";

import carro from "../../assets/Home/carro.jpg";

export function Home() {
  return (
    <section className="home">
      <img
        src={carro}
        alt="Super carro de portas abertas com o por do sol de fundo"
      />

      <div className="home-content">
        <h2>S-car</h2>
        <p>
          Seja bem-vindo à S-car, o destino definitivo para os amantes de
          supercarros! Aqui, você encontrará uma seleção exclusiva das máquinas
          mais potentes e luxuosas do mundo, prontas para acelerar o seu
          coração. Explore nosso site e descubra os supercarros dos seus sonhos,
          com atendimento personalizado e condições especiais que só a S-car
          pode oferecer. Prepare-se para uma experiência incomparável no
          universo dos supercarros. Venha conosco nessa jornada de pura
          adrenalina e sofisticação!
        </p>
      </div>
    </section>
  );
}
