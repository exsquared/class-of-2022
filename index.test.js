import { sortTextByFrequency, readInputFile, preprocessData, countWordFrequency, sortWordFrequencyCount } from './index';

describe("Test Case for Finding Word Frequency TOD", () => {
    describe("sortWordByFrequency()", () => {
        it("Should return 0 if undefined input is given.", () => {
            var inputFile;
            const expectedOutput = 0;
            const receivedOutput = sortTextByFrequency(inputFile);
            expect(receivedOutput).toBe(expectedOutput);
        });
        it("Should return 0 if no parameter is given.", () => {
            const expectedOutput = 0;
            const receivedOutput = sortTextByFrequency();
            expect(receivedOutput).toBe(expectedOutput);
        });
        it("Should return 0 if inputFile is empty string.", () => {
            const inputFile = "";
            const inputFileType = 0;
            const expectedOutput = 0;
            const receivedOutput = sortTextByFrequency(inputFile, inputFileType);
            expect(receivedOutput).toBe(expectedOutput);
        });
        it("Should return sorted Map if a map is passed.", () => {
            const inputFile = "rainbow.txt";
            const dir = "data";
            const expectedOutput = "rainbow";
            const receivedOutput = sortTextByFrequency(inputFile, dir);
            expect(receivedOutput).toStrictEqual(expectedOutput);
        });
    });
    describe("readInputFile()", () => {
        it("Should return null if inputFile is not given.", () => {
            const expectedOutput = null;
            const receivedOutput = readInputFile();
            expect(receivedOutput).toBe(expectedOutput);
        });
        it("Should return null if incorrect path is given.", () => {
            const inputFile = "data/crickets.txt";
            const inputFileType = 1;
            const expectedOutput = null;
            const receivedOutput = readInputFile(inputFile, inputFileType);
            expect(receivedOutput).toBe(expectedOutput);
        });
    });
    describe("preprocessData()", () => {
        it("Should return empty string in array if input is empty string.", () => {
            const inputFile = "";
            const expectedOutput = '';
            const receivedOutput = preprocessData(inputFile);
            expect(receivedOutput).toStrictEqual(expectedOutput);
        });
        it("Should return text with all symbols removed if valid text is given.", () => {
            const inputFile = "test\r\n\r\r\r\\";
            const expectedOutput = 'test';
            const receivedOutput = preprocessData(inputFile);
            expect(receivedOutput).toStrictEqual(expectedOutput);
        });
        it("Should return text with all symbols removed if valid text is given.", () => {
            const inputFile = "hello, play with bat-and-ball and with me.";
            const expectedOutput = "hello play with bat and ball and with me";
            const receivedOutput = preprocessData(inputFile);
            expect(receivedOutput).toStrictEqual(expectedOutput);
        });
        it("Should return text with all symbols removed if valid text is given and has multiple consecutive spaces.", () => {
            const inputFile = "hello,   play with bat-and-ball and with me.";
            const expectedOutput = "hello play with bat and ball and with me";
            const receivedOutput = preprocessData(inputFile);
            expect(receivedOutput).toStrictEqual(expectedOutput);
        });
    });
    describe("countWordFrequency()", () => {
        it("Should return Map with single entry of empty string if input is empty string.", () => {
            const inputFile = "";
            const expectedOutput = new Map();
            expectedOutput.set("", 1);
            const receivedOutput = countWordFrequency(inputFile);
            expect(receivedOutput).toStrictEqual(expectedOutput);
        });
        it("Should return Map if input is is valid", () => {
            const inputFile = "from what are you you doing no no no";
            const expectedOutput = new Map();
            expectedOutput.set('from', 1);
            expectedOutput.set('what', 1);
            expectedOutput.set('are', 1);
            expectedOutput.set('you', 2);
            expectedOutput.set('doing', 1);
            expectedOutput.set('no', 3);
            const receivedOutput = countWordFrequency(inputFile);
            expect(receivedOutput).toStrictEqual(expectedOutput);
        });
    });
   /* describe("sortTextByFrequency()", () => {
        
    }); */
});