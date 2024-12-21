"use strict";

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const yearElement = document.getElementById("year");
const resolutionElement = document.getElementById("resolution")
const willMeetResolutionElement = document.getElementById("will-meet-resolution")
const submissionBtn = document.getElementById("submission-btn")

// Declare your variables here.
const resolution = "Exercise daily";
const currentYear = 2024;
let willMeetResolution = true;
function updateYear() {
    // write the logic
    yearElement.innerText = currentYear
}

function updateResolution() {
    // Update this function 
    resolutionElement.innerText = resolution
}

function render() {
    // Finish writing this function
    updateYear();
    updateResolution();
}

submissionBtn.addEventListener("click", function () {
    // Call the render function when the button is clicked
    render();
});
