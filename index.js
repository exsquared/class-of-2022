export function calculateBill(inputPlan, totalMinutes = 0, totalLines = 1){
    let monthlyRate = checkPlanRate(inputPlan);

    if(monthlyRate == 0 || totalLines == 0){
        return 0;
    }

    let getAdditionalLinesRateByPlan = totalLines > 1 ? checkAdditionalRateByPlan(inputPlan) : 0;
    let additionalLinesRate = getAdditionalLinesRateByPlan ? (totalLines - 1) * getAdditionalLinesRateByPlan : 0;
    let discountRate = totalLines > 3 ? calculateFamilyDiscount(inputPlan, totalLines) : 0;

    let getExcessMinutesRateByPlan = hasPlanMinutesExceeded(inputPlan, totalMinutes) ? checkExcessMinuteRateByPlan(inputPlan) : 0;
    let excessMinutesRate = getExcessMinutesRateByPlan ? getExcessMinutes(inputPlan, totalMinutes) * getExcessMinutesRateByPlan : 0;

    return roundNumber(monthlyRate + additionalLinesRate + excessMinutesRate - discountRate);
}

function roundNumber(number){
    return Math.round(number * 100) / 100;
}

function calculateFamilyDiscount(inputPlan, totalLines){
    let discount = 5;
    let discountLines = totalLines - 3;

    return (discountLines * (checkAdditionalRateByPlan(inputPlan) - discount));
}

export function getExcessMinutes(inputPlan, totalMinutes){
    return inputPlan == "Gold" ? totalMinutes - 1000 : totalMinutes - 500;
}

export function hasPlanMinutesExceeded(inputPlan, totalMinutes){
    if(inputPlan == "Gold"){
        if (totalMinutes > 1000){
            return true;
        }
    }
    if(inputPlan == "Silver"){
        if (totalMinutes > 500){
            return true;
        }
    }
    return false;
}

function checkExcessMinuteRateByPlan(inputPlan){
    return inputPlan == 'Gold' ? 0.45 : 0.54;
}

function checkPlanRate(inputPlan){
    if(inputPlan == 'Gold'){
        return 49.95;
    }else if(inputPlan == 'Silver'){
        return 29.95;
    }
    return 0;
}

function checkAdditionalRateByPlan(inputPlan){
    return inputPlan == 'Gold' ? 14.50 : 21.5; 
}