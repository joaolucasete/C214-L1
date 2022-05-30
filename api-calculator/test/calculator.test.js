const Calculator = require("../src/service/CalculatorService.js");

// create mockCalculator
const mockCalculator = {
    result: 0,
    add(a, b) {
        this.result = a + b;
        return this.result;
    }
}

describe('Calculator Mock', () => {
    it("add", () => {
        const calc = mockCalculator;
        const result = calc.add(1, 2);
        expect(result).toBe(3);
    });
});

describe('Calculator basic operations', () => {
    it("Test add is correct", () => {
        const calculator = new Calculator();
        const result = calculator.add(1, 2);
        expect(result).toBe(3);
    });

    it("Test sub is correct", () => {
        const calculator = new Calculator();
        const result = calculator.sub(1, 2);
        expect(result).toBe(-1);
    });

    it("Test mul is correct", () => {
        const calculator = new Calculator();
        const result = calculator.mul(1, 2);
        expect(result).toBe(2);
    });

    it("Test div is correct", () => {
        const calculator = new Calculator();
        const result = calculator.div(1, 2);
        expect(result).toBe(0.5);
    });

    it("Test div is throw error", () => {
        const calculator = new Calculator();
        expect(() => {
            calculator.div(1, 0);
        }).toThrowError("Division by zero is not allowed");
    });
})
