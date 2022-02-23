import { search, readFile } from './helper';

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

export { where, findBy };