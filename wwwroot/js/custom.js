document.addEventListener("DOMContentLoaded", function() {
    var calculateButton = document.getElementById("calculateButton");

    calculateButton.addEventListener("click", function() {
        var number1 = parseFloat(document.getElementById("number1").value);
        var number2 = parseFloat(document.getElementById("number2").value);

        if (!isNaN(number1) && !isNaN(number2)) {
            var sum = number1 + number2;
            document.getElementById("result").textContent = "The sum of " + number1 + " and " + number2 + " is: " +  sum;
            document.getElementById("result").style.display = "block";
        } else {
            document.getElementById("result").textContent = "";
            document.getElementById("result").style.display = "none";
        }
    });
});
