"use strict";
exports.__esModule = true;
exports.readInputFile = exports.search = exports.where = exports.findBy = void 0;
function findBy(company, city, state, round) {
    var readFile;
    readFile = readInputFile("./data/startup-funding.json");
    if (readFile == null)
        return "File does not exist.";
    if (company == null && city == null && state == null && round == null)
        return readFile;
    var filteredData = where(company, city, state, round);
    if (filteredData.length === 0)
        return -1;
    return filteredData[0];
}
exports.findBy = findBy;
function where(company, city, state, round) {
    var details;
    details = readInputFile("./data/startup-funding.json");
    if (details == null)
        return "File does not exist.";
    if (company == null && city == null && state == null && round == null)
        return details;
    var detailsobj = {
        company_name: -1,
        city: -1,
        state: -1,
        round: -1
    };
    company != null ? detailsobj['company_name'] = company : detailsobj['company_name'] = -1;
    city != null ? detailsobj['city'] = city : detailsobj['city'] = -1;
    state != null ? detailsobj['state'] = state : detailsobj['state'] = -1;
    round != null ? detailsobj['round'] = round : detailsobj['round'] = -1;
    for (var param in detailsobj) {
        if (detailsobj[param] === -1) {
            delete detailsobj[param];
        }
    }
    if (Object.keys(detailsobj).length === -0)
        return 0;
    return search(details, detailsobj);
}
exports.where = where;
function search(details, detailsobj) {
    if (details == null || detailsobj == null)
        return -1;
    var getKeys = Object.keys(detailsobj);
    var employeeDetailsArray = [];
    for (var detail in details) {
        // console.log(details[detail]);
        var count = 0;
        for (var _i = 0, getKeys_1 = getKeys; _i < getKeys_1.length; _i++) {
            var key = getKeys_1[_i];
            if (detailsobj[key] != details[detail][key]) {
                count = 1;
                break;
            }
        }
        //console.log(detailsobj[key])
        if (count == 0) {
            //employeeDetailsArray.push(detailsobj[key]);
            employeeDetailsArray.push(details[detail]);
        }
    }
    return employeeDetailsArray;
}
exports.search = search;
function readInputFile(file) {
    var fs = require('fs');
    if (!fs.existsSync(file)) {
        return null;
    }
    var rawData = require(file);
    return rawData;
}
exports.readInputFile = readInputFile;
console.log(where('LifeLock', null, null, null));
