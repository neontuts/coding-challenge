/*
  Write a program to order any string in (Ascending) alphabetical order.
*/


function alphabeticalOrder(str) {
  if (typeof str !== "string") return "NOT A STRING";
  const sorted = str.split('').sort((a,b) => {
    let aLower = a.toLowerCase();
    let bLower = b.toLowerCase();
	
    return (aLower > bLower) ? 1 : (bLower > aLower) ? -1 : 0;
  });
  
  return sorted.join('').trim();
}


// Test Cases
console.log(alphabeticalOrder("NextGenCoder"), "CdeeeGNnortx");
console.log(alphabeticalOrder("CodingChallenge"), "aCCdeegghillnno");
console.log(alphabeticalOrder(123), "NOT A STRING");
console.log(alphabeticalOrder("iueoa35241"), "12345aeiou");
console.log(alphabeticalOrder("the quick brown fox jumps over the lazy dog"), "abcdeeefghhijklmnoooopqrrsttuuvwxyz");

