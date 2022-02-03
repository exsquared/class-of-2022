const input = document.querySelector('#inputString');
const btn = document.querySelector('#receivingBtn');
const para = document.querySelector('#messages');

btn.addEventListener('click', calling);

function calling() {
    const name = input.value.trim().split(' ');
    para.textContent = greet(name);
}

function greet(name){
    if(name.length === 1){
        return "Hello, "+name[0]+".";
    }else if (name.length === 2){                         // Requirement 4
        return "Hello, "+name[0]+" and "+name[1]+".";
    }
    else{
        return combine(name);
    }
}

//Handling array with more than 2 elements
function combine(array) {
   
    let small = "Hello, ", smallAns = "Hello, ", caps = "HELLO ", capAns = "HELLO ";
    let smallName=[], capName=[];

    for(let i=0; i<array.length; i++){    // Separating Normal Greetings and Shouting Greetings
        if(array[i] === array[i].toUpperCase()){ 
            capName.push(array[i]);
        }else{
            smallName.push(array[i]);
        }
    }
    
    for(let j=0; j<smallName.length; j++){
        let str = smallName[j];
        if(str.includes(",") && str[0] === "\""){   //Handling Requirement 8
            str = str.substring(1,str.length);
            while(smallName[j+1][smallName[j+1].length -1] !== "\""){
                str += " "+smallName[j+1];
                j++;
            }
            str += " "+smallName[++j].substring(0,smallName[j].length-1);
        }else if(str.includes(",")){     // Handling Requirement 7
            str = str.substring(0,str.length-1);
        }
        // Handling Last Person's Greetings and Intermediate Person's Greetings
        (j === smallName.length-1)?smallAns += "and "+str+".":smallAns += str+", ";    
    }
    
    for(let j=0; j<capName.length; j++){
        let str = capName[j];
        if(str.includes(",") && str[0] === "\""){    //Handling Requirement 8
            str = str.substring(1,str.length);
            while(capName[j+1][capName[j+1].length -1] !== "\""){
                str += " "+capName[j+1];
                j++;
            }
            str += " "+capName[++j].substring(0,capName[j].length-1);
        }else if(str.includes(",")){       // Handling Requirement 7
            str = str.substring(0,str.length-1);
        }
        if(capName.length === 1){   // Handling Single Shouting Greeting
            capAns += str+"!";
            break;
        }else{
            // Handling Last Person's Shouting Greetings and Handling Intermediate Person's Shouting Greetings
            (j === capName.length-1)?capAns += "AND "+str+"!":capAns += str+", ";
        }  
    }
        
    if(caps === capAns){   // checking whether there is no shouting
        return smallAns;
    }else if(small === smallAns){  // checking whether there is only shouting
        return capAns;
    }else{
        return smallAns + "  AND  " + capAns;   // normal greetings as well as shouting greetings
    } 
}