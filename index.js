import { readFile } from './readFile.js';
import { preProcessing } from './preProcessing.js';
import { wordFrequency } from './wordFrequency.js';
import { checkRelevanceOfWords } from './tf-idf.js';
import { sort } from './wordFrequency.js';

function output(filePath){
    const content = readFile(filePath);
    const contentAfterPreProcessing = preProcessing(content);
    const frequencyOfWords = wordFrequency(contentAfterPreProcessing); 

    const wordRelevance = checkRelevanceOfWords(frequencyOfWords);
    const sortedRelevance = sort(wordRelevance);
    // console.log(sort(wordRelevance));
}

export function printMap(frequencies){
    if(!(frequencies instanceof Map)) return -1;
    if(frequencies.size == 0) return -1;
    let occurence = "";
    for(const[key, value] of frequencies.entries()){
        occurence += `${key}:${value} `;
    }
    return occurence.trim();
}

output("./data/rainbow.txt")
