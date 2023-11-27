let idade = prompt("Qual a sua idade?");
let nome = prompt("Diga o seu nome")

if (idade >= 18 && nome == "Pedro")
{
    console.log("Pode entrar!");
}

if(idade == 17 && nome == "Pedro" )
{
    console.log("Por pouco! Pode entrar...");
}

if(idade < 17 || nome != "Pedro")
{
    console.log("Você não pode entrar!")
}