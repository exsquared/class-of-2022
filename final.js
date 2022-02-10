import {toMap} from "./tomap"
import { calculating } from "./calculatingfunction"

export function rankCalculator(arr){
    let fs = require('fs');
    let collection = [];
    for(let ele of arr){
        const filePath = ele;
        let output = fs.readFileSync(filePath).toString();
        const mapOutput = main(output);
        collection.push(mapOutput);
    }
    return calculating(collection);
}

function main(output){
    let count = new Map();
    let i=-1;j=0;
    while(j<output.length){
        if((output.charCodeAt(j)>=97 && output.charCodeAt(j)<=122) ||(outputString.charCodeAt(j)>=65 && outputString.charCodeAt(j)<=90)){
            i= (i==-1)? j : i;
        }
        else if(i!=-1){
            let string =output.substring(i,j);
            string = string.toLowerCase();
            i=-1;
            toMap(count,string);
        }
        j++;
    }

    if(i!=-1){
        let string = outputString.substring(i, j);
            string = string.toLowerCase();
            i = -1;
            // console.log(string);
            toMap(countStore, string);

    }
    const mapSort = new Map([...count.entries()].sort((a,b) => b[1]-a[1]));
    console.log(mapSort)

}


// let arr = ['./data/algorithm.txt','./data/cricket.txt','./data/elon-musk.txt','./data/poet.txt','./data/telegram.txt','./data/thermodynamics.txt'];

// let collectionOfMaps = tfidfCalculator(arr);