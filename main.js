import {readJSON, prepareQueryObject, search} from './utility.js'

const address = './data/startup-funding.json';

// console.log(findBy(null, "Scottsdale",null, null));

export function findBy(companyName, city, state, fundingRound){
    let filteredJSON = where(companyName, city, state, fundingRound);
    if(filteredJSON.length === 0){
        return 'No Such Matches';
    }
    return filteredJSON[0];
}

// console.log(where(null, "Scottsdale",null, null));


export function where(companyName, city, state, fundingRound) {

    var json = readJSON(address);

    if(json === -1) return -1;

    let queryObject = prepareQueryObject(companyName, city, state, fundingRound);

    if(Object.keys(queryObject).length === 0){
        return [];
    }

    return search(json, queryObject);

}






