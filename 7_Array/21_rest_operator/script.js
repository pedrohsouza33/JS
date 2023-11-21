let num1 = 10;
let num2 = 12;
let num3 = 14;
let num4 = 16;

function leitorNumeral (...args){
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

leitorNumeral(num1,num2,num3);
console.log("PAUSE");
leitorNumeral(num2,num3);
console.log("PAUSE");
leitorNumeral(2,3,1,4,5,6,1,2);
