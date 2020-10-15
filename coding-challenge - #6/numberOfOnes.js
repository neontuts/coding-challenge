/*
  Write a program to find number of 0's and 1's in the binary of any integer.
*/


function numberOfOnes(number) {
  if (typeof number !== "number") return "NOT A NUMBER";
  let numOfZeros = 0;
  let numOfOnes = 0;

  while (number) {
    if (number & 1) {
      numOfOnes++;
    }
    else {
      numOfZeros++;
    }
    number = number >> 1;
  }

  return `\nNo. Of 0's = ${numOfZeros}\nNo. Of 1's = ${numOfOnes}\n`;
}


// Test Cases
console.log(numberOfOnes(6), "\nNo. Of 0's = 1\nNo. Of 1's = 2\n");
console.log(numberOfOnes(22), "\nNo. Of 0's = 2\nNo. Of 1's = 3\n");
console.log(numberOfOnes("123"), "\nNOT A NUMBER");
console.log(numberOfOnes(151), "\nNo. Of 0's = 3\nNo. Of 1's = 5\n");
console.log(numberOfOnes(12345), "\nNo. Of 0's = 8\nNo. Of 1's = 6\n");

