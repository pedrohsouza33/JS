class CarrinhodeCompras  {
    constructor (itens,quantidadeTotal,ValorTotal) {
        this.itens = itens;
        this.quantidadeTotal = quantidadeTotal;
        this.ValorTotal = ValorTotal;
    }

    adicionar(itensAdd) {
        for(let i=0; i < itens.length; i++) {
            if (itens[i].includes = itensAdd) {
                console.log("Esse item já foi adicionado anteriormente")
            } else {
                itens += itensAdd; 
            }
        }
    }

    remover(itensRem) {
        for(let i=0; i < this.itens.length; i++) {
            if(itensRem = this.itens[i]) {
                this.itens -= itensRem;
            } else {
                console.log("Esse item não estava no carrinho")
            }
        }

    }
}

let carrinho = new CarrinhodeCompras([
    {
        id: 1,
        nome: "camisa",
        qtd: 2,
        preco: 20
    },
    {
        id: 2,
        nome: "calca",
        qtd: 1,
        preco: 40
    }
], 3, 80)


console.log(carrinho)

carrinho.adicionar({id:3,nome:"boné",qtd:1,preco:15})

console.log(carrinho)