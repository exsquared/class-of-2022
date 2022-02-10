import { getRelevantKeyword, getFrequencyOfEachWord } from '../index.js'

describe('index.js', () => {
    describe('getFrequencyOfEachWord', () => {
        test("test-0 should return file does not exist when invalid path is passed", () => {
            const path = './data/abc.txt';
            const receivedOutput = getFrequencyOfEachWord(path);
            expect(receivedOutput).toBe('file does not exists.');
        });

        test('test-1 should return a string with words and their frequency when a valid path is passed', () => {
            const path = './test/test-1.txt';
            const receivedOutput = getFrequencyOfEachWord(path);
            expect(receivedOutput).toBe('hello:1 my:1 name:1 is:1 chandan:1 taneja:1')
        });

        test('test-2 should return empty string when a valid path with no text is passed', () => {
            const path = './test/test-2.txt';
            const receivedOutput = getFrequencyOfEachWord(path);
            expect(receivedOutput).toBe('');
        });

        test('test-3 should return the expected output when file contains mixed case words with special chars', () => {
            const path = './test/test-3.txt';
            const receivedOutput = getFrequencyOfEachWord(path);
            expect(receivedOutput).toBe('you:2 a:2 are:1 currently:1 viewing:1 chandan:1 test:1 js:1 re:1 also:1 seeing:1 ve:1 no:1');
        });

        describe('getRelevantKeyword', () => {
            test('test-0 should return the most relevant keyword when a valid path is passed', () => {
                const path = './data/rainbow.txt';
                const receivedOutput = getRelevantKeyword(path);
                expect(receivedOutput).toBe('rainbow');
            });
        })
        test('should return file does not exists when an invalid path is passed', () => {
            const path = './data/abc.txt';
            const receivedOutput = getRelevantKeyword(path);
            expect(receivedOutput).toBe('file does not exists');
        })
        test('should return file is empty when an empty file is passed', () => {
            const path = './test/test-2.txt';
            const receivedOutput = getRelevantKeyword(path);
            expect(receivedOutput).toBe('file is empty');
        });

    });
});