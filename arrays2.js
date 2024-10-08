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
  console.log(teams.pop());
}

eliminateTeam(teams);
