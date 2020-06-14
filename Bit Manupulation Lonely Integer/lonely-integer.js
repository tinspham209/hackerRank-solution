function findLonely(arr) {
  let unique = arr.filter((value) => {
    return arr.indexOf(value) === arr.lastIndexOf(value);
  });
  return unique[0];
}
