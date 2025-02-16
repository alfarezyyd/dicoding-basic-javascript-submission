// Factorial
function factorial(n) {
  return n === 0 || n === 1 ? 1 : n * factorial(n - 1);
}

export default factorial;