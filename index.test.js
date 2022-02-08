import { frequencyCounter, readFile, preprocessFile, sortResultByCount } from './index';

describe("index", () => {
    describe("filePath", () => {
        it("1. should return 0 if no path is provided." , () => {
            const Expected = readFile();
            expect(Expected).toEqual(0);
        });
        it("2. should return 0 if empty string is provided." , () => {
            const Expected = readFile("");
            expect(Expected).toEqual(0);
        });
        it("3. should return 0 if wrong path is provided is provided." , () => {
            const Expected = readFile("./data/hut");
            expect(Expected).toEqual(0);
        });
        it("4. should return 0 if file is empty." , () => {
            const Expected = readFile("");
            expect(Expected).toEqual(0);
        });
        it("5. should return 0 if empty string is provided." , () => {
            const Expected = readFile("");
            expect(Expected).toEqual(0);
        });
    });
    describe("frequencyCounter.", () => {
        it("1. should return 0 if empty string is provided.", () => {
            const Expected = frequencyCounter("");
            expect(Expected).toEqual(0);
        });
        it("2. should return count of words of string.", () => {
            const Expected = frequencyCounter("Hello this is first line");
            expect(Expected).toEqual({hello: 1, this:1, is: 1, first:1,line:1});
        });
    });
    describe("prepocessFile", () => {
        it("it should return empty string if empty string id passed.", () => {
            const Expected = preprocessFile("");
            expect(Expected).toEqual(0);
        });
        it("it should return empty string without special characters.", () => {
            const Expected = preprocessFile("good-morning world!");
            expect(Expected).toEqual("good morning world");
        });
        it("it should return empty string without special characters.", () => {
            const Expected = preprocessFile("This is a sentence with period.");
            expect(Expected).toEqual("this is a sentence with period");
        });
    });
    describe("sortResultByCount", () => {
        it("should sort according to values.", () => {
            const Expected = sortResultByCount({hat:5, that:3, was:6, good:8, not:10});
            expect(Expected).toEqual({ that: 3, hat: 5, was: 6, good: 8, not: 10 });
        });
    });
});