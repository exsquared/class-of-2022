//input the string
// let getString ="";

//Declare and initialize required Variables for program
let arrayOfNames = [];
let arrayOfNormalNames = [];
let arrayOfShoutedNames = [];
let element = '';
let normalNameExists = false;
let finalGreetingMessage = '';

// reinitialize variables for next test case too run
function reInitializeVariables(){
    arrayOfNames = [];
    arrayOfNormalNames = [];
    arrayOfShoutedNames = [];
    element = '';
    normalNameExists = false;
    finalGreetingMessage = '';
}
//call greet function
// greet(getString);

//GREET FUNCTION
function greet(string){
    reInitializeVariables();
    if(typeof(string)=='object') string = string.join();
    string = trimString(string);
    if(string == null || string == "") return `Hello, my friend.`;
    convertStringToArray(string);
    seperateArrayToNormalAndShoutedNamesArray(arrayOfNames);
    return greetMessage();
}

//TRIM FUNCTION
function trimString(string){
    if(string == null) return null;
    else return string.trim();
}

//FUNCTION TO CONVERT STRING TO ARRAY FUNCTION
function convertStringToArray(string){
    for(let characterIndex = 0; characterIndex < string.length; characterIndex++){
        if(string[characterIndex] == '"'){
            element += createInvertedCommaName(string, characterIndex);
            arrayOfNames.push(element);
            characterIndex += element.length + 1;
            element = '';
            continue;
        }
        if(string[characterIndex] != ' ' && string[characterIndex] != ','){
            element+=string[characterIndex];
            continue;
        }
        if(element != ''){
            arrayOfNames.push(element);
            element = '';
        }
    }
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
        if(name == name.toUpperCase())arrayOfShoutedNames.push(name);
        else arrayOfNormalNames.push(name);
    }
}

//PRINT GREET FUCNTION
function greetMessage(){
    if(arrayOfNormalNames.length>0){
        createNormalNameGreetingString();
    }
    if(arrayOfShoutedNames.length>0){
        createShoutedNameGreetingString();
    }
    if(arrayOfShoutedNames.length == 0 && arrayOfNormalNames.length == 0){
        finalGreetingMessage += `Hello, my friend.`;
    }
    return finalGreetingMessage;
}

//FUNCTION TO CREATE NORMAL NAME GREETING STRING
function createNormalNameGreetingString(){
    finalGreetingMessage += 'Hello, ';
    normalNameExists = true;
    if(arrayOfNormalNames.length == 1) finalGreetingMessage += `${arrayOfNormalNames[0]}.`;
    else if(arrayOfNormalNames.length == 2) finalGreetingMessage += `${arrayOfNormalNames[0]} and ${arrayOfNormalNames[1]}.`;
    else{
        for(let index = 0; index < arrayOfNormalNames.length; index++){
            if(index == arrayOfNormalNames.length-1) return finalGreetingMessage += `and ${arrayOfNormalNames[index]}.`;
            finalGreetingMessage += `${arrayOfNormalNames[index]}, `;
        }
    }
}

//FUNCTION TO CREATE SHOUTED NAME GREETING STRING
function createShoutedNameGreetingString(){
    if(normalNameExists) finalGreetingMessage += `AND HELLO, `;
    else finalGreetingMessage += `HELLO, `;
    if(arrayOfShoutedNames.length == 1) finalGreetingMessage += `${arrayOfShoutedNames[0]}!`;
    else if(arrayOfShoutedNames.length == 2) finalGreetingMessage += `${arrayOfShoutedNames[0]} AND ${arrayOfShoutedNames[1]}!`;
    else{
        for(let index = 0; index < arrayOfShoutedNames.length; index++){
            if(index == arrayOfShoutedNames.length-1) return finalGreetingMessage += `AND ${arrayOfShoutedNames[index]}!`;
            finalGreetingMessage += `${arrayOfShoutedNames[index]}, `;
        }
    }
}



//Testing area
describe("test cases for Greeting TDD", () => {
    it("Should return the passed string with greeting message", () => {
        const inputName = "Sahil";
        const myGreetingMessage = greet(inputName);
        expect(myGreetingMessage).toBe("Hello, Sahil.");
    });
    it("Should return message. if name has spaces in front and end", () => {
        const inputName = " Sahil ";
        const myGreetingMessage = greet(inputName);
        expect(myGreetingMessage).toBe("Hello, Sahil.");
    });
    it("Should return HELLO, SHOUTED NAME. if name is shouted", () => {
        const inputName = "SAHIL";
        const myGreetingMessage = greet(inputName);
        expect(myGreetingMessage).toBe("HELLO, SAHIL!");
    });
    it("Should return Hello, my friend. if message is null", () => {
        const inputName = null;
        const myGreetingMessage = greet();
        expect(myGreetingMessage).toBe("Hello, my friend.");
    });
    it("Should return Hello, name1 and name2. If two names are passed", () => {
        const inputName = ["Jack","Jill"];
        const myGreetingMessage = greet(inputName);
        expect(myGreetingMessage).toBe("Hello, Jack and Jill.");
    });
    it("Should return Hello, name1, name2, ...., and nameN. If multiple normal names names are passed", () => {
        const inputName = ["Jack","Jill","Joe"];
        const myGreetingMessage = greet(inputName);
        expect(myGreetingMessage).toBe("Hello, Jack, Jill, and Joe.");
    });
    it("Should return Hello, name1 and name2.AND Hello, name1. If a shouted name is passed along with two normal names", () => {
        const inputName = ["Jack","JILL", "Joe"];
        const myGreetingMessage = greet(inputName);
        expect(myGreetingMessage).toBe("Hello, Jack and Joe.AND HELLO, JILL!");
    });
    it("Should return Hello, name1 and name2.AND HELLO, NAME1 AND NAME2! If two names each of normal and shouted are passed.", () => {
        const inputName = ["Jack","JILL", "Joe", "JOHN"];
        const myGreetingMessage = greet(inputName);
        expect(myGreetingMessage).toBe("Hello, Jack and Joe.AND HELLO, JILL AND JOHN!");
    });
    it("Should return Hello, name1, name2, ...., and nameN.AND HELLO, NAME1, NAME2, ..., AND NAMEn If multiple names of normal and shouted case are passed", () => {
        const inputName = ["Jack","JILL", "Joe", "JOHN", "Mark", "JADE"];
        const myGreetingMessage = greet(inputName);
        expect(myGreetingMessage).toBe("Hello, Jack, Joe, and Mark.AND HELLO, JILL, JOHN, AND JADE!");
    });
    it("Should return Hello, name1 and name2. If two names are passed as a string", () => {
        const inputName = "Jack, John";
        const myGreetingMessage = greet(inputName);
        expect(myGreetingMessage).toBe("Hello, Jack and John.");
    });
    it("Should return greet message. If names are passed array and checking requirement 7.", () => {
        const inputName = ["Jill","Jack, John"];
        const myGreetingMessage = greet(inputName);
        expect(myGreetingMessage).toBe("Hello, Jill, Jack, and John.");
    });
})