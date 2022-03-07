function greet(){
    return("Hello, Sahil");
}

describe("test cases for Greeeting TDD",()=>{
    it("should return the passed string with message", ()=>{
        const inputString = "Sahil";
        const myMessage = greet(inputString);
        expect(myMessage).toBe("Hello, Sahil");
    })
})