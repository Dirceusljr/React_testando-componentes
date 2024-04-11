import { render, screen } from "@testing-library/react";
import React from "react";
import Fomulario from "./Fomulario";

test('quando o input está vazio, novos participantes não podem ser adicionados.', () => { 

    render(<Fomulario />)

    //encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');

    //encontrar no DOM o botão
    const botao = screen.getByRole('button');

    //garantir que o input esteja no documento
    expect(input).toBeInTheDocument()
    //garantir que o botão esteja desabilitado
    expect(botao).toBeDisabled()

 })