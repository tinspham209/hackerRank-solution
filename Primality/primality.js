// Runtime : O(sqrt(n))
function primality(n) {
  if (n <= 1) {
    console.log("Not prime");
    return "Not prime";
  } else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        console.log("Not prime");
        return "Not prime";
      }
    }
    console.log("Prime");
    return "Prime";
  }
}
