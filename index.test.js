// import { it } from "@jest/globals";
import { calculate } from "./index.js";
import {typeOfMaterial} from "./index.js";

describe("index.js", () => {

    describe("calculate function testing", () => {

        it("should return some abnormal value if the type itself is not passed.", ()=>{
            const expectedAmount = -1;
            const type = "";
            const additional_lines = 2;
            const excess_minutes = 1000;
            const price = calculate(type, additional_lines, excess_minutes);
            expect(price).toBe(expectedAmount);
        })

        it("should return some abnormal value if the type passed have typing error .", ()=>{
            const expectedAmount = -1;
            const type = "gldo";
            const additional_lines = 2;
            const excess_minutes = 1000;
            const price = calculate(type, additional_lines, excess_minutes);
            expect(price).toBe(expectedAmount);
        })

        it("Should return a ubnormal value as type is different from avialable types.", () => {
            const expectedAmount = -1;
            const type = "Platinum";
            const additional_lines = 1;
            const price = calculate(type, additional_lines);
            expect(price).toBe(expectedAmount);
        })

        it("Should return the gold base price even if we do not pass additional lines as in that case default value i.e. 1 will be used.", () => {
            const expectedAmount = 49.95;
            const type = "Gold";
            const price = calculate(type);
            expect(price).toBe(expectedAmount);
        })

        it("Should return the silver base price even if we do not pass additional lines as in that case default value i.e. 1 will be used.", () => {
            const expectedAmount = 29.95;
            const type = "Silver";
            const price = calculate(type);
            expect(price).toBe(expectedAmount);
        })

        it("Should return the gold base value plus additonal line cost for gold even if we do no pass excess minutes used, as in that case default value for minutes i.e. 0 will be used.", () => {
            const expectedAmount = 49.95 + 14.50;
            const type = "Gold";
            const additional_lines = 2;
            const price = calculate(type, additional_lines);
            expect(price).toBe(expectedAmount);
        })

        it("Should return the silver base value plus additonal line cost for silver even if we do no pass excess minutes used, as in that case default value for minutes i.e. 0 will be used.", () => {
            const expectedAmount = 29.95 + 21.50;
            const type = "Silver";
            const additional_lines = 2;
            const price = calculate(type, additional_lines);
            expect(price).toBe(expectedAmount);
        })

        it("Should return the correct value even if trailing or leading spaces are used with correct item type", () => {
            const expectedAmount = 94.29 ;
            const type = "  silver  ";
            const additional_lines = 5;
            const total_minutes = 521;
            const price = calculate(type, additional_lines, total_minutes);
            expect(price).toBe(expectedAmount);
        })

        it("Should return an abnormal value if additional lines are passed 0", () =>{
            const expectedAmount = -1;
            const type = "gold";
            const additional_lines = 0;
            const total_minutes = 1000;
            const price = calculate(type, additional_lines, total_minutes);
            expect(price).toBe(expectedAmount);
        })

        it("Should return an abnormal value if additional lines are passed as some negative value", () =>{
            const expectedAmount = -1;
            const type = "gold";
            const additional_lines = -3;
            const total_minutes = 1000;
            const price = calculate(type, additional_lines, total_minutes);
            expect(price).toBe(expectedAmount);
        })

        it("Should return an abnormal value if excess minutes are passed as some negative value", () =>{
            const expectedAmount = -1;
            const type = "gold";
            const additional_lines = 3;
            const total_minutes = -1456;
            const price = calculate(type, additional_lines, total_minutes);
            expect(price).toBe(expectedAmount);
        })

        it("Should return an abnormal value if additional lines as well as excess minutes are passed as some negative value", () =>{
            const expectedAmount = -1;
            const type = "gold";
            const additional_lines = -3;
            const total_minutes = -1456;
            const price = calculate(type, additional_lines, total_minutes);
            expect(price).toBe(expectedAmount);
        })

        it("Should return the silver base price even if we do not pass additional lines as well as excess minutes as in that case default value will be used, 1 and 0 respectively", () => {
            const expectedAmount = 29.95;
            const type = "Silver";
            const price = calculate(type);
            expect(price).toBe(expectedAmount);
        })

        describe("calculate function TDD development", () => {

            it("Should return gold base value as function will be called with gold type.", () => {
                const expectedAmount = 49.95;
                const type = "Gold";
                const price = calculate(type);
                expect(price).toBe(expectedAmount);
            });
        
            it("Should return silver base value as function will be called with silver type.", () => {
                const expectedAmount = 29.95;
                const type = "Silver";
                const price = calculate(type);
                expect(price).toBe(expectedAmount);
            });
        
            it("Should return a value considering item type as gold and additional lines.", () => {
                const expectedAmount = 49.95 + 14.5 + 14.5;
                const type = "gold";
                const additional_lines = 3;
                const price = calculate(type, additional_lines);
                expect(price).toBe(expectedAmount);
            });
        
            it("Should return a value considering item type as silver and additional lines.", () => {
                const expectedAmount = 29.95 + 21.5 + 21.5;
                const type = "silver";
                const additional_lines = 3;
                const price = calculate(type, additional_lines);
                expect(price).toBe(expectedAmount);
            });
        
            it("Should return a value considering item type as gold and additional lines and excess minutes as 1 because 1000 is the limit for gold type.", () => {
                const expectedAmount = 49.95 + (14.5 * 1) + 0.45;
                const type = "gold";
                const additional_lines = 2;
                const total_minutes = 1001;
                const price = calculate(type, additional_lines, total_minutes);
                expect(price).toBe(expectedAmount);
            });
        
            it("Should return a value considering item type as silver and additional lines and excess minutes as 1 because 500 is the limit for silver type.", () => {
                const expectedAmount = 29.95 + (21.5 * 1) + 0.54;
                const type = "silver";
                const additional_lines = 2;
                const total_minutes = 501;
                const price = calculate(type, additional_lines, total_minutes);
                expect(price).toBe(expectedAmount);
            });
        
            it("Should return a value considering item type as gold and additional lines and not considering excess minutes as 999 (<= 1000) are feasible minutes.", () => {
                const expectedAmount = 49.95 + (14.5 * 1);
                const type = "gold";
                const additional_lines = 2;
                const total_minutes = 999;
                const price = calculate(type, additional_lines, total_minutes);
                expect(price).toBe(expectedAmount);
            });
        
            it("Should return a value considering item type as silver and additional lines and not considering excess minutes as 499 (<= 500) are feasible minutes.", () => {
                const expectedAmount = 29.95 + (21.5 * 1);
                const type = "silver";
                const additional_lines = 2;
                const total_minutes = 499;
                const price = calculate(type, additional_lines, total_minutes);
                expect(price).toBe(expectedAmount);
            });
        
            it("Should return a value considering item type as gold and additional lines and not considering excess minutes as 1000 (<= 1000) are feasible minutes.", () => {
                const expectedAmount = 49.95 + (14.5 * 1);
                const type = "gold";
                const additional_lines = 2;
                const total_minutes = 1000;
                const price = calculate(type, additional_lines, total_minutes);
                expect(price).toBe(expectedAmount);
            });
        
            it("Should return a value considering item type as silver and additional lines and not considering excess minutes as 500 (<= 500) are feasible minutes.", () => {
                const expectedAmount = 29.95 + (21.5 * 1);
                const type = "silver";
                const additional_lines = 2;
                const total_minutes = 500;
                const price = calculate(type, additional_lines, total_minutes);
                expect(price).toBe(expectedAmount);
            });
        
            it("Should return a discounted price as additional lines passed are greater than minimum lines for discount with type as gold.", () => {
                const expectedAmount = 49.95 + (14.5 * 2) + 5;
                const type = "gold";
                const additional_lines = 4;
                const total_minutes = 999;
                const price = calculate(type, additional_lines, total_minutes);
                expect(price).toBe(expectedAmount);
            });
        
            it("Should return a discounted price as additional lines passed are greater than minimum lines for discount with type as silver.", () => {
                const expectedAmount = 29.95 + (21.5 * 2) + 5;
                const type = "silver";
                const additional_lines = 4;
                const total_minutes = 500;
                const price = calculate(type, additional_lines, total_minutes);
                expect(price).toBe(expectedAmount);
            });
        
            it("Should return a discounted price as additional lines passed are greater than minimum lines for discount with type as silver.", () => {
                const expectedAmount = 29.95 + (21.5 * 2) + 5;
                const type = "silver";
                const additional_lines = 4;
                const total_minutes = 499;
                const price = calculate(type, additional_lines, total_minutes);
                expect(price).toBe(expectedAmount);
            });
        
            it("Should return a discounted price as additional lines passed are greater than minimum lines for discount with type as silver.", () => {
                const expectedAmount = 29.95 + (21.5 * 2) + 5 ;
                const type = "silver";
                const additional_lines = 4;
                const total_minutes = 500;
                const price = calculate(type, additional_lines, total_minutes);
                expect(price).toBe(expectedAmount);
            });
            
        })

        describe("External Test Cases" , () => {
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

    })   
})