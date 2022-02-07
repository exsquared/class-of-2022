import {calculateBill} from './index';

describe("index.js", ()=>{
    describe("calculateBill", ()=>{
        it("Should handle the null case", ()=>{
            //will return 0 in case we are not passing any argument to it...
            const outputAmount = calculateBill();
            expect(outputAmount).toEqual(0);
        })
        it("Should handle string input other than gold and silver", ()=>{
            //will return 0 for string other than gold or silver..
            const packageType = "Platinum";
            const outputAmount = calculateBill(packageType);
            expect(outputAmount).toEqual(0);
        })
        it("Should handle only package input", ()=>{
            //Will return the price of base plan type including free minutes...
            const packageType = "Silver";
            const outputAmount = calculateBill(packageType);
            expect(outputAmount).toEqual(29.95);
        })
        it("Should handle empty string", ()=>{
            //Will return 0...
            const packageType = '';
            const outputAmount = calculateBill(packageType);
            expect(outputAmount).toEqual(0);
        })
        it("Should handle the whitespaces", ()=>{
            //Will return 0...
            const packageType = '   ';
            const outputAmount = calculateBill(packageType);
            expect(outputAmount).toEqual(0);
        })
        it("should not accept number as first argument", ()=>{
            //will return 0 if the first argument is number...
            const packageType = 3;
            const outputAmount = calculateBill(packageType);
            expect(outputAmount).toEqual(0);
        })
        it("Should handle the amount of bill for 1 line for gold...", ()=>{
            //return the price for 1 line of gold package....
            const numberOfLines = 1;
            const packageType = "Gold";
            const outputAmount = calculateBill(packageType, numberOfLines);
            expect(outputAmount).toEqual(49.95);
        })
        it("Should handle the amount of bill for 1 line for silver...", ()=>{
            //return the price for 1 line of silver package....
            const numberOfLines = 1;
            const packageType = "Silver";
            const outputAmount = calculateBill(packageType, numberOfLines);
            expect(outputAmount).toEqual(29.95);
        })
        it("Should handle the amount of bill for mutilple lines for gold...", ()=>{
            //giving the output for available free number of minutes for gold...
            const numberOfLines = 2;
            const packageType = "Gold";
            const amount = 64.45;
            const outputAmount = calculateBill(packageType, numberOfLines);
            expect(outputAmount).toEqual(amount);
        })
        it("Should handle the amount of bill for multiple lines for Silver...", ()=>{
            //giving the output for available free number of minutes for silver...
            const numberOfLines = 3;
            const packageType = "Silver";
            const amount = 72.95;
            const outputAmount = calculateBill(packageType, numberOfLines);
            expect(outputAmount).toEqual(amount);
        })
        it("Should handle the input with less than 1 number of lines", ()=>{
            //Handling less than 1 number of lines...
            const numberOfLines = -1;
            const packageType = "Gold";
            const Minutes = 1;
            const outputAmount = calculateBill(packageType, numberOfLines, Minutes);
            expect(outputAmount).toEqual(0);
        })
        it("Should handle the input with less than 0 number of minutes", ()=>{
            //Handling negative number of minutes..
            const numberOfLines = 1;
            const packageType = "Gold";
            const Minutes = -1;
            const outputAmount = calculateBill(packageType, numberOfLines, Minutes);
            expect(outputAmount).toEqual(0);
        })
        it("Should not accept string in the number parameter", ()=>{
            //Handling incorrect argument...
            const packageType = "Gold";
            const numberOfLines = "munish";
            const Minutes = "Garg";
            const outputAmount = calculateBill(packageType, numberOfLines, Minutes);
            expect(outputAmount).toEqual(0);
        })
        it("Should also handle the excessive minutes for Gold", ()=>{
            //calculating the price for excessive minutes of gold package..
            const numberOfLines = 1
            const packageType = "Gold";
            const Minutes = 1001
            const amount = 50.40;
            const outputAmount = calculateBill(packageType, numberOfLines, Minutes);
            expect(outputAmount).toEqual(amount);
        })
        it("Should also handle the excessive minutes for silver", ()=>{
            //Calculating the price for excessive minutes of silver package..
            const numberOfLines = 3;
            const packageType = "Silver";
            const Minutes = 505
            const amount = 75.65;
            const outputAmount = calculateBill(packageType, numberOfLines, Minutes);
            expect(outputAmount).toEqual(amount)
        })
        it("Should handle the discount due to family size", ()=>{
            //Handling the output for discount due to family size...
            const numberOfLines = 4;
            const packageType = "Silver"
            const Minutes = 1001
            const amount = 348.49;
            const outputAmount = calculateBill(packageType, numberOfLines, Minutes);
            expect(outputAmount).toEqual(amount);
        })
        it("Should handle the other input number 1", ()=>{
            //These below are some test cases for checking the output....
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
})