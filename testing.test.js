import {fileReading} from './fileReading';
import {findBy} from './main';
import {whereFunction} from './whereFunction';

describe("fileReading.js", ()=>{
    describe("fileReading function", ()=>{
        it("Should handle the case when there is no file at specified path.", ()=>{
            const FILEPATH = './data/random.json'
            const output = fileReading(FILEPATH);
            expect(output).toEqual(-1);
        })

        it("Should handle the case when no parameter is passed to the function.", ()=>{
            const output = fileReading();
            expect(output).toEqual(-1);
        })

        it("Should handle the case when the file is empty.", ()=>{
            const FILEPATH = './testdata/test1.json'
            const output = fileReading(FILEPATH)
            expect(output).toEqual(-1);
        })

        it("Should handle the file when the array is empty.", ()=>{
            const FILEPATH = './data/test2.json';
            const output = fileReading(FILEPATH)
            expect(output).toEqual(-1);
        })
    })    
})

describe("main.js", ()=>{
    describe("findBy", ()=>{
        it("Should handle the case when no parameter is passed.", ()=>{
            const output = findBy();
            expect(output).toEqual(-1);
        })

        it("Should handle the case when more than 4 number of parameters are passed.", ()=>{
            const obj = {
                "company_name": 'EX Squared',
                "city": 'Faridabad',
                "state": 'Haryana',
                "round": 'a',
                "random": '12334'
            }
            const output = findBy(obj);
            expect(output).toEqual(-1);
        })

        it("Should handle the case when all the propertyNames are wrong.", ()=>{
            const obj = {
                "compaxnyName": 'EX Squared',
                "cityNasme": 'Faridabad',
                "stateNaawme": 'Haryana',
                "roundww": 'a'
            }
            const output = findBy(obj);
            expect(output).toEqual(-1);
        })

        it("Should handle the case when all the properties have null value.", ()=>{
            const obj = {
                "company_name": null,
                "city": null,
                "state": null,
                "round": null
            }
            const output = findBy(obj);
            expect(output).toEqual(-1);
        })

        it("Should handle the wrong type of values for the given properties.", ()=>{
            const obj = {
                "company_name": 123,
                "city":'Faridabad'
            }
            const output = findBy(obj);
            expect(output).toEqual(-1);
        })

        it("Should handle the lowercases and uppercases.", ()=>{
            const obj = {
                "company_name":"LIFELOCK"
            }
            const output = findBy(obj);
            expect(output).toEqual(0);
        })

        it("Should return the correct output for correct input.", ()=>{
            const obj = {
                "company_name":"LifeLock",
                "city":"Tempe" 
            }
            const output = findBy(obj);
            expect(output).toEqual(0);
        })

        it("Should handle the shuffled input.", ()=>{
            const obj = {
                "city":null,
                "company_name":"Lifelock"
            }
            const output = findBy(obj);
            expect(output).toEqual(0);
        })

        it("Should handle the case when the company name is not present.", ()=>{
            const obj = {
                "company_name":"EX Squared"
            }
            const output = findBy(obj);
            expect(output).toEqual(-1);
        })
    })
})

//As the basic functionalities of both the functions are same, most of the test cases for both of the functions will be same..
describe("where.js", ()=>{
    describe("whereFunction", ()=>{
        it("Should handle the case when no parameter is passed.", ()=>{
            const output = whereFunction();
            expect(output).toEqual(-1);
        })

        it("Should handle the case when more than 4 number of parameters are passed.", ()=>{
            const obj = {
                "company_name": 'EX Squared',
                "city": 'Faridabad',
                "state": 'Haryana',
                "round": 'a',
                "random": '12334'
            }
            const output = whereFunction(obj);
            expect(output).toEqual(-1);
        })

        it("Should handle the case when all the propertyNames are wrong.", ()=>{
            const obj = {
                "compaxnyName": 'EX Squared',
                "cityNasme": 'Faridabad',
                "stateNaawme": 'Haryana',
                "roundww": 'a'
            }
            const output = whereFunction(obj);
            expect(output).toEqual(-1);
        })

        it("Should handle the case when all the properties have null value.", ()=>{
            const obj = {
                "company_name": null,
                "city": null,
                "state": null,
                "round": null
            }
            const output = whereFunction(obj);
            expect(output).toEqual(-1);
        })

        it("Should handle the wrong type of values for the given properties.", ()=>{
            const obj = {
                "company_name": 123,
                "city":'Faridabad'
            }
            const output = whereFunction(obj);
            expect(output).toEqual(-1);
        })

        it("Should handle the lowercases and uppercases.", ()=>{
            const obj = {
                "company_name":"LIFELOCK"
            }
            const output = whereFunction(obj);
            expect(output).toEqual([0, 1, 2]);
        })

        it("Should return the correct output for correct input.", ()=>{
            const obj = {
                "company_name":"LifeLock",
                "city":"Tempe" 
            }
            const output = whereFunction(obj);
            expect(output).toEqual([0, 1, 2]);
        })

        it("Should handle the shuffling within an object in input.", ()=>{
            const obj = {
                "city":null,
                "company_name":"Pudding Media"
            }
            const output = whereFunction(obj);
            expect(output).toEqual([556]);
        })

        it("Should handle the case when the company name is not present in the dataset.", ()=>{
            const obj = {
                "company_name":"EX Squared"
            }
            const output = whereFunction(obj);
            expect(output).toEqual(-1);
        })
    })
})