export function validateEmail(email) {
  return typeof email === "string" &&
    email.includes("@") &&
    email.includes(".") &&
    email.indexOf("@") > 0 &&
    email.indexOf("@") < email.lastIndexOf(".") &&
    email.lastIndexOf(".") < email.length - 1;
}

export function validatePassword(password) {
  return typeof password === "string" &&
    password.length >= 8;
}

export function validateAge(age) {
  return Number.isInteger(age) &&
    age >= 16 &&
    age <= 120;
}
