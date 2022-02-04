function greet(message = 'my friend', greetLang = 'Hello', separator = ','){
    if(Array.isArray(message)){
        return printGreetingArray(greetLang, message, separator);
    }
    message = checkMessage(message);
    return printGreetingString(greetLang, message, separator);
}

function checkMessage(message){
    if (message == null){
        return 'my friend';
    }else if(message.trim() == ''){
        return 'my friend'
    }
    return message;
}

function printGreetingArray(greetLang, message, separator){
    let separatedCases = separateCase(message);
    let lowercaseNames = separatedCases.lowercaseNames;
    let uppercaseNames = separatedCases.uppercaseNames;

    let lowercaseGreeting = printGreetingMessage(greetLang, handleArray(lowercaseNames, separator), lowercaseNames, 0);
    let uppercaseGreeting = printGreetingMessage(greetLang, handleArray(uppercaseNames, separator), uppercaseNames, 1);

    if(lowercaseGreeting.length >= 1 && uppercaseGreeting.length >=1){
        return `${lowercaseGreeting} AND ${uppercaseGreeting}`;
    }else if(uppercaseGreeting.length >=1){
        return `${uppercaseGreeting}`;
    }else{
        return `${lowercaseGreeting}`;
    }
}

function printGreetingString(greetLang, message, separator){
    message = message.trim();
    if(message.includes(',')){
        message = message.replaceAll(' ', '');
        message = message.split(',');

        return printGreetingArray(greetLang, message, separator);
    }

    if(isUpper(message)){
        return `${greetLang.toUpperCase()} ${message}!`;
    }

    return `${greetLang}${separator} ${message}.`;  
}

function printGreetingMessage(greetLang, message, arr, typeCase){
    terminator = ['.', '!'];
    lowercaseOrUpperCase = [',', ''];
    

    if(arr.length == 0){
        return '';
    }else{
        return setCase(`${greetLang}${lowercaseOrUpperCase[typeCase]} ${message}${terminator[typeCase]}`, typeCase);
    }
}

function separateCase(arr){
    uppercaseNames = [];
    lowercaseNames = [];

    for(const element of arr){
        if(element.includes(',')){
            /* Handling entries with a comma. */
            if(element.includes('"')){
                /*
                Handling requirements with escape characters, allowing us to
                treat such entries as a single entity.
                */
                lowercaseNames.push(element.slice(1, element.length-1)); // Removes first two and last two characters, i.e, quotes.
            }else{
                // Spliting non-escape character strings, treating them as different entries.
                const splitArray = element.split(',');
                        
                for(let elem of splitArray){
                    if(isUpper(elem)){
                        uppercaseNames.push(elem);
                    }else{
                        lowercaseNames.push(elem);
                    }
                }
            }
        }
        // Separating Capitalized and UPPERCASE names.
        else if(checkMessage(element) == 'my friend'){
            lowercaseNames.push('my friend');
            break;
        }else if(isUpper(element)){
            uppercaseNames.push(element);
        }else{
            lowercaseNames.push(element);
        }
    }

    return { uppercaseNames, lowercaseNames };
}

function handleArray(message, separator){
    message = message.map(msg => msg.trim());

    if(message.length == 0){
        return '';
    }else if(message.length == 1){
        return message[0];
    }else if(message.length == 2){
        return `${message[0]} and ${message[1]}`;
    }else{
        return message.slice(0, message.length-1).join(`${separator} `) + ", and " + message[message.length - 1];
    }
}

function setCase(message, typeCase){
    if(typeCase == 1){
        return message.toUpperCase();
    }
    return message;
}

function isUpper(message){
    return message == message.toUpperCase();
}

