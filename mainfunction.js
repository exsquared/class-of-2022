import { storeInMap } from "./storeinmap";
export function mainFunction(outputString){
    let countStore = new Map();
    let i=-1, j=0;
    while(j < outputString.length){
        if((outputString.charCodeAt(j)>=97 && outputString.charCodeAt(j)<=122) || (outputString.charCodeAt(j)>=65 && outputString.charCodeAt(j)<=90) || (outputString.charCodeAt(j)>=48 && outputString.charCodeAt(j)<=57)){
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
    const mapSort1 = new Map([...countStore.entries()].sort((a, b) => a[1] - b[1]));
    // console.log(mapSort1)
    let answerString = '';
    for(let [key, value] of mapSort1){
        answerString+=key + '->' + value + ' ';
    }
    return answerString;
}