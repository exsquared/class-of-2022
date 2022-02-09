import {storeInMap} from './storeinmap'
import {calculationFunction} from './calculationfunction'
export function tfidfCalculator(arr){
    //This is the main function which would be called for handling the td-idf...
    let fs = require('fs');
    let collectionOfMaps = [];
    for(let itr of arr){
        const filePath = itr;
        let outputString = fs.readFileSync(filePath).toString();
        const mapOutput = mainFunction(outputString);
        collectionOfMaps.push(mapOutput);
    }
    return calculationFunction(collectionOfMaps);
}


function mainFunction(outputString){
    //This function is responsible for generating a map containing the count of each word in the document...
    let countStore = new Map();
    let i=-1, j=0;
    while(j < outputString.length){
        if((outputString.charCodeAt(j)>=97 && outputString.charCodeAt(j)<=122) || (outputString.charCodeAt(j)>=65 && outputString.charCodeAt(j)<=90)){
            //If uppercase or lowercase or any number is encountered....
            i = (i == -1) ? j : i;
        }
        else if(i!=-1){
            //It means that if the delimiter is encountered and the i stores the index of the first character....
            let string = outputString.substring(i, j);
            string = string.toLowerCase();
            i = -1;
            // console.log(string);
            storeInMap(countStore, string);
        }
        j++;
    }
    //This if condition is to handle the edge case....
    if(i!=-1){
        let string = outputString.substring(i, j);
        string = string.toLowerCase();
        i = -1;
        // console.log(string);
        storeInMap(countStore, string);
    }
    const mapSort1 = new Map([...countStore.entries()].sort((a, b) => b[1]-a[1]));
    return mapSort1;
}

// let arr = ['./data/algorithm.txt','./data/cricket.txt','./data/elon-musk.txt','./data/poet.txt','./data/telegram.txt','./data/thermodynamics.txt'];

// let collectionOfMaps = tfidfCalculator(arr);

