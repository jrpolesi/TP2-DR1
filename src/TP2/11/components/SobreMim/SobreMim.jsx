import { pauloSilva } from "../../assets";
import "./styles.css";

export function SobreMim() {
  return (
    <section className="sobre-mim">
      <div className="sobre-mim--presentation">
        <div>
          <h1>Paulo Silva</h1>
          <p>Engenheiro de software</p>
        </div>

        <img src={pauloSilva} />
      </div>

      <div className="sobre-mim--content">
        <h2>Sobre Mim</h2>
        <p>
          Olá, sou Paulo Silva, desenvolvedor de software com 3 anos de
          experiência no setor. Minha paixão por tecnologia e resolução de
          problemas me levou a construir soluções inovadoras e eficientes para
          diversos desafios. Ao longo da minha carreira, trabalhei em uma
          variedade de projetos que vão desde aplicativos web até sistemas
          complexos, sempre com foco na criação de um código limpo e na entrega
          de valor real para os usuários. Estou sempre em busca de novas
          oportunidades para aprender e crescer, e estou entusiasmado em
          colaborar com equipes dinâmicas para transformar ideias em realidade.
        </p>
      </div>
    </section>
  );
}
