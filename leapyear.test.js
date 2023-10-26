const isLeapYear = require("./leapyear");

test("2000 was a leap year, expect=true", () => {
    expect(isLeapYear(2000)).toBe(true)
});
test("1700 was not a leap year, expect=false", () =>{
    expect(isLeapYear(1700)).toBe(false);
});
test("1800 was not a leap year, expect=false",() =>{
    expect(isLeapYear(1800)).toBe(false);
});
test("2400 is going to be a leap year, expect=true", () => {
    expect(isLeapYear(2400)).toBe(true);
});
test("100 was not a leap year, expect=false", () => {
    expect(isLeapYear(100)).toBe(false);
});