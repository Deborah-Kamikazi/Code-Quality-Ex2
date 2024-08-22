function calculateMatrixSum(matrix) {
  const ms = [];
  matrix.map((el) => {
    el = el.reduce((a, b) => a + b, 0);
    ms.push(el);
  });
  return ms.reduce((a, b) => a + b);
}
console.log(
  calculateMatrixSum([S[(1, 2, 3)], [4, 5, 6], [7, 8, 9], [12, 3, 4, 5]])
);
