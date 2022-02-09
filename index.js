let path = './data/cricket.txt';
function wordFrequencyCount(path) {
    let file = readFile(path);
    let text = preprocessFile(file);
    let unsortedResult = frequencyCounter(text);
    let sortedResult = sortResultByCount(unsortedResult); 
    //console.log(sortedResult);
    return sortedResult;

}
function readFile(path) {
    let fs = require('fs');
    let file;
    let isFilePresent = fs.existsSync(path);
    if (isFilePresent) {
        file = fs.readFileSync(path).toString();
        return file;
    } 
    return 0;
}

function preprocessFile(file) {
    if (!file) {
        return 0;
    }
    let reg = /\W+/g;
    file = file.replace(/'s/, "");
    let text = file.replaceAll(reg, " ").trim().toLowerCase();
    return text;

}
function frequencyCounter(string) {
    if (!string) {
    return 0;
    }
    let words = string.split(" ");
    let counter = {};
    for (let word of words) {
        if (counter[word.toLowerCase()]) {
            counter[word.toLowerCase()]++;
        } else {
            counter[word.toLowerCase()]=1;
        }
    }
    return counter;
}

function sortResultByCount(countedObject) {
    if (!countedObject) {
        return 0;
    }
    let sortable = [];
    for (let word in countedObject) {
    sortable.push([word, countedObject[word]]);
    }
    sortable.sort(function (a, b) {
        return a[1] - b[1];
    });
    return sortable;
}

export { readFile, preprocessFile, frequencyCounter, sortResultByCount, wordFrequencyCount };
