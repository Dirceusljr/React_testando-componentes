import styles from './Cabecalho.module.css'
import React from 'react'

const Cabecalho = () => {
  return (
    <header className={styles.cabecalho}>
        <div role='img' aria-label="Logo do Sorteador de Amigo Secreto" className={styles.logo}></div>
        <img src='/imagens/participante.png' alt="Desenho de um participante com um tablet" className={styles.participante} />
    </header>
  )
}

export default Cabecalho