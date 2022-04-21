const currencyElementOne = document.getElementById("currency-one");
const currencyElementTwo = document.getElementById("currency-two");
const amountElementOne = document.getElementById("amount-one");
const amountElementTwo = document.getElementById("amount-two");
const rateElement = document.getElementById("rate");
const swap = document.getElementById("swap");

function calculate() {
  const currencyOne = currencyElementOne.value;
  const currencyTwo = currencyElementTwo.value;

  fetch(
    `https://v6.exchangerate-api.com/v6/9be7ae88c8d0fafdc4473d80/latest/${currencyOne}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencyTwo];

      rateElement.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;

      amountElementTwo.value = (amountElementOne.value * rate).toFixed(2);
    });
}

currencyElementOne.addEventListener("change", calculate);
amountElementOne.addEventListener("input", calculate);
currencyElementTwo.addEventListener("change", calculate);
amountElementTwo.addEventListener("input", calculate);

swap.addEventListener("click", () => {
  const temp = currencyElementOne.value;
  currencyElementOne.value = currencyElementTwo.value;
  currencyElementTwo.value = temp;
  calculate();
});

calculate();
