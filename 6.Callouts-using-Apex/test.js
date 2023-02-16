var myHeaders = new Headers();
myHeaders.append("apikey", "WcBqao2W322zUoRw0nW3yR1tFsoiMz2v");

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

fetch("https://api.apilayer.com/fixer/convert?to=JPY&from=GBP&amount=25", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));