import {fileReading} from './fileReading';
const FILEPATH = './data/startup-funding.json';
export function findBy(options = {}){ 
    if(Object.keys(options).length == 0) return -1;
    if(Object.keys(options).length > 4) return -1;
    const obj = {
        "company_name": null,
        "city": null,
        "state": null, 
        "round": null
    }
    for(let x in obj){
        if(x in options) obj[x] = options[x];
    }
    let finalObj = {};
    for(let x in obj){
        if(obj[x]!=null){
            finalObj[x] = obj[x];
        }
    }
    if(Object.keys(finalObj).length == 0) return -1;
    //Here, the file will be read...
    const response = fileReading(FILEPATH);
    if(response == -1) return -1;
    const len = Object.keys(finalObj).length;
    for(let i=0;i<response.length;i++){
        let eachObj = response[i];
        let flag = 0;
        for(let x in finalObj){
            if(typeof(finalObj[x]) == 'string' && finalObj[x].toLowerCase() != eachObj[x].toLowerCase()){
                flag = 1;
                break;
            }
        }
        if(flag == 0) return i;
    }
    return -1;
}