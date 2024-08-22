function calculateAverage(numbers) {
   return numbers.reduce((accu,accur)=> accu+accur,0)/numbers.length
  }
  console.log(calculateAverage([1,2,3,4,5,6,7]))