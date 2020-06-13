function saveThePrisoner(n, m, s) {
  let prisoners = n,
    sweets = m,
    startId = s;
  let saved = ((sweets % prisoners) + startId - 1) % prisoners;
  if (saved == 0) return prisoners;
  else return saved;
}
