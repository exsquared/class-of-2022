function handleNames(names){
    //It means that the comma is not present in the string...
    let array = names.split(' ');
    let str = ''
    let lowercase = [];
    let uppercase = [];
    for(let i=0;i<array.length;i++){
        //If the string is asscoiated with commas then remove the comma 
        let x = array[i].search(',')==-1?array[i]:array[i].substr(0, array[i].length-1);
        //store the uppercase somewhere..
        let x2 = x.toUpperCase();
        //if the string is uppercase then push into uppercase array..
        if(x == x2){
            uppercase.push(x);
        }
        //else push into the lowercase array..
        else{
            lowercase.push(x);
        }
    }
    //If the name is only one...
    if(array.length == 1){
        //If there is only uppercase..
        if(lowercase.length == 0){
            str = `HELLO ${names}!`;
            return str;
        }
        //else we shall handle the lowercase..
        str = `Hello ${names}!`
        return str;
    }
    //If there are two names in the array....
    if(array.length == 2){
        //If all names are lowercase..
        if(uppercase.length == 0){
            str = `Hello, ${lowercase[0]} and ${lowercase[1]}.`
            return str;
        }
        //If all names are uppercase...
        if(lowercase.length == 0){
            str = `HELLO ${uppercase[0]} AND ${uppercase[1]}!`
            return str;
        }
        //If there are both kind of the names....
        str+=`Hello ${lowercase[0]}. AND HELLO ${uppercase[0]}!`;
        return str;
    }
    //If there are more than two names....
    //If they are all uppercases....
    if(lowercase.length == 0){
        str+=`HELLO `
        for(let i=0;i<uppercase.length-1;i++){
            str+=`${uppercase[i]}, `
        }
        str+=`and ${uppercase[uppercase.length-1]}.`
        return str;
    }
    //If all the names are of lowercase...
    if(uppercase.length == 0){
        str+=`Hello, `
        for(let i=0;i<lowercase.length-1;i++){
            str+=`${lowercase[i]}, `
        }
        str+=`and ${lowercase[lowercase.length-1]}.`
        return str;
    }
    //If there are both uppercase as well as the lowercases...
    str+=`Hello, `
    for(let i=0;i<lowercase.length-1;i++){
        str+=`${lowercase[i]}, `;
    }
    str+=(lowercase.length > 1)?`and ${lowercase[lowercase.length-1]}.`:`${lowercase[lowercase.length-1]}.`
    str+=` AND HELLO `
    for(let i=0;i<uppercase.length-1;i++){
        str+=`${uppercase[i]}, `
    }
    str+=(uppercase.length > 1)?` AND ${uppercase[uppercase.length-1]}!`:`${uppercase[uppercase.length-1]}!`
    return str;
}

let input = prompt('Enter Names');
let output = handleNames(input);
console.log(output);