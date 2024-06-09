// Value initalized to store input
let currentVal = "";
// Total result sum variable  initialization
let sum = 0
// Added event listener to get the input from keyboard only numbers
document.addEventListener('keydown', function (e) {
    let input = e.key;
    if (!isNaN(parseInt(input))) {
        currentVal += input;
        document.getElementById('result').value = currentVal
    } else {
        alert("Only numbers are allowed")
    }
})
// Created function to delete the numbers
function del() {
    currentVal = currentVal.slice(0, -1)
    document.getElementById('result').value = currentVal
}
// Created function to get the element values
function getValue(e) {
    currentVal += e
    document.getElementById('result').value = currentVal
}
// Created funcrion to clear the input box
function clr() {
    currentVal = ''
    document.getElementById('result').value = currentVal
}
// Created function to calculate the numbers
function cal() {
    try{
        sum = eval(currentVal)
        console.log(sum)
    }catch(e){
        alert("Input should not end with operator")
    }
    
    document.getElementById("result").value = sum
    currentVal = ''
}