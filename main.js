export { solution};
import {tf_idfMapCreate, countdf, termFrequency} from './tf_idf.js';

import { preProcess, sort, readFile } from './wordFrequencyCounter.js';

import {loadFileContents, filesInformationContainer, filesContainer} from './textFilesProcessing';

const fileAddress = './data/cricket.txt';

function solution(textAsString){

    loadFileContents();

    const preprocessedText = preProcess(textAsString);

    const frequencyMap = termFrequency(preprocessedText);
    
    let tf_idfMap = tf_idfMapCreate(frequencyMap);
    
    return sort(tf_idfMap);  
    // return sortedtf_idfMap.keys().next().value;
}

const mostImportantWord = solution(readFile(fileAddress));

console.log(mostImportantWord.keys().next().value);

