export function wordFrequency(processedData){
    const words = stringToArray(processedData);
    let frequencyOfWords = getFrequency(words);
    let sortedFrequency = sort(frequencyOfWords);
    return printMap(sortedFrequency);
}

export function stringToArray(data){
    if(data == null || data.length==0) return -1;
    return data.split(" ");
}

export function getFrequency(words){
    var wordFrequency = new Map();
    for(const word of words){
        if(!word) continue;
        if(wordFrequency.has(word)){
            wordFrequency.set(word, wordFrequency.get(word)+1);
        }else{
            wordFrequency.set(word, 1);
        }
    }
    return wordFrequency;
}

function sort(frequencyMap){
    return (!frequencyMap) ? 0 :new Map([...frequencyMap.entries()].sort((a, b) => a[1] - b[1]));
}

export function printMap(frequencies){
    let occurence = "";
    for(const[key, value] of frequencies.entries()){
        occurence += `${key}:${value} `;
    }
    return occurence.trim();
}