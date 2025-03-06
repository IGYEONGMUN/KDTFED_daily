// const regexp = /\d{3}/;

const regexp = new RegExp(/\d{3}/);

console.log(regexp.test("Hello"));
console.log(regexp.test("123"));
