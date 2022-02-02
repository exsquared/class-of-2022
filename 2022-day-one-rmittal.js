let person;


person = prompt("enter your name");
function greet(person){

    if(person===""){
        return "Hello " + "my friend";
    }
    else if(person === person.toUpperCase()){
        return "HELLO, " + person;
    }
    else{
        return "Hello, " + person;
    }
    
}
console.log(greet(person));

