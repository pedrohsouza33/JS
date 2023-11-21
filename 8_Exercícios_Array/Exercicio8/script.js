function removeDuplicates (array) {

    

    let unique = [...new Set(array)]; 

    console.log(unique);

}

removeDuplicates([1,1,2,2,3,4,5,5])