export function calculationFunction(collectionOfMaps){
    let fs = require('fs');
    let outputString = fs.readFileSync('./data/rainbow.txt').toString();
    //mainFunction will return the map with distinct words and their count..
    const rainbowMap = mainFunction(outputString);
    //totalWords will store the tptal words count...
    let totalWords = 0;
    for(let [key, value] of rainbowMap){
        totalWords+=value; 
    }
    //finalMap will store basically the weight or significance of every word of rainbow.txt file...
    let finalMap = new Map();

    for(let [key, value] of rainbowMap){
        let word = key;
        let count = value;
        //calculated the term frequency...
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
        //storing the weight of that word in the map....
        finalMap.set(key, weightOfTerm);
        return finalMap;
    }
}