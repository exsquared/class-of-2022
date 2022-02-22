export { where, findBy }
import { getJsonResponseFilteredByQuery, getJsonResponse, processQuery, QueryObject } from './processing'


function where(query: QueryObject) : object[] | number {
    let jsonResponse = getJsonResponse();
    query = processQuery(query);
    let filteredJson = getJsonResponseFilteredByQuery(query, jsonResponse);
    return (filteredJson.length > 0) ? filteredJson : -1;
}

function findBy(query : QueryObject) : object[] | number {
    query = processQuery(query);

    let jsonResponse = getJsonResponse();
    let filteredJson = getJsonResponseFilteredByQuery(query, jsonResponse);
    return (filteredJson.length > 0) ? filteredJson.slice(0, 1) : -1;
}

