/*function sortTextByFrequency(file, fileType = 0){
    if(file == null || file == '' || file == undefined){
        return 0;
    }

    let rawData = fileType == 0 ? file : readInputFile(file);

    if(rawData == '' || rawData == null){
        return 0;
    }

    let processedDataArray = []

    
    let processedData = preprocessData(rawData);
    let wordFrequencyCount = countWordFrequency(processedData);
    let sortedWordFrequencyCount = sortWordFrequencyCount(wordFrequencyCount);
    let stringsortedWordFrequencyCount = mapToString(sortedWordFrequencyCount);

    return stringsortedWordFrequencyCount;
}*/

function sortTextByFrequency(file, dir, fileType = 0){
    if(file == null || file == '' || file == undefined){
        return 0;
    }

    let processedDataArray = []

    let getAllFiles = getAllFileNamesInDirectory(dir);
    for(let fileName of getAllFiles){
        processedDataArray.push(processData(`${dir}\\${fileName}`));
    }

    let requiredFile = getAllFiles.indexOf(file);

    let requiredFileMap = processedDataArray[requiredFile];

    let requiredFileTFIDFMap = new Map();

    for(const [key, value] of requiredFileMap.entries()){
        requiredFileTFIDFMap.set(key, calculateTFIDF(key, requiredFileMap, processedDataArray, dir));
    }

    //console.log(sortWordFrequencyCount(requiredFileTFIDFMap));
    return sortWordFrequencyCount(requiredFileTFIDFMap).keys().next().value;
}

function processData(file){
    let readFiles = readInputFile(file);
    let processedData = preprocessData(readFiles);
    let wordFrequencyCount = countWordFrequency(processedData);

    return wordFrequencyCount
}

function termFrequency(word, documentFrequencyMap){
    
    let wordFrequency = documentFrequencyMap.get(word);
    let totalWords = getTotalNumberOfWordsInDocument(documentFrequencyMap);

    if(wordFrequency > 0){
        wordFrequency = 1 + Math.log10(wordFrequency);
    }

    return wordFrequency / totalWords;
}

function inverseDocumentFrequency(frequencyMapArray, word, dir){
    word = preprocessData(word);
    
    let documentFrequency = getTotalNumberOfDocumentsIWhichWordExists(frequencyMapArray, word);
    let totalDocuments = getTotalNumberOfDocuments(dir);

    return Math.log10((totalDocuments) / documentFrequency);
}

function calculateTFIDF(word, documentFrequencyMap, frequencyMapArray, dir){
    return termFrequency(word, documentFrequencyMap) * inverseDocumentFrequency(frequencyMapArray, word, dir);
}

function getTotalNumberOfWordsInDocument(frequencyMap){
    let count = 0;
    for(const [key, value] of frequencyMap.entries()){
        count += Number(value);
    }
    return count;
}

function getAllFileNamesInDirectory(dir){
    const fs = require('fs');

    const files = fs.readdirSync(dir);
    
    return files; 
}

function getTotalNumberOfDocuments(dir){
    const fs = require('fs');

    const length = fs.readdirSync(dir).length;
    
    return length; 
}

function getTotalNumberOfDocumentsIWhichWordExists(frequencyMapArray, word){
    
    let count = 0;
    word = preprocessData(word);

    for(let frequencyMap of frequencyMapArray){
        if(frequencyMap.has(word)){
            count += 1;
        }
    }

    return count;
}

function mapToString(frequencyMap){
    let concatString = ''
    for(const [key, value] of frequencyMap.entries()){
        concatString += `${key}:${value}, `
    }

    return concatString.slice(0, -2);
}

function sortWordFrequencyCount(wordFrequencyCount){
    let sortedFrequencyMap = new Map([...wordFrequencyCount.entries()].sort((a, b) => b[1] - a[1]));
    return sortedFrequencyMap;
}

function countWordFrequency(data){

    data = data.split(' ');

    let wordFrequencyCount = new Map();

    for(let elem of data){
        if(wordFrequencyCount.has(elem)){
            wordFrequencyCount.set(elem, wordFrequencyCount.get(elem) + 1);
        }else{
            wordFrequencyCount.set(elem, 1);
        }
    }

    return (wordFrequencyCount);
}

function preprocessData(data){
    data = data.replaceAll(/[0-9]+/g, '');
    data = data.replaceAll("'s", '');
    data = data.replaceAll("'", '');
    data = data.replaceAll(/\W+/g, ' ').trim().toLowerCase();

    return data;
}

function readInputFile(file){
    let fs = require('fs');

    if(!fs.existsSync(file)){
        return null;
    }
    
    let rawData = fs.readFileSync(file).toString();

    return rawData; 
}

export { readInputFile, preprocessData, countWordFrequency, sortWordFrequencyCount, mapToString,
    getTotalNumberOfDocumentsIWhichWordExists, getTotalNumberOfDocuments, calculateTFIDF,
    inverseDocumentFrequency, termFrequency, sortTextByFrequency, getAllFileNamesInDirectory };