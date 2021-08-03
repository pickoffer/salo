const prompt = require('prompt-sync')({ sigint: true });

function inputValue() {
    const value = prompt('Enter value');
    return parseInt(value);
}

function outputValue(key, firstValue, secondValue) {
    switch (key) {
        case 1:

            console.log(firstValue + secondValue);
            break;

        case 2:

                console.log(firstValue - secondValue);
                break;

        case 3:

            console.log(firstValue / secondValue);
            break;

        case 4:

                console.log(firstValue * secondValue);
                break; 

        default:console.log('invalid action');

            break;
    }
}

const firstValue = inputValue();
const secondValue = inputValue();
const actionValue = inputValue();

outputValue(actionValue, firstValue, secondValue);