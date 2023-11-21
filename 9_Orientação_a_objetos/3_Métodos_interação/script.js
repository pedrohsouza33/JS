let cachorro = {
    raça: "srd",
    latir: function() {
        console.log("Au Au!");
    }, //separa-se por vírgula

    chorar: function() {
        console.log("Hmm..Hmm..")
    },
    setRaça: function(raça) {
        this.raça = raça;
    }
}


console.log(cachorro.raça);

cachorro.setRaça("Pastor Alemão");

console.log(cachorro.raça);