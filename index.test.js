import { filePathCheck } from "./index";
import { handleFile} from './handlefile';
import { main } from "./main";
import { describe } from "yargs";
import { expect, it } from "@jest/globals";


describe("index.js", ()=>{
    describe("supportingFunction", ()=>{
        it("Should return -1 if no argument is passed",()=>{
            const output = filePathCheck();
            expect(output).toBe(-1)
        }),
        it("Should handle wrong file name.", ()=>{
            const filePath = 'input.txt';
            const output = filePathCheck(filePath);
            expect(output).toBe(-1);
        }),
        it("Should handle wrong path name.", ()=>{
            const filePath = './data/input.txt';
            const output = filePathCheck(filePath);
            expect(output).toBe(-1);
        })
    })

    
    describe("handlefile with path", () => {
        it("should blah blah", () => {
        const filePath = './data/rainbow.txt';
        const output = handleFile(filePath);
        expect(output).toBe("file empty")

        })
        it("Should handle the empty text file", ()=>{
            const filePath = 'input.txt';
            const output = handleFile(filePath);
            // console.log(output.split(' ').length)
            // console.log(output);
            expect(output).toBe('file is empty');
        })
        
    })

    describe("main function", ()=>{
        it("hould return the correct string for general input file", ()=>{
            const inputString = 'Hi Rhea Chawla. Rhea Chawla. Rhea.';
            const output = main(inputString);
            expect(output).toBe('rhea=>3 chawla=>2 hi=>1 ');
        }),
        it("Should handle the excessive white spaces and special characters", ()=>{
            const inputString = 'my @ name is     rhea . chawla $$$$ rhea . people call me rhea';
            const output = main(inputString);
            expect(output).toBe('rhea=>3 my=>1 name=>1 is=>1 chawla=>1 people=>1 call=>1 me=>1 ');
        })
        it("Should return the string with output in ascending order", ()=>{
            const inputString = 'people played cricket in rain. people playing cricket could see the rainbow. they loved the rain in 2022 and said hi, 2022...'
            const output = main(inputString);
            expect(output).toBe('people=>2 cricket=>2 in=>2 rain=>2 the=>2 played=>1 playing=>1 could=>1 see=>1 rainbow=>1 they=>1 loved=>1 and=>1 said=>1 hi=>1 ');
        })
    })
})