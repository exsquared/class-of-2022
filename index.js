export function countWordFrequency(file, fileType = 0){
    if(file == null || file == '' || file == undefined){
        return 0;
    }
    let rawData = fileType == 0 ? file : readInputFile(file);
    if(rawData == '' || rawData == null){
        return 0;
    }
    let processedData = processData(rawData);
    let frequencyMap = createFrequencyMapFromWords(processedData);
    return frequencyMap;
}


export function createFrequencyMapFromWords(words) {
    let frequencyMap = new Map();
    for (const word of words) {
        if (frequencyMap.has(word)) {
            frequencyMap.set(word, frequencyMap.get(word) + 1);
        } else {
            frequencyMap.set(word, 1);
        }
    }
    let sortedFrequencyMap = new Map([...frequencyMap.entries()].sort((a, b) => a[1] - b[1]));
   return(sortedFrequencyMap);
}
export function processData(text){
    text = text.toLowerCase();
    text = text.replace(/'s/g, '');
    text = text.replace(/[^a-zA-Z0-9 ]/g, ' ');
    text = text.replace(/\s+/g, ' ').trim();
    const words = text.split(' ');

    return words;
}
export function readInputFile(file){
    let fs = require('fs');
    if(!fs.existsSync(file)){
        return null;
    }
    let rawData = fs.readFileSync(file).toString();
    return rawData;
}