describe("Test Case for Greeting TOD", () => {
    it("Should return the passed string with greeting message", () => {
        const inputString = "Kenny";
        const greetingMessage = greet(inputString);
        expect(greetingMessage).toBe("Hello, Kenny.");
    });
    it("Should return the passed string with greeting message even if the name is in an array", () => {
        const inputString = ["Kenny"];
        const greetingMessage = greet(inputString);
        expect(greetingMessage).toBe("Hello, Kenny.");
    });
    it("Should return 'Hello, my friend.' if the input is null.", () => {
        const inputString = undefined;
        const greetingMessage = greet(inputString);
        expect(greetingMessage).toBe("Hello, my friend.");
    });
    it("Should return greeting without spaces if the input contains spaces in starting and ending.", () => {
        const inputString = '  Kenny  ';
        const greetingMessage = greet(inputString);
        expect(greetingMessage).toBe("Hello, Kenny.");
    });
    it("Should return the greeting in UPPERCASE if the input is in UPPERCASE.", () => {
        const inputString = 'KENNY';
        const greetingMessage = greet(inputString);
        expect(greetingMessage).toBe("HELLO KENNY!");
    });
    it("Should return the greeting in UPPERCASE if the input is in UPPERCASE in an array.", () => {
        const inputString = ['KENNY'];
        const greetingMessage = greet(inputString);
        expect(greetingMessage).toBe("HELLO KENNY!");
    });
    it("Should return the greeting separated with 'and' if there are two names.", () => {
        const inputString = ["Kenny", "Evergarden"];
        const greetingMessage = greet(inputString);
        expect(greetingMessage).toBe("Hello, Kenny and Evergarden.");
    });
    it("Should return the greeting separated with 'and' if there are two names.", () => {
        const inputString = ["KENNY", "EVERGARDEN"];
        const greetingMessage = greet(inputString);
        expect(greetingMessage).toBe("HELLO KENNY AND EVERGARDEN!");
    });
    it("Should return the greeting separated with a comma and 'and' if there are more than two names.", () => {
        const inputString = ["Kenny", "Evergarden", "Stryker"];
        const greetingMessage = greet(inputString);
        expect(greetingMessage).toBe("Hello, Kenny, Evergarden, and Stryker.");
    });
    it("Should return the greeting separated with a comma and 'and' if there are more than two names.", () => {
        const inputString = ["Kenny", "STRYKER", "Evergarden"];
        const greetingMessage = greet(inputString);
        expect(greetingMessage).toBe("Hello, Kenny and Evergarden. AND HELLO STRYKER!");
    });
    it("Should return the greeting separated with a comma and 'and' if there are more than two names.", () => {
        const inputString = ["Kenny", "STRYKER", "Evergarden", "SENPAI"];
        const greetingMessage = greet(inputString);
        expect(greetingMessage).toBe("Hello, Kenny and Evergarden. AND HELLO STRYKER AND SENPAI!");
    });
    it("Should return the greeting separated with a comma and 'and' if there are more than two names.", () => {
        const inputString = ["Kenny", "STRYKER", "Evergarden", "SENPAI", "Violet", "SNOW"];
        const greetingMessage = greet(inputString);
        expect(greetingMessage).toBe("Hello, Kenny, Evergarden, and Violet. AND HELLO STRYKER, SENPAI, AND SNOW!");
    });
    it("Should return the greeting separated with a comma and 'and' if there are more than two names.", () => {
        const inputString = "Kenny, Evergarden";
        const greetingMessage = greet(inputString);
        expect(greetingMessage).toBe("Hello, Kenny and Evergarden.");
    });
    it("Should return the greeting separated with a comma and 'and' if there are more than two names.", () => {
        const inputString = ["Violet", "Kenny, Evergarden"];
        const greetingMessage = greet(inputString);
        expect(greetingMessage).toBe("Hello, Violet, Kenny, and Evergarden.");
    });
    it("Should return the greeting.", () => {
        const inputString = "  ";
        const greetingMessage = greet(inputString);
        expect(greetingMessage).toBe("Hello, my friend.");
    });
    it("Should return the greeting.", () => {
        const inputString = ["  ", "  "];
        const greetingMessage = greet(inputString);
        expect(greetingMessage).toBe("Hello, my friend.");
    });
    it("Should return the greeting.", () => {
        const inputString = null;
        const greetingMessage = greet(inputString);
        expect(greetingMessage).toBe("Hello, my friend.");
    });
});