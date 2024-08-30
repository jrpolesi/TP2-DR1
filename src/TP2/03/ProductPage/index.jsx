import "./styles.css";
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import img4 from "../img/img4.png";

const miniImages = [img2, img3, img4];

export function ProductPage() {
  return (
    <section className="product-page">
      <div className="product-page__mini-images">
        {miniImages.map((img, i) => (
          <img key={i} src={img} alt="example" />
        ))}
      </div>
      <div className="product-page__content">
        <div>
          <h1 className="product-page__title">Coca Cola</h1>

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

        <div className="product-page__side-img-container">
          <img src={img1} alt="example" />
        </div>
      </div>
    </section>
  );
}
