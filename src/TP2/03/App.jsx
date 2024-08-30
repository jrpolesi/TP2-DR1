/*
Neste exercício, você irá refatorar o projeto do exercício anterior (exercício 2), utilizando a abordagem de className. Separe os estilos em um arquivo CSS e importe-os no componente.

Requisitos:

Crie um arquivo styles.css na pasta do seu projeto para armazenar os estilos.
Mova todos os estilos inline ou embutidos para o arquivo styles.css. 
Defina as classes CSS necessárias e aplique-as ao componente utilizando a propriedade className.
*/

import { ProductPage } from "./ProductPage";

export default function App() {
  return <ProductPage />;
}
