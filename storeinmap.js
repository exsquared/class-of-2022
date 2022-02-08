export function storeInMap(countStore, string){
    if(countStore.has(string)){
        countStore.set(string, countStore.get(string) + 1)
    }
    else{
        countStore.set(string, 1);
    }
}