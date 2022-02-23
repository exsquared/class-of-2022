"use strict";
exports.__esModule = true;
exports.search = exports.findBy = exports.readFile = exports.where = void 0;
function where(file, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.companyName, companyName = _c === void 0 ? null : _c, _d = _b.city, city = _d === void 0 ? null : _d, _e = _b.state, state = _e === void 0 ? null : _e, _f = _b.round, round = _f === void 0 ? null : _f;
    var data = readFile(file);
    if (data == -1) {
        return "File does not exist.";
    }
    if (companyName == null && city == null && state == null && round == null) {
        return data;
    }
    var params = {
        'company_name': companyName ? companyName : false,
        'city': city ? city : false,
        'state': state ? state : false,
        'round': round ? round : false
    };
    // Get [key, value] pair for only the passed parameters.
    var requiredParams = Object.keys(params).
        filter(function (key) { return params[key]; }).
        reduce(function (cur, key) {
        var _a;
        return Object.assign(cur, (_a = {}, _a[key] = params[key], _a));
    }, {});
    var filteredIndexes = search(data, requiredParams);
    if (filteredIndexes.length == 0) {
        return -1;
    }
    return filteredIndexes;
}
exports.where = where;
function findBy(file, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.companyName, companyName = _c === void 0 ? null : _c, _d = _b.city, city = _d === void 0 ? null : _d, _e = _b.state, state = _e === void 0 ? null : _e, _f = _b.round, round = _f === void 0 ? null : _f;
    var data = readFile(file);
    if (data == -1) {
        return "File does not exist.";
    }
    if (companyName == null && city == null && state == null && round == null) {
        return data;
    }
    var filteredIndex = where(file, { companyName: companyName, city: city, state: state, round: round });
    if (filteredIndex == -1) {
        return -1;
    }
    return filteredIndex[0];
}
exports.findBy = findBy;
function search(data, parameters) {
    var requiredIndexes = [];
    var allKeys = Object.keys(parameters);
    for (var i = 0; i < Object.keys(data).length; i++) {
        var flag = 0;
        for (var _i = 0, allKeys_1 = allKeys; _i < allKeys_1.length; _i++) {
            var key = allKeys_1[_i];
            if (data[i][key] != parameters[key]) {
                break;
            }
            flag += 1;
        }
        if (flag == allKeys.length) {
            requiredIndexes.push(i);
        }
    }
    return requiredIndexes;
}
exports.search = search;
function readFile(filePath) {
    var fs = require('fs');
    if (!fs.existsSync(filePath)) {
        return -1;
    }
    var data = require(filePath);
    return data;
}
exports.readFile = readFile;
