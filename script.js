console.log('Complexidade de Algoritmo')

/* 
  dado um array de n números inteiros:
  [1, 2, 3, 4, 5, 3, 6, 1, 2, 7, 8, 4, 5, 3]
  Criar um algoritmo que devolva a frequência dos números,
  montando o que chamamos de histograma
*/

const numberArray = [1, 2, 3, 4, 5, 3, 6, 1, 2, 7, 8, 4, 5, 3]

// aproveitando para usar uma IIFE (Immediately Invoked Function Expression)
;(buildHistogram = (array) => {

  const numberOccurrences = {}
  let amountOfIterations = 0

  for (let number of array) {
    if (!numberOccurrences[number]) {
      numberOccurrences[number] = 1
    } else {
      numberOccurrences[number]++
    }

    amountOfIterations++
  }

  console.log('número de iterações:', amountOfIterations)
  console.log('resultado:', numberOccurrences)

  return numberOccurrences

})(numberArray)

// posso usá-la quando quiser também, após a invoação imediata acima
// buildHistogram(numberArray)

// este algoritmo tem complexidade de tempo Big O(n)
