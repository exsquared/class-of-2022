function where(file, {companyName = null, city = null, state = null, round = null} = {}){
    let data = readFile(file);

    if (data == -1){
        return "File does not exist.";
    }

    if(companyName == null && city == null && state == null && round == null){
        return data;
    }

    let params = {
        'company_name': companyName ? companyName: false,
        'city': city ? city: false,
        'state': state ? state: false,
        'round': round ? round: false
    };

    // Get [key, value] pair for only the passed parameters.
    var requiredParams = Object.keys(params).
                                filter((key) => params[key]).
                                reduce((cur, key) => { return Object.assign(cur, { [key]: params[key] })}, {});

    let filteredIndexes = search(data, requiredParams);

    if(filteredIndexes.length == 0){
        return -1;
    }

    return filteredIndexes;
}

function findBy(file, {companyName = null, city = null, state = null, round = null} = {}){
    let data = readFile(file);

    if (data == -1){
        return "File does not exist.";
    }

    if(companyName == null && city == null && state == null && round == null){
        return data;
    }

    let filteredIndex = where(file, {companyName: companyName, city: city, state: state, round: round});

    if(filteredIndex == -1){
        return -1;
    }

    return filteredIndex[0];

}

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

export { where, readFile, findBy, search };