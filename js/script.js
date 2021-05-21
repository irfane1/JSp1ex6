function afficher(){
    var firstNumber = document.getElementById("firstNumber").value;
    var secondNumber = document.getElementById("secondNumber").value;
    var remainder = firstNumber % secondNumber;

    alert (remainder);   
}