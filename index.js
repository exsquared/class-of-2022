import { preProcess } from './textProcessing.js';

export function displayFrequencyOfEachWord(path) {
    const text = readFile(path);
    if (text === -1) {
        return 'file does not exists.';
    }
    else {
        return preProcess(text);
    }
}


function readFile(path) {
    let fs = require('fs');
    let text;
    let isFilePresent = fs.existsSync(path);
    if (isFilePresent) {
        text = fs.readFileSync(path).toString();
        return text;
    } else {
        return -1;
    }
}