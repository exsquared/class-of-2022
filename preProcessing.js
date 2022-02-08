export function preProcessing(fileData){
    if(fileData == null || fileData==0) return -1;
    if(!isNaN(fileData)){
        return parseInt(fileData);
    }
    fileData = fileData.toLowerCase();
    let processedData = fileData.replace(/'s/g, '');
    processedData = processedData.replace(/[^a-z0-9 ]/g, '');
    processedData = processedData.replace(/\s+/g, ' ').trim();
    return processedData;
}