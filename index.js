import { readFile } from './readFile.js';
import { preProcessing } from './preProcessing.js';
import { wordFrequency } from './wordFrequency.js';

function output(filePath){
    const content = readFile(filePath);
    const contentAfterPreProcessing = preProcessing(content);
    const frequencyOfWords = wordFrequency(contentAfterPreProcessing); 
    // return frequencyOfWords;
    console.log(frequencyOfWords);
}
output("./data/cricket.txt")
