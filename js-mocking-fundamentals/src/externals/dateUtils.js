// dateUtils.js - Módulo com funções relacionadas a datas
export const getCurrentDate = () => new Date();
export const formatToISO = (date) => date.toISOString();
export const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};
