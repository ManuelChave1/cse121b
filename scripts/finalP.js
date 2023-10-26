document.getElementById('convert').addEventListener('click', convertCurrency);

function convertCurrency() {
  const amount = document.getElementById('amount').value;
  const fromCurrency = document.getElementById('from').value;
  const toCurrency = document.getElementById('to').value;

  fetch(
    `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
  )
    .then((response) => response.json())
    .then((data) => {
      const exchangeRate = data.rates[toCurrency];
      const result = (amount * exchangeRate).toFixed(2);
      document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}