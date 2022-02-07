const typesOfPlan = ['Gold', 'Silver'];

export function calculateBill(planType, countAdditionalLines = 1, totalMinutes = 0) {
    if (!typesOfPlan.includes(planType))
        return -1;
    const baseRate = calculateBaseRate(planType);
    const additionalLinesPrice = calculateAdditionalLinesPrice(countAdditionalLines, planType);
    const extraMinutePrice = calculateExtraMinutePrice(planType, totalMinutes);
    let totalBill = calculateTotalBillPrice(baseRate, additionalLinesPrice, extraMinutePrice);

    return Math.round(totalBill * 100) / 100;
}

function calculateExtraMinutePrice(planType, totalMinutes) {
    let extraMinutesLimit = (planType == typesOfPlan[0]) ? 1000 : 500;
    const extraMinuteRate = calculateExtraMinuteRate(planType);
    const extraMinutes = totalMinutes - extraMinutesLimit;
    if (extraMinutes > 0)
        return extraMinuteRate * extraMinutes;
    return 0;
}

function calculateExtraMinuteRate(planType) {
    return (planType == typesOfPlan[0]) ? 0.45 : 0.54;
}

function calculateAdditionalLinesPrice(countAdditionalLines, planType) {
    const additionalLinesPriceRate = calculateAdditionalLinesPriceRate(planType);
    let additionalLinesPrice = 0;
    if (countAdditionalLines > 3) {
        additionalLinesPrice += (2 * additionalLinesPriceRate)
            + calculateDiscountedPrice(countAdditionalLines - 3);
        return additionalLinesPrice;
    }
    return (countAdditionalLines - 1) * additionalLinesPriceRate;
}

function calculateDiscountedPrice(countOfDiscountEligibleLines) {
    return countOfDiscountEligibleLines * 5.00;
}

function calculateAdditionalLinesPriceRate(planType) {
    return (planType == typesOfPlan[0]) ? 14.50 : 21.50;
}

function calculateTotalBillPrice(basePrice, additionalLinesPrice, extraMinutePrice) {
    return Math.round((basePrice + additionalLinesPrice + extraMinutePrice) * 100) / 100;
}

function calculateBaseRate(planType) {
    return (planType == typesOfPlan[0]) ? 49.95 : 29.95;
}

