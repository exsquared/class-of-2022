import fs from "fs";
export function readJsonFile(filePath) {
  if (
    filePath == null ||
    !fs.existsSync(filePath) ||
    filePath.split(".").pop() != "json"
  )
    return -1;
  const content = fs.readFileSync(filePath, "utf8");
  if (content.length == 0) return -1;
  const data = JSON.parse(content);
  if (
    data.length == 0 ||
    (data.length == 1 && Object.keys(data[0]).length == 0)
  ) {
    return -1;
  }
  return data;
}
