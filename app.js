const expenseType = document.querySelector('#input-expense-type');
const expenseAmount = document.querySelector('#input-amount');
const btnClear = document.querySelector('#btn-cancel');
const btnAdd = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalSpendOutput = document.querySelector('#total-expenses');
const alertCtrl = document.querySelector('ion-alert-controller');

let totalSpend = 0;

const clear = () => {
    expenseType.value = '';
    expenseAmount.value = '';
}

btnAdd.addEventListener('click', () => {
    
    enteredReason = expenseType.value;
    enteredAmount = expenseAmount.value;
    
    if (
        enteredReason.trim().length <= 0 ||
        enteredAmount <= 0 ||
        enteredAmount.trim().length <= 0
    ) {
        alertCtrl
            .create({
            message: 'Enter valid expense type and amount!',
            header: 'Invalid input/s',
            buttons: ['OK']
        })
        .then(alertElement => {
            alertElement.present();
        });
        return;
    }
    //console.log(enteredReason, enteredAmount);
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': £' + enteredAmount;

    expensesList.appendChild(newItem);

    totalSpend += +enteredAmount;
    totalSpendOutput.textContent = totalSpend;

    clear();
});

btnClear.addEventListener('click', clear);