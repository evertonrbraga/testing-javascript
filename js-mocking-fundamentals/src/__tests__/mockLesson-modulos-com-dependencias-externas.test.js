// userService.test.js - Teste do módulo userService.js
const { getUser } = require("../externals/userService");
const apiModule = require("../externals/api");

// Substitui a implementação de fetchUser com uma versão mockada
jest.mock("../externals/api", () => ({
  fetchUser: jest.fn().mockResolvedValue({ id: 2, name: "Mocked User" }),
}));

test("getUser retorna um usuário mockado", async () => {
  const user = await getUser(1);

  // Verifica se a função fetchUser foi chamada corretamente
  expect(apiModule.fetchUser).toHaveBeenCalledWith(1);

  // Verifica o resultado da função getUser
  expect(user).toEqual({ id: 2, name: "Mocked User" });
});
