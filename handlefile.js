import { mainFunction } from './mainfunction.js';
export function handleFile(filePath){
    const fs = require('fs');
    let outputString = fs.readFileSync(filePath).toString();
    if(outputString.length == 0)
        return 'The file is empty.'
    console.log(mainFunction(outputString));
    return mainFunction(outputString);
}
