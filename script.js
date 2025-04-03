
let exchangeRates = {
  rupeeToDollar: 0, 
  dollarToRupee: 0, 
  rupeeToPound: 0,  
  poundToRupee: 0   
};
const apiKey = '  /* paste your API key*/  '; 
async function fetchExchangeRates() {
  const url = `https://api.currencylayer.com/live?access_key=${apiKey}&currencies=USD,INR,GBP&source=USD&format=1`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.success) {
      exchangeRates.rupeeToDollar = 1 / data.quotes['USDINR']; 
      exchangeRates.dollarToRupee = data.quotes['USDINR'];
      exchangeRates.rupeeToPound = data.quotes['GBPINR'] / data.quotes['USDINR']; 
      exchangeRates.poundToRupee = data.quotes['USDINR'] / data.quotes['GBPINR']; 
    } else {
      console.error('Error fetching exchange rates:', data.error);
    }
  } catch (error) {
    console.error('Network error:', error);
  }
}
fetchExchangeRates();
var btn1 = document.getElementById("bt1").onclick = function () { document.getElementById("display").innerHTML += 1; };
var btn2 = document.getElementById("bt2").onclick = function () { document.getElementById("display").innerHTML += 2; };
var btn3 = document.getElementById("bt3").onclick = function () { document.getElementById("display").innerHTML += 3; };
var btn4 = document.getElementById("bt4").onclick = function () { document.getElementById("display").innerHTML += 4; };
var btn5 = document.getElementById("bt5").onclick = function () { document.getElementById("display").innerHTML += 5; };
var btn6 = document.getElementById("bt6").onclick = function () { document.getElementById("display").innerHTML += 6; };
var btn7 = document.getElementById("bt7").onclick = function () { document.getElementById("display").innerHTML += 7; };
var btn8 = document.getElementById("bt8").onclick = function () { document.getElementById("display").innerHTML += 8; };
var btn9 = document.getElementById("bt9").onclick = function () { document.getElementById("display").innerHTML += 9; };
var btn0 = document.getElementById("bt0").onclick = function () { document.getElementById("display").innerHTML += 0; };
var clrr = document.getElementById("clr").onclick = function () { document.getElementById("display").innerHTML = ""; };
var btnp = document.getElementById("btp").onclick = function () { document.getElementById("display").innerHTML += "."; };
function convert() {
  var drop = document.getElementById("list");
  var val = drop.value;
  var amount = document.getElementById("display");
  var amt = parseFloat(amount.innerHTML);
  if (val === "sel") {
    alert("Select conversion from dropdown list");
  } else {
    let sum;
    if (val === "rtd") {
      sum = amt * exchangeRates.rupeeToDollar;
    } else if (val === "dtr") {
      sum = amt * exchangeRates.dollarToRupee;
    } else if (val === "rtp") {
      sum = amt * exchangeRates.rupeeToPound;
    } else if (val === "ptr") {
      sum = amt * exchangeRates.poundToRupee;
    }
    amount.innerHTML = sum.toFixed(2); 
  }
}
