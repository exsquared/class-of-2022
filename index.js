import { calculateBill } from "./calculateBill.js";

const submitBtn = document.querySelector('#btn_submit');
const input_totalLines = document.querySelector('#input_additional_lines');
const input_totalMinutes = document.querySelector('#input_additional_minutes');
const billAmount = document.querySelector('#output_total_bill');

submitBtn.addEventListener('click', submitAll);

function submitAll() {
    const selectedPlanType = document.querySelector("input[type = 'radio'][name='planTypes']:checked").value;
    const totalLines = input_totalLines.value;
    const totalMinutes = input_totalMinutes.value;
    const isInputValid = checkInputValidity(selectedPlanType, totalLines, totalMinutes);
    if (!isInputValid) {
        alert('Please enter valid input.')
        return;
    }
    const receivedResult = calculateBill(selectedPlanType, totalLines, totalMinutes);
    billAmount.value = receivedResult;
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
