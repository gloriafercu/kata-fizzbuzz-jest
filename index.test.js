const fizzbuzz = require('./index');

describe ('Fizzbuzz App', () => {
	test('número es divisible por 3', () => {
	  expect(fizzbuzz(6)).toBe('fizz');
	});
	test('número es divisible por 5', () => {
		expect(fizzbuzz(10)).toBe('buzz');
	});
	test('número es divisible por 3 y por 5', () => {
		expect(fizzbuzz(30)).toBe('fizzbuzz');
	});
	test('número no es divisible por 3 y por 5 a la vez', () => {
		expect(fizzbuzz(4)).toBe(4);
	});
});
