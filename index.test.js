
import { calculateBill, getMinutesRate, isDiscountedLines, getMinutes, getExceedingMinutes, getCostPerLines, getPlanBase } from './index';

describe("test cases for PHONE TDD",()=>{
    describe("calculateBill", () =>{
        it("should return the passed inputs and will calculate the bill when package is gold", ()=>{
            const plan = "";
            const myBillingDetails = calculateBill(plan);
            expect(myBillingDetails).toBe(0);
        });
        it("should return the passed inputs and will calculate the bill when package is gold", ()=>{
            const plan = "Gold";
            const myBillingDetails = calculateBill(plan);
            expect(myBillingDetails).toBe(49.95);
        });
        it("should return the passed inputs and will calculate the bill when package is gold", ()=>{
            const plan = "";
            const myBillingDetails = calculateBill(plan, 0,0);
            expect(myBillingDetails).toBe(0);
        });
        it("should return the passed inputs and will calculate the bill when package is gold", ()=>{
            const plan = "Gold";
            const myBillingDetails = calculateBill(plan, 0,0);
            expect(myBillingDetails).toBe(0);
        });
        it("should return the passed inputs and will calculate the bill when package is silver", ()=>{
            const plan = "Silver";
            const myBillingDetails = calculateBill(plan);
            expect(myBillingDetails).toBe(29.95);
        });
    
        it("should return the passed inputs and will calculate the bill when package is gold with multiple lines", ()=>{
            const plan = "Gold";
            const lines = 2;
            const myBillingDetails = calculateBill(plan,lines);
            expect(myBillingDetails).toBe(64.45);
        });
        it("should return the passed inputs and will calculate the bill when package is silver with multiple lines =2", ()=>{
            const plan = "Silver";
            const lines = 2;
            const myBillingDetails = calculateBill(plan,lines);
            expect(myBillingDetails).toBe( 51.45);
        });
        it("should return the passed inputs and will calculate the bill when package is silver with multiple lines=3", ()=>{
            const plan = "Silver";
            const lines = 3;
            const myBillingDetails = calculateBill(plan,lines);
            expect(myBillingDetails).toBe( 72.95);
        });
        it("should return the passed inputs and will calculate the bill when package is gold with multiple lines=1 with excess minutes", ()=>{
            const plan = "Gold";
            const lines = 1 ;
            const mins = 999;
            const myBillingDetails = calculateBill(plan,lines, mins);
            expect(myBillingDetails).toBe( 49.95);
        });
        it("should return the passed inputs and will calculate the bill when package is gold with multiple lines=1 with excess minutes", ()=>{
            const plan = "Silver";
            const lines = 1 ;
            const mins = 520;
            const myBillingDetails = calculateBill(plan,lines, mins);
            expect(myBillingDetails).toBe(40.75);
        });
        it("should return the passed inputs and will calculate the bill when package is gold with multiple lines=1 with excess minutes", ()=>{
            const plan = "Gold";
            const lines = 1 ;
            const mins = 1001;
            const myBillingDetails = calculateBill(plan,lines, mins);
            expect(myBillingDetails).toBe( 50.40);
        });
      
    it("should return the passed inputs and will calculate the bill when package is gold with multiple lines=1 with excess minutes", ()=>{
        const plan = "Gold";
        const lines = 4 ;
        const mins = 999;
        const myBillingDetails = calculateBill(plan,lines, mins);
        expect(myBillingDetails).toBe( 83.95);
    });
    it("should return the passed inputs and will calculate the bill when package is gold with multiple lines=1 with excess minutes", ()=>{
        const plan = "Silver";
        const lines = 4 ;
        const mins = 440;
        const myBillingDetails = calculateBill(plan,lines, mins);
        expect(myBillingDetails).toBe( 77.95);
    });
    it("should return the passed inputs and will calculate the bill when package is gold with multiple lines=1 with excess minutes", ()=>{
        const plan = "Silver";
        const lines = 5;
        const mins = 74;
        const myBillingDetails = calculateBill(plan,lines, mins);
        expect(myBillingDetails).toBe(82.95);
    });
    }),
    describe("isDiscountedLines", () => {
        it("should return the discounted lines",()=>{
            const lines = 1;
            const discountedLines = isDiscountedLines(lines);
            expect(discountedLines).toBe(0);
        });
        it("should return the discounted lines",()=>{
            const lines = 3;
            const discountedLines = isDiscountedLines(lines);
            expect(discountedLines).toBe(0);
        });
        it("should return the discounted lines",()=>{
            const lines = 5;
            const discountedLines = isDiscountedLines(lines);
            expect(discountedLines).toBe(2);
        });
        it("should return the discounted lines",()=>{
            const lines = -1;
            const discountedLines = isDiscountedLines(lines);
            expect(discountedLines).toBe(0);
        });
    }),
    describe("getMinutesRate", () => {
        it("should return the rate according to minutes as per the plan", () =>{
            const plan = "";
            const rateAsPerPlanType = getMinutesRate(plan);
            expect(rateAsPerPlanType).toBe("Error!");
        });
        it("should return the rate according to minutes as per the plan", () =>{
            const plan = "Gold";
            const rateAsPerPlanType = getMinutesRate(plan);
            expect(rateAsPerPlanType).toBe(0.45);
        });
        it("should return the rate according to minutes as per the plan", () =>{
            const plan = "Silver";
            const rateAsPerPlanType = getMinutesRate(plan);
            expect(rateAsPerPlanType).toBe(0.54);
        })
    }),

    describe("getMinutes", () => {
        it("should return the base minutes", () => {
            const plan = "";
            const baseMinutes = getMinutes(plan);
            expect(baseMinutes).toBe("Error!");
        });
        it("should return the base minutes", () => {
            const plan = "Gold";
            const baseMinutes = getMinutes(plan);
            expect(baseMinutes).toBe(1000);
        });
        it("should return the base minutes", () => {
            const plan = "Silver";
            const baseMinutes = getMinutes(plan);
            expect(baseMinutes).toBe(500);
        })
    }),
    describe("getExceedingMinutes", () => {
        it("should return the exceeding minutes", () =>{
            const plan  = "Gold";
            const baseMinute = getMinutes(plan);
            const mins = "";
            const exceedingMin = getExceedingMinutes(baseMinute,mins);
            expect(exceedingMin).toBe(0);
        }),
        it("should return the exceeding minutes", () =>{
            const plan  = "Gold";
            const baseMinute = getMinutes(plan);
            const mins = "998";
            const exceedingMin = getExceedingMinutes(baseMinute,mins);
            expect(exceedingMin).toBe(0);
        }),
        it("should return the exceeding minutes", () =>{
            const plan  = "Gold";
            const baseMinute = getMinutes(plan);
            const mins = "1123";
            const exceedingMin = getExceedingMinutes(baseMinute,mins);
            expect(exceedingMin).toBe(123);
        }),
        it("should return the exceeding minutes", () =>{
            const plan  = "Silver";
            const baseMinute = getMinutes(plan);
            const mins = "520";
            const exceedingMin = getExceedingMinutes(baseMinute,mins);
            expect(exceedingMin).toBe(20);
        }),
        it("should return the exceeding minutes", () =>{
            const plan  = "Silver";
            const baseMinute = getMinutes(plan);
            const mins = "55";
            const exceedingMin = getExceedingMinutes(baseMinute,mins);
            expect(exceedingMin).toBe(0);
        })
    }),
    describe("getCostPerLines", () => {
        it("should return cost per line", () => {
            const plan = "";
            const costPerLine = getCostPerLines(plan);
            expect(costPerLine).toBe("Error!");
        });
        it("should return cost per line", () => {
            const plan = "Gold";
            const costPerLine = getCostPerLines(plan);
            expect(costPerLine).toBe(14.50);
        });
        it("should return cost per line", () => {
            const plan = "Silver";
            const costPerLine = getCostPerLines(plan);
            expect(costPerLine).toBe(21.50);
        })
    }),
    describe("getPlanBase", () => {
        it("should return base amount as per plan", () => {
            const plan = "";
            const costPerLine = getPlanBase(plan);
            expect(costPerLine).toBe(0);
        });
        it("should return base amount as per plan", () => {
            const plan = "Gold";
            const costPerLine = getPlanBase(plan);
            expect(costPerLine).toBe(49.95);
        });
        it("should return base amount as per plan", () => {
            const plan = "Silver";
            const costPerLine = getPlanBase(plan);
            expect(costPerLine).toBe(29.95);
        });

    })
    

})