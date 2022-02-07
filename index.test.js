import { calculateBill, roundNumber, calculateFamilyDiscount, getExcessMinutes, hasPlanMinutesExceeded, checkExcessMinuteRateByPlan,
    checkPlanRate } from './index';

describe("Test Case for Calculating Phone Bill TOD", () => {
    describe("calculateBill()", () => {
        it("Should return the bill amount.", () => {
            const inputPlan = "Gold";
            const billAmount = calculateBill(inputPlan);
            expect(billAmount).toBe(49.95);
        });
        it("Should return the bill amount.", () => {
            const inputPlan = "Silver";
            const billAmount = calculateBill(inputPlan);
            expect(billAmount).toBe(29.95);
        });
        it("Should return the bill amount.", () => {
            const inputPlan = "Platinum";
            const billAmount = calculateBill(inputPlan);
            expect(billAmount).toBe(0);
        });
        it("Should return the bill amount.", () => {
            const inputPlan = "Gold";
            const totalLines = 2;
            const billAmount = calculateBill(inputPlan, "", totalLines);
            expect(billAmount).toBe(64.45);
        });
        it("Should return the bill amount.", () => {
            const inputPlan = "Gold";
            const totalLines = 3;
            const billAmount = calculateBill(inputPlan, 0, totalLines);
            expect(billAmount).toBe(78.95);
        });
        it("Should return the bill amount.", () => {
            const inputPlan = "Silver";
            const totalLines = 3;
            const billAmount = calculateBill(inputPlan, 0, totalLines);
            expect(billAmount).toBe(72.95);
        });
        it("Should return the bill amount.", () => {
            const inputPlan = "Gold";
            const totalMinutes = 1001;
            const totalLines = 5;
            const billAmount = calculateBill(inputPlan, totalMinutes, totalLines);
            expect(billAmount).toBe(89.4);
        });
        it("Should return the bill amount.", () => {
            const inputPlan = "Gold";
            const totalMinutes = 1002;
            const billAmount = calculateBill(inputPlan, totalMinutes);
            expect(billAmount).toBe(50.85);
        });
        it("Should return the bill amount.", () => {
            const inputPlan = "Gold";
            const totalMinutes = 999;
            const billAmount = calculateBill(inputPlan, totalMinutes);
            expect(billAmount).toBe(49.95);
        });
        it("Should return the bill amount.", () => {
            const inputPlan = "Gold";
            const totalMinutes = 999;
            const billAmount = calculateBill(inputPlan, totalMinutes);
            expect(billAmount).toBe(49.95);
        });
        it("Should return the bill amount.", () => {
            const inputPlan = "Gold";
            const totalMinutes = 999;
            const totalLines = 4;
            const billAmount = calculateBill(inputPlan, totalMinutes, totalLines);
            expect(billAmount).toBe(83.95);
        });
        it("Should return the bill amount.", () => {
            const inputPlan = "Silver";
            const totalMinutes = 499;
            const totalLines = 4;
            const billAmount = calculateBill(inputPlan, totalMinutes, totalLines);
            expect(billAmount).toBe(77.95);
        });
        it("Should return the bill amount.", () => {
            const inputPlan = "Silver";
            const totalMinutes = 499;
            const totalLines = 5;
            const billAmount = calculateBill(inputPlan, totalMinutes, totalLines);
            expect(billAmount).toBe(82.95);
        });
        it("Should return the bill amount.", () => {
            const inputPlan = "Gold";
            const totalMinutes = 878;
            const totalLines = 4;
            const billAmount = calculateBill(inputPlan, totalMinutes, totalLines);
            expect(billAmount).toBe(83.95);
        });
        it("Should return the bill amount.", () => {
            const inputPlan = "Gold";
            const totalMinutes = 1123;
            const totalLines = 1;
            const billAmount = calculateBill(inputPlan, totalMinutes, totalLines);
            expect(billAmount).toBe(105.3);
        });
        it("Should return the bill amount.", () => {
            const inputPlan = "Gold";
            const totalMinutes = 1123;
            const totalLines = 4;
            const billAmount = calculateBill(inputPlan, totalMinutes, totalLines);
            expect(billAmount).toBe(139.3);
        });
        it("Should return the bill amount.", () => {
            const inputPlan = "Silver";
            const totalMinutes = 523;
            const totalLines = 2;
            const billAmount = calculateBill(inputPlan, totalMinutes, totalLines);
            expect(billAmount).toBe(63.87);
        });
        it("Should return the bill amount.", () => {
            const inputPlan = "Silver";
            const totalMinutes = 500;
            const totalLines = 5;
            const billAmount = calculateBill(inputPlan, totalMinutes, totalLines);
            expect(billAmount).toBe(82.95);
        });
        it("Should return the bill amount.", () => {
            const inputPlan = "Silver";
            const totalMinutes = 521;
            const totalLines = 5;
            const billAmount = calculateBill(inputPlan, totalMinutes, totalLines);
            expect(billAmount).toBe(94.29);
        });
        it("Should return the bill amount.", () => {
            const inputPlan = "Gold";
            const totalMinutes = 1001;
            const totalLines = 2;
            const billAmount = calculateBill(inputPlan, totalMinutes, totalLines);
            expect(billAmount).toBe(64.9);
        });
        it("Should return the bill amount.", () => {
            const inputPlan = "Gold";
            const totalMinutes = -1;
            const totalLines = -1;
            const billAmount = calculateBill(inputPlan, totalMinutes, totalLines);
            expect(billAmount).toBe(0);
        });
        it("Should return the bill amount.", () => {
            const inputPlan = null;
            const billAmount = calculateBill(inputPlan);
            expect(billAmount).toBe(0);
        });
        it("Should return the bill amount.", () => {
            const billAmount = calculateBill();
            expect(billAmount).toBe(0);
        });
    });
    describe("roundNumber()", () => {
        it("Should return number rounded to two decimal.", () => {
            const roundedNumber = roundNumber();
            expect(roundedNumber).toBe(0);
        });
        it("Should return number rounded to two decimal.", () => {
            const roundedNumber = roundNumber(134.9349);
            expect(roundedNumber).toBe(134.93);
        });
        it("Should return number rounded to two decimal.", () => {
            const roundedNumber = roundNumber(-134.9349);
            expect(roundedNumber).toBe(-134.93);
        });
    });
    describe("calculateFamilyDiscount()", () => {
        it("Should return the amount to be discounted.", () => {
            const discount = calculateFamilyDiscount("Gold", 5);
            expect(discount).toBe(19);
        });
        it("Should return the amount to be discounted.", () => {
            const discount = calculateFamilyDiscount("Gold", 0);
            expect(discount).toBe(-28.5);
        });
        it("Should return the amount to be discounted.", () => {
            const discount = calculateFamilyDiscount("Silver", 5);
            expect(discount).toBe(33);
        });
    });
    describe("getExcessMinutes()", () => {
        it("Should return the excess minutes.", () => {
            const mins = getExcessMinutes("Gold", 1011);
            expect(mins).toBe(11);
        });
        it("Should return the excess minutes.", () => {
            const mins = getExcessMinutes("Gold", 1000);
            expect(mins).toBe(0);
        });
        it("Should return the excess minutes.", () => {
            const mins = getExcessMinutes("Silver", 501);
            expect(mins).toBe(1);
        });
        it("Should return the excess minutes.", () => {
            const mins = getExcessMinutes("Silver", 500);
            expect(mins).toBe(0);
        });
    });
    describe("hasPlanMinutesExceeded()", () => {
        it("Should return boolean if user has excess minutes.", () => {
            const boolVal = hasPlanMinutesExceeded("Gold", 1011);
            expect(boolVal).toBe(true);
        });
        it("Should return boolean if user has excess minutes.", () => {
            const boolVal = hasPlanMinutesExceeded("Silver", 501);
            expect(boolVal).toBe(true);
        });
        it("Should return boolean if user has excess minutes.", () => {
            const boolVal = hasPlanMinutesExceeded("Gold", 101);
            expect(boolVal).toBe(false);
        });
        it("Should return boolean if user has excess minutes.", () => {
            const boolVal = hasPlanMinutesExceeded("Silver", 51);
            expect(boolVal).toBe(false);
        });
    });
    describe("checkExcessMinuteRateByPlan()", () => {
        it("Should return excess minutes rate.", () => {
            const excessPlanRate = checkExcessMinuteRateByPlan("Gold");
            expect(excessPlanRate).toBe(0.45);
        });
        it("Should return excess minutes rate.", () => {
            const excessPlanRate = checkExcessMinuteRateByPlan("Silver");
            expect(excessPlanRate).toBe(0.54);
        });
    });
    describe("checkPlanRate()", () => {
        it("Should return base rate.", () => {
            const planRate = checkPlanRate("Gold");
            expect(planRate).toBe(49.95);
        });
        it("Should return base rate.", () => {
            const planRate = checkPlanRate("Silver");
            expect(planRate).toBe(29.95);
        });
        it("Should return base rate.", () => {
            const planRate = checkPlanRate();
            expect(planRate).toBe(0);
        });
    });
});