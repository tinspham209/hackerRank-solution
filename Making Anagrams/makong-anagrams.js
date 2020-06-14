function makeAnagram(a, b) {
  // a,b must is array
  let countA = a.length,
    countB = b.length;
  let count = countA + countB;
  let pair = 0;
  for (let i = 0; i < countA; i++) {
    for (let j = 0; j < countB; j++) {
      if (a[i] == b[j]) {
        b.splice(j, 1);
        pair++;
        break;
      }
    }
  }
  let numberCharacterDelete = count - pair * 2;
  return numberCharacterDelete;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  // Convert a,b string to array
  const a = readLine().split("");
  const b = readLine().split("");

  const res = makeAnagram(a, b);

  ws.write(res + "\n");

  ws.end();
}
