import { calculate } from "./index.js";

const item = document.querySelector('#item_Type');
const linesUsed = document.querySelector('#lines_Used');
const minutes = document.querySelector('#minutes_Used');
const calculateBill = document.querySelector('#calculate_Bill');
const outputfield = document.querySelector('#output_field');

calculateBill.addEventListener('click', getResult);

function getResult(){
    const userType = item.value.toString();
    const userLines = parseInt(linesUsed.value);
    const userMinutes = parseInt(minutes.value);

    const res = calculate(userType, userLines, userMinutes);
    
    if(!userType|| !userLines  || !userMinutes){
        alert('Please provide all the fields.');
    }

    if(res === "The selected item is not available for rent."){
        outputfield.textContent = `${res}`;
    }else{
        outputfield.textContent = `Your total bill is ${res}`;
    }
    
}



