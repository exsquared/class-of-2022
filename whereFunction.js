import {fileReading} from './fileReading';
import { helperFunction } from './helperFunction';
const FILEPATH = './data/startup-funding.json';

export function whereFunction(options = {}){ 

    const finalObj = helperFunction(options)

    if(finalObj == -1) return -1;

    const response = fileReading(FILEPATH);

    if(response == -1) return -1;

    let list = []

    for(let i=0;i<response.length;i++){
        let eachObj = response[i];
        let flag = 0;
        for(let x in finalObj){
            if(typeof(finalObj[x]) == 'string' && finalObj[x].toLowerCase() != eachObj[x].toLowerCase()){
                flag = 1;
                break;
            }
        }
        if(flag == 0) list.push(i);
    }

    if(list.length == 0) return -1;
    
    return list;
}