import {supportingFunction} from './index';
import {handleFile} from './handlefile';
import {mainFunction} from './mainfunction'; 
import {tfidfCalculator} from './tfidf.js';
describe("index.js", ()=>{
    describe("supportingFunction", ()=>{
        it("Should return -1 if no argument is passed",()=>{
            const output = supportingFunction();
            expect(output).toEqual(-1)
        })
        it("Should handle wrong file name.", ()=>{
            const filePath = 'inoput.txt';
            const output = supportingFunction(filePath);
            expect(output).toEqual(-1);
        })
        it("Should handle wrong path name.", ()=>{
            const filePath = './dataa/input.txt';
            const output = supportingFunction(filePath);
            expect(output).toEqual(-1);
        })
    })

    describe("handleFile", ()=>{
        it("Should handle the empty text file", ()=>{
            const filePath = 'input.txt';
            const output = handleFile(filePath);
            // console.log(output.split(' ').length)
            // console.log(output);
            expect(output).toBe('The file is empty.');
        })
    })

    describe("main function", ()=>{
        it("Should return the correct string for general input file", ()=>{
            const inputString = 'Munish Kumar Garg';
            const output = mainFunction(inputString);
            expect(output).toBe('munish->1 kumar->1 garg->1 ');
        })
        it("Should handle the excessive white spaces and special characters", ()=>{
            const inputString = 'my @ name is     munish . garg $$$$ garg.';
            const output = mainFunction(inputString);
            expect(output).toBe('garg->2 my->1 name->1 is->1 munish->1 ');
        })
        it("Should return the string with output in ascending order", ()=>{
            const inputString = 'munish munish garg 2022...'
            const output = mainFunction(inputString);
            expect(output).toBe('munish->2 garg->1 ');
        })
    })

    describe("tfidfCalculator", ()=>{
        it("should handle the case when no path is passed.", ()=>{
            const output = tfidfCalculator();
            expect(output).toEqual(-1);
        })

        it("Should handle the case when the wrong file path is passed.", ()=>{
            const output = tfidfCalculator();
            expect(output).toEqual(-1);
        })

        it("Should return the correct keyword for the correct file path", ()=>{
            const filePath = './data/rainbow.txt';
            const output = tfidfCalculator(filePath);
            expect(output).toBe('rainbow');
        })
    })
})