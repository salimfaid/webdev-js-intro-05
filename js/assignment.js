"use strict";

// Initial array of todo items
const todos = [
    "Wash the dishes",
    "Clean the gutters",
    "Mow the yard",
    "Do some coding",
    "Rake the leaves",
];

// Declare mutable variables for shiftValue and popValue without assigning them values
let shiftValue;
let popValue;

// Declaring constant variables to store references to the elements
const answerOneEl = document.getElementById("answer-one");
const answerTwoEl = document.getElementById("answer-two");
const answerFourEl = document.getElementById("answer-four");
const answerFiveEl = document.getElementById("answer-five");
const answerSixEl = document.getElementById("answer-six");
const submissionBtn = document.getElementById("submission-btn");

function updateAnswerOne() {
    answerOneEl.textContent = todos.join(",");  // Output the initial todo array
}

function updateAnswerTwo() {
    answerTwoEl.textContent = todos[2];  // Output the third item in the array ("Mow the yard")
}

function removeLastValue() {
    popValue = todos.pop();  // Remove the last item and store it in popValue
}

function updateAnswerFour() {
    answerFourEl.textContent = todos.join(",");  // Output the todo array after the last item is removed
}

function reverseTodoList() {
    todos.reverse();  // Reverse the todo array
}

function updateAnswerFive() {
    answerFiveEl.textContent = todos.join(",");  // Output the todo array after it is reversed
}

function removeFirstValue() {
    shiftValue = todos.shift();  // Remove the first item and store it in shiftValue
}

function addShiftAndPopValues() {
    todos.push(shiftValue, popValue);  // Add shiftValue and popValue to the end of the array
}

function updateAnswerSix() {
    answerSixEl.textContent = todos.join(",");  // Output the final todo array
}

function render() {
    // Perform the required operations step by step
    updateAnswerOne();
    updateAnswerTwo();
    removeLastValue();
    updateAnswerFour();
    reverseTodoList();
    updateAnswerFive();
    removeFirstValue();
    addShiftAndPopValues();
    updateAnswerSix();
}

// Add event listener for the submit button to trigger the render function
submissionBtn.addEventListener("click", function () {
    render();
});
