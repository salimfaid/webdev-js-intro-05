// Prevent us from attempting to use variables
// that are not declared
"use strict"
// Experimenting with arrays
let myArray = [42, "apple", true, {name: "salim"}, [1, 2]];

// 1. Log the array to the console
console.log(myArray); 

// 2. Create an array with different data types and log it
let mixedArray = [1, "hello", false, undefined, null];
console.log(mixedArray);

// 3. Log the typeof of the array
console.log(typeof myArray); // This will return "object"

// 4. Remove an item from the array (e.g., the last item)
myArray.pop();
console.log(myArray);

// 5. Add an item to the array
myArray.push("new item");
console.log(myArray);

// 6. Change the value of an element in the array
myArray[1] = "orange"; 
console.log(myArray);
