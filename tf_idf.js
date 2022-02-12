export {tf_idfMapCreate, countdf, termFrequency};

import {wordFreq} from './wordFrequencyCounter.js'
import {filesContainer, filesInformationContainer, loadFileContents} from './textFilesProcessing.js';

function tf_idfMapCreate(frequencyMap){
    if(!frequencyMap) {
        return 0;
    }
    let tf_idfMap = new Map();
    for(const [key, value] of frequencyMap){
        let newKey = key;

        const noOfDocuments = (Object.keys(filesContainer).length)+1;
        
        const noOfDocumentsWithTermValue = countdf(key)+1;

        let newValue = value * Math.log(noOfDocuments/noOfDocumentsWithTermValue);

        tf_idfMap.set(newKey, newValue);
    }
    return tf_idfMap;
}

function countdf(string){

    if(!string){
        return 0;
    }
    loadFileContents();
    let count =0;
    for(let i=0; i<Object.keys(filesContainer).length; i++){
        if(filesInformationContainer[i]['tfMap'].has(string)){              
            count++;
        }
    }
    return count;
}  

function termFrequency(text){
    if(!text){
        return 0;
    }
    const arr = text.split(" ");
    const length = arr.length;

    var tfMap = wordFreq(text);

    for(let [key, value] of tfMap){
        const newKey = key;
        const newValue = value/length;
        tfMap.set(newKey, newValue);
    }

    return tfMap;
}