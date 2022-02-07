export function calculateBill(plan, lines = 1, mins=1){
    const baseAmount = getPlanBase(plan);

    if(baseAmount == 0){
        return 0;
    }
    const minsExceeding = getExceedingMinutes(getMinutes(plan), mins);
     const excessMinutesRate = getMinutesRate(plan);
     let amount = 0;
     let costLines =  (lines-1)*getCostPerLines(plan) ;
     const discountNoOfLines = isDiscountedLines(lines);
     const minutesExceeds = minsExceeding*excessMinutesRate;

     if(!lines && !mins){
         amount = baseAmount;
     }    
      else if(discountNoOfLines){
        costLines =  (lines-discountNoOfLines-1)*getCostPerLines(plan);
        const discount = 5;
         amount = Number((baseAmount + costLines + minutesExceeds + discount*(discountNoOfLines)).toFixed(2));
      }else{
        amount = Number((baseAmount + costLines + minutesExceeds).toFixed(2));
      }
      
      //totalBill.innerHTML = amount;
      return amount;
    
}


function isDiscountedLines(lines){
    if(lines>3){
        return (lines-3);
    }
    return 0;
}

function getMinutesRate(plan){
    return plan==="Gold" ? 0.45 : 0.54;
}
function getMinutes(plan){
    return plan==="Gold" ? 1000 : 500;
}

function getExceedingMinutes(baseMinute, mins){
       if(mins > baseMinute){
            return (mins-baseMinute);
        }
    return 0;
}
function getCostPerLines(plan){
    return plan ==="Gold" ? 14.50 : 21.50;
}

function getPlanBase(plan){
    if(plan==="Gold"){
        return 49.95;
    }
    else if(plan==="Silver"){
        return 29.95;
    }
    return 0;
}
