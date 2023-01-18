const moneyBack = require("./one");
test("One", () => {
    //wrong inputs
    expect(moneyBack([500, 200, 10, 50], 626.5)).toBe(-2);
    expect(moneyBack([500, 200, 100, 50, 20, 10, 'c', 2, 1], 626.5)).toBe(-2);
    expect(moneyBack([500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01], "coucou")).toBe(-2);
    //subject example
    expect(moneyBack([500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01], 626.5)).toBe(6);
    expect(moneyBack([500, 200, 100, 50, 20, 10, 5], 626.5)).toBe(-1);
    //additional tests
    expect(moneyBack([5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1], 12345)).toBe(8);
    expect(moneyBack([5000, 2000, 1000, 500, 200, 100], 12345)).toBe(-1);
});