function calculatePriceWhitDiscount(price, discount) {
  const percentagePriceWhitDiscount = 100 - discount;
  const priceWhitDiscount = (price * percentagePriceWhitDiscount) / 100;

  return priceWhitDiscount;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const priceWhitDiscount = calculatePriceWhitDiscount (priceValue, discountValue);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + priceWhitDiscount;
}
