function multiplicarTresNumeros(x,y,z) {
    return x * y * z;
} 
console.log(multiplicarTresNumeros(3,4,5));

const mult = multiplicarTresNumeros(5,4,2);

console.log("o valor de mult é: " + mult);



function podeDirigir(idade, CNH) {
    if (idade >= 18 && CNH == true) {
        console.log("Pode dirigir!")
    } else {
        console.log("Não pode dirigir!")
    }
}

console.log(podeDirigir(16, true));
console.log(podeDirigir(22, true));
console.log(podeDirigir(19, false));
console.log(podeDirigir(23, 1));
console.log(podeDirigir(12, 0));

// podeDirigir(16, true);
// podeDirigir(22, true);
// podeDirigir(19, false);
// podeDirigir(23, 1);
// podeDirigir(12, 0);