import {calculateMoney} from './calculation.js'
export function calculateBill(plan = null, numberOfLines = 1, numberOfMinutes = 0){
    if(plan == 'Gold' || plan == 'Silver'){
        return calculateMoney(plan, numberOfLines, numberOfMinutes);
    }
    return 0;
}
