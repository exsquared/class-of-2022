import {toMap} from "./tomap";


//this fucntion is to extract words and sort them from the files
export function main(output){
    let count = new Map();
    let i=-1, j=0;
    while(j<output.length){
        if((output.charCodeAt(j)>=97 && output.charCodeAt(j)<=122) ||(output.charCodeAt(j)>=65 && output.charCodeAt(j)<=90)){
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
        let string = output.substring(i, j);
            string = string.toLowerCase();
            i = -1;
            // console.log(string);
            toMap(count, string);

    }
    const mapSort = new Map([...count.entries()].sort((a,b) => b[1]-a[1]));
    console.log(mapSort)

    let result = '';
    for(let[key,value] of mapSort){
        result += key + '=>' + value + ' ';
    }

    return result;
}