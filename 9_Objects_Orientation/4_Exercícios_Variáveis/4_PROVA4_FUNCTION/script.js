function classificarNumero(numero){
    if (numero > 0 && (numero % 2 === 0)) {
        return("Positivo e Par")
    }
    if (numero > 0 && (numero % 2 !== 0)) {
        return("Positivo e Ímpar")
    }
    if (numero < 0) {
        return("Negativo")
    }
    if (numero === 0) {
        return("Neutro")
    }
}