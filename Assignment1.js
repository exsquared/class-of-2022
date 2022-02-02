function greet(name){
    if(name === null){
        return "Hello, my Friend.";
    }else if(name === name.toUpperCase()){
        return "HELLO "+name.toUpperCase()+"!";
    }else{
        return "Hello, "+name+".";
    }
}
let name = prompt("Enter a Name : ");
console.log(greet(name));

