import {countMapGenerator} from './tfidf';
export function calculationFunction(collectionOfMaps, filePath){
    let fs = require('fs');
    let outputString = fs.readFileSync(filePath).toString();
    const rainbowMap = countMapGenerator(outputString);
    let totalWords = 0;
    for(let [key, value] of rainbowMap){
        totalWords+=value; 
    }
    let finalMap = new Map();

    for(let [key, value] of rainbowMap){
        let word = key;
        let count = value;
        let tf = count/totalWords;
        let n = collectionOfMaps.length;
        let documentWithTermCount = 0;
        for(let i=0;i<collectionOfMaps.length;i++){
            if(collectionOfMaps[i].has(word)){
                documentWithTermCount++;
            }
        }
        let idf = Math.log((n+1)/(documentWithTermCount+1));
        let weightOfTerm = tf*idf;
        finalMap.set(key, weightOfTerm);
    }
    return finalMap;
}