let numero = 3;
let divisores = 0;

for (let x = 1; x <= numero ; x++)  {
    
    if (numero % x == 0) {
       divisores++;
    }

}

if (divisores == 2) {
        console.log(`${numero} é primo`)

} else {
        console.log(`${numero} não é primo`)
}


