const shoutGreet = "HELLO,";
const normalGreet = "Hello,"
const shoutTermination = "!";
const normalTermination = ".";


function greet(name = "my friend"){
    name = name.trim();
    if(isUpper(name)){
        return toUpper() + ` ${name}${shoutTermination}`;
    }
    return `${normalGreet} ${name}${normalTermination}`;
}

function isUpper(name){
    return name === name.toUpperCase();
}

function toUpper(){
    return shoutGreet;
}

describe("Test Cases for the Greet() Function Loading", () => {
    it("Should return the passed String with greeting message", () => {
        const input = "Fardeen";
        const greetings = greet(input);
        expect(greetings).toBe("Hello, Fardeen.");
    });
    it("Should return Hello, My Friend. if message is null", () => {
        // const input = null;
        const greetings = greet();
        expect(greetings).toBe("Hello, my friend.");
    });
    it("Should return the correct greet message, if message contains trailing spaces or initial spaces", () => {
        const input = "  Sahil  ";
        const greetings = greet(input);
        expect(greetings).toBe("Hello, Sahil.");
    });
    it("Should return the HELLO, SAHIL!, if the message is a shouting message", () => {
        const input = "  SAHIL  ";
        const greetings = greet(input);
        expect(greetings).toBe("HELLO, SAHIL!");
    });
})