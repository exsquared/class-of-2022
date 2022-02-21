export { where, findBy }
import { getJsonResponseFilteredByQuery, getJsonResponse, processQuery } from './processing.js'


function where(query) {
    let jsonResponse = getJsonResponse();
    query = processQuery(query);
    let filteredJson = getJsonResponseFilteredByQuery(query, jsonResponse);
    return (filteredJson.length > 0) ? filteredJson : -1;
}

function findBy(query) {
    query = processQuery(query);

    let jsonResponse = getJsonResponse();
    let filteredJson = getJsonResponseFilteredByQuery(query, jsonResponse);
    return (filteredJson.length > 0) ? filteredJson.slice(0, 1) : -1;
}

