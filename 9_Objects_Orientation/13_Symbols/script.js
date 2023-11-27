class cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }
}

let patas = Symbol();
cachorro.prototype[patas] = 4;

let labrador = new cachorro("labrador", "Caramelo");

cachorro.prototype.raca = "SRD";


console.log(labrador.raca)
console.log(cachorro.prototype.raca);

//acessando symbol
console.log(cachorro.prototype[patas]);
console.log(labrador[patas]);