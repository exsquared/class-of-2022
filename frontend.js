import { calculate } from "./index.js";

const itemGold = document.querySelector('#gold');
const itemSilver = document.querySelector('#silver');
const linesUsed = document.querySelector('#lines_Used');
const minutes = document.querySelector('#minutes_Used');

const calculateBill = document.querySelector('#calculate_Bill');
const outputfield = document.querySelector('#result_Box');

calculateBill.addEventListener('click', getResult);

function getResult(e){
    e.preventDefault();
    const userType = (itemGold.checked)? itemGold.value : itemSilver.value;
    const userLines = parseInt(linesUsed.value) ;
    const userMinutes = parseInt(minutes.value);

    if(!itemGold.checked && !itemSilver.checked){
        alert("Please select an item type.");
    }else if(!userMinutes){
        alert("Please enter the number of minutes used.");
    }else{
        const res = calculate(userType, userLines, userMinutes);
    
        if(res === "The selected item is not available for rent."){
            outputfield.value = `${res}`;
        }else{
            outputfield.value = `${res}`;
        }
    }   
}



