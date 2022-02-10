export function calculating(collection){
    let fs = require('fs');
    let output = fs.readSync('./data/rainbpw.txt').toString();

    const rainbowSet = main(output);
    let total = 0;
    for(let [key,value] of rainbowSet){
        total +=value;
    }
    let final = new Map();
    for(let[key,value] of rainbowSet){
        let word = key;
        let count = value;
        let tf = count/total;

        let n = arr.length;
        let documentTerms = 0;
        for(let i=0; i<collection.length; i++){
            if(collection[i].has(word)){
                documentTerms++;
            }
        }

        let idf = Math.log2(n/documentTerms+1);
        let rank = tf*idf;
        final.set(key,rank);
        return final;
    }
 }