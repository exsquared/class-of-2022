export function wordFrequency(processedData){
    if((processedData.trim()).length == 0) return -1;
    const words = stringToArray(processedData);
    let frequencyOfWords = getFrequency(words);
    let sortedFrequency = sort(frequencyOfWords);
    return sortedFrequency;
}

export function stringToArray(data){
    if(data == null || data.length==0) return -1;
    return data.split(" ");
}

export function getFrequency(words){
    if(words.length == 0 || words == null) return -1;
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

export function sort(frequencyMap){
    return (!frequencyMap) ? 0 :new Map([...frequencyMap.entries()].sort((a, b) => b[1] - a[1]));
}

