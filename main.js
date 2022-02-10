export {readFile, countFrequecyOfWords, preProcess, wordFreq, sort, printMap};
import {sort, printMap, wordFreq, loadFileContents, filesInformationContainer, readFile, filesContainer, fileAddressBeginning, preProcess, countFrequecyOfWords, termFrequency, tf_idfMapCreate, countdf} from './Utility.js'

const fileAddress = './data/cricket.txt';

function solution(textAsString){

    loadFileContents();

    const preprocessedText = preProcess(textAsString);

    const frequencyMap = termFrequency(preprocessedText);
    
    let tf_idfMap = tf_idfMapCreate(frequencyMap);
    
    return sort(tf_idfMap);
}

const solutionMap = solution(readFile(fileAddress));
console.log(solutionMap.keys().next().value);