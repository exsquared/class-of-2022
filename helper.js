function search(data, parameters){
    
    let requiredIndexes = [];

    let allKeys = Object.keys(parameters);

    for(let i = 0; i < Object.keys(data).length; i++){
        let flag = 0
        for(const key of allKeys){
            if(data[i][key] != parameters[key]){
                break;
            }
            flag += 1;
        }
        if(flag == allKeys.length){
            requiredIndexes.push(i);
        }
    }

    return requiredIndexes;
}

function readFile(filePath){
    let fs = require('fs');

    if(!fs.existsSync(filePath)){
        return -1;
    }
    
    let data = require(filePath);

    return data;
}

export { readFile, search }