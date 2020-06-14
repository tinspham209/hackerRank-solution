function checkMagazine(magazine, note) {
  for (let word of note) {
    const index = magazine.indexOf(word);
    if (index !== -1) {
      magazine[index] = "";
    } else {
      return console.log("No");
    }
  }
  console.log("Yes");
}
