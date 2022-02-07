import { calculateBill } from "./calculateBill.js";

const basePriceForGoldPlan = 49.95,
  basePriceForSilverPlan = 29.95;

describe("Test cases for Phone-Bills", () => {
  it("Plan => Gold  Lines - not available", () => {
    const planType = "Gold";
    const receivedResult = calculateBill(planType);
    expect(receivedResult).toBe(basePriceForGoldPlan);
  });

  it("Plan => Gold  Lines - not available", () => {
    const planType = "Platinum";
    const countAdditionalLines = 12;
    const totalMinutes = 1200;
    const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
    expect(receivedResult).toBe(-1);
  });

  it("Plan => Silver  Lines - not available", () => {
    const planType = "Silver";
    const receivedResult = calculateBill(planType);
    expect(receivedResult).toBe(basePriceForSilverPlan);
  });

  it("Plan => Gold  Lines == 1", () => {
    const planType = "Gold";
    const countAdditionalLines = 1;
    const receivedResult = calculateBill(planType, countAdditionalLines);
    expect(receivedResult).toBe(basePriceForGoldPlan);
  });
  it("Plan => Silver  Lines == 1", () => {
    const planType = "Silver";
    const countAdditionalLines = 1;
    const receivedResult = calculateBill(planType, countAdditionalLines);
    expect(receivedResult).toBe(basePriceForSilverPlan);
  });

  it("Plan => Gold  Lines > 1", () => {
    const planType = "Gold";
    const countAdditionalLines = 4;
    const totalMinutes = 878;
    const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
    expect(receivedResult).toBe(83.95);
  });

  it("Plan => Gold  Lines > 1", () => {
    const planType = "Gold";
    const countAdditionalLines = 1;
    const totalMinutes = 1123;
    const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
    expect(receivedResult).toBe(105.3);
  });

  it("Plan => Gold  Lines > 1", () => {
    const planType = "Gold";
    const countAdditionalLines = 2;
    const totalMinutes = 600;
    const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
    expect(receivedResult).toBe(64.45);
  });

  it("Plan => Gold  Lines > 1", () => {
    const planType = "Gold";
    const countAdditionalLines = 3;
    const totalMinutes = 600;
    const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
    expect(receivedResult).toBe(78.95);
  });

  it("Plan => Gold  Lines > 1", () => {
    const planType = "Gold";
    const countAdditionalLines = 4;
    const totalMinutes = 800;
    const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
    expect(receivedResult).toBe(83.95);
  });

  it("Plan => Gold  Lines > 1", () => {
    const planType = "Silver";
    const countAdditionalLines = 4;
    const totalMinutes = 499;
    const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
    expect(receivedResult).toBe(77.95);
  });

  it("Plan => Gold  Lines > 1", () => {
    const planType = "Silver";
    const countAdditionalLines = 5;
    const totalMinutes = 500;
    const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
    expect(receivedResult).toBe(82.95);
  });

  it("Plan => Gold  Lines > 1", () => {
    const planType = "Gold";
    const countAdditionalLines = 4;
    const totalMinutes = 1123;
    const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
    expect(receivedResult).toBe(139.3);
  });

  it("Plan => Gold  Lines > 1", () => {
    const planType = "Silver";
    const countAdditionalLines = 2;
    const totalMinutes = 523;
    const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
    expect(receivedResult).toBe(63.87);
  });

  it("Plan => Gold  Lines > 1", () => {
    const planType = "Silver";
    const countAdditionalLines = 5;
    const totalMinutes = 44;
    const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
    expect(receivedResult).toBe(82.95);
  });

  it("Plan => Gold  Lines > 1", () => {
    const planType = "Silver";
    const countAdditionalLines = 5;
    const totalMinutes = 521;
    const receivedResult = calculateBill(planType, countAdditionalLines, totalMinutes);
    expect(receivedResult).toBe(94.29);
  });
});
