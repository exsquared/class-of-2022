import { handleDiscount } from "./handlediscount.js";

export function calculateMoney(plan, numberOfLines, numberOfMinutes){
    if(numberOfLines >= 4){
        return handleDiscount(plan, numberOfLines, numberOfMinutes);
    }
    if(plan == "Gold"){
       if(numberOfMinutes > 1000){
            return Math.round((getBasePrice(plan) + getAdditionalMinutesPrice(plan, numberOfMinutes) + getAdditionalLinesPrice(plan, numberOfLines))*100)/100;
       }
       return Math.round((getBasePrice(plan) + getAdditionalLinesPrice(plan, numberOfLines))*100)/100;
    }
    if(plan == "Silver"){
        if(numberOfMinutes > 500){
            return Math.round((getBasePrice(plan) + getAdditionalMinutesPrice(plan, numberOfMinutes) + getAdditionalLinesPrice(plan, numberOfLines))*100)/100;
        }
        return Math.round((getBasePrice(plan) + getAdditionalLinesPrice(plan, numberOfLines))*100)/100;
    }
}

export function getBasePrice(plan){
    return (plan == "Gold") ? 49.95 : 29.95;
}

export function additionalMinutes(plan, totalNumberOfMinutes){
    return (plan == "Gold") ? totalNumberOfMinutes-1000 : totalNumberOfMinutes-500;
}

export function getAdditionalMinutesPrice(plan, totalNumberOfMinutes){
    return (plan == "Gold") ? additionalMinutes(plan, totalNumberOfMinutes)*0.45 : additionalMinutes(plan, totalNumberOfMinutes)*0.54;
}

export function getAdditionalLinesPrice(plan, totalNumberOfLines){
    return (plan == "Gold") ? (totalNumberOfLines-1)*14.50 : (totalNumberOfLines-1)*21.50;
}