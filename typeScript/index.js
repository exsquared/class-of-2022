"use strict";
exports.__esModule = true;
exports.where = void 0;
var filePath = '../data/startup-funding.json';
function readJsonFile(filePath) {
    var fs = require('fs');
    if (filePath == null ||
        !fs.existsSync(filePath) ||
        filePath.split(".").pop() != "json")
        return -1;
    var content = fs.readFileSync(filePath, "utf8");
    if (content.length == 0)
        return -1;
    var data = JSON.parse(content);
    if (data.length == 0 ||
        (data.length == 1 && Object.keys(data[0]).length == 0)) {
        return -1;
    }
    return data;
}
function where(options) {
    if (invalidData(options))
        return -1;
    var resultedArray = [];
    for (var key in options) {
        if (options[key] == null || options[key] == "" || options[key] == undefined)
            delete options[key];
    }
    var jsonData = readJsonFile(filePath);
    var keys = Object.keys(options);
    var values = Object.values(options);
    for (var obj in jsonData) {
        var match = 0;
        for (var i = 0; i < keys.length; i++) {
            if (jsonData[obj][keys[i]] === values[i]) {
                match++;
            }
        }
        if (match == keys.length) {
            resultedArray.push(parseInt(obj));
        }
    }
    if (resultedArray.length != 0)
        return resultedArray;
    return -1;
}
exports.where = where;
function invalidData(options) {
    var validKeys = ["company_name", "city", "state", "round"];
    if (options == null)
        return true;
    if (Object.keys(options).length < 1 || Object.keys(options).length > 4) {
        return true;
    }
    var passedKeys = Object.keys(options);
    for (var i = 0; i < passedKeys.length; i++) {
        if (!validKeys.includes(passedKeys[i]))
            return true;
    }
    if (Object.values(options).every(function (value) {
        if (value === null || value === undefined || value === "")
            return true;
        return false;
    })) {
        return true;
    }
    return false;
}
function findBy(options) {
    var arr = where(options);
    if (Array.isArray(arr))
        return parseInt(arr[0]);
    return -1;
}
