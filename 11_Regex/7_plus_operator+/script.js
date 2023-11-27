const muitosOuPoucosDigitos = /\d+/

console.log(muitosOuPoucosDigitos.test("123"))
console.log(muitosOuPoucosDigitos.test("asd 123"))
console.log(muitosOuPoucosDigitos.test(" "))