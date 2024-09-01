/*
Neste exercício, você continuará a desenvolver o seu portfólio de desenvolvedor, adicionando a seção de contatos. Você criará um novo componente para exibir suas informações de contato.

Etapa 4: Desenvolvimento da Seção de Contatos 

Criação do Componente: 
Crie um novo componente chamado "Contatos.jsx" na pasta de componentes do seu projeto.
Conteúdo do Componente: 
Dentro do componente "Contatos", adicione suas informações de contato, como endereço de e-mail, número de telefone e links para perfis em redes sociais (LinkedIn, GitHub, etc.).
Estilização:
Estilize o componente "Contatos" de forma atraente e organizada. Utilize CSS para criar um layout que destaque suas informações de contato e torne a seção visualmente agradável.
Instruções Adicionais:
Certifique-se de que suas informações de contato estejam atualizadas e sejam facilmente acessíveis para quem visitar seu portfólio. 
Considere adicionar um formulário de contato se desejar permitir que os visitantes enviem mensagens diretamente do seu portfólio. 
Mantenha um design consistente com as outras seções do seu portfólio para uma experiência de usuário harmoniosa.
*/
import "./App.css";
import { SobreMim, Habilidades, Projetos, Contatos } from "./components";

export default function App() {
  return (
    <div className="container">
      <SobreMim />
      <Habilidades />
      <Projetos />
      <Contatos />
    </div>
  );
}
