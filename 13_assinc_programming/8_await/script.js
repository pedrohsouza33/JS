function somaComDelay(a,b) {
  return new Promise(resolve => {
    setTimeout(function() {
      resolve(a+b);
    }, 4000);
  })
}

async function resSoma(a,b,c) {
  
  let x = somaComDelay(a,b);
  let y = c;

  return await x+y;
}

resSoma(2,2,2).then(value => console.log(value)); 