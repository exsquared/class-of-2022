import {handleFile} from "./handlefile.js"

export function filePathCheck(filePath){
    if(filePath === null){
        return -1;
    }
    const fs = require('fs');
    if(!fs.existsSync(filePath)){
        return -1;
    }

    return handleFile(filePath);
    
}