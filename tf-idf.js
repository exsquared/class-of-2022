export {wordCounterofDocuments, findTDIDFOfTargetDocument, findIDFofTargetDocument, findTermFrequencyofTargetDocument, readFile, preprocessFile, frequencyCounter, sortResultByCount, wordFrequencyCount};
let path1 = "./data/rainbow.txt";
let path2 = "./data/algorithm.txt";
let path3 = "./data/cricket.txt";
let path4 = "./data/elon-musk.txt";
let path5 = "./data/poet.txt";
let path6 = "./data/telegram.txt";
let path7 = "./data/thermodynamics.txt";

let collectionOfDocumentsPath=[];
collectionOfDocumentsPath.push(path1, path2, path3, path4, path5, path6, path7);
let totalNumberOfDocuments = collectionOfDocumentsPath.length;
let wordFrequencyCountOfDocuments = wordCounterofDocuments(collectionOfDocumentsPath);
//console.log(wordFrequencyCountOfDocuments);

function wordCounterofDocuments(collectionOfDocumentsPath){
    if (!collectionOfDocumentsPath) {
        return 0;
    }
    let  wordFrequencyCountOfDocuments = [];
    for (let path of collectionOfDocumentsPath) {
        wordFrequencyCountOfDocuments.push(wordFrequencyCount(path));
    }
return wordFrequencyCountOfDocuments;
}

function findTDIDFOfTargetDocument(targetPath) {
    if (!targetPath) {
        return 0;
    }
    let wordFrequency = wordFrequencyCount(targetPath);
    let finalTDIDF = {};
    let TDOfTargetDocument = findTermFrequencyofTargetDocument(targetPath);
    let IDFofTargetDocument = findIDFofTargetDocument(targetPath);

    for (let word in wordFrequency) {
        finalTDIDF[word] = TDOfTargetDocument[word] * IDFofTargetDocument[word];
    }
return finalTDIDF;    
}

function findIDFofTargetDocument(targetPath) {
    if (!targetPath) {
        return 0;
    }
    let NumberOfDocumentsWithTerm = 0;
    let wordFrequency = wordFrequencyCount(targetPath);
    let IDFofTargetDocument = {}; 
    
    for (let word in wordFrequency) {
        NumberOfDocumentsWithTerm = 0;
        for (let i=0; i<wordFrequencyCountOfDocuments.length; i++) {
            if (wordFrequencyCountOfDocuments[i][word]) {
                NumberOfDocumentsWithTerm += 1;
            }
        }
        IDFofTargetDocument[word] = Math.log((totalNumberOfDocuments)/(NumberOfDocumentsWithTerm + 1));
    }
return IDFofTargetDocument;
}

function findTermFrequencyofTargetDocument(targetPath) {
    if (!targetPath) {
        return 0;
    }
    let wordFrequency = wordFrequencyCount(targetPath);
    let termFrequencyofTargetDocument = {};
    let totalNumberOfTerms = 0;
    for (let word in wordFrequency) {
        totalNumberOfTerms += wordFrequency[word];
    }
    for (let word in wordFrequency) {
        termFrequencyofTargetDocument[word] = wordFrequency[word]/totalNumberOfTerms;
    }
    return termFrequencyofTargetDocument;
}

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
    //console.log(sortedObject);
    return sortedObject;
}
let targetPath = './data/elon-musk.txt';
let result = (findTDIDFOfTargetDocument(targetPath));
let sortedResult = (sortResultByCount(result));
console.log(Object.entries(sortedResult)[0]);



