const pointRegex = /./; //Everything

console.log(pointRegex.test("123"))
console.log(pointRegex.test("asdasdasd"))
console.log(pointRegex.test("           "))
console.log(pointRegex.test("123asd"))


console.log("break")

const dRegex = /\d/; //[0-9]

console.log(dRegex.test("123"))
console.log(dRegex.test("asdasdasd"))
console.log(dRegex.test(" "))
console.log(dRegex.test("123asd"))

console.log("break")

const dRegex2 = /\D/; // [^0-9]

console.log(dRegex2.test("123"))
console.log(dRegex2.test("asdasdasd"))
console.log(dRegex2.test("           "))
console.log(dRegex2.test("123asd"))

console.log("break")

const sRegex = /\s/; //[0-9] & [a-Z]

console.log(sRegex.test("123"))
console.log(sRegex.test("asdasdasd"))
console.log(sRegex.test("           "))
console.log(sRegex.test("123asd"))

console.log("break")

const wRegex = /\w/; //

console.log(wRegex.test("123"))
console.log(wRegex.test("asdasdasd"))
console.log(wRegex.test("           "))
console.log(wRegex.test("123asd"))

console.log("break")

const wRegex2 = /\W/; //

console.log(wRegex2.test("123"))
console.log(wRegex2.test("asdasdasd"))
console.log(wRegex2.test("           "))
console.log(wRegex2.test("123asd"))

console.log("break")