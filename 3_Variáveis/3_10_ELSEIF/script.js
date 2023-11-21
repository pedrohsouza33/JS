let a = 2;
let b = 3;

if (a + b == 3){
    console.log("o resultado é 3")
}   else if(a == 4 && b == 3){
    console.log("o valor de a é 4 e de b é 3")
} 
    else if(a == 4){
    console.log("o valor de a é 4")
}   else if(b == 3){
    console.log("o valor de b é 3")
}    else {
    console.log("Nenhuma das condições a cima!")
}


let nome = "Pedro";
let idade = 22;

if (nome != undefined && nome == "João"){
    console.log("O nome está definido");
}
else if (nome == "Pedro" && nome.length > 2 && idade == 22){
    console.log("O nome é Pedro");
} else {    
    console.log("Não é o Pedro!");
}