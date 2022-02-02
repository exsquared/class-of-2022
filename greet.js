function greet(names)
{
    lower=[];
    upper=[];
    str1=""

    //function to check if string is uppercase
    function checkupper(str1)  
    {
        if (str1==str1.toUpperCase())
        {
            return true;
        }
        return false;
    }
    //function to check if string contains ","
    function checkcomma(str2)
    {
        if (str2.includes(","))
        {
            if (str2.includes("\\")==false)
            {
                return true;
            }          
        }
        return false; 
    }

    for (let i = 0; i < names.length; i++)    //iterate through the input
    {           
            if (checkcomma(names[i]))
            {
                let diff = names[i].split(",");
                for (d of diff)
                    {
                    if (checkupper(d))
                    {
                        upper.push(d);
                    }    
                    else
                    {
                        lower.push(d) ;
                    }
                }
            }    
            else
            {
                if (checkupper(names[i]))
                {
                    upper.push(names[i]);
                }    
               else
               {
                    lower.push(names[i]) ;
               }
            }
    }
output=lower.concat(upper);
if (output.length==1)
{   
    if (output[0]==output[0].toUpperCase)
    {
        return `HELLO ${output[0]}.` ;
    }
    else
    {
        return `Hello, ${output[0]}.`;
    }    
}
for (let j=0; j<output.length; j++)
{
    if (j==0)
    {
        if (output[j]==output[j].toUpperCase())
        {
            str1+=`HELLO ${output[j]}, `;
        }
        else
        {
            str1+=`Hello, ${output[j]}, `;
        }
    }
    else if (j==(output.length-1))
    {
        if (output[j]==output[j].toUpperCase())
        {
            str1+=`AND HELLO ${output[j]}.`;
        }
        else
        {
            str1+=`and ${output[j]}.`;
        }
    }
    else
    {
        if (output[j]==output[j].toUpperCase())
        {
            str1+=`HELLO ${output[j]}, `;
        }
        else
        {
            str1+=`${output[j]}, `;
        }
    }  
}  
console.log(output);  
return str1; 
   
}      
console.log(greet(["hhhd","jjdj"]));