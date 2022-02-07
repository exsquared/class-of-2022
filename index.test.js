import { calculateBill, finalPrice, basePlanAmt, extraChargesForMinutes, discountGiven } from './index';


describe("index.js", () => {   
    describe("calculateBill", () => {
        it("1. Should return 0 if arguments are missing.", () => {
            const Expected_Bill=calculateBill();
            expect(Expected_Bill).toBe(0);
        });
        it("2. Should return if null is passed.", () => {
        const plan=null;
        const lines=null;
        const Expected_Bill=calculateBill(plan,0,lines);
        expect(Expected_Bill).toEqual(0);
        });
        it("3. Should return 49.95 if plan is gold and number of lines is 1", () => {
        const plan="Gold";
        const lines=0;
        const Expected_Bill=calculateBill(plan,0,0);
        expect(Expected_Bill).toEqual(0);
        });
        it("4. Should return 29.95 if plan is Silver and number of lines is 1", () => {
        const plan="Silver";
        const lines=1;
        const Expected_Bill=calculateBill(plan,0,lines);
        expect(Expected_Bill).toEqual(29.95);
        });
        it("5. Should return 64.45 if plan is gold and number of lines is 2", () => {
        const plan="Gold";
        const lines=2;
        const Expected_Bill=calculateBill(plan,0,lines);
        expect(Expected_Bill).toBe(64.45);
        });
        it("6. Should return 51.45 if plan is Silver and number of lines is 2", () => {
        const plan="Silver";
        const lines=2;
        const Expected_Bill=calculateBill(plan,0,lines);
        expect(Expected_Bill).toBe(51.45);
        });
        it("7. Should return the bill amount.", () => {
        const plan = "Gold";
        const Expected_Bill = calculateBill(plan);
        expect(Expected_Bill).toBe(49.95);
        });
        it("8. Should return the bill amount.", () => {
        const plan = "Silver";
        const Expected_Bill = calculateBill(plan);
        expect(Expected_Bill).toBe(29.95);
        });
        it("9. Should return the bill amount.", () => {
        const plan = "Platinum";
        const Expected_Bill = calculateBill(plan);
        expect(Expected_Bill).toBe(0);
        });
        it("10. Should return the bill amount.", () => {
        const plan = "Gold";
        const totalLines = 2;
        const Expected_Bill = calculateBill(plan, 0, totalLines);
        expect(Expected_Bill).toBe(64.45);
        });
        it("11. Should return the bill amount.", () => {
        const plan = "Gold";
        const totalLines = 3;
        const Expected_Bill = calculateBill(plan, 0, totalLines);
        expect(Expected_Bill).toBe(78.95);
        });
        it("12. Should return the bill amount.", () => {
        const plan = "Silver";
        const totalLines = 3;
        const Expected_Bill = calculateBill(plan, 0, totalLines);
        expect(Expected_Bill).toBe(72.95);
        });
        it("13. Should return the bill amount.", () => {
        const plan = "Gold";
        const totalMinutes = 1001;
        const Expected_Bill = calculateBill(plan, totalMinutes);
        expect(Expected_Bill).toBe(50.40);
        });
        it("14. Should return the bill amount.", () => {
        const plan = "Gold";
        const totalMinutes = 1002;
        const Expected_Bill = calculateBill(plan, totalMinutes);
        expect(Expected_Bill).toBe(50.85);
        });
        it("15. Should return the bill amount.", () => {
        const plan = "Gold";
        const totalMinutes = 999;
        const Expected_Bill = calculateBill(plan, totalMinutes);
        expect(Expected_Bill).toBe(49.95);
        });
        it("16. Should return the bill amount.", () => {
        const plan = "Gold";
        const totalMinutes = 999;
        const Expected_Bill = calculateBill(plan, totalMinutes);
        expect(Expected_Bill).toBe(49.95);
        });
        it("17. Should return the bill amount.", () => {
        const plan = "Gold";
        const totalMinutes = 999;
        const totalLines = 4;
        const Expected_Bill = calculateBill(plan, totalMinutes, totalLines);
        expect(Expected_Bill).toBe(83.95);
        });
        it("18. Should return the bill amount.", () => {
        const plan = "Silver";
        const totalMinutes = 499;
        const totalLines = 4;
        const Expected_Bill = calculateBill(plan, totalMinutes, totalLines);
        expect(Expected_Bill).toBe(77.95);
        });
        it("19. Should return the bill amount.", () => {
        const plan = "Silver";
        const totalMinutes = 499;
        const totalLines = 5;
        const Expected_Bill = calculateBill(plan, totalMinutes, totalLines);
        expect(Expected_Bill).toBe(82.95);
        });
        it("20. Should return the bill amount.", () => {
        const plan = "Silver";
        const totalMinutes = 1076;
        const Expected_Bill = calculateBill(plan, totalMinutes);
        expect(Expected_Bill).toBe(340.99);
        });
    });
    describe("finalPrice",() => {
        it("1. should return 58.5", () => {
            const Expected = finalPrice("Gold",4,20,1010);
            expect(Expected).toBe(58.5);
        });
        it("2. should return 20", () => {
            const Expected = finalPrice("Gold",0,30,1010);
            expect(Expected).toBe(20);
        });
        it("3. should return 79", () => {
            const Expected = finalPrice("Gold",10,15,578);
            expect(Expected).toBe(79);
        });
        it("4. should return 1032", () => {
            const Expected = finalPrice("Silver",18,50,2100);
            expect(Expected).toBe(1032);
        });
        it("5. should return 73", () => {
            const Expected = finalPrice("Silver",5,20,0);
            expect(Expected).toBe(73);
        });
        it("6. should return 0", () => {
            const Expected = finalPrice("");
            expect(Expected).toBe(0);
        });
    });
    describe("basePlanAmt",() => {
        it("1. should return 0", () => {
            const Expected=basePlanAmt("");
            expect(Expected).toBe(0);
        });
        it("2. should return 49.95", () => {
            const Expected=basePlanAmt("Gold");
            expect(Expected).toBe(49.95);
        });
        it("3. should return 29.95", () => {
            const Expected=basePlanAmt("Silver");
            expect(Expected).toBe(29.95);
        });
        it("4. should return 0", () => {
            const Expected=basePlanAmt("SomeString");
            expect(Expected).toBe(0);
        });
    });
    describe("extraChargesForMinutes", () => {
        it("1.should return 0", () => {
            const Expected=extraChargesForMinutes();
            expect(Expected).toBe(0);  
        });
        it("2.should return 0", () => {
            const Expected=extraChargesForMinutes("Gold",576);
            expect(Expected).toBe(0);  
        });
        it("3.should return 198.18", () => {
            const Expected=extraChargesForMinutes("Silver",867);
            expect(Expected).toBe(198.18);  
        });
        it("4.should return 0", () => {
            const Expected=extraChargesForMinutes("Gold",-123);
            expect(Expected).toBe(0);  
        });
        it("5.should return ", () => {
            const Expected=extraChargesForMinutes("Silver",-76);
            expect(Expected).toBe(0);  
        });
    });
    describe("discountGiven", () => {
        it("1. should return 33", () => {
            const Expected=discountGiven("Silver",5);
            expect(Expected).toBe(33);  
        });
        it("2. should return 190", () => {
            const Expected=discountGiven("Gold",23);
            expect(Expected).toBe(190);  
        });
        it("3.should return 66", () => {
            const Expected=discountGiven("",7);
            expect(Expected).toBe(66);  
        });
        it("4.should return 0", () => {
            const Expected=discountGiven("Gold");
            expect(Expected).toBe(0);  
        });
        it("5.should return 0", () => {
            const Expected=discountGiven();
            expect(Expected).toBe(0);  
        });
    });
});