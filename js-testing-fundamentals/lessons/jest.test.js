const math = require("../math");

test("sumAsync adds numbers asynchronously", async () => {
  const result = await math.sumAsync(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtractAsync subtracts numbers asynchronously", async () => {
  const result = await math.subtractAsync(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

test("mocking sum function", () => {
  const sum = jest.fn((a, b) => a + b);
  const result = sum(3, 7);
  expect(result).toBe(10);
});

test("mocking implementation of a subtract function", () => {
  const subtract = jest.fn();
  subtract.mockImplementation((a, b) => a - b);
  const result = subtract(7, 3);
  expect(result).toBe(4);
});

test("mocking return value of a sum function", () => {
  const sum = jest.fn();
  sum.mockReturnValue(4);
  const result = sum(7, 3);
  expect(result).toBe(4);
});

test("mocking resolved value of a promise function", async () => {
  const fetchData = jest.fn();
  fetchData.mockResolvedValue("Dados simulados");
  const result = await fetchData();
  expect(result).toBe("Dados simulados");
});

test("spying the real implementation of a sum function", () => {
  const sum = jest.spyOn(math, "sum");
  const result = sum(4, 3);
  expect(result).toBe(7);
});
