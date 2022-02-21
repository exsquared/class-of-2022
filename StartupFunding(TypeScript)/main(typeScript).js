var address = 'D:/StartupFunding/data/startup-funding.json';
console.log(findBy({ company_name: 'LifeLock' }));
function findBy(query) {
    var filteredJSON = where(query);
    if (filteredJSON.length === 0) {
        return 'No Such Matches';
    }
    return filteredJSON[0];
}
function where(query) {
    var json = readJSON(address);
    var queryObject = prepareQueryObject(query);
    if (Object.keys(queryObject).length === 0) {
        return [];
    }
    return search(json, queryObject);
}
function search(jsonObject, queryObject) {
    var filteredJSON = [];
    for (var _i = 0, jsonObject_1 = jsonObject; _i < jsonObject_1.length; _i++) {
        var obj = jsonObject_1[_i];
        var check = true;
        for (var property in queryObject) {
            if (queryObject[property] !== obj[property]) {
                check = false;
                break;
            }
        }
        if (check) {
            filteredJSON.push(obj);
        }
    }
    return filteredJSON;
}
function prepareQueryObject(query) {
    var queryObject = {
        'company_name': (query.company_name) ? query.company_name : -1,
        'city': (query.city) ? query.city : -1,
        'state': (query.state) ? query.state : -1,
        'round': (query.round) ? query.round : -1
    };
    for (var property in queryObject) {
        if (queryObject[property] === -1) {
            delete queryObject[property];
        }
    }
    return queryObject;
}
function readJSON(localJSONFilePath) {
    var fs = require('fs');
    console.log(localJSONFilePath);
    if (!(fs.existsSync(localJSONFilePath))) {
        return [];
    }
    return require(localJSONFilePath);
}
