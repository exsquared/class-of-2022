function greet(name){
    //Handling the null case...
    if(name === null){
        return "Hello, my friend.";        
    }
    //Handling the upper case...
    if(name === name.toUpperCase()){
        return `Hello ${name}!`;
    }
    //else cases....
    //for other category of names....
    return `Hello, ${name}.`
}
let input_name = prompt("Please Enter Your Name");
let output = greet(input_name);
console.log(output);