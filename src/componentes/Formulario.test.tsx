import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Fomulario from "./Fomulario";
import { RecoilRoot } from "recoil";
import { act } from "react-dom/test-utils";


describe('o comportamento do formulário', () => {

    test("quando o input está vazio, novos participantes não podem ser adicionados.", () => {
        render(
          <RecoilRoot>
            <Fomulario />
          </RecoilRoot>
        );
        //encontrar no DOM o input
        const input = screen.getByPlaceholderText(
          "Insira os nomes dos participantes"
        );
        //encontrar no DOM o botão
        const botao = screen.getByRole("button");
        //garantir que o input esteja no documento
        expect(input).toBeInTheDocument();
        //garantir que o botão esteja desabilitado
        expect(botao).toBeDisabled();
      });
      
      test("adicionar um participante caso exista um nome preenchido", () => {
        render(
          <RecoilRoot>
            <Fomulario />
          </RecoilRoot>
        );
      
        //encontrar no DOM o input
        const input = screen.getByPlaceholderText(
          "Insira os nomes dos participantes"
        );
        //encontrar no DOM o botão
        const botao = screen.getByRole("button");
      
        // inserir um valor no input
        fireEvent.change(input, {
          target: {
            value: "Ana Catarina",
          },
        });
        // clicar no botão de submeter
        fireEvent.click(botao);
        // garantir que o input esteja com o foco ativo
        expect(input).toHaveFocus();
        //garantir que o input não tenha um valor
        expect(input).toHaveValue("");
      });
      
      test("nomes duplicados não podem ser adicionados na lista.", () => {
        render(
          <RecoilRoot>
            <Fomulario />
          </RecoilRoot>
        );
        const input = screen.getByPlaceholderText(
          "Insira os nomes dos participantes"
        );
        const botao = screen.getByRole("button");
        fireEvent.change(input, {
          target: {
            value: "Ana Catarina",
          },
        });
        fireEvent.click(botao);
        fireEvent.change(input, {
          target: {
            value: "Ana Catarina",
          },
        });
        fireEvent.click(botao);
      
        const mensagemDeErro = screen.getByRole("alerta");
        expect(mensagemDeErro.textContent).toBe(
          "Nomes duplicados não são permitidos!"
        );
      });
      
      test("a mensagem de erro deve sumir após os timers.", () => {
        jest.useFakeTimers();
        render(
          <RecoilRoot>
            <Fomulario />
          </RecoilRoot>
        );
        const input = screen.getByPlaceholderText(
          "Insira os nomes dos participantes"
        );
        const botao = screen.getByRole("button");
        fireEvent.change(input, {
          target: {
            value: "Ana Catarina",
          },
        });
        fireEvent.click(botao);
        fireEvent.change(input, {
          target: {
            value: "Ana Catarina",
          },
        });
        fireEvent.click(botao);
      
        let mensagemDeErro = screen.queryByRole("alerta");
        expect(mensagemDeErro).toBeInTheDocument();
      
        act(() => {
          jest.runAllTimers();
        });
      
        mensagemDeErro = screen.queryByRole("alerta");
        expect(mensagemDeErro).toBeNull();
      });
})


