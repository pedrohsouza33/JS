function reverseString() {
    let str = ("hello world 54321");
    let novastr = ("");

    for (let i = str.length -1; i >= 0; i--) {
        novastr += str[i];
    }
    return novastr;
}

console.log(reverseString())