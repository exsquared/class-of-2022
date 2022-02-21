import {fileReading} from './fileReading';
import { helperFunction } from './helperFunction';
const FILEPATH : string = './data/startup-funding.json';
function findBy(options : Object = {}) : number{ 

    const finalObj : number | Object = helperFunction(options);

    if(finalObj == -1) return -1;

    const response : (number | Array<Object>) = fileReading(FILEPATH);

    if(response == -1) return -1;
    
    //Type narrowing in TypeScript....

    if(typeof(response) == 'object'){
        for(let i=0;i<response.length;i++){
            let eachObj = response[i];
            let flag = 0;
            if(typeof(finalObj) == 'object'){
                for(let x in finalObj){
                    if(typeof(finalObj[x]) == 'string' && finalObj[x].toLowerCase() != eachObj[x].toLowerCase()){
                        flag = 1;
                        break;
                    }
                }
            }
            if(flag == 0) return i;
        }
    }
    
    return -1;
}