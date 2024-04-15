import { useListaDeParticipantes } from "./useListaDeParticipantes";
import { useSetRecoilState } from "recoil";
import { resultadoDoSorteio } from "../atom";
import realizarSorteio from "../helpers/realizarSorteio";

export const useSorteador = () => {
  const participantes = useListaDeParticipantes();

  const setResultadoDoSorteio = useSetRecoilState(resultadoDoSorteio);

  return () => {
    const resultado = realizarSorteio(participantes);
    setResultadoDoSorteio(resultado);
  };
};
