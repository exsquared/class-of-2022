import { createFrequencyMapFromWords, countWordFrequency, processData, readInputFile,calculateTf,calculateIdf} from "./index.js";

describe("test cases for CountWord TDD",()=>{
    describe("contWordFrequency()", () => {
        it("Should return 0 if undefined input is given.", () => {
            var inputFile;
            const expectedOutput = 0;
            const receivedOutput = countWordFrequency(inputFile);
            expect(receivedOutput).toBe(expectedOutput);
        });
        it("Should return 0 if no parameter is given.", () => {
            const expectedOutput = 0;
            const receivedOutput = countWordFrequency();
            expect(receivedOutput).toBe(expectedOutput);
        });
        it("Should return 0 if incorrect path is given.", () => {
            const inputFile = "data/crickets.txt";
            const inputFileType = 1;
            const expectedOutput = 0;
            const receivedOutput = countWordFrequency(inputFile, inputFileType);
            expect(receivedOutput).toBe(expectedOutput);
        });
        it("Should return 0 if inputFile is empty string.", () => {
            const inputFile = "";
            const inputFileType = 0;
            const expectedOutput = 0;
            const receivedOutput = countWordFrequency(inputFile, inputFileType);
            expect(receivedOutput).toBe(expectedOutput);
        });
        

    });
    
    
});   