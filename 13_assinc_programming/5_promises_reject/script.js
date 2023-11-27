function verificarNumero(num) {
  return new Promise((resolve, reject) => {
    if (num == 2) {
      resolve(console.log(`O número é ${num}!`))
    } else {
      reject (new Error("O número não foi o indicado!"))
    }
  })
}

verificarNumero(2);
verificarNumero(3);