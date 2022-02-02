const input = document.querySelector('#inputString');
const btn = document.querySelector('#receivingBtn');
const para = document.querySelector('#messages');

btn.addEventListener('click', calling);

function calling() {
    const name = input.value.split(' ');
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
   
    let small = "Hello, ", smallAns = "Hello, ";
    let caps = "HELLO ", capAns = "HELLO ";
    
    let condition = false;
    
    let smallName=[];
    let capName=[];
    for(let i=0; i<array.length; i++){
        if(condition){
            condition = false;
            continue;
        }
        // Dividing the contents of the string array to different classes so can be handled accordingly
        if(array[i] == array[i].toUpperCase() && array[i].includes(",") && array[i][0] === "\""){   // Requirement 8
            capName.push(array[i].substring(1)+" "+array[i+1].subString(0,array[i+1].length-1));
            condition = true;
        }else if(array[i] == array[i].toLowerCase() && array[i].includes(",") && array[i][0] === "\""){  // Requirement 8
            smallName.push(array[i].substring(1)+" "+array[i+1].substring(0,array[i+1].length-1));
            condition = true;
        }else if(array[i] == array[i].toUpperCase() && array[i].includes(",")){  // Requirement 7
            capName.push(array[i].substring(0,array[i].length-1));
        }else if(array[i] == array[i].toLowerCase() && array[i].includes(",")){  // Requirement 7
            smallName.push(array[i].substring(0, array[i].length-1));
        }else if(array[i] === array[i].toUpperCase()){ // Requirement 6
            capName.push(array[i]);
        }else{
            smallName.push(array[i]);
        }
    }
    for(const name of smallName){
        if(smallName.indexOf(name) === smallName.length-1){  // as last element end's with a full stop
            smallAns += name+".";
        }else if(smallName.indexOf(name) === smallName.length-2){ // as second last element ends with 'and'
            smallAns += name + " and ";
        }else{
            smallAns += name+", ";  // all intermediate elements are followed by a comma ','
        }
    }
    for(const name of capName){
        if(capName.indexOf(name) === capName.length-1){   // as last element end's with a '!'
            capAns += name+"!";
        }else if(capName.indexOf(name) === capName.length-2){   // as second last element ends with 'and'
            capAns += name + " AND ";
        }else{               // all intermediate elements are followed by a comma ','
            capAns += name+", ";
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