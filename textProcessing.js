export { preProcess, sortMap, createFrequencyMapFromWords, createWordFrequencyPair };

function preProcess(text) {
    text = text.toLowerCase();
    text = text.replace(/'s/g, '');
    text = text.replace(/[^a-zA-Z ]/g, ' ');
    text = text.replace(/\s+/g, ' ').trim();
    if (text === '')
        return '';

    const words = text.split(' ');
    return words;
}

function createFrequencyMapFromWords(words) {
    let frequencyMap = new Map();
    for (const word of words) {
        if (frequencyMap.has(word)) {
            frequencyMap.set(word, frequencyMap.get(word) + 1);
        } else {
            frequencyMap.set(word, 1);
        }
    }
    return frequencyMap;
}

function sortMap(map) {
    let sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    return sortedMap;
}

function createWordFrequencyPair(sortedFrequencyMap) {
    let sortedFrequencyString = '';
    for (const [key, value] of sortedFrequencyMap.entries()) {
        sortedFrequencyString += `${key}:${value} `;
    }
    sortedFrequencyString = sortedFrequencyString.slice(0, -1);
    return sortedFrequencyString;
}