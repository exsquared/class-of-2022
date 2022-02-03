let InputArray = ["ack", "JILL","Joe","JOHN","Mark","JADE"];
//let size = prompt("enter size of the array, it should be greater than two");
//for(var i=0;i<size;i++){
  // InputArray[i] = prompt("Enter name" + (i+1));
//}
let size = InputArray.length;
let str1 = "Hello, ";
let str2 = "HELLO, ";
let count1=0;//for lowerCase
let count2=0;//for upperCae
let finalStr;
//console.log(InputArray);
if(size>2){
    for(var i=0;i<size;i++){
        if(InputArray[i]==InputArray[i].toUpperCase()){
            count2++;
            str2 = str2 + InputArray[i] + ", ";
        }
        
        else{
            count1++;
            str1 = str1 + InputArray[i]+ ", ";
        }
        
    }
    str1= str1.slice(0,-2);
    if(count2===size){
        finalStr = "HELLO, ";
        var i=0;
        let k = size-1;
        while(k--){
            finalStr += InputArray[i++] +", ";
        } 
        //finalStr= finalStr.substring(0,finalStr.length -2);
        finalStr += " AND " + InputArray.slice(-1)+".";
     
     }
     else if(count1===size){
        finalStr = "Hello, ";
        var i=0;
        let k = size-1;
        while(k--){
            finalStr += InputArray[i++] +", ";
        }
        //finalStr= finalStr.slice(0,-2);
        finalStr += " and " + InputArray.slice(-1) + ".";
     
     }
     else{
          finalStr = str1 + " AND " + str2;
         finalStr= finalStr.substring(0,finalStr.length -2);
         
     }

    
}
else if(size===2){
    for(var i=0;i<size;i++){
        if(InputArray[i]===InputArray[i].toUpperCase()){
            count2++
            str2 += InputArray[i] ;

        }
        
        else{
            count1++;
            str1 += InputArray[i];
        }
        
    }
    if(count2===size){
        finalStr = "HELLO " + InputArray[0] + " AND " + InputArray[1];
     
     }
     else if(count1===size){
        finalStr = "Hello " + InputArray[0] + " and " + InputArray[1];
     
     }
     else{
          finalStr = str1 + " and " + str2;
         //finalStr= finalStr.substring(0,finalStr.length -2);
         
     }

}
else{
    
    if(InputArray[0]==InputArray[0].toUpperCase()){
           finalStr = str2 + InputArray[0];
    }
    else{
           finalStr = str1 + InputArray[0];
    }
}
console.log(finalStr);
