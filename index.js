//input the string
let getString = "";

//Declare and initialize required Variables for program
let arrayOfNames = [];
let arrayOfNormalNames = [];
let arrayOfShoutedNames = [];
let element = '';
let normalNameExists = false;
let finalGreetingMessage = '';

//call greet function
greet(getString);

//GREET FUNCTION
function greet(string){
    //check if array convert to string
    if(Array.isArray(string)) string = string.join();
    //trim string
    string = trimString(string);
    //if string is null or empty
    if(string == null || string == "") {
        console.log(`Hello, my friend.`);
        return;
    }
    //convert string to array
    convertStringToArray(string);
    //separate array to normal and shouted name array
    seperateArrayToNormalAndShoutedNamesArray(arrayOfNames);
    //print greet message
    console.log(greetMessage());
}

//TRIM FUNCTION
function trimString(string){
    if(string == null) return null;
    else return string.trim();
}

//FUNCTION TO CONVERT STRING TO ARRAY FUNCTION
function convertStringToArray(string){
    for(let characterIndex = 0; characterIndex < string.length; characterIndex++){
        //handling case of inverted comma
        if(string[characterIndex] == '"'){
            element += createInvertedCommaName(string, characterIndex);
            arrayOfNames.push(element);
            characterIndex += element.length + 1;
            console.log(string[characterIndex])
            element = '';
            continue;
        }
        //creating name
        if(string[characterIndex] != ' ' && string[characterIndex] != ','){
            element+=string[characterIndex];
            continue;
        }
        //add name to array and initialize element for new name creation
        if(element != ''){
            arrayOfNames.push(element);
            element = '';
        }
    }
    //handling single element or last element (if it is not inverted comma case)
    if(!string.endsWith('"') && element!=""){
        arrayOfNames.push(element);
    }
}

//FUNCTION TO CREATE STRING WHICH COMES UNDER INVERTED COMMA AS A SINGLE ELEMENT
function createInvertedCommaName(string, startIndexOfInvertedComma){
    let finalString = '';
    for(let index=startIndexOfInvertedComma+1; index<string.length; index++){
        if(string[index] == '"') break;
        finalString += string[index];
    }
    return finalString;
}

//FUNCTION TO SEPERATE ARRAY TO NORMAL AND SHOUTED NAME ARRAY
function seperateArrayToNormalAndShoutedNamesArray(namesArray){
    for(let name of namesArray){
        //add names in shouted array
        if(name == name.toUpperCase())arrayOfShoutedNames.push(name);
        //add names in normal array
        else arrayOfNormalNames.push(name);
    }
}

//PRINT GREET FUCNTION
function greetMessage(){
    //if normal name exists
    if(arrayOfNormalNames.length>0){
        createNormalNameGreetingString();
    }
    //if shouted names exists
    if(arrayOfShoutedNames.length>0){
        createShoutedNameGreetingString();
    }
    //edge cases like improper combinations of space or commas as input
    if(arrayOfShoutedNames.length == 0 && arrayOfNormalNames.length == 0){
        finalGreetingMessage += `Hello, my friend.`;
    }
    return finalGreetingMessage;
}

//FUNCTION TO CREATE NORMAL NAME GREETING STRING
function createNormalNameGreetingString(){
    finalGreetingMessage += 'Hello, ';
    normalNameExists = true;
    //if only one normal name is there
    if(arrayOfNormalNames.length == 1) finalGreetingMessage += `${arrayOfNormalNames[0]}.`;
    //if only two normal name is there
    else if(arrayOfNormalNames.length == 2) finalGreetingMessage += `${arrayOfNormalNames[0]} and ${arrayOfNormalNames[1]}.`;
    //if multiple normal name is there
    else{
        for(let index = 0; index < arrayOfNormalNames.length; index++){
            //condition for and before last name
            if(index == arrayOfNormalNames.length-1) return finalGreetingMessage += `and ${arrayOfNormalNames[index]}.`;
            //for rest
            finalGreetingMessage += `${arrayOfNormalNames[index]}, `;
        }
    }
}

//FUNCTION TO CREATE SHOUTED NAME GREETING STRING
function createShoutedNameGreetingString(){
    //if normal names are also there
    if(normalNameExists) finalGreetingMessage += `AND HELLO, `;
    //if only shouted name are there
    else finalGreetingMessage += `HELLO, `;
    //only if one shouted name is there
    if(arrayOfShoutedNames.length == 1) finalGreetingMessage += `${arrayOfShoutedNames[0]}!`;
    //only if two shouted name are there
    else if(arrayOfShoutedNames.length == 2) finalGreetingMessage += `${arrayOfShoutedNames[0]} AND ${arrayOfShoutedNames[1]}!`;
    //if multiple shouted name are there
    else{
        for(let index = 0; index < arrayOfShoutedNames.length; index++){
            //condition for and before last name
            if(index == arrayOfShoutedNames.length-1) return finalGreetingMessage += `AND ${arrayOfShoutedNames[index]}!`;
            //for rest
            finalGreetingMessage += `${arrayOfShoutedNames[index]}, `;
        }
    }
}