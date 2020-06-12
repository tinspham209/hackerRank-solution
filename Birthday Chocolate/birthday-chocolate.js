function birthday(s, d, m) {
  let counter = 0;
  if (m > s.length) {
    return counter;
  }
  if (m === 1 && s.length === 1) {
    if (s[0] === d) {
      return 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    let subArray = s.slice(i, i + m);
    if (subArray.length === m) {
      let sum = subArray.reduce((a, b) => a + b, 0);
      if (sum === d) {
        counter += 1;
      }
    }
  }
  return counter;
}
