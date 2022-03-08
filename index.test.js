import {greet} from './index.js';

describe("Test Cases for the Greet() Function Loading", () => {
    it("Should return output as per Requirement1.", () => {
        const input = "Fardeen";
        const greetings = greet(input);
        expect(greetings).toBe("Hello, Fardeen.");
    });
    it("Should return output as per Requirement2.", () => {
        // const input = null;
        const greetings = greet();
        expect(greetings).toBe("Hello, my friend.");
    });
    it("Should return output as per Requirement3.", () => {
        const input = "SAHIL";
        const greetings = greet(input);
        expect(greetings).toBe("HELLO SAHIL!");
    });
    it("Should return output as per Requirement4.", () => {
        const input = ["Jill", "Jane"];
        const greetings = greet(input);
        expect(greetings).toBe("Hello, Jill and Jane.");
    });
    it("Should return output as per Requirement5.", () => {
        const input = ["Amy", "Brian", "Charlotte"];
        const greetings = greet(input);
        expect(greetings).toBe("Hello, Amy, Brian, and Charlotte.");
    });
    it("Should return output as per Requirement6.", () => {
        const input = ["Amy", "BRIAN", "Charlotte"];
        const greetings = greet(input);
        expect(greetings).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!");
    });
    it("Should return output as per Requirement7.", () => {
        const input = ["Bob", "Charlie, Dianne"];
        const greetings = greet(input);
        expect(greetings).toBe("Hello, Bob, Charlie, and Dianne.");
    });
    it("Should return output as per Requirement8.", () => {
        const input = ["Bob", "\"Charlie, Dianne\""];
        const greetings = greet(input);
        expect(greetings).toBe("Hello, Bob and Charlie, Dianne.");
    });
})