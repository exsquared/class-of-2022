
export function search(jsonObject, queryObject) {

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

export function prepareQueryObject(companyName, city, state, fundingRound){

    if(!companyName && !city && !state && !fundingRound) return -1;

    let obj = {company_name: -1,
        city: -1,
        state: -1,
        round : -1
    };

    if(companyName){
        obj['company_name'] = companyName;
    }
    if(city){
        obj['city'] = city;
    }
    if(state){
        obj['state'] = state;
    }
    if(fundingRound){
        obj['round'] = fundingRound;
    }   

    for (const property in obj) {
        if(obj[property] === -1){
            delete obj[property];
        }        
    }

    return obj;

}



export function readJSON (localJSONFilePath) {

    if(!localJSONFilePath) return -1;

    const fs = require('fs');

    if(!(fs.existsSync(localJSONFilePath))){
        return -1;
    }

    return require(localJSONFilePath);
}