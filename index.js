var fs = require('fs');
function readFile(path) {
    // check if directory exists
    if (!fs.existsSync(path)) {
        var dataset_1 = require(path);
        return dataset_1;
    }
    else {
        return 0;
    }
}
function optionsSelection(user_input) {
    var options = { company_name: null, city: null, state: null, round: null };
    if (!user_input || Object.keys(user_input).length == 0)
        return -1;
    for (var key in options) {
        if (Object.keys(user_input).includes(key) && !(user_input[key] == null)) {
            options[key] = user_input[key];
        }
        else {
            delete options[key];
        }
    }
    return options;
}
function findBy(dataset, options) {
    if (!dataset)
        return -1;
    var result = filterData(dataset, options);
    if (result.length > 0) {
        return result[0];
    }
    return "Not Found.";
}
function where(dataset, options) {
    if (!dataset)
        return -1;
    var result = filterData(dataset, options);
    if (result.length > 0) {
        return result;
    }
    return "Not Found.";
}
function filterData(dataset, options) {
    var finalOutput = [];
    if (typeof dataset == "object") {
        for (var _i = 0, dataset_2 = dataset; _i < dataset_2.length; _i++) {
            var entry = dataset_2[_i];
            var flag = false;
            if (typeof options == "object") {
                for (var key in options) {
                    if (options[key] == entry[key]) {
                        flag = true;
                    }
                    else {
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
var dataset = readFile("./data/startup-funding.json");
// console.log(dataset);
var options = optionsSelection({ "company_name": "LifeLock", "state": "AZ" });
// console.log(options);
var findByResult = findBy(dataset, options);
var whereResult = where(dataset, options);
console.log(whereResult);
// console.log(findByResult);
