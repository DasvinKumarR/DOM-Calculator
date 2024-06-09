let currentVal = "";
let sum = 0
document.getElementById("result").value = sum
document.addEventListener('keydown', function (e) {
    let input = e.key;
    if (!isNaN(parseInt(input))) {
        currentVal += input;
        document.getElementById('result').value = currentVal
    } else {
        alert("Only numbers are allowed")
    }
})

function del() {
    currentVal = currentVal.slice(0, -1)
    document.getElementById('result').value = currentVal
}

function getValue(e) {
    currentVal += e
    document.getElementById('result').value = currentVal
}

function clr() {
    currentVal = ''
    document.getElementById('result').value = currentVal
}

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