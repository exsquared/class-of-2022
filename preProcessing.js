export function preProcessing(fileData){
    if(fileData == null || fileData.length==0) return -1;
    if(!isNaN(fileData)){
        return -1;
    }
    fileData = fileData.toLowerCase();
    let processedData = fileData.replace(/'s/g, '');
    processedData = processedData.replace(/[^a-z ]/g, ' ');
    processedData = processedData.replace(/\s+/g, ' ').trim();
    if(processedData.length == 0) return -1;
    return processedData;
}