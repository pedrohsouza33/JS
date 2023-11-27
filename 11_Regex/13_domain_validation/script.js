let validateDomain = /www. \w+(.com|.pt)/;

console.log(validateDomain.test("www.google.pt"))
console.log(validateDomain.test("www.google.com"))