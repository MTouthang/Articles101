function fib(n) {
  // base case condition
  if (n == 0 || n == 1) {
    return n;
  } else {
    result = fib(n - 1) + fib(n - 2);
  }
  return result;
}

const fi = fib(50); // it will take a very long time to execute
// overlapping subproblem - recomputation of same subproblems again and again

/**
 * The above problem can be solve by Dynamic programming
 * 1 - Memoization (top down approach)
 * 2 - Tabulation (bottom down approach)
 */
console.log(fi);

/**
 * Memoization: Recursion but storing every recursive function call solution
 * in a data structure
 */
