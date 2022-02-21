let address:string = 'D:/StartupFunding/data/startup-funding.json';

function findBy(query : Query) : object|string{
    const filteredJSON = where(query);
    if(filteredJSON.length === 0){
        return 'No Such Matches';
    }
    return filteredJSON[0];
}

function where(query : Query) : object[]{

    let json = readJSON(address);

    let queryObject = prepareQueryObject(query);

    if(Object.keys(queryObject).length === 0){
        return [];
    }

    return search(json, queryObject);
    
}

function search(jsonObject : object[] , queryObject : object) : object[]{

    let filteredJSON : object[] = [];
    for(const obj of jsonObject){
        let check:boolean = true;
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

function prepareQueryObject(query : Query) : object{

    let queryObject = {
        'company_name' : (query.company_name) ? query.company_name : -1,
        'city' : (query.city) ? query.city : -1,
        'state' : (query.state) ? query.state : -1,
        'round' : (query.round) ? query.round : -1
    }
    
    for (const property in queryObject) {
        if(queryObject[property] === -1){
            delete queryObject[property];
        }        
    }

    return queryObject;
}

interface Query{
    company_name?:string,
    city?: string,
    state? : string,
    round? : string
}

function readJSON (localJSONFilePath : string) : object[] {
    const fs = require('fs');
    console.log(localJSONFilePath);
    if(!(fs.existsSync(localJSONFilePath))){
        return [];
    }
    return require(localJSONFilePath);
    
}






