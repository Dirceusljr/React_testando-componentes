import React from 'react'
import Fomulario from '../componentes/Fomulario'
import ListaParticipantes from '../componentes/ListaParticipantes'
import Rodape from '../componentes/Rodape'
import Card from '../componentes/Card'

const Configuracao = () => {
  return (
    <Card>
      <section>
        <h2>Vamos começar!</h2>
        <Fomulario />
        <ListaParticipantes />
        <Rodape />
      </section>
    </Card>
  )
}

export default Configuracao