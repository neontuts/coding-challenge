/*
  Write a program to remove all repeated items from an user defined array.
*/


function eliminateDuplicates(arr) {
  let output = [];
  for (let i=0; i<arr.length; i++) {
    if (!output.includes(arr[i])) {
      output.push(arr[i]);
    }
  }

  return output;
}


// Test Cases
console.log(eliminateDuplicates([10, 20, 10, 1, 100, 10, 2, 1, 5, 10]), [10, 20, 1, 100, 2, 5]);
console.log(eliminateDuplicates(['A', 'E', 'I', 'O', 'U', 'I', 'A', 'U']), ['A', 'E', 'I', 'O', 'U']);
console.log(eliminateDuplicates([20, "John", "Doe", 20, 5.9, "Doe", "John"]), [20, "John", "Doe", 5.9]);
console.log(eliminateDuplicates(["Next", "Gen", "Next", "Coder"]), ["Next", "Gen", "Coder"]);
console.log(eliminateDuplicates(["one", '1', "two", '2', "one", '1']), ["one", '1', "two", '2']);

