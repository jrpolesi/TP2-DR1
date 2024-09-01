import { useState } from "react";
import "./styles.css";
import ConfettiExplosion from "react-confetti-explosion";

export function Agradecimento() {
  const [isExploding, setIsExploding] = useState(false);

  return (
    <footer className="agradecimento">
      <p>Muito obrigado por ver meu portfólio até o final!</p>
      <button
        className={isExploding && "agradecimento--button--blocked"}
        onClick={() => setIsExploding(true)}
      >
        {isExploding ? "Explodindo..." : "Clique aqui para comemorar"}
      </button>

      {isExploding && (
        <ConfettiExplosion
          height={2000}
          force={1}
          onComplete={() => setIsExploding(false)}
        />
      )}
    </footer>
  );
}
