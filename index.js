import { handleFile} from "./handlefile";
export function supportingFunction(filePath = null){
    //If we pass nothing or null keyword in the filePath variable...
    if(filePath == null)
        return -1;
    //It means that there is some file path mentioned here....
    const fs = require('fs');
    if(!fs.existsSync(filePath))
    //If the file path does not exist, then return -1..
        return -1;
    //It means that the file path is valid....
    return handleFile(filePath)
}