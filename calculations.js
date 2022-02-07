const goldBasePlanPrice = 49.95;
const silverBasePlanPrice = 29.95;
const goldExtraLineRate = 14.5;
const silverExtraLineRate = 21.5;
const goldExtraMinutePrice = 0.45;
const silverExtraMinutePrice = 0.54;


export function calculate(planType, numberOfLines, numberOfMinutes) {
  if(checkInputValidity(planType, numberOfLines, numberOfMinutes)) return "improper inputs";
    let totalRent = 0;
    planType = planType.toLowerCase();
        if (planType != "gold" && planType != "silver"){
          return "Please choose a right plan";
        }
    totalRent = basePlanPrice(planType) + rentAsPerExtraLine(planType, numberOfLines - 1) + rentForExtraMinutes(planType, numberOfMinutes);
    totalRent = Math.round(totalRent*100)/100;
    return Math.round(totalRent*100)/100;
}

function checkInputValidity(planType, numberOfLines, numberOfMinutes){
  if(planType==null || numberOfLines==null || numberOfMinutes==null) return true;
  if(numberOfLines < 0 || numberOfMinutes < 0) return true;
  if(isNaN(numberOfLines) || isNaN(numberOfMinutes)) return true;
  return false;
}

function basePlanPrice(planType) {
    return planType == "gold" ? goldBasePlanPrice : silverBasePlanPrice;
  }
  function rentAsPerExtraLine(planType, extraNumberOfLines) {
      if(extraNumberOfLines > 2) return familyDiscount(planType, extraNumberOfLines);
    return planType == "gold" ? (goldExtraLineRate * extraNumberOfLines) : (silverExtraLineRate * extraNumberOfLines);
  }
  function familyDiscount(planType, extraNumberOfLines) {
      const linesForDiscount = extraNumberOfLines - 2;
      if(planType == 'gold'){
          return (goldExtraLineRate * 2) + (linesForDiscount * 5);
      }else{
          return (silverExtraLineRate * 2) + (linesForDiscount * 5);
      }
  
  }
  
  function rentForExtraMinutes(planType, numberOfMinutes) {
    if (
      (planType == "gold" && numberOfMinutes <= 1000) ||
      (planType == "silver" && numberOfMinutes <= 500)
    ) {
      return 0;
    } else if (planType == "gold") {
      return (numberOfMinutes - 1000) * goldExtraMinutePrice;
    } else {
      return (numberOfMinutes - 500) * silverExtraMinutePrice;
    }
  }