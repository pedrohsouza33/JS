class voo {
    constructor(codigoVoo,origem,destino,assentosDisponiveis) {
        this.codigoVoo = codigoVoo;
        this.origem = origem;
        this.destino = destino;
        this.assentosDisponiveis = assentosDisponiveis;
    }
 
    reservarAssento() {

        if(this.assentosDisponiveis > 0){
            this.assentosDisponiveis--;
            console.log("Reserva efetuada com sucesso!")
        } else {
            console.log("Não há assentos disponíveis")
        }

    }
    
    consultarAssentosDisponiveis() {

        console.log(this.assentosDisponiveis)

    }

}

let Voo1 = new voo("abc123","rio de janeiro","salvador", 50)
let Voo2 = new voo("abc123","salvador","rio de janeiro", 0)

Voo1.consultarAssentosDisponiveis();
Voo1.reservarAssento();
Voo1.consultarAssentosDisponiveis()
Voo2.consultarAssentosDisponiveis();
Voo2.reservarAssento();