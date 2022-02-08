export { preProcess };

function preProcess(text) {
    text = text.toLowerCase();
    text = text.replace(/'s/g, '');
    text = text.replace(/[^a-zA-Z0-9- ]/g, ' ');
    text = text.replace(/\s+/g, ' ').trim();
    if (text === '')
        return '';

    const words = text.split(' ');
    const sortedFrequencyMap = createSortedFrequencyMapFromWords(words);
    return createWordFrequencyPair(sortedFrequencyMap);
}

function createSortedFrequencyMapFromWords(words) {
    let frequencyMap = new Map();
    for (const word of words) {
        if (frequencyMap.has(word)) {
            frequencyMap.set(word, frequencyMap.get(word) + 1);
        } else {
            frequencyMap.set(word, 1);
        }
    }
    let sortedFrequencyMap = new Map([...frequencyMap.entries()].sort((a, b) => a[1] - b[1]));
    return sortedFrequencyMap;
}

function createWordFrequencyPair(sortedFrequencyMap) {
    let sortedFrequencyString = '';
    for (const [key, value] of sortedFrequencyMap.entries()) {
        sortedFrequencyString += `${key}:${value} `;
    }
    sortedFrequencyString = sortedFrequencyString.slice(0, -1);
    return sortedFrequencyString;
}