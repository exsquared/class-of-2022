export{sort, printMap, wordFreq, loadFileContents, filesInformationContainer, readFile, filesContainer, fileAddressBeginning, preProcess, countFrequecyOfWords, termFrequency,tf_idfMapCreate, countdf};

const fileAddressBeginning = "./data/";

let filesInformationContainer = {};

const filesContainer = {
    0 : "algorithm.txt" , 
    1 : "rainbow.txt" , 
    2 : "poet.txt" , 
    3 : "elon-musk.txt" , 
    4 : "telegram.txt" , 
    5 : "thermodynamics.txt",
}

function loadFileContents(){
    for(let i=0; i<Object.keys(filesContainer).length; i++){
        let objForFileReaded = {};
        objForFileReaded["contentAsString"] = readFile(`${fileAddressBeginning}${filesContainer[i]}`);
        filesInformationContainer[i] = objForFileReaded;
    }
    
    for(let i=0; i<Object.keys(filesContainer).length; i++){
        let preprocessedText = preProcess(filesInformationContainer[i]['contentAsString']);
        const tfMap = termFrequency(preprocessedText);
        filesInformationContainer[i]['tfMap'] = tfMap;
    }
}

function tf_idfMapCreate(frequencyMap){
    let tf_idfMap = new Map();
    for(const [key, value] of frequencyMap){
        let newKey = key;

        const noOfDocuments = (Object.keys(filesContainer).length)+1;
        
        const noOfDocumentsWithTermValue = countdf(key)+1;

        let newValue = value * Math.log(noOfDocuments/noOfDocumentsWithTermValue);

        tf_idfMap.set(newKey, newValue);
    }
    return tf_idfMap;
}

function countdf(string){
    let count =0;
    for(let i=0; i<Object.keys(filesContainer).length; i++){
        if(filesInformationContainer[i]['tfMap'].has(string)){              
            count++;
        }
    }
    return count;
}

function readFile(fileAddress){
    if(!fileAddress){
        return 0;
    }
    const fs = require('fs');
    const isFileExist = fs.existsSync(fileAddress);

    return (isFileExist) ? fs.readFileSync(fileAddress).toString() : 0;
}

function preProcess(text){

    if(!text){
        return 0;
    }
    text = text.toLowerCase().replace(/'s/g, "").replace(/[^a-z]/g," ").replace(/\s+/g, " ").trim();
    return text;
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

    return printMap(sortedFrequencyMap);
}

function termFrequency(text){
    if(!text){
        return 0;
    }
    const arr = text.split(" ");
    const length = arr.length-1;

    var tfMap = wordFreq(text);

    for(let [key, value] of tfMap){
        const newKey = key;
        const newValue = value/length;
        tfMap.set(newKey, newValue);
    }

    return tfMap;
}