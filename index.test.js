// import { output } from "./index.js";
import { readFile } from "./readFile.js";
import { preProcessing } from "./preProcessing.js"
import { stringToArray, wordFrequency } from "./wordFrequency.js";
import { getFrequency } from "./wordFrequency.js";
import { printMap } from "./wordFrequency.js";
const inputFilePath = './data/testFileForReading.txt';
describe("index.js",() => {
    describe("output() -> readFile.js readFile()", () => {
        it("No arguments passed", () => {
            const text = readFile();
            expect(text).toBe(-1);
        })

        it("If file path passed doesnt exist", () => {
            const inputFile = './da/testFileForReading.txt';
            const text = readFile(inputFile);
            expect(text).toBe(-1);
        })
        
        it("If wrong file name passed", () => {
            const inputFile = './data/testing.txt';
            const text = readFile(inputFile);
            expect(text).toBe(-1);
        })
        
        it("If file is empty", () => {
            const inputFile = './data/emptyFile.txt';
            const text = readFile(inputFile);
            expect(text).toBe(-1)
        })

        it("Should read content of file", () => {
            const text = readFile(inputFilePath);
            expect(text).toBe("My name is Love Kaushik.");
        })
    })  
    describe("output() -> preProcessing.js preProcessing()", () => {
        it("If data is not passed for processing", () => {
            const text = preProcessing();
            expect(text).toBe(-1);
        })
        it("If string passed is Empty", () => {
            const text = preProcessing("");
            expect(text).toBe(-1);
        })
        it("If spaces are passed as string", () => {
            const text = preProcessing("   ");
            expect(text).toBe(-1);
        })
        it("If only special characters are passed as string", () => {
            const text = preProcessing(".,!#@#");
            expect(text).toBe("");
        })
        it("If string passed consists of only number", () => {
            const text = preProcessing(2022);
            expect(text).toBe(2022);
        })
        it("If string passed consists of numbers with spaces at start and end", () => {
            const text = preProcessing("  2022    ");
            expect(text).toBe(2022);
        })
        it("If string is passed numbers separated by multiple spaces", () => {
            const text = preProcessing("   2022     2001  ");
            expect(text).toBe("2022 2001");
        })
        it("return all content in lower case for further preProcessing", () => {
            const filePath = './data/txtFileForProcessing/toTestLowerCase.txt';
            const inputForPreProcessing = readFile(filePath);
            const text = preProcessing(inputForPreProcessing);
            expect(text).toBe("my name is love kaushik")
        })
        it("return all content after removing ('s)", () => {
            const filePath = "./data/txtFileForProcessing/remove('s).txt";
            const inputForPreProcessing = readFile(filePath);
            const text = preProcessing(inputForPreProcessing);
            expect(text).toBe("hi everyone today wheather is so nice have you all eaten apple")
        })
        it("return all content after removing special characters and extra spaces", () => {
            const filePath = "./data/txtFileForProcessing/specialCharacters.txt";
            const inputForPreProcessing = readFile(filePath);
            const text = preProcessing(inputForPreProcessing);
            expect(text).toBe("hi everyone is great my name is love kaushik")
        })
        it("combination of number and words", () => {
            const text = preProcessing(" 2022 Hello!, hope this will be better then 2021.");
            expect(text).toBe("2022 hello hope this will be better then 2021");
        })
    })  
    describe("output() wordFrequency.js wordFrequency()", () => {
        it("stringToArray() -> Arguments not passed", () => {
            const text = stringToArray();
            expect(text).toBe(-1);
        })
        it("stringToArray() -> If empty String is passed", () => {
            const text = stringToArray("");
            expect(text).toBe(-1);
        })
        it("stringToArray() -> After splitting the string from space", () => {
            const text = stringToArray("hi my name is love kaushik");
            expect(text).toStrictEqual(["hi","my","name","is","love","kaushik"]);
        })
        it("getFrequency() -> Getting Occurence of words", () => {
            const arr = stringToArray("cricket is game cricket is nice game is nice bye");
            const freq = getFrequency(arr);
            const result = printMap(freq);
            expect(result).toStrictEqual("cricket:2 is:3 game:2 nice:2 bye:1");
        })
        it("sort() -> sort the map according to frequency", () => {
            const result = wordFrequency("cricket is game cricket is nice game is nice bye");
            expect(result).toStrictEqual("bye:1 cricket:2 game:2 nice:2 is:3");
        })
    })  
}) 