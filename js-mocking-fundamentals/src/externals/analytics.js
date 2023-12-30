// analytics.js - Módulo que faz chamadas à API de análise de eventos
const { runCLI } = require("jest"); // Dependência externa

const logButtonClick = () => {
  runCLI("button_click");
};

module.exports = { logButtonClick };
