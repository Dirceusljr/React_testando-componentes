import shuffle from 'just-shuffle';

const realizarSorteio = (participantes: string[]) => {
    const totalParticipantes = participantes.length;
    const embaralhado = shuffle(participantes);
    const resultado = new Map<string, string>();
    for (let index = 0; index < totalParticipantes; index++) {
      const indiceAmigoSorteado =
        index === totalParticipantes - 1 ? 0 : index + 1;
      resultado.set(embaralhado[index], embaralhado[indiceAmigoSorteado]);
    }
  return resultado
}

export default realizarSorteio