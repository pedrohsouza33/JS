class cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }
}

cachorro.prototype.patas = 4;

let labrador = new cachorro("labrador", "Caramelo");

console.log(labrador.patas)