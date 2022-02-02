function greet(name)
{
    //to check for null condition
    if (name === null)
    {
        return "Hello, my friend.";
    }
    //to check for uppercase condition
    if (name==name.toUpperCase())
    {
        return `HELLO, ${name.toUpperCase()}.!`;
    }
    return `Hello,${name}.`;
}
//taking input
let n = prompt("enter your name");
//printing the output
console.log(greet(n));