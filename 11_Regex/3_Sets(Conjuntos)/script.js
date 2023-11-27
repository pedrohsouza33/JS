//bad aproach 

const reg1 = /[12345]/;

console.log(reg1.test("temos o numero 6"))
console.log(reg1.test("temos o numero 26"))
console.log(reg1.test("temos o numero 60"))

const reg2 = /[1-9]/; //verificar se tem numeros

console.log(reg2.test("temos o numero 6"))
console.log(reg2.test("temos algum numero"))