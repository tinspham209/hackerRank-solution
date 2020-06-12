function divisibleSumPairs(n, k, ar) {
  var pairCounter = 0;
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        pairCounter++;
      }
    }
  }
  return pairCounter;
}
