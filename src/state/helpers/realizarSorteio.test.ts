import realizarSorteio from "./realizarSorteio";

describe("dado um sorteio de amigo secreto", () => {
  test("cada participante não sorteie a si mesmo", () => {
    const participantes = [
      "Ana",
      "Catarina",
      "João",
      "Dirceu",
      "Talita",
      "Vera",
    ];

    const sorteio = realizarSorteio(participantes);
    participantes.forEach((participante) => {
      const amigoSecreto = sorteio.get(participante);
      expect(amigoSecreto).not.toEqual(participante);
    });
  });
});
