import {supportingFunction} from './index';
import {handleFile} from './handlefile';
import {mainFunction} from './mainfunction'; 
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
            console.log(output);
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
            expect(output).toBe('my->1 name->1 is->1 munish->1 garg->2 ');
        })
        it("Should return the string with output in ascending order", ()=>{
            const inputString = 'munish munish garg 2022...'
            const output = mainFunction(inputString);
            expect(output).toBe('garg->1 2022->1 munish->2 ');
        })
    })
})