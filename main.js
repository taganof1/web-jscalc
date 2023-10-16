// Wait for html to load
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button");
    const output = document.getElementById("output");

    // Add click event listeners to each button
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const buttonText = button.innerText;
            handleButtonClick(buttonText);
        });
    });

    function handleButtonClick(value) {
        if (value === "=") {
            // Evaluate the expression in the output field
            try {
                output.innerText = eval(output.innerText);
            } catch (error) {
                output.innerText = "Error";
            }
        } else if (value === "C") {
            // Clear the output field
            output.innerText = "0";
        } else {
            // Append the button value to the output field
            if (output.innerText === "0") {
                output.innerText = value;
            } else {
                output.innerText += value;
            }
        }
    }
});