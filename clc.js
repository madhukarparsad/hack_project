document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.getElementById('inputBox');
    const buttons = document.querySelectorAll('button');
    let str = '';

    function updateDisplay(value) {
        str += value;
        inputBox.value = str;
    }

    function handleButtonClick(value) {
        if (value === 'AC') {
            str = '';
            inputBox.value = '0';
        } else if (value === 'DEL') {
            str = str.slice(0, -1);
            inputBox.value = str || '0';
        } else if (value === '=') {
            try {
                str = str.replace(/%/g, '/100');
                str = eval(str).toString();
                inputBox.value = str;
            } catch (e) {
                inputBox.value = 'Error';
            }
        } else if (value === '±') {
            if (str) {
                str = (parseFloat(str) * -1).toString();
                inputBox.value = str;
            }
        } else if (value === '%') {
            if (str) {
                str += '/100';
                inputBox.value = eval(str).toString();
                str = inputBox.value;
            }
        } else {
            updateDisplay(value);
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            handleButtonClick(value);
        });
    });

    document.addEventListener('keydown', (e) => {
        const key = e.key;
        if (key >= '0' && key <= '9') {
            updateDisplay(key);
        } else if (key === '+') {
            handleButtonClick('+');
        } else if (key === '-') {
            handleButtonClick('-');
        } else if (key === '*') {
            handleButtonClick('*');
        } else if (key === '/') {
            handleButtonClick('/');
        } else if (key === 'Enter') {
            handleButtonClick('=');
        } else if (key === 'Backspace') {
            handleButtonClick('DEL');
        } else if (key === 'Escape') {
            handleButtonClick('AC');
        } else if (key === '.') {
            handleButtonClick('.');
        } else if (key === '%') {
            handleButtonClick('%');
        }
    });
});