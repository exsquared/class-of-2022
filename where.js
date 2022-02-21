import { readJsonFile } from "./readJsonFile.js";
const filePath = "./data/startup-funding.json";
export function where(options) {
  if (invalidData(options)) return -1;
  var resultedArray = [];
  for (const key in options) {
    if (options[key] == null || options[key] == "" || options[key] == undefined)
      delete options[key];
  }
  const jsonData = readJsonFile(filePath);
  const keys = Object.keys(options);
  const values = Object.values(options);

  for (let obj in jsonData) {
    let match = 0;
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

function invalidData(options) {
  const validKeys = ["company_name", "city", "state", "round"];
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
