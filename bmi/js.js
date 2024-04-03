// form and status
const form = document.querySelector("form");
const statusText = document.querySelector("#status-text");
const statusHeading = document.querySelector("#status-heading");
const status = document.querySelector(".status");

// add event listener
form.addEventListener("submit", calculateBMI);

function calculateBMI(event) {
    event.preventDefault();

    // get weight and height values
    const weight = document.querySelector("#weight").value;
    const height = document.querySelector("#height").value;

    // calculate BMI using the metric system
    const bmi = (weight / height / height) * 
    10000;

    // get the status based on the BMI
    let statusValue;
    let statusMessage;

    if (bmi < 18.5) {
    statusValue = "Underweight";
    statusMessage = "You are Underweight. Kindly eat more and exercise regularly.";
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        statusValue = "Healthy";
        statusMessage = "You are healthy. Keep it up!";
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        statusValue = "Overweight"
        statusMessage = "You are Overweight. Kindly eat healthier and exercise more.";
    }
    else {
        statusValue = "Obese";
        statusMessage = "You are obese. Kindly consult a doctor and make lifestyle changes.";
    }

    statusHeading.textContent = `Your BMI is ${bmi.toFixed(2)}`;
    statusText.textContent = statusMessage;
    status.style.display = "block";
}
