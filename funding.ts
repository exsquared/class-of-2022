interface employeeDetails{
    company_name :string|number,
    city :string|number,
    state :string|number,
    round :string|number
}
type employeeDetailsType = employeeDetails;

export function findBy(company?:string, city?:string, state?:string, round?:string){
    let readFile: employeeDetails;
    readFile = readInputFile("./data/startup-funding.json");
    if (readFile == null)     return "File does not exist.";
    if(company==null && city==null && state==null && round==null)  return readFile;

    let filteredData: any = where(company, city, state, round);
    if(filteredData.length===0) return -1

    

    return filteredData[0];
}


export function where( company?:string, city?:string, state?:string, round?:string){
    let details: employeeDetails;
    details = readInputFile("./data/startup-funding.json");
    if (details == null)     return "File does not exist.";
    if(company==null && city==null && state==null && round==null)  return details;

    let detailsobj:employeeDetails = {
        company_name :-1,
        city:-1,
        state:-1,
        round:-1

    };

    company!=null ? detailsobj['company_name']=company : detailsobj['company_name']=-1;
    city!=null ? detailsobj['city']=city : detailsobj['city']=-1;
    state!=null ? detailsobj['state']=state : detailsobj['state']=-1;
    round!=null ? detailsobj['round']=round : detailsobj['round']=-1;

    for(var param in detailsobj){
        if(detailsobj[param]===-1){
            delete detailsobj[param];
        }
    }

    if(Object.keys(detailsobj).length===-0)  return 0;
    return search(details, detailsobj);

}


export function search(details:employeeDetailsType,detailsobj:employeeDetails){
    if(details==null || detailsobj==null)   return -1;

    let getKeys = Object.keys(detailsobj);
    
    let employeeDetailsArray: string[] = [];

    for(var detail in details){
       // console.log(details[detail]);
        let count =0;
        for(var key of getKeys){
            if(detailsobj[key]!= details[detail][key]){
                count = 1;
                break;
            }
        }
        //console.log(detailsobj[key])
        if(count==0){
            //employeeDetailsArray.push(detailsobj[key]);
            employeeDetailsArray.push(details[detail]);
        }
    }
    return employeeDetailsArray;
}

export function readInputFile(file){
    let fs = require('fs');
    if(!fs.existsSync(file)){
        return null;
    }
    let rawData = require(file);
    return rawData;
}


console.log(where('ChosenList.com',null,null,null));




