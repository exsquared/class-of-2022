export { getJsonResponse, getJsonResponseFilteredByQuery, processQuery, QueryObject }

function getJsonResponse() : object[]{
    const path = './data/startup-funding.json';
    const fs = require('fs')

    if (fs.existsSync(path))
        return require(path)
    else
        return []
}

function getJsonResponseFilteredByQuery(query : object, jsonResponse : object[]) : object[] {
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

interface QueryObject {
    company_name?: string,
    city?: string,
    state?: string
    round?: string | number
}

function processQuery(query : QueryObject) : object {
    for (const parameter of Object.keys(query)) {
        if (query[parameter] == '-1') {
            delete query[parameter]
        }
    }
    return query
}

