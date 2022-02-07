import { calculateBill } from './index.js'

const totalAmount = document.querySelector('.totalAmount');
const getAdditionalPlanMinutes = document.querySelector('.AdditionalMinutes');
const getAdditionalPlanLines = document.querySelector('.AdditionalLines');

for(let i = 1; i <= 6; i++){
    const option = document.createElement('option');
    option.value = option.textContent = i;
    getAdditionalPlanLines.append(option);
}

const btn = document.querySelector('.submitButton');

btn.addEventListener('click', () => {
    const planSelector = document.querySelector('input[name = "planType"]:checked');
    
    let totalLines = Number(getAdditionalPlanLines.value) + 1;
    let AdditionalMinutes = Number(getAdditionalPlanMinutes.value);
    let totalMinutes = planSelector.value == "Gold" ? 1000 + AdditionalMinutes : 500 + AdditionalMinutes;

    totalAmount.value = calculateBill(planSelector.value, totalMinutes, totalLines);
});