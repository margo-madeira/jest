import { showHealth } from "../ind.js";

test("show healthy of life of gamer", () => {
  const user ={name: "маг", health: 90};
  const expResult = showHealth(user);
  expect(expResult).toBe("healthy");
});

test("show wounded of life of gamer", () => {
  const user ={name: "маг", health: 40};
  const expResult = showHealth(user);
  expect(expResult).toBe("wounded");
});

test("show critical of life of gamer", () => {
  const user ={name: "маг", health: 10};
  const expResult = showHealth(user);
  expect(expResult).toBe("critical");
});