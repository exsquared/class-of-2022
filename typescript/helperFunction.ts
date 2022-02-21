export function helperFunction(options: Object) : (number | Object){

    if(Object.keys(options).length == 0) return -1;

    if(Object.keys(options).length > 4) return -1;

    const obj : Object = {
        "company_name": null,
        "city": null,
        "state": null, 
        "round": null
    }

    for(let x in obj){
        if(x in options) obj[x] = options[x];
    }

    let finalObj : Object = {};

    for(let x in obj){
        if(obj[x]!=null){
            finalObj[x] = obj[x];
        }
    }

    if(Object.keys(finalObj).length == 0) return -1;
    
    return finalObj;
}