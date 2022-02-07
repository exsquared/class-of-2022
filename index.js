const gold_plan_base_price = 49.95;
const silver_plan_base_price = 29.95;
const free_minutes_for_gold_plan = 1000;
const free_minutes_for_silver_plan = 500;

export function calculateBill(plan, minutes=0, number_of_lines=1) {
    if(number_of_lines == 0) {
        return 0;
    }
    let base_amt = basePlanAmt(plan);
    return base_amt == 0 ? 0 : Math.round(finalPrice(plan, number_of_lines, base_amt, minutes)*100)/100;
}
function finalPrice(plan, number_of_lines, base_amt, minutes) {
    if(plan == "Gold") {
        return base_amt + (number_of_lines - 1) * 14.50 + extraChargesForMinutes(plan, minutes) - discountGiven(plan, number_of_lines);
    }
    return base_amt + (number_of_lines - 1) * 21.50 + extraChargesForMinutes(plan, minutes) - discountGiven(plan, number_of_lines);
}
function basePlanAmt(plan) {
    if(plan == "Gold") {
        return gold_plan_base_price;
    } else if (plan == "Silver") {
        return silver_plan_base_price;
    } else {
        return 0;
    }            
}
function extraChargesForMinutes(plan,minutes) {
    if (plan == "Gold") {
        return minutes > free_minutes_for_gold_plan ? (minutes - free_minutes_for_gold_plan) * 0.45 : 0;
    }
    return minutes > free_minutes_for_silver_plan ? (minutes - free_minutes_for_silver_plan) * 0.54 : 0;    
}
function discountGiven(plan, number_of_lines) {
    if (number_of_lines > 3) {
        return plan == "Gold" ? (number_of_lines - 3) * 9.50 : (number_of_lines - 3) * 16.50; 
    } 
    return 0;  
}

