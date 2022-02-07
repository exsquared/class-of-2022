import { calculateBill } from './index';

describe("test cases for PHONE TDD",()=>{
    it("should return the passed inputs and will calculate the bill when package is gold", ()=>{
        const plan = "Gold";
        const myBillingDetails = calculateBill(plan);
        expect(myBillingDetails).toBe(49.95);
    });
    it("should return the passed inputs and will calculate the bill when package is gold", ()=>{
        const plan = "Gold";
        const myBillingDetails = calculateBill(plan, 0,0);
        expect(myBillingDetails).toBe(49.95);
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

})