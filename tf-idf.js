import { readFile } from "./readFile.js";
import { preProcessing } from "./preProcessing.js";

const testingDocuments = ['./data/rainbow.txt','./data/algorithm.txt','./data/cricket.txt','./data/elon-musk.txt','./data/poet.txt','./data/telegram.txt','./data/thermodynamics.txt'];

export function checkRelevanceOfWords(queryDocument){
    if(!(queryDocument instanceof Map)) return -1;
    if(queryDocument.size == 0 || queryDocument == null) return -1;
    const totalWords = calculateTotalWords(queryDocument);
    let relevance = new Map();
    for(let [key,value] of queryDocument.entries()){
        const termFrequency = value/totalWords;
        const inverseDocumentFrequency = calculateInverseDocumentFrequency(key, testingDocuments);
        const relevanceValue = termFrequency * inverseDocumentFrequency;
        relevance.set(key, relevanceValue);
    }
    return relevance;
}

function calculateTotalWords(document){
    if(!(document instanceof Map)) return -1;
    let words = 0;
    for(let [key, value] of document){
        words+= value;
    }
    return words;
}

function calculateInverseDocumentFrequency(word, documents){
    let documentsThatContainWord = 0;
    for(let document of documents){
        let words = calculateAllWordsInThisDocument(document);
        if(words.has(word)){
            documentsThatContainWord++;
        }
    }
    return Math.log((documents.length+1)/(documentsThatContainWord+1));
}

function calculateAllWordsInThisDocument(document){
    const content = readFile(document);
    const data = preProcessing(content);
    const arr = data.split(" ");
    const set = new Set(arr);
    return set;
}