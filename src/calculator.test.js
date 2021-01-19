const calculate_tax = require('./calculator.js')

describe('calculator.js', ()=>{
  test.each([
    [1100, 100],[1000, 90], [55, 5],[0, null], [-10000, null], ["a", null]
  ])(
    "calculate_tax(): %P 円の消費税は、%P と一致すること", (price, expected)=>{
      const actual = calculate_tax(price)
      expect(actual).toEqual(expected)
    }
  )
})
