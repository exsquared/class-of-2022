

export const address = './data/startup-funding.json';

// console.log(findBy(null, "Scottsdale",null, null));

export function findBy(companyName, city, state, fundingRound){
    let filteredJSON = where(companyName, city, state, fundingRound);
    if(filteredJSON.length === 0){
        return 'No Such Matches';
    }
    return filteredJSON[0];
}




export function where(companyName, city, state, fundingRound) {

    var json = readData(address);

    let queryObject = propCheck(companyName, city, state, fundingRound);

    if(Object.keys(queryObject).length === 0){
        return [];
    }

    return searchProperties(json, queryObject);

}


export function searchProperties(jsonObject, queryObject) {

    if(!jsonObject || !queryObject) return -1;
    
    let filteredJSON = [];
    for(const obj of jsonObject){
        let check = true;
        for(const property in queryObject){
            if(queryObject[property] !== obj[property]){
                check = false;
                break;
            }
        } 
        if(check){
            filteredJSON.push(obj);
        }
    }
    return filteredJSON;
    
}

export function propCheck(companyName, city, state, fundingRound){

    if(!companyName && !city && !state && !fundingRound) return -1;

    let obj = {
        'company_name' : (companyName) ? companyName : -1,
        'city' : (city) ? city : -1,
        'state' : (state) ? state : -1,
        'round' : (fundingRound) ? fundingRound : -1,
    };  

    for (const property in obj) {
        if(obj[property] === -1){
            delete obj[property];
        }        
    }

    return obj;

}



export function readData (filePath) {

    if(!filePath) return -1;

    const fs = require('fs');

    if(!(fs.existsSync(filePath))){
        return -1;
    }

    return require(filePath);
}
