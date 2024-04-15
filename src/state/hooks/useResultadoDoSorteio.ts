import { useRecoilValue } from "recoil"
import { resultadoDoSorteio } from "../atom"

export const useResultadoDoSorteio = () => {
    return useRecoilValue(resultadoDoSorteio)
}