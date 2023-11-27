function contaVogais(str) {
    const vogais = str.match(/[aeiou]/gi);
    return vogais.length; 
  }

console.log(contaVogais("pedro"))


//utiliza-se regex