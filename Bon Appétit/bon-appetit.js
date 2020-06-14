function bonAppetit(bill, k, b) {
  let indexAnnaWontPay = k,
    brianCharged = b;
  let sum = bill.reduce((total, currentValue) => total + currentValue, 0);
  let costShared = (sum - bill[indexAnnaWontPay]) / 2;
  let annaOverCharged = brianCharged - costShared;
  if (annaOverCharged === 0) {
    console.log("Bon Appetit");
  } else {
    console.log(annaOverCharged);
  }
}
