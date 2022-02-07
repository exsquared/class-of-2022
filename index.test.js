import { calculateBill } from './index';

describe("Test Case for Calculating Phone Bill TOD", () => {
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
});