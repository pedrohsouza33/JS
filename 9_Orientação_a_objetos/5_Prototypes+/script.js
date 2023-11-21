const pessoa = {
    maos: 2,
}

const novapessoa = Object.create(pessoa);

console.log(novapessoa.maos);

console.log(Object.getPrototypeOf(novapessoa));

console.log(Object.getPrototypeOf(novapessoa) == pessoa);

console.log(novapessoa.hasOwnProperty("maos")); //ele herdou do prototipo pessoa por isso dá "false"