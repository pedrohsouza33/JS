let p1 = new Promise(function(resolve, reject) {
    resolve('Teste');
  });
   
  p1.then(function(value) {
    if(true) {
        throw 'Erro encontrado!';
    }
  }).catch(function(e) {
    console.log(e);
  })