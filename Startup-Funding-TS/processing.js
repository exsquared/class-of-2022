"use strict";
exports.__esModule = true;
exports.processQuery = exports.getJsonResponseFilteredByQuery = exports.getJsonResponse = void 0;
function getJsonResponse() {
    var path = './data/startup-funding.json';
    var fs = require('fs');
    if (fs.existsSync(path))
        return require(path);
    else
        return [];
}
exports.getJsonResponse = getJsonResponse;
function getJsonResponseFilteredByQuery(query, jsonResponse) {
    var filteredJson = [];
    for (var _i = 0, jsonResponse_1 = jsonResponse; _i < jsonResponse_1.length; _i++) {
        var startupObject = jsonResponse_1[_i];
        var isFiltered = true;
        for (var parameter in query) {
            if (startupObject[parameter].toString().replace(/\s+/g, '').toLowerCase() !=
                query[parameter].toString().replace(/\s+/g, '').toLowerCase()) {
                isFiltered = false;
                break;
            }
        }
        if (isFiltered)
            filteredJson.push(startupObject);
    }
    return filteredJson;
}
exports.getJsonResponseFilteredByQuery = getJsonResponseFilteredByQuery;
function processQuery(query) {
    for (var _i = 0, _a = Object.keys(query); _i < _a.length; _i++) {
        var parameter = _a[_i];
        if (query[parameter] == '-1') {
            delete query[parameter];
        }
    }
    return query;
}
exports.processQuery = processQuery;
