import { calculateBill,whenNoAdditionalLinesButHaveExtraMinutes,whenNoAdditionalLinesAndNoExtraMinutes,costPerLine,extraMinutes, checkMinutesAreExtraOrNot ,roundNumber} from './index'


describe("test cases for PHONE TDD",()=>{
    describe("calculateBill()", () => {
        it("should return the passed inputs and will calculate the bill when package is gold", ()=>{
            const plan = "Gold";
            const myBillingDetails = calculateBill(plan);
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
            expect(myBillingDetails).toBe(49.95);
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
            expect(myBillingDetails).toBe(50.40);
        });
        it("should return the passed inputs and will calculate the bill when package is gold with multiple lines=2 with excess minutes", ()=>{
            const plan = "Gold";
            const lines = 2 ;
            const mins = 1001;
            const myBillingDetails = calculateBill(plan,lines, mins);
            expect(myBillingDetails).toBe(64.9);
        });
        it("should return the passed inputs and will calculate the bill when package is gold with multiple lines=2 with excess minutes", ()=>{
            const plan = "Gold";
            const lines = 2 ;
            const mins = 1000;
            const myBillingDetails = calculateBill(plan,lines, mins);
            expect(myBillingDetails).toBe(64.45);
        });
        it("should return the passed inputs and will calculate the bill when package is gold with multiple lines=3 with excess minutes", ()=>{
            const plan = "Gold";
            const lines = 3 ;
            const mins = 1000;
            const myBillingDetails = calculateBill(plan,lines, mins);
            expect(myBillingDetails).toBe(78.95);
        });
        it("should return the passed inputs and will calculate the bill when package is gold with multiple lines=4 with excess minutes", ()=>{
            const plan = "Gold";
            const lines = 4 ;
            const mins = 1000;
            const myBillingDetails = calculateBill(plan,lines, mins);
            expect(myBillingDetails).toBe(83.95);
        });
        it("should return the passed inputs and will calculate the bill when package is gold with multiple lines=4 with excess minutes", ()=>{
            const plan = "Silver";
            const lines = 4 ;
            const mins = 500;
            const myBillingDetails = calculateBill(plan,lines, mins);
            expect(myBillingDetails).toBe(77.95);
        });
        it("should return the passed inputs and will calculate the bill when package is gold with multiple lines=5 with excess minutes", ()=>{
            const plan = "Silver";
            const lines = 5;
            const mins = 500;
            const myBillingDetails = calculateBill(plan,lines, mins);
            expect(myBillingDetails).toBe(82.95);
        });
        it("should return the passed inputs and will calculate the bill when package is gold with multiple lines=4 with excess minutes", ()=>{
            const plan = "Gold";
            const lines = 4 ;
            const mins = 878;
            const myBillingDetails = calculateBill(plan,lines, mins);
            expect(myBillingDetails).toBe(83.95);
        });
        it("should return the passed inputs and will calculate the bill when package is gold with multiple lines=1 with excess minutes", ()=>{
            const plan = "Gold";
            const lines = 1 ;
            const mins = 1123;
            const myBillingDetails = calculateBill(plan,lines, mins);
            expect(myBillingDetails).toBe(105.3);
        });
        it("should return the passed inputs and will calculate the bill when package is gold with multiple lines=4 with excess minutes", ()=>{
            const plan = "Gold";
            const lines = 4 ;
            const mins = 1123;
            const myBillingDetails = calculateBill(plan,lines, mins);
            expect(myBillingDetails).toBe(139.3);
        });
        it("should return the passed inputs and will calculate the bill when package is gold with multiple lines=2 with excess minutes", ()=>{
            const plan = "Silver";
            const lines = 2 ;
            const mins = 523;
            const myBillingDetails = calculateBill(plan,lines, mins);
            expect(myBillingDetails).toBe(63.87);
        });
        it("should return the passed inputs and will calculate the bill when package is gold with multiple lines=5 with excess minutes", ()=>{
            const plan = "Silver";
            const lines = 5;
            const mins = 44;
            const myBillingDetails = calculateBill(plan,lines, mins);
            expect(myBillingDetails).toBe(82.95);
        });
        it("should return the passed inputs and will calculate the bill when package is gold with multiple lines=5 with excess minutes", ()=>{
            const plan = "Silver";
            const lines = 5;
            const mins = 521;
            const myBillingDetails = calculateBill(plan,lines, mins);
            expect(myBillingDetails).toBe(94.29);
        });
        it("should return the passed inputs and will calculate the bill when package is gold with multiple lines=5 with excess minutes", ()=>{
            const plan = "Gold";
            const lines = 5;
            const mins = 1001;
            const myBillingDetails = calculateBill(plan,lines, mins);
            expect(myBillingDetails).toBe(89.4);
        });
    });
    describe("roundNumber()", () => {
        it("should return rounded value", ()=>{
            const roundedNumber = roundNumber(123.4556);
            expect(roundedNumber).toBe(123.46);
        });
        it("should return rounded value", ()=>{
            const roundedNumber = roundNumber(12.444);
            expect(roundedNumber).toBe(12.44);
        });

    });

    describe("checkMinutesAreExtraOrNot()", () => {
        it("should return true", ()=>{
            const checkextraMins = checkMinutesAreExtraOrNot("Gold",1123);
            expect(checkextraMins).toBe(true);
        });
        it("should return true when planType is Silver and Total Minutes are 520", ()=>{
            const checkextraMins = checkMinutesAreExtraOrNot("Silver",520);
            expect(checkextraMins).toBe(true);
        });
        it("should return true", ()=>{
            const checkextraMins = checkMinutesAreExtraOrNot("Gold",1001);
            expect(checkextraMins).toBe(true);
        });
        it("should return false", ()=>{
            const checkextraMins = checkMinutesAreExtraOrNot("Gold",999);
            expect(checkextraMins).toBe(false);
        });
        it("should return false", ()=>{
            const checkextraMins = checkMinutesAreExtraOrNot("Silver",499);
            expect(checkextraMins).toBe(false);
        });
    });  
    describe("costPerLine()", () => {
        it("should return rounded 14.50 when package is gold", ()=>{
            const lineCost = costPerLine("Gold");
            expect(lineCost).toBe(14.50);
        });
        it("should return rounded 21.50 when package is silver", ()=>{
            const lineCost = costPerLine("Silver");
            expect(lineCost).toBe(21.50);
        });

    });  

    describe("extraMinutes()", () => {
        it("should return exceeding minutes in gold package", ()=>{
            const extraMins = extraMinutes("Gold",1123);
            expect(extraMins).toBe(123);
        });
        it("should return exceeding minutes in silver package", ()=>{
            const extraMins = extraMinutes("Silver",520);
            expect(extraMins).toBe(20);
        });
        it("should return exceeding minutes in gold package", ()=>{
            const extraMins = extraMinutes("Gold",1001);
            expect(extraMins).toBe(1);
        });
        it("should return exceeding minutes in gold package", ()=>{
            const extraMins = extraMinutes("Gold",1099);
            expect(extraMins).toBe(99);
        });
        it("should return exceeding minutes in silver package", ()=>{
            const extraMins = extraMinutes("Silver",599);
            expect(extraMins).toBe(99);
        });
    });  

    describe("whenNoAdditionalLinesButHaveExtraMinutes()", () => {
        it("should return exceeding minutes in gold package", ()=>{
            const bill = whenNoAdditionalLinesButHaveExtraMinutes("Gold",1,49.95,29.95);
            expect(bill).toBe(50.40);
        });
        it("should return exceeding minutes in silver package", ()=>{
            const bill = whenNoAdditionalLinesButHaveExtraMinutes("Silver",20,49.95,29.95);
            expect(bill).toBe(40.75);
        });
    }); 
    
    describe("whenNoAdditionalLinesAndNoExtraMinutes()", () => {
        it("should return 49.95 when package is gold", ()=>{
            const expectedbill = whenNoAdditionalLinesAndNoExtraMinutes("Gold",49.95,29.95);
            expect(expectedbill).toBe(49.95);
        });
        it("should return 29.95 when package is silver", ()=>{
            const expectedbill = whenNoAdditionalLinesAndNoExtraMinutes("Silver",49.95,29.95);
            expect(expectedbill).toBe(29.95);
        });
        
    });  


});