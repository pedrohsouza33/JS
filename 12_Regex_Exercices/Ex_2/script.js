const reg1 = /\d+ID\b/ 

console.log(reg1.test("123"))

console.log(reg1.test("123ID"))