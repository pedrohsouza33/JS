class livro {
    constructor(titulo,autor,disponivel) {

        this.titulo = titulo
        this.autor = autor
        this.disponivel = disponivel

    }
        emprestar() {
            
            if(this.disponivel == true) {
                console.log("O livro está disponivel para empréstimo!")
            } else {
                console.log("O livro não está disponível para empréstimo")
            }

        }

        devolver () {
            if(this.disponivel == false) {
                this.disponivel = true;
                console.log("Obrigado por devolver o livro! :D")
            } else {
                console.log("Obrigado por devolver o livro! :D")
            }

        }

        consultarDisponibilidade() {
            console.log(this.disponivel);
        }


    }

    let Livro1 = new livro("Viagem ao Centro da Terra","Julio Verne",false)

    console.log(Livro1);
    Livro1.emprestar();
    Livro1.devolver();
    Livro1.consultarDisponibilidade();
