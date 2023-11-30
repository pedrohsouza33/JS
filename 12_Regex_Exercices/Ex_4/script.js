const IP = /[0-9]{3}[.][0-9]{3}[.][0-9]{1}[.][0-9]{1}/

console.log(IP.test("120.112.1.1"))
console.log(IP.test("13.1.1.1"))