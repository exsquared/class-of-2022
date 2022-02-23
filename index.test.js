import { where, findBy } from './main';
import { readFile, search } from './helper';

describe("Test Case for Company Funding TDD", () => {
    describe("where()", () => {
        it("Should return 'File does not exist.' if file path is invalid", () => {
            const inputFile = "";
            const output = where(inputFile);
            const expectedOutput = "File does not exist.";
            expect(expectedOutput).toBe(output);
        });
        it("Should return all data if no filter parameter is given.", () => {
            const inputFile = "./data/startup-funding.json";
            const output = where(inputFile);
            const expectedOutput = require(inputFile);
            expect(expectedOutput).toBe(output);
        });
        it("Should return the data indexes matching the parameter after filtering.", () => {
            const inputFile = "./data/startup-funding.json";
            const output = where(inputFile, {companyName:"LifeLock"});
            const expectedOutput = [0,1,2];
            expect(expectedOutput).toStrictEqual(output);
        });
        it("Should return -1 if no match is found.", () => {
            const inputFile = "./data/startup-funding.json";
            const output = where(inputFile, {companyName:"Ex2"});
            const expectedOutput = -1;
            expect(expectedOutput).toStrictEqual(output);
        });
        it("Should return the data indexes matching the parameter after filtering.", () => {
            const inputFile = "./data/startup-funding.json";
            const output = where(inputFile, {companyName:"LifeLock", city:"Tempe"});
            const expectedOutput = [0,1,2];
            expect(expectedOutput).toStrictEqual(output);
        });
        it("Should return the data indexes matching the parameter after filtering.", () => {
            const inputFile = "./data/startup-funding.json";
            const output = where(inputFile, {companyName:"LifeLock", city:"Tempe", round:'a'});
            const expectedOutput = [1];
            expect(expectedOutput).toStrictEqual(output);
        });
        it("Should return the data indexes matching the parameter after filtering.", () => {
            const inputFile = "./data/startup-funding.json";
            const output = where(inputFile, {companyName:"LifeLock", city:"Tempe", round:'b'});
            const expectedOutput = [0];
            expect(expectedOutput).toStrictEqual(output);
        });
        it("Should return the data indexes matching the parameter after filtering.", () => {
            const inputFile = "./data/startup-funding.json";
            const output = where(inputFile, {companyName:"Infusionsoft", city:"Gilbert", round:'a', state:'AZ'});
            const expectedOutput = [5];
            expect(expectedOutput).toStrictEqual(output);
        });
        it("Should return the data indexes matching the parameter after filtering.", () => {
            const inputFile = "./data/startup-funding.json";
            const output = where(inputFile, {companyName:"Pudding Media", city:"San Jose", round:'a', state:'CA'});
            const expectedOutput = [556];
            expect(expectedOutput).toStrictEqual(output);
        });
    });
    describe("findBy()", () => {
        it("Should return 'File does not exist.' if file path is invalid", () => {
            const inputFile = "";
            const output = findBy(inputFile);
            const expectedOutput = "File does not exist.";
            expect(expectedOutput).toBe(output);
        });
        it("Should return all data if no filter parameter is given.", () => {
            const inputFile = "./data/startup-funding.json";
            const output = findBy(inputFile);
            const expectedOutput = require(inputFile);
            expect(expectedOutput).toBe(output);
        });
        it("Should return the data indexes matching the parameter after filtering.", () => {
            const inputFile = "./data/startup-funding.json";
            const output = findBy(inputFile, {companyName:"LifeLock"});
            const expectedOutput = 0;
            expect(expectedOutput).toStrictEqual(output);
        });
        it("Should return -1 if no match is found.", () => {
            const inputFile = "./data/startup-funding.json";
            const output = findBy(inputFile, {companyName:"Ex2"});
            const expectedOutput = -1;
            expect(expectedOutput).toStrictEqual(output);
        });
        it("Should return the data indexes matching the parameter after filtering.", () => {
            const inputFile = "./data/startup-funding.json";
            const output = findBy(inputFile, {companyName:"LifeLock", city:"Tempe"});
            const expectedOutput = 0;
            expect(expectedOutput).toStrictEqual(output);
        });
        it("Should return the data indexes matching the parameter after filtering.", () => {
            const inputFile = "./data/startup-funding.json";
            const output = findBy(inputFile, {companyName:"LifeLock", city:"Tempe", round:'a'});
            const expectedOutput = 1;
            expect(expectedOutput).toStrictEqual(output);
        });
        it("Should return the data indexes matching the parameter after filtering.", () => {
            const inputFile = "./data/startup-funding.json";
            const output = findBy(inputFile, {companyName:"LifeLock", city:"Tempe", round:'b'});
            const expectedOutput = 0;
            expect(expectedOutput).toStrictEqual(output);
        });
        it("Should return the data indexes matching the parameter after filtering.", () => {
            const inputFile = "./data/startup-funding.json";
            const output = findBy(inputFile, {companyName:"Pudding Media", city:"San Jose", round:'a', state:'CA'});
            const expectedOutput = 556;
            expect(expectedOutput).toStrictEqual(output);
        });
    });
    describe("search()", () => {
        it("Should return -1 if file path is invalid", () => {
            const inputFile = [
                {
                  "permalink": "lifelock",
                  "company_name": "LifeLock",
                  "number_employees": 0,
                  "category": "web",
                  "city": "Tempe",
                  "state": "AZ",
                  "funded_date": "1-May-07",
                  "raised_amount": 6850000,
                  "raised_currency": "USD",
                  "round": "b"
                },
                {
                  "permalink": "lifelock",
                  "company_name": "LifeLock",
                  "number_employees": 0,
                  "category": "web",
                  "city": "Tempe",
                  "state": "AZ",
                  "funded_date": "1-Oct-06",
                  "raised_amount": 6000000,
                  "raised_currency": "USD",
                  "round": "a"
                },
                {
                  "permalink": "lifelock",
                  "company_name": "LifeLock",
                  "number_employees": 0,
                  "category": "web",
                  "city": "Tempe",
                  "state": "AZ",
                  "funded_date": "1-Jan-08",
                  "raised_amount": 25000000,
                  "raised_currency": "USD",
                  "round": "c"
                }];
            const output = search(inputFile, {company_name: "LifeLock"});
            const expectedOutput = [0,1,2];
            expect(expectedOutput).toStrictEqual(output);
        });
        it("Should return -1 if file path is invalid", () => {
            const inputFile = [
                {
                  "permalink": "lifelock",
                  "company_name": "LifeLock",
                  "number_employees": 0,
                  "category": "web",
                  "city": "Tempe",
                  "state": "AZ",
                  "funded_date": "1-May-07",
                  "raised_amount": 6850000,
                  "raised_currency": "USD",
                  "round": "b"
                },
                {
                  "permalink": "lifelock",
                  "company_name": "LifeLock",
                  "number_employees": 0,
                  "category": "web",
                  "city": "Tempe",
                  "state": "AZ",
                  "funded_date": "1-Oct-06",
                  "raised_amount": 6000000,
                  "raised_currency": "USD",
                  "round": "a"
                },
                {
                  "permalink": "lifelock",
                  "company_name": "LifeLock",
                  "number_employees": 0,
                  "category": "web",
                  "city": "Tempe",
                  "state": "AZ",
                  "funded_date": "1-Jan-08",
                  "raised_amount": 25000000,
                  "raised_currency": "USD",
                  "round": "c"
                }];
            const output = search(inputFile, {company_name: "LifeLock", round: 'a', city:'Tempe', state:'AZ'});
            const expectedOutput = [1];
            expect(expectedOutput).toStrictEqual(output);
        });
        it("Should return -1 if file path is invalid", () => {
            const inputFile = [
                {
                  "permalink": "lifelock",
                  "company_name": "LifeLock",
                  "number_employees": 0,
                  "category": "web",
                  "city": "Tempe",
                  "state": "AZ",
                  "funded_date": "1-May-07",
                  "raised_amount": 6850000,
                  "raised_currency": "USD",
                  "round": "b"
                },
                {
                  "permalink": "lifelock",
                  "company_name": "LifeLock",
                  "number_employees": 0,
                  "category": "web",
                  "city": "Tempe",
                  "state": "AZ",
                  "funded_date": "1-Oct-06",
                  "raised_amount": 6000000,
                  "raised_currency": "USD",
                  "round": "a"
                },
                {
                  "permalink": "lifelock",
                  "company_name": "LifeLock",
                  "number_employees": 0,
                  "category": "web",
                  "city": "Tempe",
                  "state": "AZ",
                  "funded_date": "1-Jan-08",
                  "raised_amount": 25000000,
                  "raised_currency": "USD",
                  "round": "c"
                }];
            const output = search(inputFile, {company_name: "LifeLock", round:'c'});
            const expectedOutput = [2];
            expect(expectedOutput).toStrictEqual(output);
        });
        it("Should return file content if file path is valid", () => {
            const inputFile = "./data/startup-funding.json";
            const output = readFile(inputFile);
            const expectedOutput = require(inputFile);
            expect(expectedOutput).toBe(output);
        });
    });
    describe("readFile()", () => {
        it("Should return -1 if file path is invalid", () => {
            const inputFile = "";
            const output = readFile(inputFile);
            const expectedOutput = -1;
            expect(expectedOutput).toBe(output);
        });
        it("Should return file content if file path is valid", () => {
            const inputFile = "./data/startup-funding.json";
            const output = readFile(inputFile);
            const expectedOutput = require(inputFile);
            expect(expectedOutput).toBe(output);
        });
    });
});