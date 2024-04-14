// Function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Without memoization
  console.time("Without Memoization");
  console.log(factorial(5)); // Output: 120
  console.log(factorial(5)); // Output: 120 (same result, but recalculated)
  console.timeEnd("Without Memoization");
  
  // With memoization
  function memoizedFactorial() {
    let cache = {};
    return function(n) {
      if (n in cache) {
        return cache[n];
      } else {
        if (n === 0 || n === 1) {
          return 1;
        } else {
          cache[n] = n * memoizedFactorial()(n - 1);
          return cache[n];
        }
      }
    };
  }
  
  const memoizedFunc = memoizedFactorial();
  
  console.time("With Memoization");
  console.log(memoizedFunc(5)); // Output: 120
  console.log(memoizedFunc(5)); // Output: 120 (result retrieved from cache)
  console.timeEnd("With Memoization");
  