const reg = /\w+: (Pedro|Marina|João)/;

console.log(reg.test("Nome: Pedro"))
console.log(reg.test("Nome: João"))
console.log(reg.test("Nome: Augusto"))