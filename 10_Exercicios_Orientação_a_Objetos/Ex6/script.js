// class WordCounter {
    
//     constructor () {
//     }
    
//     countWords(string) {
        
//         if(string.trim() === "") {
//             return 0;
//         }   const palavras = string.split(" ");
//         return(palavras.length)
       
    
//         }
//     }

// let frase = new WordCounter();

// console.log(frase.countWords("Pedro"))
// console.log(frase.countWords("Pedro é"))
// console.log(frase.countWords("Pedro é legal"))
// console.log(frase.countWords(""))
// console.log(frase.countWords(" "))

class WordCounter {
    
    constructor () {
    }
    
    countWords(string) {

        if (string.trim() === "") {
            return 0; 
        }
        
        let palavras = string.split(" ") 
        
        console.log(palavras.length)

        }
    }

let frase = new WordCounter();

frase.countWords("Pedro")
frase.countWords("Pedro é legal")
frase.countWords("Pedro é")
frase.countWords("")
frase.countWords(" ")