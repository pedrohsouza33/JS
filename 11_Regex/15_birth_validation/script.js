let validateBirth = /[0-31]{2}[/][0-12]{2}[/][1920-2023]{4}/

console.log(validateBirth.test("10/12/2023"))
console.log(validateBirth.test("10/12/2013"))