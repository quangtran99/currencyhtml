const currencyRatio = {
  vnd: {
    usd: 0.000043,
    krw: 0.051,
    eur: 0.000039,
    vnd: 1
  },
  usd: {
    usd: 1,
    krw: 1193.27,
    eur: 0.9,
    vnd: 23235.5
  },
  krw: {
    usd: 0.00084,
    krw: 1,
    eur: 0.00075,
    vnd: 19.47
  }
};



let inputTag = document.getElementById("amountInput")
let inputFrom = document.getElementById("Currency");
let inputTo = document.getElementById("Currency1");

function formatCurrency(type, value) {
  const formatter = new Intl.NumberFormat(type, {
    currency: type,
    style: "currency"
  });
  return formatter.format(value);
}


function convert() {
    let amount = inputTag.value 
    let result = amount * currencyRatio[inputFrom.value.toLowerCase()][inputTo.value.toLowerCase()]
    let test = document.getElementById("resultArea")

    test.innerHTML = formatCurrency(inputTo.value,result.toFixed(2))
    console.log("result is", result)
 }


convert();


