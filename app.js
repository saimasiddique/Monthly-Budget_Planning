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

function inputType(x) {
    const inputID = x.target.id;
    document.getElementById(inputID).addEventListener('keyup', function (event) {

        const inputText = event.target.value;
        // for (const char of inputText) {
        //     console.log(isNaN(inputText));
        // }

        if (isNaN(inputText)) {
            document.getElementById(inputID).style.borderColor = "red";


        }
        else if (isNaN(inputText)) {
            document.getElementById(inputID).style.borderColor = "green";
            // alert('good to go');
        }


    });

}

function alertBox(y) {
    //console.log('before', document.getElementById('alertToast').checked);

    const inputID = y.target.id;
    console.log(inputID);
    const inputField = document.getElementById(inputID).value;
    console.log(inputField);
    if (isNaN(inputField) || inputField.length == 0) {
        //console.log(inputField.length)
        if (inputID == 'income-amount') {

            document.getElementById('alert-box-income').style.display = 'block';
            // document.getElementById('alert-box-food').style.display = 'none';
            document.getElementById('alertToast').checked = false;
        }
        else if (inputID == 'food-cost-amount') {
            console.log('before', document.getElementById('foodcheck').checked);
            //  document.getElementById('alertToast').checked
            document.getElementById('alert-box-food').style.display = 'block';
            // document.getElementById('alert-box-income').style.display = 'none';
            document.getElementById('foodcheck').checked = false;
        }
        else if (inputID == 'rent-amount') {
            console.log('before', document.getElementById('rentcheck').checked);

            document.getElementById('alert-box-rent').style.display = 'block';

            document.getElementById('rentcheck').checked = false;
        }
        else if (inputID == 'clothes-cost-amount') {
            console.log('before', document.getElementById('clothcheck').checked);

            document.getElementById('alert-box-cloth').style.display = 'block';

            document.getElementById('clothcheck').checked = false;
        }
        console.log('afterfood', document.getElementById('foodcheck').checked);
        console.log('afterrent', document.getElementById('rentcheck').checked);


    }


}
