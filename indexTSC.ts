

let address:string = './data/startup-funding.json';

function findBy(query : Query) : object|string{
    const filterData = where(query);
    if(filterData.length === 0){
        return 'No Such Matches';
    }
    return filterData[0];
}

function where(query : Query) : object[]{

    let data = readData(address);

    let object = propCheck(query);

    if(Object.keys(object).length === 0){
        return [];
    }

    return searchProperties(data, object);
    
}

function searchProperties(jsonObject : object[] , queryObject : object) : object[]{

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

function propCheck(query : Query) : object{

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

function readData (filePath : string) : object[] {
    const fs = require('fs');
    console.log(filePath);
    if(!(fs.existsSync(filePath))){
        return [];
    }
    return require(filePath);
    
}


