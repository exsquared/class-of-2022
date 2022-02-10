export function toMap(count, string){
    if(count.has(string)){
        count.set(string,count.get(string)+1)
    
    }
    else{
        count.set(string,1)
    }
}