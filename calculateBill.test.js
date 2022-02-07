import { calculateBill } from "./calculateBill.js";

const basePriceForGoldPlan = 49.95,
  basePriceForSilverPlan = 29.95, errorCode = -1;

describe("calculateBills.js", () => {
  describe('calculateBills,', () => {
    test(`should return ${basePriceForGoldPlan} when only gold plan type is passed`, () => {
      const planType = "Gold";
      const receivedResult = calculateBill(planType);
      expect(receivedResult).toBe(basePriceForGoldPlan);
    });

    test(`should return ${basePriceForSilverPlan} when only silver plan type is passed`, () => {
      const planType = "Silver";
      const receivedResult = calculateBill(planType);
      expect(receivedResult).toBe(basePriceForSilverPlan);
    });

    test(`should return ${errorCode} when selected plan type is invalid`, () => {
      const planType = "Platinum";
      const countAdditionalLines = 12;
      const totalMinutes = 1200;
      const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
      expect(receivedResult).toBe(-1);
    });

    test(`should return ${errorCode} when selected plan type is invalid`, () => {
      const planType = "456";
      const countAdditionalLines = 12;
      const totalMinutes = 1200;
      const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
      expect(receivedResult).toBe(-1);
    });

    test(`should return ${errorCode} when selected plan type is invalid`, () => {
      const planType = "--1232";
      const countAdditionalLines = 12;
      const totalMinutes = 1200;
      const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
      expect(receivedResult).toBe(-1);
    });

    test(`should return ${errorCode} when selected plan type is invalid`, () => {
      const planType = "0";
      const countAdditionalLines = 12;
      const totalMinutes = 1200;
      const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
      expect(receivedResult).toBe(-1);
    });


    test(`should return ${basePriceForGoldPlan} when plan => Gold, lines = 1, mins not passed`, () => {
      const planType = "Gold";
      const countAdditionalLines = 1;
      const receivedResult = calculateBill(planType, countAdditionalLines);
      expect(receivedResult).toBe(basePriceForGoldPlan);
    });

    test(`should return ${basePriceForSilverPlan} when plan => Silver, lines = 1, mins not passed`, () => {
      const planType = "Silver";
      const countAdditionalLines = 1;
      const receivedResult = calculateBill(planType, countAdditionalLines);
      expect(receivedResult).toBe(basePriceForSilverPlan);
    });

    test("should return 83.95 when plan = Gold, lines = 4, minutes = 878", () => {
      const planType = "Gold";
      const countAdditionalLines = 4;
      const totalMinutes = 878;
      const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
      expect(receivedResult).toBe(83.95);
    });

    test("should return 105.3 when plan = Gold, lines = 1, minutes = 1123", () => {
      const planType = "Gold";
      const countAdditionalLines = 1;
      const totalMinutes = 1123;
      const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
      expect(receivedResult).toBe(105.3);
    });

    test("should return 64.45 when plan = Gold, lines = 2, minutes = 999", () => {
      const planType = "Gold";
      const countAdditionalLines = 2;
      const totalMinutes = 999;
      const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
      expect(receivedResult).toBe(64.45);
    });

    test("should return 78.95 when plan = Gold, lines = 3, minutes = 1001", () => {
      const planType = "Gold";
      const countAdditionalLines = 3;
      const totalMinutes = 1001;
      const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
      expect(receivedResult).toBe(79.4);
    });

    test("should return 83.95 when plan = Gold, lines = 4, minutes = 1200", () => {
      const planType = "Gold";
      const countAdditionalLines = 4;
      const totalMinutes = 1200;
      const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
      expect(receivedResult).toBe(173.95);
    });

    test("should return 77.95 when plan = Silver, lines = 4, minutes = 499", () => {
      const planType = "Silver";
      const countAdditionalLines = 4;
      const totalMinutes = 499;
      const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
      expect(receivedResult).toBe(77.95);
    });

    test("should return 82.95 when plan = Silver, lines = 5, minutes = 500", () => {
      const planType = "Silver";
      const countAdditionalLines = 5;
      const totalMinutes = 500;
      const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
      expect(receivedResult).toBe(82.95);
    });

    test("should return 63.87 when plan = Silver, lines = 2, minutes = 501", () => {
      const planType = "Silver";
      const countAdditionalLines = 2;
      const totalMinutes = 501;
      const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
      expect(receivedResult).toBe(51.99);
    });

    test("should return 82.95 when plan = Silver, lines = 5, minutes = 44", () => {
      const planType = "Silver";
      const countAdditionalLines = 5;
      const totalMinutes = 44;
      const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
      expect(receivedResult).toBe(82.95);
    });

    test("should return 94.29 when plan = Silver, lines = 5, minutes = 521", () => {
      const planType = "Silver";
      const countAdditionalLines = 5;
      const totalMinutes = 521;
      const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
      expect(receivedResult).toBe(94.29);
    });

    test(`should return ${errorCode} when plan = Gold additional lines are negative`, () => {
      const planType = "Gold";
      const countAdditionalLines = -3;
      const totalMinutes = 1200;
      const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
      expect(receivedResult).toBe(-1);
    });

    test(`should return ${errorCode} when plan = Silver additional lines are negative`, () => {
      const planType = "Silver";
      const countAdditionalLines = -4;
      const totalMinutes = 1200;
      const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
      expect(receivedResult).toBe(-1);
    });

    test(`should return ${errorCode} when plan = Gold additional minutes are negative`, () => {
      const planType = "Gold";
      const countAdditionalLines = 2;
      const totalMinutes = -12;
      const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
      expect(receivedResult).toBe(-1);
    });

    test(`should return ${errorCode} when plan = Silver additional minutes are negative`, () => {
      const planType = "Silver";
      const countAdditionalLines = 3;
      const totalMinutes = -12;
      const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
      expect(receivedResult).toBe(-1);
    });


    test(`should return ${errorCode} when additional minutes and lines are negative`, () => {
      const planType = "Silver";
      const countAdditionalLines = -2;
      const totalMinutes = -122;
      const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
      expect(receivedResult).toBe(-1);
    });

    test(`should return ${errorCode} when plan type is blank`, () => {
      const planType = "";
      const countAdditionalLines = -5;
      const totalMinutes = -122;
      const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
      expect(receivedResult).toBe(-1);
    });

    test(`should return ${errorCode} when total minutes are not passed`, () => {
      const planType = "Gold";
      const countAdditionalLines = 1;
      const totalMinutes = ' ';
      const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
      expect(receivedResult).toBe(errorCode);
    });

    test(`should return ${errorCode} when lines are not passed `, () => {
      const planType = "Gold";
      const countAdditionalLines = ' ';
      const totalMinutes = 1;
      const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
      expect(receivedResult).toBe(errorCode);
    });

    test(`should return 83.95 inputs passed with white spaces`, () => {
      const planType = '  Gold    ';
      const countAdditionalLines = ' 4 ';
      const totalMinutes = ' 878';
      const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
      expect(receivedResult).toBe(83.95);
    });

    test(`should return ${errorCode} when lines > 6`, () => {
      const planType = 'Gold';
      const countAdditionalLines = 8;
      const totalMinutes = 878;
      const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
      expect(receivedResult).toBe(errorCode);
    });


  });



});
