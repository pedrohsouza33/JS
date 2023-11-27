let y = 10;

const multiplicar = function(n) {
    let y = n * 2;
    
    console.log(y)
    
    if(y > 10) {
        let y = 55;

        console.log(y);

    }

    
}
multiplicar(7); 
/*o programa lê primeiro a função e solta os valores respectivamente:
y = 7 * 2 = 14 
logo em seguida,
analisa se o y é maior que 10, quando confirma isso, escreve:
y = 55
*/

console.log(y);

//Esse escopo está solto e é retratado no primeiro argumento do programa: 10