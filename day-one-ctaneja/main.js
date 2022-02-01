const submitButton = document.getElementById('submitButton');
const inputName = document.getElementById('inputName')

submitButton.addEventListener('click', greetUser);

function greetUser() {
    const userName = inputName.value.trim();
    const greetingTxt = greet(userName);
    const displayGreeting = document.getElementById('displayGreeting').innerHTML = greetingTxt;
}


function greet(name) {
    if (name == null || name == '')
        return 'Hello, my friend.';
    else if (name.toUpperCase() === name)
        return ('HELLO ' + name + '.');
    else
        return ('Hello, ' + name + '.');
}
