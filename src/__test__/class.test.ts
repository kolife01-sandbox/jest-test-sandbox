import { TaxCalculator, TaxOperator } from "../tax-calculator";

describe.each([["round"], ["floor"], ["ceil"], [null]])(
  "TaxCalculator with %p",
  (operator) => {
    const tax_calculator = new TaxCalculator(operator as TaxOperator);
    test.each([
      [110, true],
      [100, true],
      [-100, false],
      [null, false],
    ])(
      "isValidPrice(): %p が価格ととして適切かどうかが %p と一致すること",
      (price, expected) => {
        const actual = tax_calculator.isValidPrice(price);
        expect(actual).toBe(expected);
      }
    );
    test.each([
      [110, 10],
      [100, ["round", "ceil"].includes(operator) ? 9 : 10],
      [-100, null],
      [null, null],
    ])(
      "calculateTax(): %p 円の消費税額が、 %p と一致すること",
      (price, expected) => {
        const actual = tax_calculator.calculateTax(price);
        expect(actual).toBe(expected);
      }
    );
  }
);
