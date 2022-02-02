const inputName = document.querySelector('#inputName');
const submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', greet);

function greet() {
    const userNames = inputName.value.trim();
    const greetingText = document.querySelector('#greetingText');
    const greetingMessage = generateNames(userNames);
    greetingText.innerHTML = greetingMessage;
}

function generateNames(userNames) {
    let names = userNames.split(' ');
    names = names.filter(name => name.trim().length > 0);
    let smallCaseNames = [], upperCaseNames = [];
    // Seperating uppercase elements to the end of the array
    let isUpperCase = false;
    let upperCaseIdx = 0;
    for (let i = 0; i < names.length; i++) {
        if (names[i].endsWith(','))
            names[i] = names[i].slice(0, -1);
        if (names[i].toString().toUpperCase() === names[i].toString()) {
            isUpperCase = true;
            upperCaseNames.push(names[i]);
            if (upperCaseIdx == 0)
                upperCaseIdx = i;
            continue;
        }
        smallCaseNames.push(names[i]);
    }
    if (names.length == 0) {
        return 'Hello, my friend.';
    }
    let greetingMessage = '';
    if (smallCaseNames.length > 0)
        greetingMessage += generateGreetingMessage(smallCaseNames, false);
    if (upperCaseNames.length > 0)
        greetingMessage += generateGreetingMessage(upperCaseNames, true);

    return greetingMessage;
}

function generateGreetingMessage(names, isUpperCase) {

    if (names.length == 1) {
        const name = names[0].toString();
        if (name.toUpperCase() === name)
            return `HELLO, ${name}.`;
        else
            return `Hello, ${name}.`;
    }
    else {
        let greetingMessage = 'Hello, ';
        if (isUpperCase == true)
            greetingMessage = ' HELLO, ';

        for (let i = 0; i < names.length - 2; i++) {
            greetingMessage += names[i] + ', ';
        }
        greetingMessage += names[names.length - 2];
        if (isUpperCase)
            greetingMessage += ', AND ';
        else
            greetingMessage += ', and ';
        greetingMessage += names[names.length - 1] + '.';
        return greetingMessage;
    }
}

