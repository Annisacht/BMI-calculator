function getBmiCategory(finalResult) {
    if (finalResult < 18.5) {
        return "Underweight";
    }
    else if (finalResult < 25) {
        return "Normal";
    }
    else if (finalResult < 30) {
        return "Overweight";
    }
    else {
        return "Obesity";
    }
}

function calculate() {
    let height = document.getElementById("h-input").value;
    let weight = document.getElementById("w-input").value;

    let result = parseFloat(weight) / (parseFloat(height) / 100) ** 2;
    let finalResult = result.toFixed(1)

    let bmiOutput = "Not Allowed 0";
    let bmiStatus = "invalid";

    if (!isNaN(finalResult) && height > 0 && weight > 0) {
        bmiStatus = getBmiCategory(finalResult);
        bmiOutput = finalResult;
    }
    document.getElementById("bmi-output").innerHTML = bmiOutput;
    document.getElementById("bmi-status").innerHTML = bmiStatus;

   

}

