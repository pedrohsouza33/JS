class Carro {
    constructor (marca,cor,galosinaRest,consumo) {
        this.marca = marca,
        this.cor = cor,
        this.galosinaRest = galosinaRest,
        this.consumo = consumo
    }

    dirigir(km) {

        let litrosConsumidos = km / this.consumo;
        this.galosinaRest -= litrosConsumidos;
    }

    abastecer(L) {
        this.galosinaRest += L;
    }

}



let carro = new Carro("ferrari","vermelha",100,25)

console.log(carro);

carro.dirigir(10);

console.log(carro);

carro.abastecer(5);

console.log(carro);
