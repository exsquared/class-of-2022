//function to check if string is uppercase
function checkupper(str1)  {
    return (str1==str1.toUpperCase());
}
//function to check if string contains ","
function checkcomma(str2) {
    if (str2.includes(",")) {
        if (str2.includes("\\")==false) {
                return true;
        }          
    }
    return false; 
}

function pushing(name) {
    if (checkupper(name))  {
        upper.push(name.trim());
    }    
    else {
        lower.push(name.trim()) ;
    }
}

function greet(names)
{
    lower=[];
    upper=[];
    str1=""

    for (let i = 0; i < names.length; i++) {           
        if (checkcomma(names[i]))  {
            let diff = names[i].split(",");
            for (d of diff) {
               pushing(d); 
            }
        }    
        else {
           pushing(names[i]);
        }
    }
output=lower.concat(upper);
if (output.length==1) {   
    if (checkupper(output[0])) {
        return `HELLO, ${output[0]}!.` ;
    }
    else {
        return `Hello, ${output[0]}.`;
    }    
}
for (let j=0; j<output.length; j++) {
    if (j==0) {
        if (checkupper(output[j])) {
            str1+=`HELLO ${output[j]}!, `;
        }
        else {
            str1+=`Hello, ${output[j]}, `;
        }
    }
    else if (j==(output.length-1)) {
        if (checkupper(output[0])) {
            str1+=`AND HELLO ${output[j]}!.`;
        }
        else {
            str1+=`and ${output[j]}.`;
        }
    }
    else {
        if (output[j]==output[j].toUpperCase()) {
            str1+=`HELLO ${output[j]}!, `;
        }
        else {
            str1+=`${output[j]}, `;
        }
    }  
}    
return str1; 
}   

