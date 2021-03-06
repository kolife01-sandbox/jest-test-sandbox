const calculate_tax = (price) => {
  if(typeof price != "number"){
    return null
  }
  if(price <= 0){
    return null
  }
  const tax_rate = 10/100;
  const exclude_price = Math.ceil(price / (1 + tax_rate));
  return price - exclude_price
}

module.exports = calculate_tax;