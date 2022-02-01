const submitButton = document.getElementById('submitButton');
const inputName = document.getElementById('inputName')

submitButton.addEventListener('click', greetUser);

function greetUser() {
    const userName = inputName.value.trim();
    if (userName == null || userName == '')
        console.log('Hello my dear friend!');
    else if (userName.toUpperCase() === userName)
        console.log('HELLO', userName);
    else    
        console.log('Hello', userName);
}
