import React from 'react'
import { useListaDeParticipantes } from '../state/hooks/useListaDeParticipantes'
import { useNavigate } from 'react-router-dom';
import styles from './Rodape.module.css'
import { useSorteador } from '../state/hooks/useSorteador';

const Rodape = () => {
    const participantes = useListaDeParticipantes();

    const navegarPara = useNavigate()
    const sortear = useSorteador()

    const iniciar = () => {
      sortear()
      navegarPara('/sorteio')
    }

  return (
    <footer className={styles.rodape}>
        <button disabled={participantes.length < 3} onClick={iniciar}>Iniciar brincadeira</button>
        <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
    </footer>
)
}

export default Rodape