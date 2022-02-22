const filePath : string = '../data/startup-funding.json';
function readJsonFile(filePath: string):Object[] | Number | String {
  const fs = require('fs');
  if (
    filePath == null ||
    !fs.existsSync(filePath) ||
    filePath.split(".").pop() != "json"
  )
    return -1;
  const content : string = fs.readFileSync(filePath, "utf8");  
  if (content.length == 0) return -1;
  const data : Object[] = JSON.parse(content);
  if (
    data.length == 0 ||
    (data.length == 1 && Object.keys(data[0]).length == 0)
  ) {
    return -1;
  }
  return data;
}
export function where(options : Object) : Object {
  if (invalidData(options)) return -1;
  var resultedArray : Number[] = [];
  for (const key in options) {
    if (options[key] == null || options[key] == "" || options[key] == undefined)
      delete options[key];
  }
  const jsonData: Object[] | Number | String = readJsonFile(filePath);
  const keys: Object[] = Object.keys(options);
  const values: Object[] = Object.values(options);

  for (let obj in jsonData) {
    let match: number = 0;
    for (let i = 0; i < keys.length; i++) {
      if (jsonData[obj][keys[i]] === values[i]) {
        match++;
      }
    }
    if (match == keys.length) {
      resultedArray.push(parseInt(obj));
    }
  }

  if (resultedArray.length != 0) return resultedArray;

  return -1;
}

function invalidData(options : object) : boolean {
  const validKeys:string[] = ["company_name", "city", "state", "round"];
  if (options == null) return true;
  if (Object.keys(options).length < 1 || Object.keys(options).length > 4) {
    return true;
  }
  const passedKeys = Object.keys(options);
  for (let i = 0; i < passedKeys.length; i++) {
    if (!validKeys.includes(passedKeys[i])) return true;
  }
  if (
    Object.values(options).every((value) => {
      if (value === null || value === undefined || value === "") return true;
      return false;
    })
  ) {
    return true;
  }

  return false;
}

function findBy(options: object): number {
  const arr : any = where(options);
  if (Array.isArray(arr)) return parseInt(arr[0]);
  return -1;
}