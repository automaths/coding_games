const Picpicpic = require("./three");

test("Recursive algorithm", () => {
    //wrong inputs
    expect(Picpicpic([[1, 2, 3],[4, 'c', 6],[7, 0, 9]])).toBe(-1);   
    expect(Picpicpic(6)).toBe(-1);
    //subject example
    expect(Picpicpic([[1, 2, 3],[4, 5, 6],[7, 0, 9]])).toBe(25);
    expect(Picpicpic([[0, 0, 0, 0],[0, 1, 0, 0],[0, 0, 1, 0],[0, 0, 0, 1]])).toBe(3);
    expect(Picpicpic([[1, 2, 3, 4, 5],[4, 5, 6, 9, 8],[7, 0, 9, 6, 5]])).toBe(38);
    //additional tests
    expect(Picpicpic([1, 2, 3])).toBe(6);
    expect(Picpicpic([[2], [2], [3]])).toBe(7);
})