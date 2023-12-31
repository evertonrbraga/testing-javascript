const thumbWar = require("../thumb-war");
const utils = require("../utils");

// in an ES modules situation, that's the right implementation
// i am importing the full implementation at __mocks__ folder
jest.mock("../utils.js");

test("returns winner", () => {
  const winner = thumbWar("Kent C. Dodds", "Ken Wheeler");
  expect(winner).toBe("Kent C. Dodds");
  expect(utils.getWinner).toHaveBeenCalledTimes(2);
  expect(utils.getWinner).toHaveBeenCalledWith("Kent C. Dodds", "Ken Wheeler");
  expect(utils.getWinner.mock.calls).toEqual([
    ["Kent C. Dodds", "Ken Wheeler"],
    ["Kent C. Dodds", "Ken Wheeler"],
  ]);

  utils.getWinner.mockReset();
});

/*
-------FIRST IMPLEMENTATION-------

const thumbWar = require("../thumb-war");
const utils = require("../utils");

test("returns winner", () => {
  jest.spyOn(utils, "getWinner");
  utils.getWinner.mockImplementation((p1, p2) => p1);

  const winner = thumbWar("Kent C. Dodds", "Ken Wheeler");
  expect(winner).toBe("Kent C. Dodds");
  expect(utils.getWinner).toHaveBeenCalledTimes(2);
  expect(utils.getWinner).toHaveBeenCalledWith("Kent C. Dodds", "Ken Wheeler");
  expect(utils.getWinner.mock.calls).toEqual([
    ["Kent C. Dodds", "Ken Wheeler"],
    ["Kent C. Dodds", "Ken Wheeler"],
  ]);

  utils.getWinner.mockRestore();
});
*/
