import { test } from "node:test";
import assert from "node:assert";

import {
  validateEmail,
  validatePassword,
  validateAge
} from "./validation.js";


test("validateEmail hyväksyy tavallisen sähköpostiosoitteen", () => {
  const result = validateEmail("opiskelija@example.com");

  assert.strictEqual(result, true);
});


test("validateEmail hylkää sähköpostin ilman @-merkkiä", () => {
  assert.strictEqual(validateEmail("opiskelija.example.com"), false);
});


test("validatePassword hylkää liian lyhyen salasanan", () => {
  assert.strictEqual(validatePassword("sala123"), false);
});


test("validatePassword hyväksyy vähintään 8 merkkiä pitkän salasanan", () => {
  assert.strictEqual(validatePassword("salasana"), true);
});
