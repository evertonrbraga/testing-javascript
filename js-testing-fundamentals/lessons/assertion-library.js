const { sum, subtract, sumAsync, subtractAsync } = require("../math");

let result, expected;

test("sum operation", async () => {
  result = await sumAsync(3, 7);
  expected = 11;
  expect(result).toBe(expected);
});

test("subtract operation", async () => {
  result = await subtractAsync(7, 3);
  expected = 3;
  expect(result).toBeGreaterThan(expected);
});

async function test(title, callback) {
  try {
    await callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.log(`x ${title}`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    toBe(result) {
      if (actual !== result) {
        throw new Error(`${actual} is not equal to ${result}`);
      }
    },
    toBeGreaterThan(result) {
      if (actual <= result) {
        throw new Error(`${actual} is not greater than ${result}`);
      }
    },
  };
}
