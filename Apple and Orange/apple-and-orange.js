function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let addBy = (num) => {
    return (d) => num + d;
  };

  let isScored = (value) => {
    return s <= value && value <= t;
  };

  let countApples = apples.map(addBy(a)).filter(isScored).length;
  let countOranges = oranges.map(addBy(b)).filter(isScored).length;
  console.log(countApples + "\n" + countOranges);
}
