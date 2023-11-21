let nome = "Pedro";

for (let x = 1; x < 20; x = x + 1) {
    
    
    if (x == 10) {

        nome = "João";
    } 

    if (x == 11 && nome == "João"){

        console.log("O nome é João, pode parar");   
        break;
    }

    console.log(x);
}
 