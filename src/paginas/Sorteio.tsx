import styles from "./Sorteio.module.css";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";
import Card from "../componentes/Card";
import { useState } from "react";
import { useResultadoDoSorteio } from "../state/hooks/useResultadoDoSorteio";

const Sorteio = () => {
  const participantes = useListaDeParticipantes();
  const [participanteDaVez, setParticipanteDaVez] = useState("");
  const [amigoSecretoSorteado, setAmigoSecretoSorteado] = useState("");
  const resultadoDoSorteio = useResultadoDoSorteio();

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (resultadoDoSorteio.has(participanteDaVez)) {
      setAmigoSecretoSorteado(resultadoDoSorteio.get(participanteDaVez)!);
      setTimeout( () => {
        setAmigoSecretoSorteado('')
     }, 5000)
    }
  };

  return (
    <Card>
      <section className={styles.sorteio}>
        <h2>Quem vai tirar o papelzinho?</h2>
        <form onSubmit={sortear}>
          <select
            required
            name="participanteDaVez"
            id="participanteDaVez"
            placeholder="Selecione o seu nome"
            value={participanteDaVez}
            onChange={(evento) => setParticipanteDaVez(evento.target.value)}
          >
            <option>Selecione seu nome</option>
            {participantes.map((participante) => (
              <option key={participante}>{participante}</option>
            ))}
          </select>
          <p>Clique em sortear para ver quem é o seu amigo secreto!</p>
          <button className={styles.botaoSortear}>Sortear</button>
        </form>
        {amigoSecretoSorteado && <p className={styles.resultado} role="alert">{amigoSecretoSorteado}</p>}
        <footer className={styles.sorteio}>
          <img
            src="/imagens/aviao.png"
            alt="Um desenho de um aviao de papel"
            className={styles.aviao}
          />
        </footer>
      </section>
    </Card>
  );
};

export default Sorteio;
