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
    //let outputStr = mapToString(frequencyMap);
    return calculateTf(frequencyMap);
}

export function calculateTf(frequencyMap){
    let arrays = ['./data/algorithm.txt','./data/cricket.txt','./data/elon-musk.txt','./data/poet.txt','./data/telegram.txt','./data/thermodynamics.txt'];


    let totalWords = 0;
    for(let [key, value] of frequencyMap){
        totalWords += value; 
    }
    let randomMap = new Map();
    for(let [key,value] of frequencyMap){
        let MapWord = key;
        let count = value;
        let tf = count/totalWords;
        let tfidf = calculateIdf(arrays,MapWord,tf);
        randomMap.set(MapWord, tfidf);
    }
    return randomMap;
}
export function calculateIdf(arrays,MapWord,tf){
    let idfCount =0;
    
    for(let array of arrays){
        let ReadInputFile = readInputFile(array);
        let ProcessedData = processData(ReadInputFile);
        let frequencyMapOfProcessedData = createFrequencyMapFromWords(ProcessedData);

        if(frequencyMapOfProcessedData.has(MapWord)){
            idfCount++;

        }

    }
    let idf = Math.log2((arrays.length)/(idfCount+1));
    
    return tf*idf;
}
// export function mapToString(frequencyMap){
//     let concatString = ''
//     for(const [key, value] of frequencyMap.entries()){
//         concatString += `${key}:${value}, `
//     }
//     return concatString.slice(0, -2);
// }    
export function createFrequencyMapFromWords(words) {
    let frequencyMap = new Map();
    for (const word of words) {
        if (frequencyMap.has(word)) {
            frequencyMap.set(word, frequencyMap.get(word) + 1);
        } else {
            frequencyMap.set(word, 1);
        }
    }
    let sortedFrequencyMap = new Map([...frequencyMap.entries()].sort((a, b) => b[1] - a[1]));
   return sortedFrequencyMap;
}
export function processData(text){
    if(text==null) return 0;
    text = text.toLowerCase();
    text = text.replaceAll(/'s/g, '');
    text = text.replaceAll(/[^a-zA-Z0-9 ]/g, ' ');
    text = text.replaceAll(/[0-9]/g, '');
    text = text.replaceAll(/\s+/g, ' ').trim();
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
console.log(countWordFrequency("./data/cricket.txt",1));
 //let arrays = ['./data/algorithm.txt','./data/cricket.txt','./data/elon-musk.txt','./data/poet.txt','./data/telegram.txt','./data/thermodynamics.txt','./data/rainbow.txt];


// function iterateAllTextFiles(arrays){
//    for(let array in arrays){
//        let file = array;
//    }
// }

