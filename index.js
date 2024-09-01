document.addEventListener("DOMContentLoaded", function () {
    // Function to change text and background color
    function changeTextAndColor(element) {
        const inputText = document.getElementById("inputText").value;
        element.innerText = inputText;
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

    // Store the original order for restoration
    const originalContentOrder = Array.from(document.querySelectorAll(".col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-6")).map(element => element.innerText);

    // Function to rearrange elements in alphabetical order
    function rearrangeContentElements(order) {
        const elements = document.querySelectorAll(".col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-6");

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

    // Function to rearrange elements in random order
    function randomizeContent() {
        const elements = document.querySelectorAll(".col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-6");
        let randomizedContent = [...elements].map(el => el.innerText);
        
        // Shuffle the content array
        randomizedContent.sort(() => Math.random() - 0.5);

        // Update each element's content
        elements.forEach((element, index) => {
            element.innerText = randomizedContent[index];
        });
    }

    // Function to reset content to the original order
    function resetToOriginalOrder() {
        const elements = document.querySelectorAll(".col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-6");

        // Reset each element's content to its original state
        elements.forEach((element, index) => {
            element.innerText = originalContentOrder[index];
        });
    }

    // Keyboard event listener for rearranging elements
    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowRight") {
            rearrangeContentElements("forward");
        } else if (event.key === "ArrowLeft") {
            rearrangeContentElements("backward");
        } else if (event.key === "ArrowDown") {
            randomizeContent(); // Randomize the content
        } else if (event.key === "ArrowUp") {
            resetToOriginalOrder(); // Reset to original content order
        }
    });
});
