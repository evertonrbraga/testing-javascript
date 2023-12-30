// userService.js - Módulo que depende do módulo externo
const { fetchUser } = require("./api");

const getUser = async (userId) => {
  // Lógica do serviço de usuário que depende do fetchUser
  const user = await fetchUser(userId);
  return user;
};

module.exports = { getUser };
