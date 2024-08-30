/*
Implemente um componente simples com React JS. Neste componente você deverá implementar: 

Uma imagem qualquer; 
Um título; 
Um parágrafo.
*/
import "./app.css"
import image from "./img/img.png";

function Page() {
  return (
    <section>
      <img src={image} alt="example" />

      <h1>Lorem ipsum dolor sit amet</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quia
        eveniet corrupti odio nobis suscipit? Deleniti, distinctio corporis hic
        dicta excepturi sed repellendus esse labore totam aliquid suscipit iure?
        Dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae perspiciatis laborum reprehenderit quibusdam voluptates expedita asperiores unde molestias voluptatibus, nobis eligendi illum illo! Quas id repudiandae voluptatem consectetur iste doloremque?
      </p>
    </section>
  );
}

export default function App() {
  return <Page />;
}
