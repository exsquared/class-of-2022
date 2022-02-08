import { calculate } from "./calculations.js";
const goldBasePlanPrice = 49.95;
const silverBasePlanPrice = 29.95;
const goldExtraLineRate = 14.5;
const silverExtraLineRate = 21.5;
const goldExtraMinutePrice = 0.45;
const silverExtraMinutePrice = 0.54;

describe("index.test.js", () => {
  describe("calculatePhoneBill", () => {
    it("Should tell improper input if all values are null", () => {
      const planType = null;
      const numberOfLines = null;
      const numberOfMinutes = null;
      const myBill = calculate(planType, numberOfLines, numberOfMinutes);
      expect(myBill).toBe("improper inputs");
    })
    it("Should tell improper input if plan type is null", () => {
      const planType = "gold";
      const numberOfLines = null;
      const numberOfMinutes = null;
      const myBill = calculate(planType, numberOfLines, numberOfMinutes);
      expect(myBill).toBe("improper inputs");
    })
    it("Should tell improper input if number of line is null", () => {
      const planType = null;
      const numberOfLines = 1;
      const numberOfMinutes = null;
      const myBill = calculate(planType, numberOfLines, numberOfMinutes);
      expect(myBill).toBe("improper inputs");
    })
    it("Should tell improper input if number of minutes are null", () => {
      const planType = null;
      const numberOfLines = null;
      const numberOfMinutes = 1000;
      const myBill = calculate(planType, numberOfLines, numberOfMinutes);
      expect(myBill).toBe("improper inputs");
    })
    it("Should tell improper input if number of minutes are negative", () => {
      const planType = "gold";
      const numberOfLines = 121;
      const numberOfMinutes = -10;
      const myBill = calculate(planType, numberOfLines, numberOfMinutes);
      expect(myBill).toBe("improper inputs");
    })
    it("Should tell improper input if number of lines are negative", () => {
      const planType = "silver";
      const numberOfLines = -122;
      const numberOfMinutes = 100;
      const myBill = calculate(planType, numberOfLines, numberOfMinutes);
      expect(myBill).toBe("improper inputs");
    })
    it("Should tell improper input if number of lines is not a number", () => {
      const planType = "silver";
      const numberOfLines = "lines";
      const numberOfMinutes = 100;
      const myBill = calculate(planType, numberOfLines, numberOfMinutes);
      expect(myBill).toBe("improper inputs");
    })
    it("Should tell output if number of minutes is a number passed as string", () => {
      const planType = "gold";
      const numberOfLines = 1;
      const numberOfMinutes = "0";
      const myBill = calculate(planType, numberOfLines, numberOfMinutes);
      expect(myBill).toBe(49.95);
    })
    it("Should calculate the phone bill for Gold", () => {
      const planType = "Gold";
      const numberOfLines = 1;
      const numberOfMinutes = 0;
      const myBill = calculate(planType, numberOfLines, numberOfMinutes);
      expect(myBill).toBe(49.95);
    });
    it("Should calculate the phone bill fro gold", () => {
      const planType = "gold";
      const numberOfLines = 1;
      const numberOfMinutes = 0;
      const myBill = calculate(planType, numberOfLines, numberOfMinutes);
      expect(myBill).toBe(49.95);
    });
    it("Should calculate the phone bill for gold 3 lines", () => {
      const planType = "Gold";
      const numberOfLines = 3;
      const numberOfMinutes = 0;
      const myBill = calculate(planType, numberOfLines, numberOfMinutes);
      expect(myBill).toBe(78.95);
    });
    it("Should calculate the phone bill for silver 1 line", () => {
      const planType = "silver";
      const numberOfLines = 1;
      const numberOfMinutes = 0;
      const myBill = calculate(planType, numberOfLines, numberOfMinutes);
      expect(myBill).toBe(29.95);
    });
    it("Should return please choose right plan on entering wrong plantype", () => {
      const planType = "platinum";
      const numberOfLines = 1;
      const numberOfMinutes = 0;
      const myBill = calculate(planType, numberOfLines, numberOfMinutes);
      expect(myBill).toBe("Please choose a right plan");
    });
    it("Should  return please choose right plan on giving just spaces as plantype", () => {
      const planType = "  ";
      const numberOfLines = 1;
      const numberOfMinutes = 0;
      const myBill = calculate(planType, numberOfLines, numberOfMinutes);
      expect(myBill).toBe("Please choose a right plan");
    });
    it("Should calculate the phone bill for gold 1 line 700 min", () => {
      const planType = "gold";
      const numberOfLines = 1;
      const numberOfMinutes = 700;
      const myBill = calculate(planType, numberOfLines, numberOfMinutes);
      expect(myBill).toBe(49.95);
    });
    it("Should calculate the phone bill for gold 2 line 1001 min", () => {
      const planType = "gold";
      const numberOfLines = 2;
      const numberOfMinutes = 1001;
      const myBill = calculate(planType, numberOfLines, numberOfMinutes);
      expect(myBill).toBe(64.9);
    });
    it("Should calculate the phone bill for gold 2 line 1000 min", () => {
      const planType = "gold";
      const numberOfLines = 2;
      const numberOfMinutes = 1000;
      const myBill = calculate(planType, numberOfLines, numberOfMinutes);
      expect(myBill).toBe(64.45);
    });
    it("Should calculate the phone bill for gold 4 line 1000 min", () => {
      const planType = "gold";
      const numberOfLines = 4;
      const numberOfMinutes = 1000;
      const myBill = calculate(planType, numberOfLines, numberOfMinutes);
      expect(myBill).toBe(83.95);
    });
    it("Should calculate the phone bill for silver 4 line 500 min", () => {
      const planType = "silver";
      const numberOfLines = 4;
      const numberOfMinutes = 500;
      const myBill = calculate(planType, numberOfLines, numberOfMinutes);
      expect(myBill).toBe(77.95);
    });
    it("Should calculate the phone bill for silver 4 line 500 min", () => {
      const planType = "gold";
      const numberOfLines = 1;
      const numberOfMinutes = 1123;
      const myBill = calculate(planType, numberOfLines, numberOfMinutes);
      expect(myBill).toBe(105.3);
    });
    it("Should calculate the phone bill for silver 4 line 1000 min", () => {
      const planType = "silver";
      const numberOfLines = 4;
      const numberOfMinutes = 1000;
      const expectedValue =
        silverBasePlanPrice +
        (numberOfMinutes - 500) * silverExtraMinutePrice +
        2 * silverExtraLineRate +
        5;
      const myBill = calculate(planType, numberOfLines, numberOfMinutes);
      expect(myBill).toBe(expectedValue);
    });
    it("Test Plan => Gold   Lines > 1  Minutes > 1000", () => {
      const numberOfLines = 3;
      const numberOfMinutes = 1001;
      const planType = "Gold";
      const receivedResult = calculate(
        planType,
        numberOfLines,
        numberOfMinutes
      );
      const extraMinutes = numberOfMinutes - 1000;
      const expectedResult =
        extraMinutes * 0.45 + goldBasePlanPrice + (numberOfLines - 1) * 14.5;
      expect(receivedResult).toBe(expectedResult);
    });
    it("Test Plan => Gold   Lines > 1  Minutes > 1000", () => {
      const numberOfLines = 45;
      const numberOfMinutes = 1001;
      const planType = "Gold";
      const receivedResult = calculate(
        planType,
        numberOfLines,
        numberOfMinutes
      );
      const extraMinutes = numberOfMinutes - 1000;
      const expectedResult =
        extraMinutes * 0.45 +
        goldBasePlanPrice +
        (numberOfLines - 3) * 5 +
        2 * 14.5;
      expect(receivedResult).toBe(expectedResult);
    });
    it("Test Plan => Gold   Lines > 4  Minutes > 878", () => {
      const numberOfLines = 4;
      const numberOfMinutes = 878;
      const planType = "Gold";
      const receivedResult = calculate(
        planType,
        numberOfLines,
        numberOfMinutes
      );
      expect(receivedResult).toBe(83.95);
    });
    it("Test Plan => Gold   Lines > 1  Minutes > 1123", () => {
      const numberOfLines = 1;
      const numberOfMinutes = 1123;
      const planType = "Gold";
      const receivedResult = calculate(
        planType,
        numberOfLines,
        numberOfMinutes
      );
      expect(receivedResult).toBe(105.3);
    });
    it("Test Plan => Gold   Lines > 4  Minutes > 1123", () => {
      const numberOfLines = 4;
      const numberOfMinutes = 1123;
      const planType = "Gold";
      const receivedResult = calculate(
        planType,
        numberOfLines,
        numberOfMinutes
      );
      expect(receivedResult).toBe(139.3);
    });
    it("Test Plan => silver   Lines > 2  Minutes > 523", () => {
      const numberOfLines = 2;
      const numberOfMinutes = 523;
      const planType = "silver";
      const receivedResult = calculate(
        planType,
        numberOfLines,
        numberOfMinutes
      );
      expect(receivedResult).toBe(63.87);
    });
    it("Test Plan => silver   Lines > 5  Minutes > 44", () => {
      const numberOfLines = 5;
      const numberOfMinutes = 44;
      const planType = "silver";
      const receivedResult = calculate(
        planType,
        numberOfLines,
        numberOfMinutes
      );
      expect(receivedResult).toBe(82.95);
    });
    it("Test Plan => silver   Lines > 5  Minutes > 521", () => {
      const numberOfLines = 5;
      const numberOfMinutes = 521;
      const planType = "silver";
      const receivedResult = calculate(
        planType,
        numberOfLines,
        numberOfMinutes
      );
      expect(receivedResult).toBe(94.29);
    });
  });
});
