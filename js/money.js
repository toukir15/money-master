// input value 
function getInputValueById(inputId) {
    const input = document.getElementById(inputId);
    const inputString = input.value;
    const inputValue = parseInt(inputString);
    input.value = '';
    return inputValue;
}
// input value 
function getIncomeInputValueById(incomeInputId) {
    const incomeInput = document.getElementById(incomeInputId);
    const incomeInputString = incomeInput.value;
    const incomeInputValue = parseInt(incomeInputString);
    return incomeInputValue;
}

// set innerText
function setInnerText(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

// calculate btn  
document.getElementById('calculate__btn').addEventListener('click', function () {
    const incomeInput = getIncomeInputValueById('income__input');
    const foodInput = getInputValueById('food__input');
    const rentInput = getInputValueById('rent__input');
    const clothesInput = getInputValueById('clothes__input');
    const expensesTotal = foodInput + rentInput + clothesInput;

    if (incomeInput > expensesTotal) {
        const balance = incomeInput - expensesTotal;
        setInnerText('balance', balance);
        setInnerText("total__expenses", expensesTotal)
    }
    else if (isNaN(incomeInput, foodInput, rentInput, clothesInput)) {
        alert('Please provide valid input')
        return;
    }
    else {
        alert('You do not have enough money')
        return;
    }
})

// save btn
document.getElementById('save__btn').addEventListener('click', function () {
    const incomeInput = getIncomeInputValueById('income__input');
    const saveInput = getInputValueById('save__input');
    // const saveAmount = (incomeInput / 100) * saveInput;
    // setInnerText('saving__amount', saveAmount);

    const balance = document.getElementById('balance');
    const balanceString = balance.innerText;
    const balanceValue = parseInt(balanceString);
    const saveAmount = (incomeInput / 100) * saveInput;

    const remainingBalance = balanceValue - saveAmount;
    if (saveInput <= 100) {
        if (balanceValue <= 0) {
            alert('I can not calculate becauese balance is Zero(0)')
        }
        else {
            setInnerText('saving__amount', saveAmount);
            setInnerText('remaining__balance', remainingBalance);
        }
    }

    else {
        alert('Please provide a valid input')
    }

})