// userService.test.js - Teste do módulo userService.js
const {
  getCurrentDate,
  formatToISO,
  addDays,
} = require("../externals/dateUtils");

// Substitui o módulo dateUtils.js com versões mockadas
jest.mock("../externals/dateUtils", () => ({
  getCurrentDate: jest.fn(() => new Date("2022-01-01T00:00:00.000Z")),
  formatToISO: jest.fn((date) => date.toISOString()),
  addDays: jest.fn((date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }),
}));

test("Exemplo de teste utilizando dateUtils", () => {
  const date = new Date("2022-01-01T00:00:00.000Z");
  // O módulo dateUtils agora está completamente substituído por versões mockadas
  // e você pode controlar o comportamento dessas funções durante o teste.

  // Por exemplo, getCurrentDate sempre retornará a data fixa '2022-01-01T00:00:00.000Z'
  expect(getCurrentDate()).toEqual(new Date(date));
  expect(formatToISO(date)).toEqual("2022-01-01T00:00:00.000Z");
  expect(addDays(date, 2)).toEqual(new Date("2022-01-03T00:00:00.000Z"));
});
