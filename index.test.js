import {calculateBill} from './index';

describe("Should return the correct telephone bill", ()=>{
    it("Should handle the null case", ()=>{
        const inputAmount = null;
        const outputAmount = calculateBill();
        expect(outputAmount).toBe(0);
    })
    it("Should handle the amount of bill for 1 line for gold...", ()=>{
        const numberOfLines = 1;
        const packageType = "Gold";
        const outputAmount = calculateBill(packageType, numberOfLines);
        expect(outputAmount).toEqual(49.95);
    })
    it("Should handle the amount of bill for 1 line for silver...", ()=>{
        const numberOfLines = 1;
        const packageType = "Silver";
        const outputAmount = calculateBill(packageType, numberOfLines);
        expect(outputAmount).toEqual(29.95);
    })
    it("Should handle the amount of bill for mutilple lines for gold...", ()=>{
        const numberOfLines = 2;
        const packageType = "Gold";
        const amount = 64.45;
        const outputAmount = calculateBill(packageType, numberOfLines);
        expect(outputAmount).toEqual(amount);
    })
    it("Should handle the amount of bill for multiple lines for Silver...", ()=>{
        const numberOfLines = 3;
        const packageType = "Silver";
        const amount = 72.95;
        const outputAmount = calculateBill(packageType, numberOfLines);
        expect(outputAmount).toEqual(amount);
    })
    it("Should also handle the excessive minutes for Gold", ()=>{
        const numberOfLines = 1
        const packageType = "Gold";
        const Minutes = 1001
        const amount = 50.40;
        const outputAmount = calculateBill(packageType, numberOfLines, Minutes);
        expect(outputAmount).toEqual(amount);
    })
    it("Should also handle the excessive minutes for silver", ()=>{
        const numberOfLines = 3;
        const packageType = "Silver";
        const Minutes = 505
        const amount = 75.65;
        const outputAmount = calculateBill(packageType, numberOfLines, Minutes);
        expect(outputAmount).toEqual(amount)
    })
    it("Should handle the discount due to family size", ()=>{
        const numberOfLines = 4;
        const packageType = "Silver"
        const Minutes = 1001
        const amount = 348.49;
        const outputAmount = calculateBill(packageType, numberOfLines, Minutes);
        expect(outputAmount).toEqual(amount);
    })
    it("Should handle the other input number 1", ()=>{
        const numberOfLines = 4;
        const packageType = "Gold"
        const Minutes = 878
        const amount = 83.95;
        const outputAmount = calculateBill(packageType, numberOfLines, Minutes);
        expect(outputAmount).toEqual(amount);
    })
    it("Should handle the other input number 2", ()=>{
        const numberOfLines = 1;
        const packageType = "Gold"
        const Minutes = 1123
        const amount = 105.3;
        const outputAmount = calculateBill(packageType, numberOfLines, Minutes);
        expect(outputAmount).toEqual(amount);
    })
    it("Should handle the other input number 3", ()=>{
        const numberOfLines = 4;
        const packageType = "Gold"
        const Minutes = 1123
        const amount = 139.3;
        const outputAmount = calculateBill(packageType, numberOfLines, Minutes);
        expect(outputAmount).toEqual(amount);
    })
    it("Should handle the other input number 4", ()=>{
        const numberOfLines = 2;
        const packageType = "Silver"
        const Minutes = 523
        const amount = 63.87;
        const outputAmount = calculateBill(packageType, numberOfLines, Minutes);
        expect(outputAmount).toEqual(amount);
    })
    it("Should handle the other input number 5", ()=>{
        const numberOfLines = 5;
        const packageType = "Silver"
        const Minutes = 44
        const amount = 82.95;
        const outputAmount = calculateBill(packageType, numberOfLines, Minutes);
        expect(outputAmount).toEqual(amount);
    })
    it("Should handle the other input number 6", ()=>{
        const numberOfLines = 5;
        const packageType = "Silver"
        const Minutes = 521
        const amount = 94.29;
        const outputAmount = calculateBill(packageType, numberOfLines, Minutes);
        expect(outputAmount).toEqual(amount);
    })
})