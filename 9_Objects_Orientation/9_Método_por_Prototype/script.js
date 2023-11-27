function criarCachorro (raca, patas, cor) {
 this.patas = patas;
 this.raca = raca;
 this.cor = cor;
}

criarCachorro.prototype.uivar = function() {
    console.log("Auuuu")
}            //PARA FICAR MAIS "LIMPO" É MELHOR SEPARAR OS METODOS FUNCTION DOS OUTROS

let labrador = new criarCachorro("labrador", 4, "Preta");

console.log(labrador);
labrador.uivar();