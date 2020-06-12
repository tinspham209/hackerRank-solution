function birthdayCakeCandles(ar) {
  let tallestCandle = Math.max(...ar);
  let countCandles = 0;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] == tallestCandle) {
      countCandles++;
    }
  }
  return countCandles;
}
