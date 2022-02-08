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
    } else {
        return 0;
    }
}

function preprocessFile(file) {
    if (file == null || file == undefined || file == "" ) {
        return 0;
    }
    let reg = /\W+/g;
    let text = file.replaceAll(reg, " ").trim().toLowerCase();
    return text;

}
function frequencyCounter(string) {
    if (string == null || string == undefined || string == "" ) {
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
    let sortable = [];
    for (let word in countedObject) {
    sortable.push([word, countedObject[word]]);
    }
    sortable.sort(function (a, b) {
        return a[1] - b[1];
    });
    let objSorted = {}
    sortable.forEach(function(item){
    objSorted[item[0]]=item[1]
    })
    return objSorted;
}

 /* let fish = wordFrequencyCount(path);
 let full = Object.keys(fish);
 console.log(full);
 console.log(typeof full[1]); */

export { readFile, preprocessFile, frequencyCounter, sortResultByCount }