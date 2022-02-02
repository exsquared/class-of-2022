function handleNames(names){
    //It means that the comma is not present in the string...
    let array = names.split(' ');
    let str = '';
    //Array for storing the lowercase words..
    let lowercase = [];
    //Array for storing the uppercase words....
    let uppercase = [];
    for(let i=0;i<array.length;){
        //It means that there is a starting of one single unit....
        if(array[i][0] == '"'){
            //Initialized empty string for storing the single unit...
            let string = '';
            let j=i;
            //Iteration for storing the words of one unit in the particular string...
            for(;array[j][array[j].length-1] !== '"' && j<array.length;j++){
                string+=array[j]+' ';
            }
            //Storing the last word...
            string+=array[j];
            //Storing the final one unit string in the 'local' variable..
            let local = string.substr(1, string.length-2);
            //Pushing into the lowercase array by default...
            lowercase.push(local);
            //As the single unit is completed so the i pointer is incremented directly to the new word..
            i = j+1;
        }
        else{
            //If the string is asscoiated with commas then remove the comma 
            let x = array[i].search(',')==-1?array[i]:array[i].substring(0, array[i].length-1);
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
            //To new word...
            i++;
        }
    }
    //If the name is only one...
    if(lowercase.length + uppercase.length == 1){
        //If there is only uppercase..
        if(lowercase.length == 0){
            str = `HELLO ${uppercase[0]}!`;
            return str;
        }
        //else we shall handle the lowercase..
        str = `Hello ${lowercase[0]}!`
        return str;
    }
    //If there are two names in the array....
    if(lowercase.length + uppercase.length == 2){
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
        str+=`AND ${uppercase[uppercase.length-1]}.`
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
    str+=(uppercase.length > 1)?`AND ${uppercase[uppercase.length-1]}!`:`${uppercase[uppercase.length-1]}!`
    return str;
}

let input = prompt('Enter Names');
let output = handleNames(input);
console.log(output);