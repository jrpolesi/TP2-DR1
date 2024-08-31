import "./styles.css";

import carros1 from "../../assets/QuemSomos/carros1.jpg";
import carros2 from "../../assets/QuemSomos/carros2.jpg";
import carros3 from "../../assets/QuemSomos/carros3.jpg";

const IMAGES = [
  {
    id: "1",
    src: carros1,
    alt: "Carros enfileirados",
  },
  {
    id: "2",
    src: carros2,
    alt: "Carros estacionados em um enorme estacionamento vertical",
  },
  {
    id: "3",
    src: carros3,
    alt: "Carros pretos enfileirados um atrás do outro",
  },
];

export function QuemSomos() {
  return (
    <section className="quem-somos">
      <h2>Quem somos</h2>
      <div className="quem-somos--content">
        <p>
          A S-car surgiu em 2010 de um sonho compartilhado por entusiastas
          automotivos, com o objetivo de criar um espaço dedicado aos
          supercarros mais exclusivos e desejados do mundo. Começamos em uma
          pequena garagem, mas rapidamente conquistamos o mercado com nossa
          paixão pela qualidade e pela sofisticação. Ao longo dos anos,
          expandimos nossa presença e construímos uma reputação sólida,
          oferecendo veículos de marcas lendárias e atendendo a uma clientela
          exigente. Hoje, somos uma referência no setor, com um showroom de
          última geração e uma equipe de especialistas dedicada a proporcionar a
          melhor experiência para nossos clientes. Na S-car, continuamos a
          escrever nossa história com a mesma paixão que nos motivou desde o
          início, oferecendo os supercarros mais extraordinários e uma
          experiência única de compra.
        </p>

        <div>
          {IMAGES.map((image) => (
            <img key={image.id} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}
