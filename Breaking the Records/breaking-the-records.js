function breakingRecords(scores) {
  let bestScore = scores[0],
    worstScore = scores[0],
    countBest = 0,
    countWorst = 0;
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > bestScore) {
      bestScore = scores[i];
      countBest++;
      continue;
    }
    if (scores[i] < worstScore) {
      worstScore = scores[i];
      countWorst++;
      continue;
    }
  }
  return [countBest, countWorst];
}
