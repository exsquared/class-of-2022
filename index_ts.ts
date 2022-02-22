function where(file: string, {companyName = null, city = null, state = null, round = null} = {}): string | Number[] | Number{
    let data = readFile(file) as Number | string;

    if (data == -1){
        return "File does not exist.";
    }

    if(companyName == null && city == null && state == null && round == null){
        return data;
    }

    let params: params = {
        'company_name': companyName ? companyName: false,
        'city': city ? city: false,
        'state': state ? state: false,
        'round': round ? round: false
    };

    // Get [key, value] pair for only the passed parameters.
    var requiredParams: params = Object.keys(params).
                                filter((key) => params[key]).
                                reduce((cur, key) => { return Object.assign(cur, { [key]: params[key] })}, {});

    let filteredIndexes: Number[] = search(data, requiredParams);

    if(filteredIndexes.length == 0){
        return -1;
    }

    return filteredIndexes;
}

function findBy(file: string, {companyName = null, city = null, state = null, round = null} = {}): string | Number{
    let data = readFile(file) as Number | string;

    if (data == -1){
        return "File does not exist.";
    }

    if(companyName == null && city == null && state == null && round == null){
        return data;
    }

    let filteredIndex: string | Number | Number[] = where(file, {companyName: companyName, city: city, state: state, round: round});

    if(filteredIndex == -1){
        return -1;
    }

    return filteredIndex[0];

}

function search(data: any, parameters: params): Number[]{
    
    let requiredIndexes = [] as Number[];

    let allKeys = Object.keys(parameters);

    for(let i = 0; i < Object.keys(data).length; i++){
        let flag: number = 0
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

function readFile(filePath: string): string | Number{
    let fs = require('fs');

    if(!fs.existsSync(filePath)){
        return -1;
    }
    
    let data:string = require(filePath);

    return data;
}

interface params{
    'company_name'?: string | boolean,
    'city'?: string | boolean,
    'state'?: string | boolean,
    'round'?: string | boolean,
}

export { where, readFile, findBy, search };