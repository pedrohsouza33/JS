class ContaBancaria {
    constructor(Corrente,Poupança,Juros) {
        this.Corrente = Corrente,
        this.Poupança = Poupança;
        this.Juros = Juros;
    }

    deposito(Euros) {
        this.Corrente += Euros;
        this.Poupança += Euros;
    }

    saque(Euros) {
        this.Corrente -= Euros;
        this.Poupança -= Euros;
    }
    
    transferencia(Euros) {
        this.Corrente += Euros;
        this.Poupança -= Euros;
    }

    juros() {
        let juros = (this.Corrente * this.Juros)/100
        this.Corrente += juros;
    }

}

class ContaEspecial extends ContaBancaria {
    constructor(Corrente,Poupança,Juros) {
        super(Corrente,Poupança,Juros*2)
    }
}

let NovaConta = new ContaBancaria(1000,5000,5);

let NovaConta2 = new ContaEspecial(1000,5000,5)

console.log(NovaConta2)