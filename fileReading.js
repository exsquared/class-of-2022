var fs = require('fs')

export function fileReading(FILEPATH){
    if(!fs.existsSync(FILEPATH))
        return -1;
    //It means that the file exists at that particular location..
    let response = fs.readFileSync(FILEPATH);

    //If the file is empty....
    let temp = response.toString();

    if(temp.length == 0)
        return -1;

    //It means that the file is not empty and exists at given path..
    let finalResponse = JSON.parse(temp)
    return (finalResponse.length == 0) ? -1 : finalResponse;
}


// fileReading('./data/startup-funding.json')