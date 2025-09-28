const display = document.querySelector('input[name="display"]');
const buttons = document.querySelectorAll('input[type="button"]');

display.addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9.*/+\-]/g, '');
});
// Add a click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.value;

        if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else if (value === 'AC') {
            display.value = '';
        } else if (value === 'DEL') {
            display.value = display.value.toString().slice(0, -1);
        } else {
            display.value += value;
        }
    });
});