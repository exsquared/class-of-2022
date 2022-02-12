import {wordFreq, readFile, countFrequecyOfWords, preProcess,  sort, printMap} from './wordFrequencyCounter.js'

import {tf_idfMapCreate, countdf, termFrequency} from './tf_idf.js';

import {solution} from './main.js';

describe("WORD FREQUENCY COUNT", () => {

    describe("WordFrequencyCounter.js", () => {

        describe("readFile function Testing", () => {
            it("should return 0 if it is not able to read file.", () => {
                const expectedResult = 0;
                const address = "./data/abc/cricket.txt";
                const receivedResult = readFile(address);
                expect(receivedResult).toBe(expectedResult);
            })
            it("should return 0 if address of the file passed is null", () => {
                const expectedResult = 0;
                const receivedResult = readFile();
                expect(receivedResult).toBe(expectedResult);
            })
            it("should return the file content as a string if file is read successfully.", () => {
                const expectedResult = "Hello this is test file used to check whether the file was read successfully or not.";
                const address = "./data/testFileForReadFile.txt";
                const receivedResult = readFile(address);
                expect(receivedResult).toBe(expectedResult);
            })
            
        })
    
        describe("preProcess function Testing", () => {
            it("should return 0 if no text is passed", () => {
                const expectedResult = 0;
                // const text = "";
                const receivedResult = preProcess();
                expect(receivedResult).toBe(expectedResult);
            })
            it("should return preprocessed text with all the punctuations values removed.", () => {
                const expectedResult = "this is a text file including several punctuations and the pre process function should be able to remove all these punctuations as these are not at all necessary to our problem statement";
                const text = "This ) _ - is a + = text file including ` ~ several punctuations and {   [  ]  }  \ | \" : \' ; the pre process function should be & * (able to ^ remove all % these punctuations # as these are $ not at all @ necessary to our ! problem statement.";
                const receivedResult = preProcess(text);
                expect(receivedResult).toBe(expectedResult);
            })
    
            it("should return preprocessed text with all the trailing spaces removed as well as upper case letter are lower cased", () => {
                const expectedResult = "this is a text file with some trailing spaces as well as few words have capital letter";
                const text = "this is a text file with some     trailing     spaces as well as few words HaVe CAPITAL Letter";
                const receivedResult = preProcess(text);
                expect(receivedResult).toBe(expectedResult);
            })
    
            it("should return preprocessed data removing specail charcters, trailing spaces, uppercase letter and so on.", () => {
                const expectedResult = "hello world finally done";
                const text = "'!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~' HELLO world    finally DOne !"
                const receivedResult = preProcess(text);
                expect(receivedResult).toBe(expectedResult);
            })
        })
    
        describe("wordFreq function Testing", () => {
            it("should return 0 if no string is passed", () => {
                const expectedResult = 0;
                const receivedResult = wordFreq();
                expect(receivedResult).toBe(expectedResult);
            })
            it("should return a hash map with words and their frequency.", () => {
                const expectedResult = "this:1 is:1 a:4 file:1 containing:2 repeated:1 words:2 ";
                const text = "this is a a a a file containing containing repeated words words";
                const receivedResult = printMap(wordFreq(text));
                expect(receivedResult).toBe(expectedResult);
            })
        })
    
        describe("sort function Testing", () => {
            it("should return 0 if no map is passed", () => {
                const expectedResult = 0;
                const receivedResult = sort();
                expect(receivedResult).toBe(expectedResult);
            })
            it("should return a sorted hash map according to their word frequency.", () => {
                const expectedResult = "a:4 containing:2 words:2 this:1 is:1 file:1 repeated:1 ";
                const text = "this is a a a a file containing containing repeated words words";
                const receivedResult = printMap(sort(wordFreq(text)));
                expect(receivedResult).toBe(expectedResult);
            })
        })
    
        describe("printMap function Testing", () => {
            it("should return 0 if no map is passed", () => {
                const expectedResult = 0;
                const receivedResult = printMap();
                expect(receivedResult).toBe(expectedResult);
            })
            it("should return a hash map converted to string with format {key:value }", () => {
                const expectedResult = "this:1 is:1 a:4 file:1 containing:2 repeated:1 words:2 ";
                const text = "this is a a a a file containing containing repeated words words";
                const receivedResult = printMap(wordFreq(text));
                expect(receivedResult).toBe(expectedResult);
            })
        })
    
        
        
        
        describe("countFrequencyOfWords function Testing", () => {
    
            it("Should return 0 as address passed do not point to any file.",()  =>{
                const expectedResult = 0;
                const address = "./data/abc/cricket.txt";
                const receivedResult = countFrequecyOfWords(address);
                expect(receivedResult).toBe(expectedResult);
            })
    
            it("Should return 0 if null is passed as address of file.",()  =>{
                const expectedResult = 0;
                const receivedResult = countFrequecyOfWords();
                expect(receivedResult).toBe(expectedResult);
            })
    
            it("Should return 0 if address if the file passed contains no text",()  =>{
                const expectedResult = 0;
                const address = "./data/testzfile1.txt";
                const receivedResult = countFrequecyOfWords(address);
                expect(receivedResult).toBe(expectedResult);
            })
    
            it("Should return solution with single word.",()  =>{
                const expectedResult = "single:1 ";
                const address = "./data/testfile2.txt";
                const receivedResult = countFrequecyOfWords(address);
                expect(receivedResult).toBe(expectedResult);
            })
    
            it("Should return 0 with file with only special characters or trailing spaces",()  =>{
                const expectedResult = 0;
                const address = "./data/testfile3.txt";
                const receivedResult = countFrequecyOfWords(address);
                expect(receivedResult).toBe(expectedResult);
            })
        })

    })

    describe("tf_idf.js", () => {

        describe("termFrequency function testing", () => {
            
            it("should return 0 if no text is passed as argument to the function", ()=>{
                const expectedResult = 0;
                const receivedResult = termFrequency();
                expect(receivedResult).toBe(expectedResult);
            })

            it("should return the term frequency for the string passed", () => {
                const expectedResult = "This:0.2 is:0.2 a:0.2 test:0.2 text:0.2 ";
                const text = "This is a test text"
                const receivedResult = printMap(termFrequency(text));
                expect(receivedResult).toBe(expectedResult);
            })

            it("should return the term frequency for the string passed with repeated terms as well.", () => {
                const expectedResult = "this:0.25 is:0.5 boy:0.25 ";
                const text = "this is is boy"
                const receivedResult = printMap(termFrequency(text));
                expect(receivedResult).toBe(expectedResult);
            })

        })

        describe("countdf function testing.", () => {
            it("should return 0 if no string is passed to the function.", () => {
                const expectedResult = 0;
                const receivedResult = countdf();
                expect(receivedResult).toBe(expectedResult);
            })

            it("should return the document frequency for the term passed as the parameter", () => {
                const expectedResult = 6;
                const text = "the"
                const receivedResult = countdf(text);
                expect(receivedResult).toBe(expectedResult);
            })

            it("should return the document frequency for the term passed as the parameter", () => {
                const expectedResult = 0;
                const text = "cricket"
                const receivedResult = countdf(text);
                expect(receivedResult).toBe(expectedResult);
            })

            it("should return the document frequency for the term passed as the parameter", () => {
                const expectedResult = 0;
                const text = "biomolecule"
                const receivedResult = countdf(text);
                expect(receivedResult).toBe(expectedResult);
            })
        })

        describe("tf_idfMapCreate function testing.", () => {

            it("should return 0 if no term frequency map is passed to the function.", () => {
                const expectedResult = 0;
                const receivedResult = tf_idfMapCreate();
                expect(receivedResult).toBe(expectedResult);
            })

            it("should return map with tf-idf values for the tf map passed.", () => {
                const expectedResult = "this:0.13990394698385566 is:0.07707533991362918 boy:0.4864775372638283 ";
                const termFrequencyMap = termFrequency("this is is boy");
                const receivedResult = printMap(tf_idfMapCreate(termFrequencyMap));
                expect(receivedResult).toBe(expectedResult);

            })

        })
    })

    describe("main.js", () => {
        describe("solution function testing.", () => {
            it("should return 0 if no text is passed to the function", () => {
                const expectedResult = 0;
                const receivedResult = solution();
                expect(receivedResult).toBe(expectedResult);
            })

            it("should return a map sorted according to the importance of word in the given query", () => {
                const expectedResult = "query:0.4864775372638283 this:0.13990394698385566 is:0.03853766995681459 a:0 ";
                const query = "this is a query"
                const receivedResult = printMap(solution(query));
                expect(receivedResult).toBe(expectedResult);
            })

        })
    })

})