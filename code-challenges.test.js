// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
describe("personCapitalized", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
  // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
  expect(personCapitalized(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})
// FAIL  ./code-challenges.test.js
// personCapitalized
//   ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized
// ● personCapitalized › takes in an array of objects and returns an array with a sentence about each person with their name capitalized
//   ReferenceError: personCapitalized is not defined


// b) Create the function that makes the test pass.
// Declare a function named personCapitalized
// Assign array as parameter
// Use a method to map over the array
// Create a variable named capLetter to capitalize the first name
// Split name into an array
// Map over the array to capitalize index of first letter using toUpperCase
// Use slice to add the rest of the name to the capitalized letter and join back into string
// Use string interpolation to return sentence 


const personCapitalized = (array) => {
    return array.map (value => {
      let capLetter = value.name.split(" ").map (letter => letter[0].toUpperCase() + letter.slice(1)).join(" ")
        return `${capLetter} is ${value.occupation}.`
      })
  } 
//   PASS  ./code-challenges.test.js
//   personCapitalized
//     ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
describe("onlyRemainders", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  // Expected output: [ 2, 0, -1, 0 ]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  // Expected output: [ 2, 1, -1 ]
  expect(onlyRemainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
  expect(onlyRemainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})
// FAIL  ./code-challenges.test.js
// onlyRemainders
//   ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)
// ● onlyRemainders › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
//   ReferenceError: onlyRemainders is not defined


// b) Create the function that makes the test pass.
//Declare a function named onlyRemainders
//Assign array as parameter
// Create variable number
//Use filter method to iterate through array and return only numbers
//Use map method to iterate through numbers 
// Use modulo to return the remainder of each number

const onlyRemainders = (array) => {
  let number = array.filter (value => typeof value === "number")
  return number.map (value => value % 3)
}
// PASS  ./code-challenges.test.js
//   onlyRemainders
//     ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total



// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
describe("numsCubed", () => {
  it("that takes in an array of numbers and returns the sum of all the numbers cubed", () => {
  const cubeAndSum1 = [2, 3, 4]
  // Expected output: 99
  const cubeAndSum2 = [0, 5, 10]
  // Expected output: 1125
  expect(numsCubed(cubeAndSum1)).toEqual(99)
  expect(numsCubed(cubeAndSum2)).toEqual(1125)
  })
})
// FAIL  ./code-challenges.test.js
//   numsCubed
//     ✕ that takes in an array of numbers and returns the sum of all the numbers cubed (1 ms)
//   ● numsCubed › that takes in an array of numbers and returns the sum of all the numbers cubed
//     ReferenceError: numsCubed is not defined


// b) Create the function that makes the test pass.
//Declare a function named numsCubed
//Assign array as parameter
//Create variable cubeArray
//Use the map method to iterate through the array
//Cube each value in the array
//Use the reduce method to add each index with the next
//Return the sum of the array

const numsCubed = (array) => {
  let cubeArray = array.map(value => value **3)
  return cubeArray.reduce((a, b) =>  a + b)
}
// PASS  ./code-challenges.test.js
// numsCubed
//   ✓ that takes in an array of numbers and returns the sum of all the numbers cubed (1 ms)
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total