import { calculateBill, roundNumber, calculateFamilyDiscount, getExcessMinutes, hasPlanMinutesExceeded, checkExcessMinuteRateByPlan,
    checkPlanRate } from './index';

describe("Test Case for Calculating Phone Bill TOD", () => {
    describe("calculateBill()", () => {
        it("Should return the $49.95 when only Gold plan is passed.", () => {
            const inputPlan = "Gold";
            const billAmount = calculateBill(inputPlan);
            expect(billAmount).toBe(49.95);
        });
        it("Should return the $29.95 when only Silver plan is passed.", () => {
            const inputPlan = "Silver";
            const billAmount = calculateBill(inputPlan);
            expect(billAmount).toBe(29.95);
        });
        it("Should return the $0 when neither Gold nor Silver plan is passed.", () => {
            const inputPlan = "Platinum";
            const billAmount = calculateBill(inputPlan);
            expect(billAmount).toBe(0);
        });
        it("Should return $64.45 when Gold plan and 2 total lines are passed.", () => {
            const inputPlan = "Gold";
            const totalLines = 2;
            const billAmount = calculateBill(inputPlan, "", totalLines);
            expect(billAmount).toBe(64.45);
        });
        it("Should return $78.95 when Gold plan, 3 total lines and 0 mins are passed.", () => {
            const inputPlan = "Gold";
            const totalLines = 3;
            const totalMins = 0;
            const billAmount = calculateBill(inputPlan, totalMins, totalLines);
            expect(billAmount).toBe(78.95);
        });
        it("Should return $72.95 when Silver plan, 3 total lines and 0 mins are passed.", () => {
            const inputPlan = "Silver";
            const totalLines = 3;
            const totalMins = 0;
            const billAmount = calculateBill(inputPlan, totalMins, totalLines);
            expect(billAmount).toBe(72.95);
        });
        it("Should return $89.4 when Gold plan, 5 total lines and 1001 total mins are passed.", () => {
            const inputPlan = "Gold";
            const totalMinutes = 1001;
            const totalLines = 5;
            const billAmount = calculateBill(inputPlan, totalMinutes, totalLines);
            expect(billAmount).toBe(89.4);
        });
        it("Should return $50.85 when only Gold plan and 1002 total mins are passed.", () => {
            const inputPlan = "Gold";
            const totalMinutes = 1002;
            const billAmount = calculateBill(inputPlan, totalMinutes);
            expect(billAmount).toBe(50.85);
        });
        it("Should return $49.95 when only Gold plan and 999 total mins are passed.", () => {
            const inputPlan = "Gold";
            const totalMinutes = 999;
            const billAmount = calculateBill(inputPlan, totalMinutes);
            expect(billAmount).toBe(49.95);
        });
        it("Should return $83.95 when Gold plan, 4 total lines and 999 total mins are passed.", () => {
            const inputPlan = "Gold";
            const totalMinutes = 999;
            const totalLines = 4;
            const billAmount = calculateBill(inputPlan, totalMinutes, totalLines);
            expect(billAmount).toBe(83.95);
        });
        it("Should return $77.95 when Silver plan, 4 total lines and 499 total mins are passed.", () => {
            const inputPlan = "Silver";
            const totalMinutes = 499;
            const totalLines = 4;
            const billAmount = calculateBill(inputPlan, totalMinutes, totalLines);
            expect(billAmount).toBe(77.95);
        });
        it("Should return $82.95 when Silver plan, 5 total lines and 499 total mins are passed.", () => {
            const inputPlan = "Silver";
            const totalMinutes = 499;
            const totalLines = 5;
            const billAmount = calculateBill(inputPlan, totalMinutes, totalLines);
            expect(billAmount).toBe(82.95);
        });
        it("Should return $83.95 when Gold plan, 4 total lines and 878 total mins are passed.", () => {
            const inputPlan = "Gold";
            const totalMinutes = 878;
            const totalLines = 4;
            const billAmount = calculateBill(inputPlan, totalMinutes, totalLines);
            expect(billAmount).toBe(83.95);
        });
        it("Should return $105.3 when Gold plan, 1 total line and 1123 total mins are passed.", () => {
            const inputPlan = "Gold";
            const totalMinutes = 1123;
            const totalLines = 1;
            const billAmount = calculateBill(inputPlan, totalMinutes, totalLines);
            expect(billAmount).toBe(105.3);
        });
        it("Should return $139.3 when Gold plan, 4 total lines and 1123 total mins are passed.", () => {
            const inputPlan = "Gold";
            const totalMinutes = 1123;
            const totalLines = 4;
            const billAmount = calculateBill(inputPlan, totalMinutes, totalLines);
            expect(billAmount).toBe(139.3);
        });
        it("Should return $63.87 when Silver plan, 2 total lines and 523 total mins are passed.", () => {
            const inputPlan = "Silver";
            const totalMinutes = 523;
            const totalLines = 2;
            const billAmount = calculateBill(inputPlan, totalMinutes, totalLines);
            expect(billAmount).toBe(63.87);
        });
        it("Should return $82.95 when Silver plan, 5 total lines and 500 total mins are passed.", () => {
            const inputPlan = "Silver";
            const totalMinutes = 500;
            const totalLines = 5;
            const billAmount = calculateBill(inputPlan, totalMinutes, totalLines);
            expect(billAmount).toBe(82.95);
        });
        it("Should return $94.29 when Silver plan, 5 total lines and 521 total mins are passed.", () => {
            const inputPlan = "Silver";
            const totalMinutes = 521;
            const totalLines = 5;
            const billAmount = calculateBill(inputPlan, totalMinutes, totalLines);
            expect(billAmount).toBe(94.29);
        });
        it("Should return $64.9 when Gold plan, 2 total lines and 1001 total mins are passed.", () => {
            const inputPlan = "Gold";
            const totalMinutes = 1001;
            const totalLines = 2;
            const billAmount = calculateBill(inputPlan, totalMinutes, totalLines);
            expect(billAmount).toBe(64.9);
        });
        it("Should return $0 when negative value is passed in as minutes or lines.", () => {
            const inputPlan = "Gold";
            const totalMinutes = -1;
            const totalLines = -1;
            const billAmount = calculateBill(inputPlan, totalMinutes, totalLines);
            expect(billAmount).toBe(0);
        });
        it("Should return $0 when null plan is passed.", () => {
            const inputPlan = null;
            const billAmount = calculateBill(inputPlan);
            expect(billAmount).toBe(0);
        });
        it("Should return $0 when no parameter is passed.", () => {
            const billAmount = calculateBill();
            expect(billAmount).toBe(0);
        });
    });
    describe("roundNumber()", () => {
        it("Should return 0 when no decimal is passed", () => {
            const roundedNumber = roundNumber();
            expect(roundedNumber).toBe(0);
        });
        it("Should return a positive number rounded to two decimal place when a positive number with more than 2 decimals is passed.", () => {
            const roundedNumber = roundNumber(134.9349);
            expect(roundedNumber).toBe(134.93);
        });
        it("Should return a negative number rounded to two decimal place when a negative number with more than 2 decimals is passed.", () => {
            const roundedNumber = roundNumber(-134.9349);
            expect(roundedNumber).toBe(-134.93);
        });
    });
    describe("calculateFamilyDiscount()", () => {
        it("Should return the amount to be discounted when Gold plan and lines greater than 3 is passed.", () => {
            const discount = calculateFamilyDiscount("Gold", 5);
            expect(discount).toBe(19);
        });
        it("Should return a negative number when lines less than 4 is passed.", () => {
            const discount = calculateFamilyDiscount("Gold", 0);
            expect(discount).toBe(-28.5);
        });
        it("Should return the amount to be discounted when Silver plan and lines greater than 3 is passed.", () => {
            const discount = calculateFamilyDiscount("Silver", 5);
            expect(discount).toBe(33);
        });
    });
    describe("getExcessMinutes()", () => {
        it("Should return 11 when Gold plan and 1011 mins are passed.", () => {
            const mins = getExcessMinutes("Gold", 1011);
            expect(mins).toBe(11);
        });
        it("Should return a negative number when Gold plan and a number less than 1000 is passed.", () => {
            const mins = getExcessMinutes("Gold", 999);
            expect(mins).toBe(-1);
        });
        it("Should return 1 when Silver plan and 501 mins are passed.", () => {
            const mins = getExcessMinutes("Silver", 501);
            expect(mins).toBe(1);
        });
        it("Should return a negative number when Silver plan and a number less than 500 is passed.", () => {
            const mins = getExcessMinutes("Silver", 499);
            expect(mins).toBe(-1);
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