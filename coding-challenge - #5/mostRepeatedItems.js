/*
  Write a program to show the most repeated item/s from an user defined array.
*/


function mostRepeatedItems(arr) {
  let count = {};
  let output = "";

  arr.forEach(item => {
    item = (typeof item === "number") ? "NUMBER"+item : item;
    if (count[item]) {
      count[item]++;
    } else {
      count[item] = 1;
    }
  });

  const max = Math.max(...Object.values(count));

  for (let key in count) {
    if (count[key] === max) {
      key = /^NUMBER/.test(key) ? Number(key.replace("NUMBER", "")) : `"${key}"`;
      output += `${key} `;
    }
  }

  return `Most Repeated - ${output}`;
}


// Test Cases
console.log(mostRepeatedItems([10, 20, 10, 1, 100, 10, 2, 1, 5, 10]), `Most Repeated - ${10}`);
console.log(mostRepeatedItems(['A', 'E', 'I', 'O', 'U', 'A', 'A', 'I']), `Most Repeated - "A"`);
console.log(mostRepeatedItems([20, "John", "Doe", 20, "John", "Doe", "John"]), `Most Repeated - "John"`);
console.log(mostRepeatedItems(["Next", "Gen", "Next", "Coder"]), `Most Repeated - "Next"`);
console.log(mostRepeatedItems(["one", '1', "two", '2', "one", '1']), `Most Repeated - "one" "1"`);

