document.getElementById('calculate-btn').addEventListener('click', function () {
    const foodCost = document.getElementById('food-cost-amount').value;
    const rentCost = document.getElementById('rent-amount').value;
    const clothCost = document.getElementById('clothes-cost-amount').value;
    const totalExpense = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothCost);
    document.getElementById('total-expense').innerText = totalExpense;

    const incomeAmount = document.getElementById('income-amount').value;
    afterBalance = parseFloat(incomeAmount) - totalExpense;
    document.getElementById('after-balance').innerText = afterBalance;
});


document.getElementById('save-btn').addEventListener('click', function () {

})