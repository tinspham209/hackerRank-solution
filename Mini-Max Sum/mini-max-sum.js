function miniMaxSum(arr) {
  arr.sort();
  var minSum = 0,
    maxSum = 0;
  for (var i = 0; i < arr.length - 1; i++) {
    minSum += arr[i];
    maxSum += arr[i + 1];
  }
  console.log(minSum, maxSum);
}
