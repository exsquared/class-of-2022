const fs = require('fs');
function readFile(path : string): Array<object> | number {
    // check if directory exists
    if (!fs.existsSync(path)) {
        let dataset : Array<object> = require(path);
        return dataset;
    } else {
        return 0;
    }
}    

function optionsSelection(user_input : Object): Object | number {
    let options : Object = {company_name: null, city: null, state: null, round: null};
    if (!user_input || Object.keys(user_input).length == 0) return -1;
    for (let key in options) {
        if (Object.keys(user_input).includes(key) && !(user_input[key]==null)) {
            options[key] = user_input[key];
        } else {
            delete options[key];
        }
    }
    return options; 
}   

function findBy(dataset : Array<object> | number , options : object | number) : string | object | number | string [] {
    if (!dataset) return -1;
    let result : string[] = filterData(dataset, options);
    if (result.length > 0) {
        return result[0];
    }
    return "Not Found.";
}

function where(dataset : Array<object> | number , options : object | number) : string |object | number | Array<object> {
    if (!dataset) return -1;
    let result : string[]  | number = filterData(dataset, options);
    if (result.length > 0) {
        return result;
    }
    return "Not Found.";
}
    
function filterData(dataset : Array<object> | number  , options : object | number) : string [] {
    var finalOutput = [];
    if (typeof dataset == "object") {
    for (let entry of dataset) { 
        var flag :boolean = false;
        if (typeof options == "object") {
        for (let key in options) {
            if (options[key] == entry[key]) {               
                flag = true;
            } else {
                flag = false;
                break;
            }
        }
    }
        if (flag) {
            finalOutput.push(entry);
        }
    }
}
    return finalOutput;
}

var dataset : Array<object> | number = readFile("./data/startup-funding.json");
// console.log(dataset);
var options  = optionsSelection({"company_name": "LifeLock", "state": "AZ",});
// console.log(options);
var findByResult = findBy(dataset, options);
var whereResult = where(dataset, options);
console.log(whereResult);
// console.log(findByResult);
