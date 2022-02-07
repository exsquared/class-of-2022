const gold_plan_base_price = 49.95;
const silver_plan_base_price = 29.95;
const free_minutes_for_gold_plan = 1000;
const free_minutes_for_silver_plan = 500;

export function calculateBill(plan, minutes=0, number_of_lines=1) {
    if(number_of_lines <= 0) {
        return 0;
    }
    let base_amt = basePlanAmt(plan);
    return base_amt == 0 ? 0 : Math.round(finalPrice(plan, number_of_lines, base_amt, minutes)*100)/100;
}
export function finalPrice(plan, number_of_lines=1, base_amt, minutes=0) {
    if(plan == "Gold") {
        return base_amt + (number_of_lines - 1) * 14.50 + extraChargesForMinutes(plan, minutes) - discountGiven(plan, number_of_lines);
    } else if(plan=="Silver") {
    return base_amt + (number_of_lines - 1) * 21.50 + extraChargesForMinutes(plan, minutes) - discountGiven(plan, number_of_lines);
    }
    else {
        return 0;
    }
}
export function basePlanAmt(plan) {
    if(plan == "Gold") {
        return gold_plan_base_price;
    } else if (plan == "Silver") {
        return silver_plan_base_price;
    } else {
        return 0;
    }            
}
export function extraChargesForMinutes(plan="Gold",minutes=0) {
    if (plan == "Gold") {
        return minutes > free_minutes_for_gold_plan ? (minutes - free_minutes_for_gold_plan) * 0.45 : 0;
    } else if(plan=="Silver") {
    return minutes > free_minutes_for_silver_plan ? (minutes - free_minutes_for_silver_plan) * 0.54 : 0;  
    }
    else {
        return 0;
    }  
}
export function discountGiven(plan="Gold", number_of_lines=1) {
    if (number_of_lines > 3) {
        return plan == "Gold" ? (number_of_lines - 3) * 9.50 : (number_of_lines - 3) * 16.50; 
    } 
    return 0;  
}

