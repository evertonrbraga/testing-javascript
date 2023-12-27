const thumbWar = require("../thumb-war");
const utils = require("../utils");

jest.mock("../utils");

test("returns winner", () => {
  const winner = thumbWar("Kent C. Dodds", "Ken Wheeler"); //esta funcao atribuiu valor a utils.getWinner
  expect(winner).toBe("Kent C. Dodds");
  expect(utils.getWinner).toHaveBeenCalledTimes(2);
  expect(utils.getWinner).toHaveBeenCalledWith("Kent C. Dodds", "Ken Wheeler"); //isso é uma verificação de que a funcao precisa ter 2 parametros (mock ou spy)
  expect(utils.getWinner.mock.calls).toEqual([
    ["Kent C. Dodds", "Ken Wheeler"],
    ["Kent C. Dodds", "Ken Wheeler"],
  ]);

  // cleanup
  utils.getWinner.mockRestore();
});
