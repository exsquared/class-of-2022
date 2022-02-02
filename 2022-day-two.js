let InputArray = ["ab","dc","CD"];
//let size = prompt("enter size of the array, it should be greater than two");
//for(var i=0;i<size;i++){
  // InputArray[i] = prompt("Enter name" + (i+1));
//}
let size = InputArray.length;
let str1 = "Hello ";
let str2 = "HELLO ";
let count1=0;
let count2=0;
let finalStr;
//console.log(InputArray);
if(size>2){
    for(var i=0;i<size;i++){
        if(InputArray[i]==InputArray[i].toLowerCase()){
            count1++;
            str1 = str1 + InputArray[i] + ", ";
        }
        
        else{
            count2++;
            str2 = str2 + InputArray[i]+ ", ";
        }
        
    }
    str1= str1.slice(0,-2);
    if(count1===0){
        finalStr = str2;
     
     }
     else if(count2===0){
        finalStr = str1;
     
     }
     else{
          finalStr = str1 + " and " + str2;
         finalStr= finalStr.substring(0,finalStr.length -2);
         
     }

    
}
else{
    for(var i=0;i<size;i++){
        if(InputArray[i]===InputArray[i].toLowerCase()){
            count1++
            str1 += InputArray[i] ;

        }
        
        else{
            count2++;
            str2 += InputArray[i];
        }
        
    }
    if(count1===0){
        finalStr = "HELLO " + InputArray[0] + " AND " + InputArray[1];
     
     }
     else if(count2===0){
        finalStr = "Hello " + InputArray[0] + " and " + InputArray[1];
     
     }
     else{
          finalStr = str1 + " and " + str2;
         //finalStr= finalStr.substring(0,finalStr.length -2);
         
     }

}
console.log(finalStr);


