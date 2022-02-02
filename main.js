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
        return 'Hello, ' + names[0] + '.';
    }
    const greetingMessage = `Hello, ${names[0]} and ${names[1]}.`
    return greetingMessage;
}

