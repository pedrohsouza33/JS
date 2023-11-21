function criarCachorro (raca, patas, cor) {
 let cachorro = Object.create({});
 cachorro.patas = patas;
 cachorro.raca = raca;
 cachorro.cor = cor;
 return cachorro;
}

let doberman = criarCachorro("Doberman", 4, "Bege");

console.log(doberman);