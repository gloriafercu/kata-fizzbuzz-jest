/*
Desarrollamos una función Fizzbuzz que toma como parámetro un número y devuelve
	- "fizz" si es múltiplo de 3
	- "buzz" si es múltiplo de 5
	- "fizzbuzz" si es múltiplo de 3 y 5
	- el mismo número si no se da ninguno de los casos anteriores

BONUS: un número es "fizz" si es múltiplo de 3 o contiene el dígito 3, lo mismo con "buzz".
*/

function fizzbuzz(number) {
	if ((number%3 !== 0) && (number%5 !== 0)) {
		return number;
	}
	if ((number%3 === 0) && (number%5 === 0)) {
		return 'fizzbuzz';
	}
	if (number%3 == 0) {
		return 'fizz';
	}
	if (number%5 == 0) {
		return 'buzz';
	}
}
module.exports = fizzbuzz;
