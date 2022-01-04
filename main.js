function setButtonFunctions()
{
    document.getElementById('buttonCurrency').onclick = getCurrencyExchangeRates;
}
setButtonFunctions()

async function getCurrencyExchangeRates()
{
    const from = document.getElementById('inputCurrencyFrom').value;
    const to = document.getElementById('inputCurrencyTo').value;
    await fetch("https://currency-exchange.p.rapidapi.com/exchange?q=1.0&from=" + from + "&to=" + to, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
            "x-rapidapi-key": "dfa0539aa2mshbfc61f6fca9107ap18d693jsn2d19dec0ccb4"
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log("Currency Exchange API object:");
        console.log(response);
        console.log("\n");

        // display data
        document.getElementById('currencyResult').innerHTML = 'Result: ' + response;
    })
    .catch(err => {
        console.log(err);
    });
}
getCurrencyExchangeRates()
