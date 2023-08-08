function simulateAsyncOperation(success) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve("Operação assíncrona concluída com sucesso!");
        } else {
          reject("A operação assíncrona falhou.");
        }
      }, 2000); // Simula uma operação que leva 2 segundos
    });
  }
  
  // Chamada da função async simulada
  console.log("Iniciando operação assíncrona...");
  simulateAsyncOperation(false)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });
  