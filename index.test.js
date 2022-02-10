// import { output } from "./index.js";
import { readFile } from "./readFile.js";
import { preProcessing } from "./preProcessing.js"
import { sort, stringToArray, wordFrequency } from "./wordFrequency.js";
import { getFrequency } from "./wordFrequency.js";
import { printMap } from "./index.js";
import { checkRelevanceOfWords } from "./tf-idf.js";
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
            expect(text).toBe(-1);
        })
        it("If string passed consists of only number", () => {
            const text = preProcessing(2022);
            expect(text).toBe(-1);
        })
        it("If string passed consists of numbers with spaces at start and end", () => {
            const text = preProcessing("  2022    ");
            expect(text).toBe(-1);
        })
        it("If string is passed numbers separated by multiple spaces", () => {
            const text = preProcessing("   2022     2001  ");
            expect(text).toBe(-1);
        })
        it("return all content in lower case for further preProcessing", () => {
            const text = preProcessing("My name is Love Kaushik");
            expect(text).toBe("my name is love kaushik")
        })
        it("return all content after removing ('s)", () => {
            const text = preProcessing("Hi everyone today's wheather is so nice have you all eaten apple's");
            expect(text).toBe("hi everyone today wheather is so nice have you all eaten apple")
        })
        it("return all content after removing special characters and extra spaces", () => {
            const text = preProcessing("Hi!!!, everyone is great my name is Love Kaushik.");
            expect(text).toBe("hi everyone is great my name is love kaushik")
        })
        it("combination of number and words", () => {
            const text = preProcessing(" 2022 Hello!, hope this will be better then 2021.");
            expect(text).toBe("hello hope this will be better then");
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
        it("if for printing we passed something else instead of a map", () => {
            const result = printMap("hello");
            expect(result).toBe(-1);
        })
        it("if nothing passed for printing", () => {
            const result = printMap();
            expect(result).toBe(-1);
        })
        it("sort() -> sort the map according to frequency", () => {
            const map = wordFrequency("cricket is game cricket is nice game is nice bye");
            const result = printMap(map);
            expect(result).toStrictEqual("is:3 cricket:2 game:2 nice:2 bye:1");
        })
        it("sort() -> sort the map according to frequency", () => {
            const result = wordFrequency("");
            expect(result).toBe(-1);
        })

    })  
    describe("Testing for tf-idf", () => {
        it("if string is empty", () => {
            const result = checkRelevanceOfWords("");
            expect(result).toBe(-1);
        })
        it("if argument passed is null", () => {
            const result = checkRelevanceOfWords();
            expect(result).toBe(-1);
        })
        it("check most relevant word in query document", () => {
            const data = readFile('./data/cricket.txt');
            const processedData = preProcessing(data);
            const frequency = wordFrequency (processedData);
            const relevance = checkRelevanceOfWords(frequency);
            const sorted = sort(relevance);
            const [result] = sorted.keys();
            expect(result).toBe('cricket');
        })
    })
}) 