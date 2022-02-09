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
        it("Should return 0 if incorrect path is given.", () => {
            const inputFile = "data/crickets.txt";
            const inputFileType = 1;
            const expectedOutput = 0;
            const receivedOutput = sortTextByFrequency(inputFile, inputFileType);
            expect(receivedOutput).toBe(expectedOutput);
        });
        it("Should return 0 if inputFile is empty string.", () => {
            const inputFile = "";
            const inputFileType = 0;
            const expectedOutput = 0;
            const receivedOutput = sortTextByFrequency(inputFile, inputFileType);
            expect(receivedOutput).toBe(expectedOutput);
        });
        it("Should return correct answer if inputFile along with path is provided.", () => {
            const inputFile = "data/cricket.txt";
            const inputFileType = 1;
            const expectedOutput = "eleven:1, centre:1, 22:1, yard:1, metre:1, pitch:1, end:1, comprising:1, balanced:1, three:1, scores:1, runs:1, striking:1, running:1, wickets:1, while:1, bowling:1, tries:1, this:1, preventing:1, leaving:1, getting:1, dismiss:1, so:1, out:1, means:1, dismissal:1, include:1, being:1, dislodges:1, catching:1, after:1, hit:1, ground:1, hitting:1, can:1, cross:1, crease:1, front:1, ten:1, batters:1, have:1, dismissed:1, ends:1, swap:1, roles:1, adjudicated:1, umpires:1, aided:1, third:1, umpire:1, referee:1, communicate:1, off:1, scorers:1, record:1, statistical:1, information:1, forms:1, range:1, twenty20:1, for:1, single:1, days:1, traditionally:1, cricketers:1, all:1, white:1, limited:1, colours:1, addition:1, basic:1, some:1, protective:1, gear:1, injury:1, caused:1, hard:1, solid:1, spheroid:1, made:1, compressed:1, leather:1, slightly:1, raised:1, sewn:1, seam:1, enclosing:1, cork:1, core:1, layered:1, tightly:1, wound:1, string:1, earliest:1, reference:1, south:1, east:1, england:1, mid:1, 16th:1, spread:1, globally:1, expansion:1, british:1, empire:1, first:1, second:1, half:1, 19th:1, governing:1, body:1, council:1, icc:1, 100:1, twelve:1, full:1, rules:1, laws:1, maintained:1, marylebone:1, mcc:1, london:1, sport:1, followed:1, primarily:1, indian:1, subcontinent:1, australasia:1, united:1, kingdom:1, southern:1, africa:1, west:1, indies:1, 1:1, women:1, organised:1, separately:1, also:1, achieved:1, standard:1, most:1, successful:1, playing:1, australia:1, won:1, seven:1, one:1, day:1, trophies:1, including:1, world:1, cups:1, top:1, rated:1, between:2, teams:2, players:2, on:2, 20:2, bails:2, stumps:2, batting:2, bowled:2, fielding:2, prevent:2, from:2, either:2, batter:2, when:2, hits:2, but:2, before:2, or:2, been:2, innings:2, match:2, who:2, team:2, overs:2, over:2, five:2, play:2, kit:2, wear:2, club:2, century:2, members:2, more:2, than:2, any:2, other:2, country:2, bat:3, played:3, field:3, at:3, they:3, are:3, it:3, test:3, game:4, two:4, each:4, matches:4, s:4, has:4, wicket:5, side:5, which:6, to:6, international:6, ball:8, by:8, cricket:9, with:9, is:10, in:10, a:11, of:11, and:12, the:43";
            const receivedOutput = sortTextByFrequency(inputFile, inputFileType);
            expect(receivedOutput).toBe(expectedOutput);
        });
        it("Should return correct answer if only valid inputFile provided.", () => {
            const inputFile = "hello what are you doing doing you you are are are are";
            const inputFileType = 0;
            const expectedOutput = "hello:1, what:1, doing:2, you:3, are:5";
            const receivedOutput = sortTextByFrequency(inputFile, inputFileType);
            expect(receivedOutput).toBe(expectedOutput);
        });
        it("Should return correct answer if only valid inputFile provided.", () => {
            const inputFile = "from what are you you doing no no no";
            const inputFileType = 0;
            const expectedOutput = "from:1, what:1, are:1, doing:1, you:2, no:3";
            const receivedOutput = sortTextByFrequency(inputFile, inputFileType);
            expect(receivedOutput).toBe(expectedOutput);
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
        it("Should return text if inputFile is valid.", () => {
            const inputFile = "data/test.txt";
            const inputFileType = 0;
            const expectedOutput = "from Twenty20, with {test} each team batting kenny's";
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
    describe("sortWordFrequencyCount()", () => {
        it("Should return sorted Map if a map is passed.", () => {
            const inputFile = new Map();
            inputFile.set('from', 1);
            inputFile.set('what', 2);
            inputFile.set('are', 1);
            inputFile.set('you', 2);
            const expectedOutput = new Map();
            expectedOutput.set('are', 1);
            expectedOutput.set('from', 1);
            expectedOutput.set('what', 2);
            expectedOutput.set('you', 2);
            const receivedOutput = sortWordFrequencyCount(inputFile);
            expect(receivedOutput).toStrictEqual(expectedOutput);
        });
    }); 
});