function rotLeft(a, d) {
  while (d) {
    a.push(a.shift());
    d--;
  }
  return a;
}
