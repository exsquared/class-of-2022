import { calculateBill } from './index';


describe("The function should return the phone bill according to plan type and number of lines", () =>
{
    it("Should return if null is passed.", () =>
    {
        const plan=null;
        const lines=null;
        const Expected_Bill=calculateBill(plan,0,lines);
        expect(Expected_Bill).toEqual(0);
    });
    it("Should return 49.95 if plan is gold and number of lines is 1", () =>
    {
        const plan="Gold";
        const lines=0;
        const Expected_Bill=calculateBill(plan,0,0);
        expect(Expected_Bill).toEqual(0);
    });
    it("Should return 49.95 if plan is Silver and number of lines is 1", () =>
    {
        const plan="Silver";
        const lines=1;
        const Expected_Bill=calculateBill(plan,0,lines);
        expect(Expected_Bill).toEqual(29.95);
    });
    it("Should return 49.95 if plan is gold and number of lines is 2", () =>
    {
        const plan="Gold";
        const lines=2;
        const Expected_Bill=calculateBill(plan,0,lines);
        expect(Expected_Bill).toBe(64.45);
    });
    it("Should return 49.95 if plan is Silver and number of lines is 2", () =>
    {
        const plan="Silver";
        const lines=2;
        const Expected_Bill=calculateBill(plan,0,lines);
        expect(Expected_Bill).toBe(51.45);
    });
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
        const billAmount = calculateBill(inputPlan, 0, totalLines);
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
        const billAmount = calculateBill(inputPlan, totalMinutes);
        expect(billAmount).toBe(50.40);
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
        const inputPlan = "Silver";
        const totalMinutes = 1076;
        const billAmount = calculateBill(inputPlan, totalMinutes);
        expect(billAmount).toBe(340.99);
    });
});