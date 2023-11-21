function decrescente(x) {
    for (let i = x; i >= 0; i--) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

console.log(decrescente(10));