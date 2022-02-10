//file empty or not?
import {main} from './main.js'

export function handleFile(filePath){
    const fs = require('fs');
    let output = fs.readFileSync(filePath).toString();
    if(output.length == 0){
        return 'file is empty'}
    console.log(main(output))
    return main(output);
}