import { act, fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";
import Sorteio from "./Sorteio";
import { useResultadoDoSorteio } from "../state/hooks/useResultadoDoSorteio";
import userEvent from "@testing-library/user-event";

jest.mock("../state/hooks/useListaDeParticipantes", () => {
  return {
    useListaDeParticipantes: jest.fn(),
  };
});

jest.mock("../state/hooks/useResultadoDoSorteio", () => {
  return {
    useResultadoDoSorteio: jest.fn(),
  };
});

describe("na página de sorteio", () => {
  const participantes = ["Ana", "Catarina", "Sosefina"];
  const resultado = new Map<string, string>([
    ["Ana", "Catarina"],
    ["Catarina", "Sosefina"],
    ["Sosefina", "Ana"],
  ]);

  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
    (useResultadoDoSorteio as jest.Mock).mockReturnValue(resultado);
  });

  test("todos os participantes podem exibir o seu amigo secreto", () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const opcoes = screen.queryAllByRole("option");
    expect(opcoes).toHaveLength(participantes.length + 1);
  });

  test("o amigo secreto é exibido quando solicitado", () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText("Selecione o seu nome");
    fireEvent.change(select, {
      target: {
        value: participantes[0],
      },
    });

    const botao = screen.getByRole("button");

    fireEvent.click(botao);
    const amigoSecreto = screen.getByRole("alert");
    expect(amigoSecreto).toBeInTheDocument();
  });

  test("o nome do amigo some após 5s", async () => {
    jest.useFakeTimers();
    const user = userEvent.setup({ delay: null });

    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText("Selecione o seu nome");
    // fireEvent.change(select, {
    //   target: {
    //     value: participantes[0],
    //   },
    // });

    await user.selectOptions(select, participantes[0])

    const botao = screen.getByRole("button");

    await user.click(botao);

    const amigoSecreto = screen.getByRole("alert");
    expect(amigoSecreto).toBeInTheDocument();
    act(() => {
      jest.runAllTimers();
    });
    expect(amigoSecreto).not.toBeInTheDocument();
    jest.useRealTimers();
  });
});
