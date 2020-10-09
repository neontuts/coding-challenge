/*
  Write a program to check if number is a Perfect Number or Not.
*/


function NumberPerfectOrNot(number) {
  if (typeof number !== "number") return "NOT A NUMBER";
  let sum = 0;

  for (let i=1; i<number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }

  return sum === number ? "Perfect Number" : "Not Perfect Number";
}


// Test Cases
console.log(NumberPerfectOrNot(28), "Perfect Number");
console.log(NumberPerfectOrNot(15), "Not Perfect Number");
console.log(NumberPerfectOrNot("6"), "NOT A NUMBER");
console.log(NumberPerfectOrNot(496), "Perfect Number");
console.log(NumberPerfectOrNot(50), "Not Perfect Number");

