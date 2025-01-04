// getting all value

// add event listener
const calculateButton = document.getElementById('calculate');

calculateButton.addEventListener("click", function () {
    const income = parseFloat(document.getElementById("income").value);
    const software = parseFloat(document.getElementById("software").value);
    const courses = parseFloat(document.getElementById("courses").value);
    const internet = parseFloat(document.getElementById("internet").value);
    const totalExpenses =  software + courses + internet;
    const balance = income - totalExpenses;
    const totalExpensesEl = document.getElementById("total-expenses");
    const balanceEl = document.getElementById("balance");
    totalExpensesEl.innerText = totalExpenses.toFixed(2);
    balanceEl.innerText = balance.toFixed(2);
    const results = document.getElementById("results");
    results.classList.remove("hidden");

    console.log({totalExpenses,balance});
})
// add event listener
const calculateSavingsButton = document.getElementById("calculate-savings");
calculateSavingsButton.addEventListener("click", function () {
    const savingpercentace = parseFloat(document.getElementById("savings").value);
    const income = parseFloat(document.getElementById("income").value);
    const software = parseFloat(document.getElementById("software").value);
    const courses = parseFloat(document.getElementById("courses").value);
    const internet = parseFloat(document.getElementById("internet").value);

    const totalExpenses =  software + courses + internet;
    const balance = income - totalExpenses;

    const savingAmount = (savingpercentace * balance) / 100;



    const savingEl = document.getElementById("savings-amount");
    savingEl.innerText = savingAmount;

    const remainingAmount = balance - savingAmount;
    const remainingBalance = document.getElementById("remaining-balance");
    remainingBalance.innerText = remainingAmount;

})

