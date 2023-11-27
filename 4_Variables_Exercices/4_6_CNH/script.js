let idade = 18;
let CNH = false;

if (idade >= 18 && CNH == false){
    console.log("Não tem carteira, mas pode fazer")
}

else if (idade >= 18 && CNH == true){
    console.log("Pode dirigir!")
}

else {
    console.log("Não pode dirigir")
}