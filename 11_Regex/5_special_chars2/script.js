const dia = /\d\d/; //find nmber of days, also years

console.log(dia.test(2015))
console.log(dia.test(20))
console.log(dia.test("segunda"))
console.log(dia.test(1))