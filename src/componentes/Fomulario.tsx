import React, { useRef, useState } from 'react'
import { useAdicionarParticipante } from '../state/hooks/useAdicionarParticipante';
import { useMensagemDeErro } from '../state/hooks/useMensagemDeErro';
import styles from './Formulario.module.css'

const Fomulario = () => {
  const [nome, setNome] = useState('');

  const inputRef = useRef<HTMLInputElement>(null)

  const adicionarNaLista = useAdicionarParticipante();

  const mensagemDeErro = useMensagemDeErro();

  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    adicionarNaLista(nome)
    setNome('');
    inputRef.current?.focus();
  }

  return (
      <form onSubmit={adicionarParticipante}>
        <div className={styles.grupoInputBtn}>
          <input 
            ref={inputRef}
            value={nome}
            onChange={evento => setNome(evento.target.value)}
            type="text" 
            placeholder='Insira os nomes dos participantes' />
          <button disabled={!nome}>Adicionar</button>
        </div>
          {mensagemDeErro && <p className={`${styles.alerta} ${styles.erro}`} role='alert'>{mensagemDeErro}</p> }
      </form>

)
}

export default Fomulario