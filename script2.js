const myArray = [30, 30, 40, 5, 223, 2049, 3034, 5]; //array

function valoresUnicos(arr){
  const mySet = new Set(arr) //adiciona na coleção set

  return [...mySet]; //argumento rest
}

console.log(valoresUnicos(myArray));