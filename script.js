function convertToDisplay(value) {
    document.getElementById('display').value+=value;
}
function clearDisplay() {
    document.getElementById('display').value='';
}
function calculate() {
   try {
     var result=eval(document.getElementById('display').value)
    document.getElementById('display').value=result;
} catch (error) {
    document.getElementById('display').value=Error;
} 
}
document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (key >= '0' && key <= '9' || key === '.' || key === '*' || key === '/' || key === '-' || key === '+') {
        convertToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        const display = document.getElementById('display');
        display.value = display.value.slice(0, -1);
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
