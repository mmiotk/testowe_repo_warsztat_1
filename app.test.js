// app.test.js
const { add, subtract } = require('./app');

describe('App functions', () => {
    describe('add', () => {
        test('should correctly add two positive numbers', () => {
            expect(add(2, 3)).toBe(5);
        });

        test('should correctly add a positive and a negative number', () => {
            expect(add(5, -2)).toBe(3);
        });

        test('should correctly add two negative numbers', () => {
            expect(add(-2, -3)).toBe(-5);
        });
    });

    describe('subtract', () => {
        test('should correctly subtract two positive numbers', () => {
            expect(subtract(5, 2)).toBe(3);
        });

        test('should correctly subtract with a negative result', () => {
            expect(subtract(2, 5)).toBe(-3);
        });
    });

    // Możesz dodać test, który celowo nie przechodzi, aby zobaczyć jak CI zareaguje:
    // test('this test will fail', () => {
    //   expect(add(1,1)).toBe(3);
    // });
});