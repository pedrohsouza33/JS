function dados(idade, nome) {
    if (nome === undefined) {
        console.log("Você tem " + idade + " anos de idade")
    }
    else {
        console.log("Você tem "+ idade + " anos de idade, e seu nome é " + nome )
    }
}

dados(22);
dados(21, "Pedro");