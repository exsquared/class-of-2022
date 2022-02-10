import fs from 'fs';
export function readFile(filePath){
    if(filePath == null) return -1;
    if(!fs.existsSync(filePath)) return -1;
    const content = fs.readFileSync(filePath, 'utf8').toString();

    if(content.length == 0) return -1;
    return content;
}