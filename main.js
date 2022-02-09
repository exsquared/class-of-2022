export {readFile, countFrequecyOfWords, preProcess, wordFreq, sort, printMap};

const fileAddress = './data/cricket.txt';
const fileAddress2 = './data/rainbow.txt';

function readFile(fileAddress){
    if(!fileAddress){
        return 0;
    }
    const fs = require('fs');
    const isFileExist = fs.existsSync(fileAddress);

    return (isFileExist) ? fs.readFileSync(fileAddress).toString() : 0;
}


function countFrequecyOfWords(fileAddress){
    let text = readFile(fileAddress);
    if(text === 0){
        return 0;
    }
    if(text.length === 0){
        return 0;
    }
    
    const preprocessedText = preProcess(text);
    
    const frequencyMap = wordFreq(preprocessedText);

    const sortedFrequencyMap = sort(frequencyMap);

    // console.log(sortedFrequencyMap);

    // let arr = 
    return printMap(sortedFrequencyMap);
    // arr = arr.slice(0, -1);
    // console.log(arr.length)

}

const solString = countFrequecyOfWords(fileAddress);
console.log(solString);



function preProcess(text){

    if(!text){
        return 0;
    }

    text = text.toLowerCase().replace(/'s/g, "").replace(/[^a-z]/g," ").replace(/\s+/g, " ").trim();
    
    return text;
}


function wordFreq(string) {
    if(!string){
        return 0;
    }
    var words = string.split(" ");
    var frequencyMap = new Map();
    for(const word of words){
        if(!word ){
            continue;
        }
        if(frequencyMap.has(word)){
            frequencyMap.set(word, frequencyMap.get(word) + 1);
        }else{
            frequencyMap.set(word, 1);
        }
    }
    return frequencyMap;
}

function sort(frequencyMap){
    return (!frequencyMap) ? 0 :new Map([...frequencyMap.entries()].sort((a, b) => b[1] - a[1]));
}

function printMap(map){
    if(!map){
        return 0;
    }
    let sol = "";
    for (const [key, value] of map.entries()) {
        sol += `${key}:${value} ` ;
    }
    return sol;
}



