// import { it } from "@jest/globals";
import { calculate } from "./index.js";

describe("Test Cases for the Calculate Function Loading", () => {

    it("If the selected item is not among the lsit we are handling.", () => {
        const expectedAmount = "The selected item is not available for rent.";
        const type = "PLatinum";
        const additional_lines = 1;
        const price = calculate(type, additional_lines);
        expect(price).toBe(expectedAmount);
    })

    it("If type entered is Gold.", () => {
        const expectedAmount = 49.95;
        const type = "Gold";
        const additional_lines = 1;
        const price = calculate(type, additional_lines);
        expect(price).toBe(expectedAmount);
    });

    it("If type entered is silver.", () => {
        const expectedAmount = 29.95;
        const type = "Silver";
        const additional_lines = 1;
        const price = calculate(type, additional_lines);
        expect(price).toBe(expectedAmount);
    });

    it("If type is Gold and additional lines are taken into consideration.", () => {
        const expectedAmount = 49.95 + 14.5 + 14.5;
        const type = "gold";
        const additional_lines = 3;
        const price = calculate(type, additional_lines);
        expect(price).toBe(expectedAmount);
    });

    it("If type is Silver and additional lines are taken into consideration.", () => {
        const expectedAmount = 29.95 + 21.5 + 21.5;
        const type = "silver";
        const additional_lines = 3;
        const price = calculate(type, additional_lines);
        expect(price).toBe(expectedAmount);
    });

    it("If type is Gold, additional lines and excess minutes are taken into consideration.", () => {
        const expectedAmount = 49.95 + (14.5 * 1) + 0.45;
        const type = "gold";
        const additional_lines = 2;
        const total_minutes = 1001;
        const price = calculate(type, additional_lines, total_minutes);
        expect(price).toBe(expectedAmount);
    });

    it("If type is Silver, additional lines and excess minutes are taken into consideration.", () => {
        const expectedAmount = 29.95 + (21.5 * 1) + 0.54;
        const type = "silver";
        const additional_lines = 2;
        const total_minutes = 501;
        const price = calculate(type, additional_lines, total_minutes);
        expect(price).toBe(expectedAmount);
    });

    it("If type is Gold, additional lines are used and total minutes used are feasible.", () => {
        const expectedAmount = 49.95 + (14.5 * 1);
        const type = "gold";
        const additional_lines = 2;
        const total_minutes = 999;
        const price = calculate(type, additional_lines, total_minutes);
        expect(price).toBe(expectedAmount);
    });

    it("If type is Silver, additional lines are used and total minutes used are feasible.", () => {
        const expectedAmount = 29.95 + (21.5 * 1);
        const type = "silver";
        const additional_lines = 2;
        const total_minutes = 499;
        const price = calculate(type, additional_lines, total_minutes);
        expect(price).toBe(expectedAmount);
    });

    it("If type is Gold, additional lines are used and total minutes used are feasible. Edges Cases for Minutes.", () => {
        const expectedAmount = 49.95 + (14.5 * 1);
        const type = "gold";
        const additional_lines = 2;
        const total_minutes = 1000;
        const price = calculate(type, additional_lines, total_minutes);
        expect(price).toBe(expectedAmount);
    });

    it("If type is SIlver, additional lines are used and total minutes used are feasible. Edges Cases for Minutes.", () => {
        const expectedAmount = 29.95 + (21.5 * 1);
        const type = "silver";
        const additional_lines = 2;
        const total_minutes = 500;
        const price = calculate(type, additional_lines, total_minutes);
        expect(price).toBe(expectedAmount);
    });

    it("If type is Gold, additional lines are used, some minutes are used and eligible for discount.", () => {
        const expectedAmount = 49.95 + (14.5 * 2) + 5;
        const type = "gold";
        const additional_lines = 4;
        const total_minutes = 999;
        const price = calculate(type, additional_lines, total_minutes);
        expect(price).toBe(expectedAmount);
    });

    it("If type is silver, additional lines are used, some minutes are used and eligible for discount.", () => {
        const expectedAmount = 29.95 + (21.5 * 2) + 5;
        const type = "silver";
        const additional_lines = 4;
        const total_minutes = 500;
        const price = calculate(type, additional_lines, total_minutes);
        expect(price).toBe(expectedAmount);
    });

    it("If type is silver, additional lines are used, some minutes are used and eligible for discount.", () => {
        const expectedAmount = 29.95 + (21.5 * 2) + 5;
        const type = "silver";
        const additional_lines = 4;
        const total_minutes = 499;
        const price = calculate(type, additional_lines, total_minutes);
        expect(price).toBe(expectedAmount);
    });

    it("If type is silver, additional lines are used, some minutes are used and eligible for discount.", () => {
        const expectedAmount = 29.95 + (21.5 * 2) + 5 ;
        const type = "silver";
        const additional_lines = 4;
        const total_minutes = 500;
        const price = calculate(type, additional_lines, total_minutes);
        expect(price).toBe(expectedAmount);
    });

    it("Test Case : 1", () => {
        const expectedAmount = 83.95 ;
        const type = "Gold";
        const additional_lines = 4;
        const total_minutes = 878;
        const price = calculate(type, additional_lines, total_minutes);
        expect(price).toBe(expectedAmount);
    });
    it("Test Case : 2", () => {
        const expectedAmount = 105.3 ;
        const type = "Gold";
        const additional_lines = 1;
        const total_minutes = 1123;
        const price = calculate(type, additional_lines, total_minutes);
        expect(price).toBe(expectedAmount);
    });
    it("Test Case : 3", () => {
        const expectedAmount = 139.3 ;
        const type = "Gold";
        const additional_lines = 4;
        const total_minutes = 1123;
        const price = calculate(type, additional_lines, total_minutes);
        expect(price).toBe(expectedAmount);
    });
    it("Test Case : 4", () => {
        const expectedAmount = 63.87 ;
        const type = "Silver";
        const additional_lines = 2;
        const total_minutes = 523;
        const price = calculate(type, additional_lines, total_minutes);
        expect(price).toBe(expectedAmount);
    });
    it("Test Case : 5", () => {
        const expectedAmount = 82.95 ;
        const type = "silver";
        const additional_lines = 5;
        const total_minutes = 44;
        const price = calculate(type, additional_lines, total_minutes);
        expect(price).toBe(expectedAmount);
    });
    it("Test Case : 6", () => {
        const expectedAmount = 94.29 ;
        const type = "silver";
        const additional_lines = 5;
        const total_minutes = 521;
        const price = calculate(type, additional_lines, total_minutes);
        expect(price).toBe(expectedAmount);
    });
})