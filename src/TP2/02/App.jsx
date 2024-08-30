/*
Implemente um componente simples utilizando React JS que representa um portfólio de um produto qualquer (por exemplo da coca-cola), contendo: 

4 Imagens do Produto escolhido; 
Descrição do produto escolhido. 
*/
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import img4 from "./img/img4.png";

const miniImages = [img2, img3, img4];

function ProductPage() {
  return (
    <section
      style={{
        padding: "30px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          gap: "30px",
        }}
      >
        {miniImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="example"
            style={{
              border: "2px solid black",
              borderRadius: "5px",
              width: "80px",
              flex: 1,
            }}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          gap: "30px",
          marginTop: "50px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            flex: 2,
          }}
        >
          <h1
            style={{
              fontSize: "18px",
              marginBottom: "25px",
            }}
          >
            Coca Cola
          </h1>

          <p>
            Coca-Cola é um refrigerante carbonatado vendido em lojas,
            restaurantes, mercados e máquinas de venda automática em todo o
            mundo. Ele é produzido pela The Coca-Cola Company, sediada em
            Atlanta, Estados Unidos, e é muitas vezes referido apenas como
            Coca-Cola (a marca registrada da empresa Coca-Cola nos Estados
            Unidos desde 27 de março de 1944). Originalmente concebida como um
            remédio patenteado quando foi inventada no final do século XIX por
            John Pemberton
          </p>
        </div>

        <div
          style={{
            flex: 1.5,
          }}
        >
          <img src={img1} alt="example" style={{ width: "100%" }} />
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return <ProductPage />;
}
