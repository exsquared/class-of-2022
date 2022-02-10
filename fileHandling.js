export { readDir, readFile };

function readDir() {
    let fs = require('fs');
    let path = require('path');
    let corpus = [];
    const dirPath = path.join(__dirname, 'data');
    let listOfFiles = fs.readdirSync(dirPath);
    for (const file of listOfFiles) {
        const filePath = path.join(dirPath, file);
        const currentFileText = readFile(filePath);
        corpus.push(currentFileText);
    }
    return corpus;
}

function readFile(path) {
    let fs = require('fs');
    let text;
    let isFilePresent = fs.existsSync(path);
    if (isFilePresent) {
        text = fs.readFileSync(path).toString();
        return text;
    } else {
        return -1;
    }
}