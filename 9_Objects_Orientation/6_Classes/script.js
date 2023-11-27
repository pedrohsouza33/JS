let cachorro = {
    raca: "SRD",
    patas: 4,
    latir: function() 
    {
        console.log("AU AUUUUU!")
    }
}

let pastorAlemao = Object.create(cachorro)

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao.raca); //a propriedade raça já existe pois herdou do cachorro (prototype)
pastorAlemao.latir(); //herda do prototype
