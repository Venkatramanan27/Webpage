document.querySelector('#curr-convert-btn').addEventListener('click', function(event) {
	event.preventDefault();
	let currInput = parseFloat(document.querySelector('#curr-input').value);
	let currFrom = document.querySelector('#curr-from').value;
	let currTo = document.querySelector('#curr-to').value;
	
	// Check if input is a valid number
	if (isNaN(currInput) || currInput <= 0) {
		document.querySelector('#curr-result').innerHTML = `Please enter a valid amount.`;
		return;
	}

	convertCurrency(currInput, currFrom, currTo);
});

async function convertCurrency(amount, from, to) {
	let apiKey = 'a267d69c6a1ff96a6e736f1a';  // Replace with your API key
	let apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`;

	try {
		let response = await fetch(apiUrl);
		let data = await response.json();

		if (data.result === "success") {
			let exchangeRate = data.conversion_rates[to];
			if (exchangeRate) {
				let result = amount * exchangeRate;
				document.querySelector('#curr-result').innerHTML = `${amount} ${from} is equal to ${result.toFixed(2)} ${to}`;
			} else {
				document.querySelector('#curr-result').innerHTML = `Conversion from ${from} to ${to} is not supported.`;
			}
		} else {
			document.querySelector('#curr-result').innerHTML = `Error: ${data['error-type']}`;
		}
	} catch (error) {
		document.querySelector('#curr-result').innerHTML = `Failed to fetch exchange rates. Please try again later.`;
	}
}
