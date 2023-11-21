class ContaBancaria {
    constructor(numeroConta,saldo) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }
    
    depositar(valor) {
        
        this.saldo += valor;
    }
    
    sacar(valor) {

        if(valor > this.saldo) {
            console.log("Não há saldo suficiente na sua conta")
        } else {
            this.saldo -= valor;
        }
        
    }
    
    consultarSaldo() {

        let saldo = this.saldo;
        console.log(saldo)
        
    }

}

let Conta1 = new ContaBancaria(1,2000)

Conta1.depositar(500);
Conta1.consultarSaldo();
Conta1.sacar(250);
Conta1.consultarSaldo();
Conta1.sacar(3000);