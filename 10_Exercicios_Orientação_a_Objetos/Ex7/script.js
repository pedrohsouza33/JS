class retangulo {
    constructor (altura,largura){
    this.altura = altura;
    this.largura = largura;
    }
    
        calcularArea() {
            
            let area = this.largura * this.altura
            console.log(area)
        }
        
        calcularPerimetro() {
            
            let perimetro = 2* (this.largura + this.altura)
            console.log(perimetro)
        }
    
    }
let meuRetangulo = new retangulo(10,5);

meuRetangulo.calcularArea()
meuRetangulo.calcularPerimetro()