let normalGreets = [];
let shoutedGreets = [];

console.log(greet('Bob'));
console.log(greet());
console.log(greet("JERRY"));
console.log(greet(["Jill","Jane"]));
console.log(greet(["Amy", "Brian", "Charlotte"]));
console.log(greet(["Amy", "BRIAN", "Charlotte"]));
console.log(greet(["Bob", "Charlie, Dianne"]));
console.log(greet(["Bob", "\"Charlie, Dianne\""]));

export function greet(input){

    fillArrays(input);
    const res = normalGreetings()+shoutGreetings();
    normalGreets = [];
    shoutedGreets = [];
    return res;
}

function normalGreetings(){
    if(normalGreets.length === 0){
        return '';
    }
    let res = "Hello, ";
    if(normalGreets.length === 1){
        return res+normalGreets[0]+'.';
    }

    if(normalGreets.length === 2){
        return res + normalGreets[0] + " and " + normalGreets[1] + ".";
    }

    for(let i=0; i < normalGreets.length-1; i++){
        res += normalGreets[i]+", ";
    }
    res += "and "+normalGreets[normalGreets.length-1]+".";
    return res;
}

function shoutGreetings() {
    if(shoutedGreets.length === 0){
        return '';
    }
    let res = "HELLO ";
    if(normalGreets.length !== 0){
        res = " AND " + res;
    }

    if(shoutedGreets.length === 1){
        return res + shoutedGreets[0] + "!";
    }

    if(shoutedGreets.length === 2){
        return res +" "+shoutedGreets[0]+" and "+shoutedGreets[1]+"!";
    }

    for(let i=0; i<shoutedGreets.length-1; i++){
        res += shoutedGreets[i]+", ";
    }
    res += "AND "+shoutedGreets[shoutedGreets-1]+"!";
    return res;
    
}

function fillArrays(input) {
    if(!input){
        normalGreets.push("my friend");
        return;
    }
    if(Array.isArray(input)){
        handleArray(input);
        return;
    }
    if(isUpper(input)){
        shoutedGreets.push(input);
    }else{
        normalGreets.push(input);
    }
}

function handleArray(arrayOfNames){
    for (const name of arrayOfNames){
        if(name.includes('"')){
            handleNameWithCharacter(name);
        }else{
            handleNormal(name);
        }
    }
}

function handleNormal(name){
    const arr = name.split(",");
    for(const item of arr){
        item = item.trim();
        if(isUpper(item)){
            shoutedGreets.push(item);
        }else{
            normalGreets.push(item);
        }
    }
}

function handleNameWithCharacter(name) {
    const originalName = name.substring(1,name.length-1);
    if(isUpper(originalName)){
        shoutedGreets.push(originalName);
    }else{
        normalGreets.push(originalName);
    }
}

function isUpper(string){
    return string === string.toUpperCase();
}