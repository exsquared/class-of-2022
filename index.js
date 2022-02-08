import {calculateMoney} from './calculation.js'
export function calculateBill(plan = '', numberOfLines = 1, numberOfMinutes = 0){
    //If number of Lines becomes less than 1 or number of minutes become negative....
    //If the number is passed as string..
    if(isNaN(parseInt(numberOfLines)) || isNaN(parseInt(numberOfMinutes)) || parseInt(numberOfLines) < 1 || parseInt(numberOfMinutes) < 0)
        return 0;
    //If the execution reaches here, then number of lines and minutes are fine..
    //If the plan is not null, then proceed...
    if(typeof(plan) !== 'number' && (plan.trim() == 'Gold' || plan.trim() == 'Silver')){
        return calculateMoney(plan, numberOfLines, numberOfMinutes);
    }
    //else return....
    return 0;
}
