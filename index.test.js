function isUpper(message){
    return (message === message.toUpperCase());
}

function handleArray( greeting, message,separator,ending){
    let str = '';
    let upper = '';  
    for (let i=0; i<message.length-1; i++){
        if(message.length === 2){
            return `${greeting}${separator} ${message[0]} and ${message[1]}${ending}`
        }
          if(!isUpper(message[i])){
                if(i<message.length-1 ){
                    str += `${message[i]}${separator} `;
                }
            }            
            else {
                upper +=` ${message[i]}`;           
            }
        }
        str += `and ${message[message.length-1]}`;     
        if(!upper){
             return `${greeting}${separator} ${str}${ending}`;
        }
        else{
            let up = '';
            let endingUp = '!';
            let check = str.split(', and ');
           // let checkUp = upper.split(' ');
             if(check.length ===2 ){
                up += `${greeting}${separator} ${check[0]} and ${check[1]}${ending} AND ${greeting.toUpperCase()}${upper}${endingUp}`;
               return up;
            } 
                return `${greeting}${separator} ${str} AND ${greeting.toUpperCase()} ${upper}${endingUp}`;
     }
    }
  
function greet(message="my friend", greeting='Hello', separator=',', ending='.'){
  
   if(Array.isArray(message) ){
      let result = handleArray(greeting,message,separator,ending);
      return result;
   }
   message = message.trim();
   
   if(isUpper(message)){
       ending = '!';
       separator = ' ';
       
       let upper = `${greeting.toUpperCase()}${separator}${message}${ending}`
       return upper;
   }
   
   return `${greeting}${separator} ${message}${ending}`;
 
}



describe("test cases for Greeeting TDD",()=>{
    it("should return the passed string with message", ()=>{
        const inputString = "Sahil";
        const myGreetingMessage = greet(inputString);
        expect(myGreetingMessage).toBe("Hello, Sahil.");
    });
    it("should return the passed string with message with spaces", ()=>{
        const inputString = " Sahil ";
        const myGreetingMessage = greet(inputString);
        expect(myGreetingMessage).toBe("Hello, Sahil.");
    });
    it("should return, Hello, my friend, if input is null", ()=>{
        //const inputString = null;
        const myGreetingMessage = greet();
        expect(myGreetingMessage).toBe("Hello, my friend.");
    });
    it("should return the message in caps if the input name is in caps", ()=>{
        const inputString = "SAHIL";
        const myGreetingMessage = greet(inputString);
        expect(myGreetingMessage).toBe("HELLO SAHIL!");
    });
    it("should return the message where input is in form of array in lowercase", ()=>{
        const inputString = ["Jill", "Jack"];        
        const myGreetingMessage = greet(inputString);
        expect(myGreetingMessage).toBe("Hello, Jill and Jack.");
    });
    it("should return the message where input is in form of array in lowercase", ()=>{
        const inputString = ["Jill", "Jack","Jim"];        
        const myGreetingMessage = greet(inputString);
        expect(myGreetingMessage).toBe("Hello, Jill, Jack, and Jim.");
    });
    it("should return the message where input is in form of array in lowercase plus uppercase", ()=>{
        const inputString = ["JILL", "Jack","Jim"];        
        const myGreetingMessage = greet(inputString);
        expect(myGreetingMessage).toBe("Hello, Jack and Jim. AND HELLO JILL!");
    });
    it("should return the message where input is in form of array in multiple lowercase plus uppercase", ()=>{
        const inputString = ["JILL","JOE","Jack","Jim"];        
        const myGreetingMessage = greet(inputString);
        expect(myGreetingMessage).toBe("Hello, Jack and Jim. AND HELLO JILL AND JOE!");
    });
    
})