import {storeInMap} from './storeinmap'
import {calculationFunction} from './calculationfunction'

export function tfidfCalculator(inputFilePath=null){
    let fs = require('fs');
    if(inputFilePath == null && !fs.existsSync(inputFilePath))
        return -1;
    let arr = ['./data/algorithm.txt','./data/cricket.txt','./data/elon-musk.txt','./data/poet.txt','./data/telegram.txt','./data/thermodynamics.txt'];
    let collectionOfMaps = [];
    for(let itr of arr){
        const filePath = itr;
        let outputString = fs.readFileSync(filePath).toString();
        const mapOutput = countMapGenerator(outputString);
        collectionOfMaps.push(mapOutput);
    }
    let finalMap =  calculationFunction(collectionOfMaps, inputFilePath);
    let finalMapSorted = new Map([...finalMap.entries()].sort((a, b) => b[1]-a[1]));
    return finalMapSorted.keys().next().value;
}


export function countMapGenerator(outputString){
    let countStore = new Map();
    let i=-1, j=0;
    while(j < outputString.length){
        if((outputString.charCodeAt(j)>=97 && outputString.charCodeAt(j)<=122) || (outputString.charCodeAt(j)>=65 && outputString.charCodeAt(j)<=90)){
            i = (i == -1) ? j : i;
        }
        else if(i!=-1){
            let string = outputString.substring(i, j);
            string = string.toLowerCase();
            i = -1;
            storeInMap(countStore, string);
        }
        j++;
    }
    if(i!=-1){
        let string = outputString.substring(i, j);
        string = string.toLowerCase();
        i = -1;
        storeInMap(countStore, string);
    }
    return countStore;
}

