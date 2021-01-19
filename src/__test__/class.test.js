const TaxCalculator = require("../tax-calculator")

describe("class TaxCalculator", ()=>{
  const tax_calculator = new TaxCalculator();

  test.each([
    [110, true], [100, true], [-100, false], [null, false],
  ])("isValidPrice(): %p が適切な価格か判定し、 %p と一致すること", (price, expected) =>{
    const actual = tax_calculator.isValidPrice(price)
    expect(actual).toBe(expected)
  })
})