export function calculateBill(plan, lines = 1, mins=1){
    const baseAmount = getPlanBase(plan);

    if(baseAmount == 0 || lines<1 || mins < 0 || !plan ){
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
      
      
      return amount;
    
}


export function isDiscountedLines(lines){
    if(lines>3){
        return (lines-3);
    }
    return 0;
}

export function getMinutesRate(plan){
    if(!plan){
        return "Error!";
    }
    return plan==="Gold" ? 0.45 : 0.54;
}
export function getMinutes(plan){
    if(!plan){
        return("Error!")
    }
    return plan==="Gold" ? 1000 : 500;
}

export function getExceedingMinutes(baseMinute, mins){
       if(mins > baseMinute){
            return (mins-baseMinute);
        }
    return 0;
}
export function getCostPerLines(plan){
    if(!plan){
        return("Error!");
    }
    return plan ==="Gold" ? 14.50 : 21.50;
}

export function getPlanBase(plan){
    if(plan==="Gold"){
        return 49.95;
    }
    else if(plan==="Silver"){
        return 29.95;
    }
    return 0;
}
