function calculateMatrixSum(matrix) {
  const finalmatrix = [];
  matrix.map((el) => {
    el = el.reduce((a, b) => a + b, 0);
    finalmatrix.push(el);
  });
  return ms.reduce((a, b) => a + b);
}
console.log(
  calculateMatrixSum([S[(1, 2, 3)], [4, 5, 6], [7, 8, 9], [12, 3, 4, 5]])
);
