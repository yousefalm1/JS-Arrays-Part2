/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */

const numbers = [1, 2, 3, 4];

function isArrayLengthOdd(numbers) {
  if (numbers.length % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

console.log(isArrayLengthOdd(numbers));

// Task 2

function isArrayLengthEven(numbers) {
  // Your code here
  if (numbers.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isArrayLengthEven(numbers));

// Task 3

const instructors = ["Mshary", "Hasan"];

function addLailaToArray(instructors) {
  newInstructors = instructors.slice();
  newInstructors.push("Laila");
  console.log(newInstructors);
}

addLailaToArray(instructors);

// Task 4

const teams = ["Brazil", "Germany", "Italy"];
function eliminateTeam(teams) {
  // Your code here
  return teams.pop();
}

console.log(eliminateTeam(teams));

// Challenge 1

/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */

const fruits = ["apple", "orange", "banana", "kiwi", "blueberry", "mango"];
function secondHalfOfArrayIfItIsEven(fruits) {
  // Your code here
  if (fruits.length % 2 === 0) {
    return fruits.slice(2);
  } else {
    return [];
  }
}

console.log(secondHalfOfArrayIfItIsEven(fruits));
