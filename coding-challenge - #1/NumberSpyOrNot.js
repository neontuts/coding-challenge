/*
  Write a program to check if number is a SPY Number or Not.
*/

function NumberSpyOrNot(number) {
  if (typeof number !== "number") return "NOT A NUMBER";
  let sum = 0;
  let product = 1;
  const digits = number.toString().split('');

  for (let i=0; i<digits.length; i++) {
    sum += parseInt(digits[i]);
    product *= parseInt(digits[i]);
  }
  
  return sum === product ? "SPY" : "NOT SPY";
}


// Test Cases
console.log(NumberSpyOrNot(1124), "SPY");
console.log(NumberSpyOrNot(1254), "NOT SPY");
console.log(NumberSpyOrNot("123"), "NOT A NUMBER");
console.log(NumberSpyOrNot(321), "SPY");
console.log(NumberSpyOrNot(2020), "NOT SPY");

