import { calculateBill } from './index.js';

const submitButton = document.querySelector('.submitButton');
//const totalBill = document.querySelector("#totalBillDisplayed");

const noOfLines = document.querySelector("#lines");
const noOfMinutes = document.querySelector("#min");
const displayBill = document.querySelector("#totalBillDisplayed");

submitButton.addEventListener("click", () => {
    var planType = document.querySelector( 'input[name="plan"]:checked');
    const totalLines = Number(noOfLines.value) + 1;
    const additionalMins = Number(noOfMinutes.value)
    const totalMinutes = planType.value == "Gold" ? 1000 + additionalMins : 500 + additionalMins;
    displayBill.value = calculateBill(planType.value, totalLines, totalMinutes);
    
});