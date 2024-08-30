/*
Neste exercício você deverá criar um componente de formulário (somente o componente, sem implementar qualquer tipo de ação).

Requisitos:

O código CSS deve ser implementado obrigatoriamente em um arquivo styles.css, o qual deve ser importado no componente desenvolvido.
Utilize o flexbox para organizar o layout.
O formulário deve conter campos para nome do produto, preço de venda, preço de custo, um select para categorias, um select para fabricante e um textarea para descrição. 
A estilização do formulário deve seguir as boas práticas de design e ser estéticamente agradável. 
O botão de envio do formulário deve estar estilizado de forma a se destacar dos demais elementos do formulário.
*/

import { Form } from "./Form";

export default function App() {
    return (
       <Form />
    )
}