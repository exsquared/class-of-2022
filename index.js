export { readFile, preprocessFile, frequencyCounter, sortResultByCount, wordFrequencyCount };

let path = './data/rainbow.txt';
function wordFrequencyCount(path) {
    if (!path) {
        return 0;
    }
    let file = readFile(path);
    let text = preprocessFile(file);
    let unsortedResult = frequencyCounter(text);
    let sortedResult = sortResultByCount(unsortedResult);
    if(!sortedResult) {
        return 0;
    }
    // let concatString = '';
    // for (let word in sortedResult) {
    //     concatString += `${word[0]}:${word[1]}, `;
    // }
    // //console.log(concatString.slice(0, -2));
    // return concatString.slice(0, -2);
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
    file = file.replaceAll(/[0-9]/g,"");
    file = file.replaceAll(/'s/g, "");
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
        return b[1] - a[1];
    });
    //return sortable;
    let sortedObject = {};
    sortedObject = Object.fromEntries(sortable);
    console.log(sortedObject);
    return sortedObject;
}


 
