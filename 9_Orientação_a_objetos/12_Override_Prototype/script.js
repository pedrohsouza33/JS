class cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }
}

cachorro.prototype.patas = 4;

let labrador = new cachorro("labrador", "Caramelo");

cachorro.prototype.raca = "SRD";


console.log(labrador.raca)
console.log(cachorro.prototype.raca);