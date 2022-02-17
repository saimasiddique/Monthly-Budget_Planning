function calculateExpenses() {
    const foodCost = document.getElementById('food-cost-amount').value;
    const rentCost = document.getElementById('rent-amount').value;
    const clothCost = document.getElementById('clothes-cost-amount').value;
    const totalExpense = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothCost);
    return totalExpense;
}

function calculateBalance(money, credit) {

    let moneyAmount = '';

    if (money == 'income') {
        moneyAmount = document.getElementById(money + '-amount').value;
    }
    else if (money == 'balance') {
        moneyAmount = document.getElementById(money + '-amount').innerText;
    }
    else {
        alert('please check your code');
    }

    const totalExpense = document.getElementById('total-' + credit).innerText;

    updatedAmount = parseFloat(moneyAmount) - parseFloat(totalExpense);
    return updatedAmount;
}

// Calculate button event handler 
document.getElementById('calculate-btn').addEventListener('click', function () {

    const totalExpense = calculateExpenses();
    document.getElementById('total-expense').innerText = totalExpense;

    const afterBalance = calculateBalance('income', 'expense');
    document.getElementById('balance-amount').innerText = afterBalance;
});

// save button event handler 
document.getElementById('save-btn').addEventListener('click', function () {

    const incomeAmount = document.getElementById('income-amount').value;
    const saveAmount = document.getElementById('saved-amount').value;

    const savedMoney = parseFloat(incomeAmount) * parseFloat(saveAmount) / 100;
    document.getElementById('total-saved').innerText = savedMoney;

    const remainingAmount = calculateBalance('balance', 'saved');
    document.getElementById('remaining-balance').innerText = remainingAmount;

});


// error handling
document.getElementById('income-amount').addEventListener('keyup', function (e) {
    const inputText = e.target.value;
    if (isNaN(parseFloat(inputText))) {
        document.getElementById('income-amount').style.borderColor = "red";
        alert(inputText, 'is having alphabetic input');
    }
    else {
        document.getElementById('income-amount').style.borderColor = "";
        alert('good to go');
    }
})