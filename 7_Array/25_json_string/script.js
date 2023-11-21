let pessoa =
{
    "nome": "Pedro",
    "idade": 22,
    "estado-civil": "Namorando",
    "hobbies": ["jogar","estudar","sair"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON)