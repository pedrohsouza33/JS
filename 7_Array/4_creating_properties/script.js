let pessoa = {
    nome: "pedro",
    idade: 22,
    profissao: "programador", 
    função: function (){
        console.log("Programar")
    }
};

//deletando propriedades ja existentes

console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa.nome);

//adicionando novas propriedades

pessoa.casado = false;

console.log(pessoa.casado);

console.log(pessoa)
