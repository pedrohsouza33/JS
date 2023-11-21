function permissão(idade) {
 
    if(idade > 18) {

        console.log("Você pode entrar na autoescola!");
    
    } else {

        console.log("Você não pode entrar na autoescola!");
    }

}

console.log(permissão(23));
console.log(permissão(17));