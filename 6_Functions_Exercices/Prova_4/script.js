function calculateAverage () {
    let array = [2,3,4,5,2,1];
    let sum = 0;
    

    {    if (numbers.length === 0) {
          return 0;
        }

    for (let i = 0; i < array.length; i++) {
            sum += array[i]
    
    }
    let average = sum / array.length;
    return average;
   
}
console.log(calculateAverage(average))
}