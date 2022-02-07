// // import { parse } from '@babel/core';
import {calculateMoney } from './calculation.js';

//Frontend logic...
let gold = document.getElementById('Gold');
let silver = document.getElementById('Silver');
let additionalMinutesinput = document.getElementById('additionalMinutes');
let additionalLinesInput = document.getElementById('additionalLines');
let btn  = document.getElementById("submitButton");
let phone_bill_display = document.getElementById("phone-bill");

btn.addEventListener('click', executeCommand)

function executeCommand(event){
    event.preventDefault();
    if((gold.checked || silver.checked) && additionalMinutes.value){
        //It means that all the values are selected..
            //main logic will be written here....
            let plan_type = (gold.checked) ? gold.value : silver.value;
            let additionalMinutes = additionalMinutesinput.value;
            let totalMinutes;
            if(plan_type == "Gold"){
                totalMinutes = (parseInt(additionalMinutes) == 0) ? 1000 : 1000 + parseInt(additionalMinutes);
            }
            else{
                totalMinutes = (parseInt(additionalMinutes) == 0) ? 500 : 500 + parseInt(additionalMinutes);
            }
            let additionalLines = additionalLinesInput.value;
            let totalLines = parseInt(additionalLines) + 1;
            phone_bill_display.value = calculateBill(plan_type, totalLines, totalMinutes);
    }
    else{
        alert('Please enter all the details!!')
    }
}
export function calculateBill(plan = null, numberOfLines = 1, numberOfMinutes = 0){
    if(plan == 'Gold' || plan == 'Silver'){
        return calculateMoney(plan, numberOfLines, numberOfMinutes);
    }
    return 0;
}
