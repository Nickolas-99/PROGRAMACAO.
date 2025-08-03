
// Questão 1: Iteração
// Implemente um código que percorra todo o array e exiba cada elemento no console:
// For
function numerosIterados(numeros) {
    // for (let i = 0; i < numeros.length; i++) {
    //   console.log(numeros[i])
    // }
    for (numero of numeros) {
      console.log(numero)
    }
  }
  
  
  // Questão 2: Transformação
  // Crie uma solução que gere um novo array em que cada valor original seja multiplicado por 2:    
  // For / push
  function arrayDobrado(numeros) {
    const numerosDobrados = []
    for (numero of numeros) {
      let dobrado = numero * 2
      numerosDobrados.push(dobrado)
    }
    return numerosDobrados
  }
  
  
  // Questão 3: Filtragem
  // Faça uma implementação que crie um novo array contendo apenas os números pares:
  // For / if / push
  function separarPares(numeros) {
    const numerosPares = []
    for (numero of numeros) {
      if (numero % 2 === 0) {
        numerosPares.push(numero)
      }
    }
    return numerosPares
  }
  
  console.log(separarPares(numeros))
  
  
  
  // Questão 4: Busca
  // Desenvolva uma maneira de encontrar o primeiro número do array que seja maior que 4:
  // For / If / Push
  function encontrarMaiorQue4() {
    for (numero of numeros) {
      if (numero > 4) {
        return numero
      }
    }
  }
  
  console.log(encontrarMaiorQue4(numeros))
  
  
  
  // Questão 5: Testes de condição
  // Para cada um dos itens a seguir, apresente uma implementação que retorne true ou false:
  
  // • Todos os números são maiores que zero?
  function verificarNumerosMaiorQueZero(numeros) {
    for (numero of numeros) {
      if (numero <= 0) {
        return false
      }
    }
  }
  
  // • Há ao menos um número par no array?
  function verificarPar(numeros) {
    for (numero of numeros) {
      if (numero % 2 === 0) {
        return true
      }
    }
  }

  // • Elabore uma lógica que somem todos os elementos do array em uma única saída numérica

function somaDeTudo(numeros) {
  let tudo = 0
  for (numero of numeros) {
    tudo += numero
  }
  return tudo
}
console.log(somaDeTudo(numero))