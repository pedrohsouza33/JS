class Conta {
    constructor (saldo) {
        this.saldo = saldo
    }
    
    deposito(valorDeposito) {
       this.saldo += valorDeposito;
    }

    saque(ValorSaque) {
        this.saldo -= ValorSaque;
    }
}

let conta = new Conta(3000);

conta.deposito(1000);

console.log(conta.saldo);

conta.saque(2000);

console.log(conta.saldo);