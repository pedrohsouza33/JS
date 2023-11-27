let validateEmail = /\w+@\w+\.\w+/;

console.log(validateEmail.test("pedrohsouza33@gmail.com"))
console.log(validateEmail.test("123@gmail.com"))
console.log(validateEmail.test("123gmail.com"))