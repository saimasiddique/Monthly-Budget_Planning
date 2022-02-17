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
        else if (parseFloat(inputText) < 0) {
            document.getElementById(inputID).style.borderColor = "red";
            if (inputID == 'income-amount') {
                alert("Income amount cannot be negative!");
            }
            else if (inputID == 'food-cost-amount') {
                alert("Food cost cannot be negative!");
            }
            else if (inputID == 'rent-amount') {
                alert("Rent cannot be negative!");
            }
            else if (inputID == 'clothes-cost-amount') {
                alert("Cloth cost cannot be negative!");
            }
            else if (inputID == 'saved-amount') {
                alert("Saving-percentage cannot be negative!");
            }
        }
        else if (!isNaN(inputText)) {
            document.getElementById(inputID).style.borderColor = "green";
            // alert('good to go');
        }


    });

}

function alertBox(y) {


    const inputID = y.target.id;
    // console.log(inputID);
    const inputField = document.getElementById(inputID).value;
    // console.log(inputField);
    if (isNaN(inputField) || inputField.length == 0) {
        document.getElementById(inputID).style.borderColor = "red";

        if (inputID == 'income-amount') {

            document.getElementById('alert-box-income').style.display = 'block';
            document.getElementById('alertToast').checked = false;
        }
        else if (inputID == 'food-cost-amount') {

            document.getElementById('alert-box-food').style.display = 'block';

            document.getElementById('foodcheck').checked = false;
        }
        else if (inputID == 'rent-amount') {

            document.getElementById('alert-box-rent').style.display = 'block';

            document.getElementById('rentcheck').checked = false;
        }
        else if (inputID == 'clothes-cost-amount') {

            document.getElementById('alert-box-cloth').style.display = 'block';

            document.getElementById('clothcheck').checked = false;
        }
        else if (inputID == 'saved-amount') {

            document.getElementById('alert-box-saving').style.display = 'block';

            document.getElementById('savingcheck').checked = false;
        }


    }

    else {
        document.getElementById(inputID).style.borderColor = "rgb(226 232 240)";
    }


}

// Calculate button event handler 
document.getElementById('calculate-btn').addEventListener('click', function () {

    const totalExpense = calculateExpenses();
    document.getElementById('total-expense').innerText = totalExpense;

    const afterBalance = calculateBalance('income', 'expense');
    if (afterBalance < 0) {
        return alert('Please cut of your expenses!!!.');

    }
    document.getElementById('balance-amount').innerText = afterBalance;
});

// save button event handler 
document.getElementById('save-btn').addEventListener('click', function () {

    const incomeAmount = document.getElementById('income-amount').value;
    const saveAmount = document.getElementById('saved-amount').value;

    const savedMoney = parseFloat(incomeAmount) * parseFloat(saveAmount) / 100;
    document.getElementById('total-saved').innerText = savedMoney;

    const remainingAmount = calculateBalance('balance', 'saved');
    if (remainingAmount < 0) {
        return alert("You can't save more than your income!!! Please decrease your saving amount..");
    }
    document.getElementById('remaining-balance').innerText = remainingAmount;

});





