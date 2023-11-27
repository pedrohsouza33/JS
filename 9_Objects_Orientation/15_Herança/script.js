class mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

let coiote = new mamifero("4");

console.log(coiote.patas);

class cachorro extends mamifero {
    constructor(patas,raca) {
        super(patas,patas); //alteração ao numero de patas do prototype mamifero
        this.raca = raca;
    }
    latir () {
        console.log("Au Au!");
    }

}

let pug = new cachorro(4, "Pug");

console.log(pug);
pug.latir();