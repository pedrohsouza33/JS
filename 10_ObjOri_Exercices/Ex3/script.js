class Endereço  {
    constructor (rua,bairro, cidade, estado) {
    this.rua = rua,
    this.bairro =bairro,
    this.cidade =cidade,
    this.estado = estado 
    }

    set NovaRua(NovaRua) {
        this.rua = NovaRua
    }

    set NovoBairro(NovBairro) {
        this.bairro = NovoBairro
    }

    set NovaCidade(NovaCidade) {
        this.cidade = NovaCidade
    }

    set NovoEstado(NovoEstado) {
        this.estado = NovoEstado
    }


}

let endereço = new Endereço("Rua do bom sucesso", "Lordelo do ouro", "Porto", "Porto");

endereço.NovaRua = "Rua da feira"

console.log(endereço);

