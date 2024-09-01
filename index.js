document.addEventListener("DOMContentLoaded", function () {
    // Function to change text and background color
    function changeTextAndColor(element) {
        const inputText = document.getElementById("inputText").value;
        element.innerText = inputText;
        element.style.backgroundColor = "lightgray"; // Change background color to light gray
    }

    // Add event listener to change text and background color on click
    document.querySelectorAll(".col-md-2, .col-md-3, .col-md-4").forEach(function (element) {
        element.addEventListener("click", function () {
            changeTextAndColor(element);
        });
    });

    // Function to toggle bold text
    function toggleBold() {
        document.querySelectorAll(".col-md-2, .col-md-3, .col-md-4").forEach(function (element) {
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

    // Function to rearrange elements based on arrow keys
    function rearrangeElements(order) {
        const rows = document.querySelectorAll(".row");
        let allElements = [];

        rows.forEach(function (row) {
            row.querySelectorAll(".col-md-2, .col-md-3, .col-md-4").forEach(function (element) {
                allElements.push(element);
            });
        });

        if (order === "reverse") {
            allElements.reverse();
        } else if (order === "random") {
            allElements.sort(() => Math.random() - 0.5);
        } else if (order === "original") {
            allElements.sort((a, b) => a.textContent.localeCompare(b.textContent));
        }

        let index = 0;
        rows.forEach(function (row) {
            row.querySelectorAll(".col-md-2, .col-md-3, .col-md-4").forEach(function (element) {
                element.innerText = allElements[index].innerText;
                index++;
            });
        });
    }

    // Keyboard event listener for rearranging elements
    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
            rearrangeElements("reverse");
        } else if (event.key === "ArrowDown") {
            rearrangeElements("random");
        } else if (event.key === "ArrowUp") {
            rearrangeElements("original");
        }
    });
});
