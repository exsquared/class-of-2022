import { calculateBill } from "./calculateBill.js";

const planType = document.querySelector('#plans');
const submitBtn = document.querySelector('#submit');
const resetBtn = document.querySelector('#reset');
const input_totalLines = document.querySelector('#lines');
const input_totalMinutes = document.querySelector('#minutes');
const billAmount = document.querySelector('#billAmount');

resetBtn.addEventListener('click', resetAll);
submitBtn.addEventListener('click', submitAll);

function submitAll() {
    const selectedPlanType = planType.value;
    const totalLines = input_totalLines.value;
    const totalMinutes = input_totalMinutes.value;
    const isInputValid = checkInputValidity(selectedPlanType, totalLines, totalMinutes);
    if (!isInputValid)
        alert('Please enter valid input.')
    const receivedResult = calculateBill(selectedPlanType, totalLines, totalMinutes);
    billAmount.textContent = `Your Bill Amount for ${selectedPlanType} plan with ${totalLines} lines and ${totalMinutes} minutes used is $${receivedResult}.`;
}
function checkInputValidity(selectedPlanType, totalLines, totalMinutes) {
    if (selectedPlanType == 'Make a choice')
        return false;
    if (totalLines.trim() == '' || totalLines < 1)
        return false;
    if (totalMinutes.trim() == '' || totalMinutes < 0)
        return false;
    return true;
}

function resetAll() {
    planType.value = 'Make a choice';
    input_totalLines.value = '';
    input_totalMinutes.value = '';
    billAmount.textContent = ''
}        