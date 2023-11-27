function criarCachorro (raca, patas, cor, uivar) {
 this.patas = patas;
 this.raca = raca;
 this.cor = cor;
 uivar = function() {
    console.log("Auuuu")
}   
}

let labrador = new criarCachorro("labrador", 4, "Preta");

console.log(labrador);
labrador.uivar();