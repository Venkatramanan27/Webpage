document.querySelector('#temp-convert-btn').addEventListener('click', function(event) {
	event.preventDefault();
	let tempInput = document.querySelector('#temp-input').value;
	let tempUnit = document.querySelector('#temp-unit').value;
	let result = convertTemperature(tempInput, tempUnit);
	document.querySelector('#temp-result').innerHTML = `Result: ${result}`;
});

function convertTemperature(temp, unit) {
	switch (unit) {
		case 'C':
			return `${temp}°C is equal to ${(temp * 9/5) + 32}°F and ${temp + 273.15}K`;
		case 'F':
			return `${temp}°F is equal to ${((temp - 32) * 5/9)}°C and ${((temp - 32) * 5/9) + 273.15}K`;
		case 'K':
			return `${temp}K is equal to ${temp - 273.15}°C and ${(temp - 273.15) * 9/5 + 32}°F`;
	}
}