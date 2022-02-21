import { where } from "./where.js";
export function findBy(options) {
  const arr = where(options);
  if (Array.isArray(arr)) return parseInt(arr[0]);
  return -1;
}
