export { getJsonResponse, getJsonResponseFilteredByQuery, processQuery }

function getJsonResponse() {
    const path = './data/startup-funding.json';
    const fs = require('fs')

    if (fs.existsSync(path))
        return require(path)
    else
        return 'file does not exist'
}

function getJsonResponseFilteredByQuery(query, jsonResponse) {
    let filteredJson = [];
    for (const startupObject of jsonResponse) {
        let isFiltered = true;
        for (const parameter in query) {
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


function processQuery(query) {
    for (const parameter of Object.keys(query)) {
        if (query[parameter] == '-1') {
            delete query[parameter]
        }
    }
    return query
}

