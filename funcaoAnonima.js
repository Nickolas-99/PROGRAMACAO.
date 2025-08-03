const numeros = [0, 1, 2, 3, 4, 5, 6];

// Com Array.prototype.forEach
//numeros.foreach(valor => console.log(valor))

// Novo Array em uma condição
const arrayNovo = numeros.map(valor => valor * 2)
console.log(arrayNovo)  

// filtragem de valores
const arrayFiltrado = numeros.filter(valor => valor % 2 === 0)
console.log(arrayFiltrado)

// busca de valores
const arrayBusca = numeros.find(valor => valor > 4)
console.log(arrayBusca)