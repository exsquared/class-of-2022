var address = './data/startup-funding.json';
function findBy(query) {
    var filterData = where(query);
    if (filterData.length === 0) {
        return 'No Such Matches';
    }
    return filterData[0];
}
function where(query) {
    var data = readData(address);
    var object = propCheck(query);
    if (Object.keys(object).length === 0) {
        return [];
    }
    return searchProperties(data, object);
}
function searchProperties(jsonObject, queryObject) {
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
function propCheck(query) {
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
function readData(filePath) {
    var fs = require('fs');
    console.log(filePath);
    if (!(fs.existsSync(filePath))) {
        return [];
    }
    return require(filePath);
}
