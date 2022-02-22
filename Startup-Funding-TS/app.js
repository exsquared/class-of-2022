"use strict";
exports.__esModule = true;
exports.findBy = exports.where = void 0;
var processing_1 = require("./processing");
function where(query) {
    var jsonResponse = (0, processing_1.getJsonResponse)();
    query = (0, processing_1.processQuery)(query);
    var filteredJson = (0, processing_1.getJsonResponseFilteredByQuery)(query, jsonResponse);
    return (filteredJson.length > 0) ? filteredJson : -1;
}
exports.where = where;
function findBy(query) {
    query = (0, processing_1.processQuery)(query);
    var jsonResponse = (0, processing_1.getJsonResponse)();
    var filteredJson = (0, processing_1.getJsonResponseFilteredByQuery)(query, jsonResponse);
    return (filteredJson.length > 0) ? filteredJson.slice(0, 1) : -1;
}
exports.findBy = findBy;
