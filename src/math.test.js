import { add, subtract, multiply, divide, modulus } from './math.js';
import { add, subtract, multiply, divide } from './math.js';

test('adds two numbers', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtracts two numbers', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('multiplies two numbers', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('divides two numbers', () => {
  expect(divide(10, 2)).toBe(5);
});

test('throws error when dividing by zero', () => {
  expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
});

test('modulus of two numbers', () => {
  expect(modulus(10, 3)).toBe(1);
});
