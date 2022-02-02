const inputName = document.querySelector('#inputName');
const submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', greet);

function greet() {
    const userNames = inputName.value.trim();
    const greetingText = document.querySelector('#greetingText');
    const greetingMessage = generateGreeting(userNames);
    greetingText.innerHTML = greetingMessage;
}

function generateGreeting(userNames) {
    let names = userNames.split(' ');
    if (names.length == 1) {
        const name = names[0].toString();
        if (name.toUpperCase() === name)
            return `HELLO ${name}.`;
        else
            return `Hello ${name}.`;
    }
    else {
        let greetingMessage = 'Hello, ';
        for (let i = 0; i < names.length - 2; i++) {
            greetingMessage += names[i] + ', ';
        }
        greetingMessage += names[names.length - 2] + ', and ' + names[names.length - 1] + '.';
        return greetingMessage;
    }
}


