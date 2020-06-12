function pageCount(n, p) {
  let totalPageTurnCountFromFront = parseInt(n / 2);
  let targetPageTurnCountFromFront = parseInt(p / 2);
  let targetPageTurnCountFromBack =
    totalPageTurnCountFromFront - targetPageTurnCountFromFront;
  return Math.min(targetPageTurnCountFromFront, targetPageTurnCountFromBack);
}
