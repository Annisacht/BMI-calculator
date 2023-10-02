
function Calculate(){
    let height = document.getElementById("h-input").value;
    let weight = document.getElementById("w-input").value;

    let result = parseFloat(weight) /(parseFloat(height)/100)**2;
    let finalResult = result.toFixed(1)

    if(!isNaN(finalResult)){
        document.getElementById("bmi-output").innerHTML = finalResult;
        if(finalResult < 18.5){
            document.getElementById("bmi-status").innerHTML = "Underweight";
        }
        else if(finalResult < 25){
            document.getElementById("bmi-status").innerHTML = "Normal";
        }
        else if(finalResult < 30){
            document.getElementById("bmi-status").innerHTML = "Overweight";
        }
        else{
            document.getElementById("bmi-status").innerHTML = "Obesity";
        }
    }

    if ((height <= 0) || (weight <= 0)){
        document.getElementById("bmi-status").innerHTML = "invalid";
        document.getElementById("bmi-output").innerHTML = "Not Allowed 0";

    }

}

