
import { expect, it } from '@jest/globals';
import { readJSON, prepareQueryObject, search} from './utility.js';
import {where, findBy} from './main.js'

describe("StartUpFunding Project",() => {

    describe("readJSON file function testing", () => {
        it("should return -1 if no file path to the JSON file is passed.", () => {
            const expectedResult = -1;
            const recievedResult =  readJSON();
            expect(recievedResult).toBe(expectedResult);
        })
        it("should return -1 if there is a type error in file name.", () => {
            const expectedResult = -1;
            const localJSONFilePath = './data/abc.json'
            const recievedResult =  readJSON(localJSONFilePath);
            expect(recievedResult).toBe(expectedResult);  
        })
        it("should return the json object if a correct file path is passed to the function.", () => {
            const localJSONFilePath = './data/test.json';
            const expectedResult = readJSON(localJSONFilePath);
            const recievedResult = readJSON(localJSONFilePath);
            expect(recievedResult).toBe(expectedResult);

        })
    })

    describe("prepareQueryObject function testing", () => {
        it("should return the prepared queryObject with values set as parameters passed.", () => {
            const expectedResult = {"city": "abc", "company_name": "abc", "round": "abc", "state": "abc"};
            const recievedResult =  prepareQueryObject("abc", "abc", "abc", "abc");
            expect(recievedResult).toStrictEqual(expectedResult);
        })
        it("should return -1 if nothing is passed to the function.", () => {
            const expectedResult = -1;
            const recievedResult =  prepareQueryObject();
            expect(recievedResult).toStrictEqual(expectedResult);
        })
        it("should also return prepared query object if not all the four parameters are passed.", () =>{
            const expectedResult = {"city": "NewDelhi", "state": "Delhi"};
            const recievedResult =  prepareQueryObject(null, 'NewDelhi', 'Delhi', null);
            expect(recievedResult).toStrictEqual(expectedResult);
        })
        it("should also return prepared query object if not all the four parameters are passed.", () =>{
            const expectedResult = {"city": "Tempe", "company_name": "LifeLOck", "round": "b", "state": "AZ"};
            const recievedResult =  prepareQueryObject("LifeLOck", 'Tempe', 'AZ', "b");
            expect(recievedResult).toStrictEqual(expectedResult);
        })
    })

    describe("search function testing", () => {
        it("should return -1 if no queryObject is passed.", () => {
            const expectedResult = -1;
            const recievedResult =  search(null, {});
            expect(recievedResult).toStrictEqual(expectedResult);
        })
        it("should return -1 if no queryObject is passed.", () => {
            const expectedResult = -1;
            const recievedResult =  search({}, null);
            expect(recievedResult).toStrictEqual(expectedResult);
        })
    })

    describe("where function testing", () => {
        it("should return empty array if nothing is passed to the function.", () => {
            const expectedResult = [];
            const recievedResult =  where(null, null, null, null);
            expect(recievedResult).toStrictEqual(expectedResult);
        })
        it("should return all the filtered out object as a array.", () => {
            const expectedResult = [
                    {
                     "category": "web",
                     "city": "Tempe",
                     "company_name": "LifeLock",
                     "funded_date": "1-May-07",
                     "number_employees": 0,
                     "permalink": "lifelock",
                     "raised_amount": 6850000,
                     "raised_currency": "USD",
                     "round": "b",
                     "state": "AZ",
                  },
                ]
            const recievedResult =  where("LifeLock", null, "AZ", 'b');
            expect(recievedResult).toStrictEqual(expectedResult);
        })
        it("should return an empty array if nothing is filtered out", () => {
            const expectedResult = []
            const recievedResult =  where("LifeLock", "delhi", "AZ", 'b');
            expect(recievedResult).toStrictEqual(expectedResult);
        })
        
    })

    describe("where function testing", () => {
        it("should return NO such Matches function if nothing is passed to the function.", () => {
            const expectedResult = "No Such Matches";
            const recievedResult =  findBy(null, null, null, null);
            expect(recievedResult).toStrictEqual(expectedResult);
        })
        it("should return all the filtered out object as a array.", () => {
            const expectedResult = 
                    {
                     "category": "web",
                     "city": "Tempe",
                     "company_name": "LifeLock",
                     "funded_date": "1-May-07",
                     "number_employees": 0,
                     "permalink": "lifelock",
                     "raised_amount": 6850000,
                     "raised_currency": "USD",
                     "round": "b",
                     "state": "AZ",
                  };
                
            const recievedResult =  findBy("LifeLock", null, "AZ", 'b');
            expect(recievedResult).toStrictEqual(expectedResult);
        })
        it("should return a NO such Matches message if nothing is filtered out", () => {
            const expectedResult = "No Such Matches";
            const recievedResult =  findBy("LifeLock", "delhi", "AZ", 'b');
            expect(recievedResult).toStrictEqual(expectedResult);
        })

        
    })
    
    
})