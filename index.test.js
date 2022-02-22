import {findBy,where,readInputFile,search} from "./funding";

describe("test cases for Funding TDD",()=>{
    describe("findBy()", () => {
        it("Should return first result matching the condition", () => {
            
            const expectedOutput = {
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
              };
            const receivedOutput = findBy('LifeLock',null,null,null);
            expect(receivedOutput).toStrictEqual(expectedOutput);
        });
        it("Should return first result matching the condition", () => {
            
            const expectedOutput = {
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
              };
            const receivedOutput = findBy(null,null,null,'b');
            expect(receivedOutput).toStrictEqual(expectedOutput);
        });
        it("Should return first result matching the condition", () => {
            
            const expectedOutput = {
                permalink: 'infusionsoft',
                company_name: 'Infusionsoft',
                number_employees: 105,
                category: 'software',
                city: 'Gilbert',
                state: 'AZ',
                funded_date: '1-Oct-07',
                raised_amount: 9000000,
                raised_currency: 'USD',
                round: 'a'
              }
            const receivedOutput = findBy('Infusionsoft',null,null,null);
            expect(receivedOutput).toStrictEqual(expectedOutput);
        });
        it("Should return first result matching the condition", () => {
            
            const expectedOutput = {
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
              }
            const receivedOutput = findBy(null,null,'AZ',null);
            expect(receivedOutput).toStrictEqual(expectedOutput);
        });
        it("Should return first result matching the condition", () => {
            
            const expectedOutput = {
                permalink: 'chosenlist-com',
                company_name: 'ChosenList.com',
                number_employees: 5,
                category: 'web',
                city: 'Scottsdale',
                state: 'AZ',
                funded_date: '1-Oct-06',
                raised_amount: 140000,
                raised_currency: 'USD',
                round: 'seed'
              }
            const receivedOutput = findBy('ChosenList.com',null,null,null);
            expect(receivedOutput).toStrictEqual(expectedOutput);
        });
        
        
        
        

    });
    describe("readInputFile file function testing", () => {
        it("should return -1 if no file path to the JSON file is passed.", () => {
            const expectedResult = null;
            const recievedResult =  readInputFile();
            expect(recievedResult).toStrictEqual(expectedResult);
        })
        it("should return -1 if there is a type error in file name.", () => {
            const expectedResult = null;
            const localJSONFilePath = "./data/unding.json";
            const recievedResult =  readInputFile(localJSONFilePath);
            expect(recievedResult).toStrictEqual(expectedResult);  
        })
        it("should return the json object if a correct file path is passed to the function.", () => {
            const localJSONFilePath = "./data/startup-funding.json";
            const expectedResult = readInputFile(localJSONFilePath);
            const recievedResult = readInputFile(localJSONFilePath);
            expect(recievedResult).toBe(expectedResult);

        })
    })
    describe("where()", () => {
        it("Should return first result matching the condition", () => {
            
            const expectedOutput = [
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
              ]
            const receivedOutput = where('LifeLock',null,null,null);
            expect(receivedOutput).toStrictEqual(expectedOutput);
        });
        it("Should return first result matching the condition", () => {
            
            const expectedOutput = [
                {
                  permalink: 'infusionsoft',
                  company_name: 'Infusionsoft',
                  number_employees: 105,
                  category: 'software',
                  city: 'Gilbert',
                  state: 'AZ',
                  funded_date: '1-Oct-07',
                  raised_amount: 9000000,
                  raised_currency: 'USD',
                  round: 'a'
                }
              ]
            const receivedOutput = where('Infusionsoft',null,null,null);
            expect(receivedOutput).toStrictEqual(expectedOutput);
        });
        it("Should return first result matching the condition", () => {
            
            const expectedOutput = [
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
                },
                {
                  permalink: 'mycityfaces',
                  company_name: 'MyCityFaces',
                  number_employees: 7,
                  category: 'web',
                  city: 'Scottsdale',
                  state: 'AZ',
                  funded_date: '1-Jan-08',
                  raised_amount: 50000,
                  raised_currency: 'USD',
                  round: 'seed'
                },
                {
                  permalink: 'flypaper',
                  company_name: 'Flypaper',
                  number_employees: 0,
                  category: 'web',
                  city: 'Phoenix',
                  state: 'AZ',
                  funded_date: '1-Feb-08',
                  raised_amount: 3000000,
                  raised_currency: 'USD',
                  round: 'a'
                },
                {
                  permalink: 'infusionsoft',
                  company_name: 'Infusionsoft',
                  number_employees: 105,
                  category: 'software',
                  city: 'Gilbert',
                  state: 'AZ',
                  funded_date: '1-Oct-07',
                  raised_amount: 9000000,
                  raised_currency: 'USD',
                  round: 'a'
                },
                {
                  permalink: 'gauto',
                  company_name: 'gAuto',
                  number_employees: 4,
                  category: 'web',
                  city: 'Scottsdale',
                  state: 'AZ',
                  funded_date: '1-Jan-08',
                  raised_amount: 250000,
                  raised_currency: 'USD',
                  round: 'seed'
                },
                {
                  permalink: 'chosenlist-com',
                  company_name: 'ChosenList.com',
                  number_employees: 5,
                  category: 'web',
                  city: 'Scottsdale',
                  state: 'AZ',
                  funded_date: '1-Oct-06',
                  raised_amount: 140000,
                  raised_currency: 'USD',
                  round: 'seed'
                },
                {
                  permalink: 'chosenlist-com',
                  company_name: 'ChosenList.com',
                  number_employees: 5,
                  category: 'web',
                  city: 'Scottsdale',
                  state: 'AZ',
                  funded_date: '25-Jan-08',
                  raised_amount: 233750,
                  raised_currency: 'USD',
                  round: 'angel'
                }
            ];
            const receivedOutput = where(null,null,'AZ',null);
            expect(receivedOutput).toStrictEqual(expectedOutput);
        });
        it("Should return first result matching the condition", () => {
            
            const expectedOutput = [
                {
                  permalink: 'chosenlist-com',
                  company_name: 'ChosenList.com',
                  number_employees: 5,
                  category: 'web',
                  city: 'Scottsdale',
                  state: 'AZ',
                  funded_date: '1-Oct-06',
                  raised_amount: 140000,
                  raised_currency: 'USD',
                  round: 'seed'
                },
                {
                  permalink: 'chosenlist-com',
                  company_name: 'ChosenList.com',
                  number_employees: 5,
                  category: 'web',
                  city: 'Scottsdale',
                  state: 'AZ',
                  funded_date: '25-Jan-08',
                  raised_amount: 233750,
                  raised_currency: 'USD',
                  round: 'angel'
                }
              ];
            const receivedOutput = where('ChosenList.com',null,null,null);
            expect(receivedOutput).toStrictEqual(expectedOutput);
        });
        
        
        
        

    });
    
    
});   
