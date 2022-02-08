import { displayFrequencyOfEachWord, readFile } from '../index.js'

describe('index.js', () => {
    describe('displayFrequencyOfEachWord', () => {
        test("should return file does not exist when invalid path is passed", () => {
            const path = './data/abc.txt';
            const receivedOutput = displayFrequencyOfEachWord(path);
            expect(receivedOutput).toBe('file does not exists.');
        });
        test('test-1 should return a string with words and their frequency when a valid path is passed', () => {
            const path = './test/test-1.txt';
            const receivedOutput = displayFrequencyOfEachWord(path);
            expect(receivedOutput).toBe('hello:1 my:1 name:1 is:1 chandan:1 taneja:1')
        });
        test('test-2 should return empty string when a valid path with no text is passed', () => {
            const path = './test/test-2.txt';
            const receivedOutput = displayFrequencyOfEachWord(path);
            expect(receivedOutput).toBe('');
        })
        test('test-3 should return the expected output when file contains mixed case words with special chars', () => {
            const path = './test/test-3.txt';
            const receivedOutput = displayFrequencyOfEachWord(path);
            expect(receivedOutput).toBe('are:1 currently:1 viewing:1 chandan:1 test-3:1 js:1 re:1 also:1 seeing:1 -ve:1 no:1 you:2 a:2');
        });
    });

    describe('readFile', () => {
        test('should return -1 when file does not exist', () => {
            const path = './test/cricket.txt'
            const receivedOutput = readFile(path);
            expect(receivedOutput).toBe(-1);
        });
        test('should return contents of the file if valid path passed', () => {
            const path = './test/test-1.txt';
            const receivedOutput = readFile(path);
            expect(receivedOutput).toBe(`Hello, my name is Chandan Taneja.`);
        })
    })

});