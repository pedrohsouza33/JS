const cep = /\d{5}-\d{3}/;

console.log(cep.test("41252-123"))
console.log(cep.test("41252-asd"))

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(tel.test("(71)99369-5992"));
console.log(tel.test("(123)99369-5992"));   