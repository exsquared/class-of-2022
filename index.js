export function calculateBill(planType,lines=1,mins=0){
    let calculatedBillForGold = 49.95;
    let calculatedBillForSilver = 29.95;
    let totalExtraMinutes =0;
    let additionalNumberOfLines = lines-1;
    if(lines==0 && mins==0){
        return planType=="Gold" ? 49.95 : 29.95;
    }
    if(checkMinutesAreExtraOrNot(planType,mins)==true){
        totalExtraMinutes += extraMinutes(planType,mins);

    }

    if(lines==1){
        if(checkMinutesAreExtraOrNot(planType, mins)==false){
            return roundNumber(whenNoAdditionalLinesAndNoExtraMinutes(planType,calculatedBillForGold,calculatedBillForSilver));
        }
        else{
           return roundNumber(whenNoAdditionalLinesButHaveExtraMinutes(planType,totalExtraMinutes,calculatedBillForGold,calculatedBillForSilver));
        }
    }
    else if(lines>1 && lines<=3){
        let billForExtraLines = roundNumber(additionalNumberOfLines*costPerLine(planType));
        if(checkMinutesAreExtraOrNot(planType,mins)==false){
             return roundNumber(whenNoAdditionalLinesAndNoExtraMinutes(planType,calculatedBillForGold,calculatedBillForSilver) + billForExtraLines);
        }
        else{
            return roundNumber(whenNoAdditionalLinesButHaveExtraMinutes(planType,totalExtraMinutes,calculatedBillForGold,calculatedBillForSilver) + billForExtraLines);

        }
    }
    else{
        let totalBillForExtraAdditionalLines = roundNumber((additionalNumberOfLines-2)*5.00) + roundNumber(2*costPerLine(planType));
        if(checkMinutesAreExtraOrNot(planType,mins)==false){
            return roundNumber(whenNoAdditionalLinesAndNoExtraMinutes(planType,calculatedBillForGold,calculatedBillForSilver) + totalBillForExtraAdditionalLines);
        }
        else{
            return roundNumber(whenNoAdditionalLinesButHaveExtraMinutes(planType,totalExtraMinutes,calculatedBillForGold,calculatedBillForSilver) + totalBillForExtraAdditionalLines);
         }
    }
    
}

function whenNoAdditionalLinesButHaveExtraMinutes(planType,totalExtraMinutes,calculatedBillForGold,calculatedBillForSilver){
    return planType==="Gold" ? roundNumber((totalExtraMinutes*0.45) + calculatedBillForGold) : roundNumber((totalExtraMinutes*0.54) + calculatedBillForSilver);
}

function whenNoAdditionalLinesAndNoExtraMinutes(planType,calculatedBillForGold,calculatedBillForSilver){
    return    planType==="Gold" ? roundNumber(calculatedBillForGold) : roundNumber(calculatedBillForSilver);
}
//costPerLine gold:14.50, 21.50
function costPerLine(planType){
    return planType==="Gold" ? 14.50 : 21.50;
}
export function extraMinutes(planType,mins){
    return planType==="Gold" ? mins-1000 : mins-500;
}

export function checkMinutesAreExtraOrNot(planType,mins){
    if((planType=="Gold" && mins>1000) || (planType=="Silver" && mins>500)){
       return true;
    }
    else{
        return false;
    }
    
}


function roundNumber(number){
    return Math.round(number * 100) / 100;
}