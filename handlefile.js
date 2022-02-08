import { mainFunction } from './mainfunction';
export function handleFile(filePath){
    const fs = require('fs');
    let outputString = fs.readFileSync(filePath).toString();
    if(outputString.length == 0)
        return 'The file is empty.'
    return mainFunction(outputString);
}
