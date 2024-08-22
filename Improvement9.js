function calculateMatrixSum(matrix) {
 return matrix.map((el) => {
     return el.reduce((a, b) => a + b, 0);
    }).reduce((a, b) => a + b);
}
console.log(
  calculateMatrixSum([[1, 2, 3], [4, 5, 6], [7, 8, 9], [12, 3, 4, 5]])
);
