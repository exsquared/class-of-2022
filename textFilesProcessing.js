import {readFile, preProcess} from './wordFrequencyCounter'
import { termFrequency } from './tf_idf'; 

export {loadFileContents, filesInformationContainer, filesContainer};

const fileAddressBeginning = "./data/";

const filesContainer = {
    0 : "rainbow.txt" , 
    1 : "algorithm.txt" , 
    2 : "poet.txt" , 
    3 : "elon-musk.txt" , 
    4 : "telegram.txt" , 
    5 : "thermodynamics.txt",
}

let filesInformationContainer = {};

function loadFileContents(){

    for(let i=0; i<Object.keys(filesContainer).length; i++){
        let objForFileReaded = {};
        objForFileReaded["contentAsString"] = readFile(`${fileAddressBeginning}${filesContainer[i]}`);
        filesInformationContainer[i] = objForFileReaded;
    }
    
    for(let i=0; i<Object.keys(filesContainer).length; i++){
        let preprocessedText = preProcess(filesInformationContainer[i]['contentAsString']);
        const tfMap = termFrequency(preprocessedText);
        filesInformationContainer[i]['tfMap'] = tfMap;
    }
}