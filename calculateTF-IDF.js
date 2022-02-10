export { calculateIDFFromFrequencyMap, calculateTFFromFrequencyMap, calculateTfIdfFromqueryWordTFAndcorpusDocIDF }

function calculateTFFromFrequencyMap(frequencyMap, totalWords) {
    for (const [key, value] of frequencyMap.entries()) {
        frequencyMap.set(key, frequencyMap.get(key) / totalWords);
    }
    return frequencyMap;
}

function calculateIDFFromFrequencyMap(corpusTextFrequencyMap, totalDocuments, queryTextFrequencyMap) {
    let IDFMap = new Map();
    for (const [key, value] of queryTextFrequencyMap.entries()) {
        let countOfDocsWithWord = 0;
        for (const documentFrequencyMap of corpusTextFrequencyMap) {
            if (documentFrequencyMap.has(key))
                countOfDocsWithWord++;
        }
        const IDFValueOfWord = Math.log10((totalDocuments + 1) / (countOfDocsWithWord + 1));
        IDFMap.set(key, IDFValueOfWord);
    }
    return IDFMap;
}

function calculateTfIdfFromqueryWordTFAndcorpusDocIDF(TFMap, IDFMap) {
    let TfIdfMap = new Map();
    for (const [key, value] of TFMap.entries()) {
        TfIdfMap.set(key, value * IDFMap.get(key));
    }
    return TfIdfMap;
}