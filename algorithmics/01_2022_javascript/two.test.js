const zerosAndOnes = require("./two");
test("Two", () => {
    //wrong inputs
    expect(zerosAndOnes(-200)).toBe(-1);
    expect(zerosAndOnes('c')).toBe(-1);
    expect(zerosAndOnes("coucou")).toBe(-1);
    //subject example
    expect(zerosAndOnes(123456)).toBe(6);
    expect(zerosAndOnes(65535)).toBe(0);
    //additional tests
    expect(zerosAndOnes(4294967294)).toBe(1);
    expect(zerosAndOnes(4294967295)).toBe(0);
    expect(zerosAndOnes(4294967296)).toBe(32);
    expect(zerosAndOnes(4294967297)).toBe(-1);
})