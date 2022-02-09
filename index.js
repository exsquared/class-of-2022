export function sortTextByFrequency(file, fileType = 0){
    if(file == null || file == '' || file == undefined){
        return 0;
    }

    let rawData = fileType == 0 ? file : readInputFile(file);

    if(rawData == '' || rawData == null){
        return 0;
    }

    let processedData = preprocessData(rawData);
    let wordFrequencyCount = countWordFrequency(processedData);
    let sortedWordFrequencyCount = sortWordFrequencyCount(wordFrequencyCount);
    let stringsortedWordFrequencyCount = mapToString(sortedWordFrequencyCount);

    return stringsortedWordFrequencyCount;
}

export function mapToString(frequencyMap){
    let concatString = ''
    for(const [key, value] of frequencyMap.entries()){
        concatString += `${key}:${value}, `
    }

    //console.log(concatString.slice(0, -2));

    return concatString.slice(0, -2);
}

export function sortWordFrequencyCount(wordFrequencyCount){
    let sortedFrequencyMap = new Map([...wordFrequencyCount.entries()].sort((a, b) => b[1] - a[1]));
    return sortedFrequencyMap;
}

export function countWordFrequency(data){

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

export function preprocessData(data){
    data = data.replaceAll(/[0-9]+/g, '');
    data = data.replaceAll("'s", '');
    data = data.replaceAll("'", '');
    data = data.replaceAll(/\W+/g, ' ').trim().toLowerCase();

    return data;
}

export function readInputFile(file){
    let fs = require('fs');

    if(!fs.existsSync(file)){
        return null;
    }
    
    let rawData = fs.readFileSync(file).toString();

    return rawData; 
}