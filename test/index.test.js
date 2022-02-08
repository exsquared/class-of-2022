import { displayFrequencyOfEachWord } from '../index.js'

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
    });

});