const notAB = /[^ab]/;


console.log(notAB.test("a"));
console.log(notAB.test("b"));
console.log(notAB.test("ab"));
console.log(notAB.test("aqui tem a"));

const notAZ = /[^a-z]/

console.log(notAZ.test("123 qasa"))
console.log(notAZ.test("asdfsadfsadfasd"))
console.log(notAZ.test("123124"))
