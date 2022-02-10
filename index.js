import { readDir, readFile } from "./fileHandling.js";
import { createFrequencyMapFromWords, preProcess, sortMap, createWordFrequencyPair } from "./textProcessing.js";
import { calculateIDFFromFrequencyMap, calculateTFFromFrequencyMap, calculateTfIdfFromqueryWordTFAndcorpusDocIDF } from "./calculateTF-IDF.js";

export { getRelevantKeyword, getFrequencyOfEachWord };

function getRelevantKeyword(path) {
    const queryText = readFile(path);
    const corpusText = readDir();

    if (queryText === -1 || corpusText === -1)
        return 'file does not exists';
    if (queryText == '')
        return 'file is empty';
    let queryTextWords = preProcess(queryText);
    let queryTextSortedFrequencyMap = sortMap(createFrequencyMapFromWords(queryTextWords));

    const queryWordTFMap = calculateTFFromFrequencyMap(queryTextSortedFrequencyMap, queryText.split(' ').length);

    let corpusTextSortedFrequencyMap = [];
    for (const text of corpusText) {
        const currDocText = preProcess(text);
        const currDocSortedFrequencyMap = sortMap(createFrequencyMapFromWords(currDocText));
        corpusTextSortedFrequencyMap.push(currDocSortedFrequencyMap);
    }


    const corpusDocIDFMap = calculateIDFFromFrequencyMap(corpusTextSortedFrequencyMap, corpusText.length, queryTextSortedFrequencyMap);

    let queryWordTfIdfMap = calculateTfIdfFromqueryWordTFAndcorpusDocIDF(queryWordTFMap, corpusDocIDFMap);
    queryWordTfIdfMap = sortMap(queryWordTfIdfMap);

    const mostRelevantKeyword = queryWordTfIdfMap.keys().next().value;
    return mostRelevantKeyword;
}

function getFrequencyOfEachWord(path) {
    const text = readFile(path);

    if (text === -1)
        return 'file does not exists.';

    const textWords = preProcess(text);
    const sortedWordFrequencyMap = sortMap(createFrequencyMapFromWords(textWords));
    const wordFrequencyPair = createWordFrequencyPair(sortedWordFrequencyMap);
    return wordFrequencyPair;
}


