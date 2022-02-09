export function calculationFunction(collectionOfMaps){
    let fs = require('fs');
    let outputString = fs.readFileSync('./data/rainbow.txt').toString();
    const rainbowMap = mainFunction(outputString);

    let totalWords = 0;
    for(let [key, value] of rainbowMap){
        totalWords+=value; 
    }

    let finalMap = new Map();

    for(let [key, value] of rainbowMap){
        let word = key;
        let count = value;
        let tf = count/totalWords;
        //Now, I have to calculate the idf(inverse document frequency)..

        let n = arr.length;
        let documentWithTermCount = 0;
        for(let i=0;i<collectionOfMaps.length;i++){
            if(collectionOfMaps[i].has(word)){
                documentWithTermCount++;
            }
        }
        let idf = Math.log2(n/(documentWithTermCount+1));
        let weightOfTerm = tf*idf;
        finalMap.set(key, weightOfTerm);
        return finalMap;
    }
}