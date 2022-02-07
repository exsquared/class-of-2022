import { itemType, itemTypesCorrespondingCharges, itemTypesCorrespondingAdditonalLineCharges,
    itemTypesCorrespondingFeasibleMinutes, itemTypesCorrespondingExcessMinutesCharges, itemTypesDiscountsCorrespondingToAdditionalLines,
    minLinesForDiscount } from "./declaration.js";

function typeOfMaterial(index){
    
    return itemTypesCorrespondingCharges[index];

}

function additonal_line_charges(index, additional_lines=1, excess_minutes =0){

    if(additional_lines > minLinesForDiscount){
        return discounted_price(index, additional_lines);
    }
    
    return (additional_lines-1) * itemTypesCorrespondingAdditonalLineCharges[index];
}

function discounted_price(index, additional_lines=1){

    return (additional_lines-1 <= minLinesForDiscount-1) ? (additional_lines-1) * itemTypesCorrespondingAdditonalLineCharges[index]  :
    ((minLinesForDiscount-1) * itemTypesCorrespondingAdditonalLineCharges[index]) + (additional_lines-minLinesForDiscount) * itemTypesDiscountsCorrespondingToAdditionalLines[index]; 
}

function excess_minutes_charges_as_per_type(index,  excess_minutes=0){
    
    if(excess_minutes <= itemTypesCorrespondingFeasibleMinutes[index]){
        return 0;
    }

    return (excess_minutes - itemTypesCorrespondingFeasibleMinutes[index]) * itemTypesCorrespondingExcessMinutesCharges[index];
}

export function calculate(type, additional_lines=1, total_minutes=0){

    const item = type.toString().toLowerCase();

    const index = itemType.indexOf(item); 
    
    if(index === -1){
        return "The selected item is not available for rent.";
    }

    const bill = typeOfMaterial(index) + additonal_line_charges(index, parseInt(additional_lines), parseInt(total_minutes)) + excess_minutes_charges_as_per_type(index, parseInt(total_minutes));
    return Math.round(bill * 100) / 100;

}













