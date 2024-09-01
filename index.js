document.addEventListener("DOMContentLoaded", function () {
    // Function to change text and background color
    function changeTextAndColor(element) {
        const inputText = document.getElementById("inputText").value;
        element.innerText = inputText;
        element.style.backgroundColor = "lightgray"; // Change background color to light gray
    }

    // Add event listener to change text and background color on click
    document.querySelectorAll(".col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-6").forEach(function (element) {
        element.addEventListener("click", function () {
            changeTextAndColor(element);
        });
    });

    // Function to toggle bold text
    function toggleBold() {
        document.querySelectorAll(".col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-6").forEach(function (element) {
            if (element.style.fontWeight === "bold") {
                element.style.fontWeight = "normal";
            } else {
                element.style.fontWeight = "bold";
            }
        });
    }

    // Add event listener to the new button to toggle bold text on click
    document.getElementById("toggleBoldButton").addEventListener("click", function () {
        toggleBold();
    });

    // Initialize content from "Content A" to "Content R"
    let content = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    let currentIndex = 0; // Start from 'A'
    let maxIndex = content.length - 1; // Index for 'Z'

    // Function to rearrange elements in alphabetical order
    function rearrangeContentElements(order) {
        const elements = document.querySelectorAll(".col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-6");

        // Move elements to the next or previous letter in the alphabet
        if (order === "forward" && currentIndex < maxIndex) {
            currentIndex++; // Move to the next letter
        } else if (order === "backward" && currentIndex > 0) {
            currentIndex--; // Move to the previous letter
        }

        // Update each element's content
        elements.forEach((element, index) => {
            element.innerText = "Content " + content[(index + currentIndex) % content.length];
        });
    }

    // Keyboard event listener for rearranging elements
    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowRight") {
            rearrangeContentElements("forward");
        } else if (event.key === "ArrowLeft") {
            rearrangeContentElements("backward");
        }
    });
});
