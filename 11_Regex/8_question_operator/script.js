const padrao = /abacax?i/;

console.log(padrao.test("abacaxi"));
console.log(padrao.test("abacai"));

const padrao2 = /\d+\w?/ //obriga ter um digito e nao obriga ter um alfanumerico

console.log(padrao2.test("abacaxi"));
console.log(padrao2.test("123"));
console.log(padrao2.test("asv123"));