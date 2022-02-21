import { readJsonFile } from "./readJsonFile.js";
import { findBy } from "./findBy.js";

export function output(filePath) {
  const jsonData = readJsonFile(filePath);
  const findBy = findBy(jsonData);
}

output("./data/testingFiles/try.json");
// output("./data/testingFiles/emptyObject.json");
