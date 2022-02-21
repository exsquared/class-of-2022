import { readFile, findBy, where, optionsSelection } from './search.js';
describe("search.js", () => {
    describe("readFile", () => {
        it("1. should return error if path isn't provided.", () => {
            const Result = readFile();
            expect(Result).toBe(0);
        });
        it("2. should return error if path is incorrect.", () => {
            const Result = readFile("some/wrong/path");
            expect(Result).toBe(0);
        });
        it("3 .Should return file content if file path is valid", () => {
            const file_path = "./data/startup-funding.json";
            const output = readFile(file_path);
            const Result = require(file_path);
            expect(Result).toBe(output);
        });    
    });
    describe("optionSelection", () => {
        it("1. should return keys which are not null" , () => {
            const Result = optionsSelection({company_name: "LifeLock", state: null});
            expect(Result).toEqual({ company_name: 'LifeLock' });
        });
        it("2. should only return keys which are required" , () => {
            const Result = optionsSelection({company_name: "LifeLock", country: "Australia"});
            expect(Result).toEqual({ company_name: 'LifeLock' });
        });
        it("3. should return keys which are required" , () => {
            const Result = optionsSelection({company_name: "LifeLock", country: "Australia", city: "Meerut"});
            expect(Result).toEqual({ company_name: 'LifeLock', city: 'Meerut' });
        });
        it("4. should return -1 when no parametrs is passed." , () => {
            const Result = optionsSelection();
            expect(Result).toEqual(-1);
        });
        it("5. should return -1 when no parametrs is passed." , () => {
            const Result = optionsSelection("");
            expect(Result).toEqual(-1);
        });
        it("6. should return -1 when empty object is passed." , () => {
            const Result = optionsSelection({});
            expect(Result).toEqual(-1);
        });
        it("7. should return empty object if all values are null.", () => {
            const Result = optionsSelection({company_name: null, city: null, state: null, round: null});
            expect(Result).toEqual({});
        });
    });
    describe("findBy", () => {
       it("1. should return the object which matches the input.", () => {
            const dataset = require("./data/startup-funding.json");
            const options = {"company_name": "LifeLock", "city": "Tempe", "state": "AZ", "round": "a"}
            const Result = findBy(dataset,options);
            expect(Result).toEqual({
            permalink: 'lifelock',
            company_name: 'LifeLock',
            number_employees: 0,
            category: 'web',
            city: 'Tempe',
            state: 'AZ',
            funded_date: '1-Oct-06',
            raised_amount: 6000000,
            raised_currency: 'USD',
            round: 'a'
            });
        });
        it("2. should return the objects if only 1 entry in options." , () => {
            const dataset = require("./data/startup-funding.json");
            const options = {"company_name": "LifeLock"}
            const Result = findBy(dataset,options);
            expect(Result).toEqual({
                permalink: 'lifelock',
                company_name: 'LifeLock',
                number_employees: 0,
                category: 'web',
                city: 'Tempe',
                state: 'AZ',
                funded_date: '1-May-07',
                raised_amount: 6850000,
                raised_currency: 'USD',
                round: 'b'
            });
        });
        it ("3. should return -1 if wrong path is passed.", () => {
            const dataset = readFile("./data/startup-fund.json");
            const options = {"company_name": "LifeLock"}
            const Result = findBy(dataset,options);
            expect(Result).toEqual(-1);
        });
        it ("4. should return Not Found if empty dataset is passed.", () => {
            const dataset = [];
            const options = {"company_name": "LifeLock"}
            const Result = findBy(dataset, options);
            expect(Result).toEqual("Not Found.");
        });
    });
    describe("where", () => {
        it("1. should return all the object which matches the input.", () => {
             const dataset = require("./data/startup-funding.json");
             const options = {"company_name": "LifeLock", "city": "Tempe", "state": "AZ", "round": "a"}
             const Result = findBy(dataset,options);
             expect(Result).toEqual(
                {
                  permalink: 'lifelock',
                  company_name: 'LifeLock',
                  number_employees: 0,
                  category: 'web',
                  city: 'Tempe',
                  state: 'AZ',
                  funded_date: '1-Oct-06',
                  raised_amount: 6000000,
                  raised_currency: 'USD',
                  round: 'a'
                }
              );
         });
        it("2. should return the objects if only 1 entry in options." , () => {
            const dataset = require("./data/startup-funding.json");
            const options = {"company_name": "LifeLock", "state": "AZ"};
            const Result = findBy(dataset,options);
            expect(Result).toEqual(
                {
                  permalink: 'lifelock',
                  company_name: 'LifeLock',
                  number_employees: 0,
                  category: 'web',
                  city: 'Tempe',
                  state: 'AZ',
                  funded_date: '1-May-07',
                  raised_amount: 6850000,
                  raised_currency: 'USD',
                  round: 'b'
                },
                {
                  permalink: 'lifelock',
                  company_name: 'LifeLock',
                  number_employees: 0,
                  category: 'web',
                  city: 'Tempe',
                  state: 'AZ',
                  funded_date: '1-Oct-06',
                  raised_amount: 6000000,
                  raised_currency: 'USD',
                  round: 'a'
                },
                {
                  permalink: 'lifelock',
                  company_name: 'LifeLock',
                  number_employees: 0,
                  category: 'web',
                  city: 'Tempe',
                  state: 'AZ',
                  funded_date: '1-Jan-08',
                  raised_amount: 25000000,
                  raised_currency: 'USD',
                  round: 'c'
                }
              );
            });
        it ("3. should return -1 if wrong path is passed.", () => {
            const dataset = readFile("./data/startup-fund.json");
            const options = {"company_name": "LifeLock"}
            const Result = findBy(dataset,options);
            expect(Result).toEqual(-1);
            });
        it ("4. should return Not Found if empty dataset is passed.", () => {
            const dataset = [];
            const options = {"company_name": "LifeLock"}
            const Result = findBy(dataset, options);
            expect(Result).toEqual("Not Found.");
        });
    }); 
});