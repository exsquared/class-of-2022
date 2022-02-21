var fs = require('fs')

export function fileReading(FILEPATH : string | null) : (number | Array<Object>){
    if(!fs.existsSync(FILEPATH))
        return -1;

    let response = fs.readFileSync(FILEPATH);

    let temp : string = response.toString();

    if(temp.length == 0)
        return -1;

    let finalResponse : Array<Object> = JSON.parse(temp)

    return (finalResponse.length == 0) ? -1 : finalResponse;
}
