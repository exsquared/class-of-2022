import {wordCounterofDocuments, findTDIDFOfTargetDocument, findIDFofTargetDocument, findTermFrequencyofTargetDocument, wordFrequencyCount, readFile, preprocessFile, frequencyCounter, sortResultByCount,q
 } from './tf-idf.js';

describe("tf-idf", () => {
    describe("findTFIDFOfTargetDocument", () => {
        it("1. should return 0 if no path is provided.", () => {
            const Expected = findTDIDFOfTargetDocument();
            expect(Expected).toEqual(0);
        });
        it("2. should return TFIDF values of all words if path is provided.", () => {
            const Expected = findTDIDFOfTargetDocument('./data/example.txt');
            expect(Expected).toEqual({"a": -0.002119545914674962, "all": 0.008882790284689248, "allows": 0.030887462683417667, "also": 0.0024468361877342595, "and": -0.002119545914674962, "array": 0.030887462683417667, "asynchronous": 0.030887462683417667, "be": 0.016022487458152993, "callback": 0.030887462683417667, "can": 0.007340508563202779, "directory": 0.030887462683417667, "display": 0.030887462683417667, "displayed": 0.030887462683417667, "file": 0.01988512648405346, "filenames": 0.030887462683417667, "files": 0.09266238805025301, "foreach": 0.030887462683417667, "from": 0, "fs": 0.030887462683417667, "function": 0.01988512648405346, "in": -0.004239091829349924, "instead": 0.01344917238709847, "it": 0.005340829152717664, "loop": 0.030887462683417667, "looped": 0.030887462683417667, "method": 0.01344917238709847, "names": 0.01988512648405346, "of": -0.008478183658699848, "one": 0.008882790284689248, "place": 0.01988512648405346, "present": 0.01988512648405346, "readdir": 0.030887462683417667, "returned": 0.01988512648405346, "returns": 0.030887462683417667, "that": 0.0024468361877342595, "the": -0.01907591323207466, "themselves": 0.01988512648405346, "this": 0.010681658305435328, "through": 0.008882790284689248, "to": -0.002119545914674962, "used": 0.01344917238709847, "using": 0.01988512648405346, "variation": 0.030887462683417667, "with": 0});
        });
    });
    describe("wordCounterofDocuments", () => {
        it("1. should return 0 if no path is provided." , () => {
            const Expected = wordCounterofDocuments();
            expect(Expected).toEqual(0);
        });
        it ("2. should return 0 if empty string is provided.", ()=> {
            const Expected = wordCounterofDocuments("");
            expect(Expected).toEqual(0);
        });
    });
    describe("findIDFOfTargetDocument", () => {
        it("1. should return 0 if no path is provided.", () => {
            const Expected = findIDFofTargetDocument();
            expect(Expected).toEqual(0);
        });
        it("2. should return TFIDF values of all words if path is provided.", () => {
            const Expected = findIDFofTargetDocument('./data/example.txt');
            expect(Expected).toEqual({"a": -0.13353139262452263, "all": 0.5596157879354227, "allows": 1.9459101490553132, "also": 0.15415067982725836, "and": -0.13353139262452263, "array": 1.9459101490553132, "asynchronous": 1.9459101490553132, "be": 0.33647223662121284, "callback": 1.9459101490553132, "can": 0.15415067982725836, "directory": 1.9459101490553132, "display": 1.9459101490553132, "displayed": 1.9459101490553132, "file": 1.252762968495368, "filenames": 1.9459101490553132, "files": 1.9459101490553132, "foreach": 1.9459101490553132, "from": 0, "fs": 1.9459101490553132, "function": 1.252762968495368, "in": -0.13353139262452263, "instead": 0.8472978603872037, "it": 0.33647223662121284, "loop": 1.9459101490553132, "looped": 1.9459101490553132, "method": 0.8472978603872037, "names": 1.252762968495368, "of": -0.13353139262452263, "one": 0.5596157879354227, "place": 1.252762968495368, "present": 1.252762968495368, "readdir": 1.9459101490553132, "returned": 1.252762968495368, "returns": 1.9459101490553132, "that": 0.15415067982725836, "the": -0.13353139262452263, "themselves": 1.252762968495368, "this": 0.33647223662121284, "through": 0.5596157879354227, "to": -0.13353139262452263, "used": 0.8472978603872037, "using": 1.252762968495368, "variation": 1.9459101490553132, "with": 0});
        });
    });
    describe("findTermFrequencyofTargetDocument", () => {
        it("1. should return 0 if no path is provided.", () => {
            const Expected = findTermFrequencyofTargetDocument();
            expect(Expected).toEqual(0);
        });
        it("2. should return TF values of all words if path is provided.", () => {
            const Expected = findTermFrequencyofTargetDocument('./data/example.txt');
            expect(Expected).toEqual({"a": 0.015873015873015872, "all": 0.015873015873015872, "allows": 0.015873015873015872, "also": 0.015873015873015872, "and": 0.015873015873015872, "array": 0.015873015873015872, "asynchronous": 0.015873015873015872, "be": 0.047619047619047616, "callback": 0.015873015873015872, "can": 0.047619047619047616, "directory": 0.015873015873015872, "display": 0.015873015873015872, "displayed": 0.015873015873015872, "file": 0.015873015873015872, "filenames": 0.015873015873015872, "files": 0.047619047619047616, "foreach": 0.015873015873015872, "from": 0.015873015873015872, "fs": 0.015873015873015872, "function": 0.015873015873015872, "in": 0.031746031746031744, "instead": 0.015873015873015872, "it": 0.015873015873015872, "loop": 0.015873015873015872, "looped": 0.015873015873015872, "method": 0.015873015873015872, "names": 0.015873015873015872, "of": 0.06349206349206349, "one": 0.015873015873015872, "place": 0.015873015873015872, "present": 0.015873015873015872, "readdir": 0.015873015873015872, "returned": 0.015873015873015872, "returns": 0.015873015873015872, "that": 0.015873015873015872, "the": 0.14285714285714285, "themselves": 0.015873015873015872, "this": 0.031746031746031744, "through": 0.015873015873015872, "to": 0.015873015873015872, "used": 0.015873015873015872, "using": 0.015873015873015872, "variation": 0.015873015873015872, "with": 0.015873015873015872});
        });    
    });
    describe("readFile", () => {
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
        it("1.it should return 0 if empty string is passed.", () => {
            const Expected = preprocessFile("");
            expect(Expected).toEqual(0);
        });
        it("2.it should return string without special characters.", () => {
            const Expected = preprocessFile("good-morning world!");
            expect(Expected).toEqual("good morning world");
        });
        it("3. it should return string without special characters.", () => {
            const Expected = preprocessFile("This is a sentence with period.");
            expect(Expected).toEqual("this is a sentence with period");
        });
    });
    describe("sortResultByCount", () => {
        it("1. should return 0 if nothing is passed.", () => {
            const Expected = sortResultByCount();
            expect(Expected).toEqual(0);
        })
        it("2. should sort according to values.", () => {
            const Expected = sortResultByCount({hat:5, that:3, was:6, good:8, not:10});
            expect(Expected).toEqual({not:10, good:8, was:6, hat:5, that:3});
        });    
    });
    describe("wordFrequencyCount", () => {
        it("1. should return 0 if no path is passed.", () => {
            const Expected = wordFrequencyCount("");
            expect(Expected).toEqual(0);
        });
        it("2. should return 0 if path is wrong.", () => {
            const Expected = wordFrequencyCount("./data/incorrect.txt");
            expect(Expected).toEqual(0);
        });
        it("3. should sort the words in file according to the count of words.", () => {
            const Expected = wordFrequencyCount("./data/example.txt");
            expect(Expected).toEqual({"a": 1, "all": 1, "allows": 1, "also": 1, "and": 1, "array": 1, "asynchronous": 1, "be": 3, "callback": 1, "can": 3, "directory": 1, "display": 1, "displayed": 1, "file": 1, "filenames": 1, "files": 3, "foreach": 1, "from": 1, "fs": 1, "function": 1, "in": 2, "instead": 1, "it": 1, "loop": 1, "looped": 1, "method": 1, "names": 1, "of": 4, "one": 1, "place": 1, "present": 1, "readdir": 1, "returned": 1, "returns": 1, "that": 1, "the": 9, "themselves": 1, "this": 2, "through": 1, "to": 1, "used": 1, "using": 1, "variation": 1, "with": 1});
        });    
    });
});