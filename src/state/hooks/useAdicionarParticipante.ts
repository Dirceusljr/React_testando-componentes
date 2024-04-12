import { useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listaParticipantesState } from "../atom"

export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState(listaParticipantesState);
    const lista = useRecoilValue(listaParticipantesState);
    const setMensagemDeErro = useSetRecoilState(erroState)
    return (nomeParticipante: string) => {
        if(lista.includes(nomeParticipante)) {
            setMensagemDeErro('Nomes duplicados não são permitidos!');
            setTimeout(() => {
                setMensagemDeErro('')
            }, 5000)
            return 
        }
        return setLista(listaAtual => [...listaAtual, nomeParticipante])
    }
}