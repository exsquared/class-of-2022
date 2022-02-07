import {getBasePrice, getAdditionalMinutesPrice} from './calculation.js';

const GOLD_TWO_LINE_PRICE = 2*14.50;
const SILVER_TWO_LINE_PRICE = 2*21.50

export function handleDiscount(plan, numberOfLines, numberOfMinutes){
    //It is clear here that the execution will reach here only if the lines are greater than or equal to 4...
    let discountedLines = numberOfLines - 3;
    if(plan == "Gold"){
        if(numberOfMinutes > 1000)
            return Math.round((getBasePrice(plan) + GOLD_TWO_LINE_PRICE + getAdditionalMinutesPrice(plan, numberOfMinutes) + 5*(discountedLines))*100)/100;
        return Math.round((getBasePrice(plan) + 5*(discountedLines) + GOLD_TWO_LINE_PRICE)*100)/100;
    }
    //else the plan is silver...
    if(numberOfMinutes > 500){
        return Math.round((getBasePrice(plan) + getAdditionalMinutesPrice(plan, numberOfMinutes) + 5*(discountedLines) + SILVER_TWO_LINE_PRICE)*100)/100;
    }
    return Math.round((getBasePrice(plan) + 5*(discountedLines) + SILVER_TWO_LINE_PRICE)*100)/100;
}