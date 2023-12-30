// analytics.test.js - Teste do módulo analytics.js
const { logButtonClick } = require("../externals/analytics");
const analyticsApiModule = require("jest");

// Substitui a implementação de trackEvent com uma versão mockada
jest.mock("jest", () => ({
  runCLI: jest.fn(),
}));

test("logButtonClick chama runCLI corretamente", () => {
  logButtonClick();

  // Verifica se a função runCLI foi chamada corretamente
  expect(analyticsApiModule.runCLI).toHaveBeenCalledWith("button_click");
});
