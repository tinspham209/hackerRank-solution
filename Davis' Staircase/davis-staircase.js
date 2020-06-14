// Runtime O(n)

function stepPerms(n) {
  if (n == 1) {
    return 1;
  } else if (n == 2) {
    return 2;
  } else if (n == 3) {
    return 4;
  }
  let array = [];
  array[0] = 1;
  array[1] = 2;
  array[2] = 4;
  for (let i = 3; i < n; i++) {
    array[i] = array[i - 1] + array[i - 2] + array[i - 3];
  }
  return array[array.length - 1];
}
