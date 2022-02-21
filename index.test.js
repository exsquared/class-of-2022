import { findBy } from "./findBy.js";
import { readJsonFile } from "./readJsonFile.js";
describe("index.js", () => {
  ///// Test cases written for readJsonFile()
  describe("ReadJsonFile() in readJsonFile.js (Desc: Read json file provided)", () => {
    it("if file path not passed", () => {
      const result = readJsonFile();
      expect(result).toBe(-1);
    });

    it("if file path doesn't exist or is wrong", () => {
      const result = readJsonFile("./data/inside/startup-funding.json");
      expect(result).toBe(-1);
    });

    it("if correct filePath is passed read the data", () => {
      const result = readJsonFile("./data/testingFiles/reading.json");
      expect(result).toStrictEqual([
        {
          permalink: "lifelock",
          company_name: "LifeLock",
          number_employees: 0,
          category: "web",
          city: "Tempe",
          state: "AZ",
          funded_date: "1-May-07",
          raised_amount: 6850000,
          raised_currency: "USD",
          round: "b",
        },
      ]);
    });

    it("if file is empty", () => {
      const result = readJsonFile("./data/testingFiles/empty.json");
      expect(result).toBe(-1);
    });

    it("if json file doesn't contain any object", () => {
      const result = readJsonFile("./data/testingFiles/noObjects.json");
      expect(result).toBe(-1);
    });

    it("if json file contains an empty object", () => {
      const result = readJsonFile("./data/testingFiles/emptyObject.json");
      expect(result).toBe(-1);
    });

    it("if file passed is not a json file", () => {
      const result = readJsonFile("./data/testingFiles/notJson.txt");
      expect(result).toBe(-1);
    });
  });

  describe("findBy() in findBy.js", () => {
    it("if no parameter is passed", () => {
      const result = findBy();
      expect(result).toBe(-1);
    });
    it("if empty object is passed", () => {
      const obj = {};
      const result = findBy(obj);
      expect(result).toBe(-1);
    });
    it("if more then required parameters are passed as object", () => {
      const obj = {
        company_name: "LifeLock",
        city: "Tempe",
        state: "AZ",
        funded_date: "1-May-07",
        round: "b",
      };
      const result = findBy(obj);
      expect(result).toBe(-1);
    });
    it("if irrelevant parameters are passed as object", () => {
      const obj = {
        company_name: "LifeLock",
        city: "Tempe",
        state: "AZ",
        funded_date: "1-May-07",
      };
      const result = findBy(obj);
      expect(result).toBe(-1);
    });
    it("if all attributes passed are null", () => {
      const obj = {
        company_name: null,
        city: null,
        state: null,
        round: null,
      };
      const result = findBy(obj);
      expect(result).toBe(-1);
    });
    it("if correct inputs are given and data is in starting", () => {
      const obj = {
        company_name: "LifeLock",
        city: "Tempe",
        state: "AZ",
        round: "b",
      };
      const result = findBy(obj);
      expect(result).toBe(0);
    });
    it("if correct inputs are given and data is in middle", () => {
      const obj = {
        company_name: "LifeLock",
        city: "Tempe",
        state: "AZ",
        round: "c",
      };
      const result = findBy(obj);
      expect(result).toBe(2);
    });
    it("if correct inputs are given and some attributes are not given", () => {
      const obj = {
        company_name: null,
        city: "",
        state: "AZ",
        round: "c",
      };
      const result = findBy(obj);
      expect(result).toBe(2);
    });
    it("if wrong inputs are passed", () => {
      const obj = {
        company_name: "ExSquared",
        city: "india",
        state: "HR",
        round: "a",
      };
      const result = findBy(obj);
      expect(result).toBe(-1);
    });
    it("if all properties doesn't match", () => {
      const obj = {
        company_name: "ExSquared",
        city: "Tempe",
        state: "AZ",
        round: "a",
      };
      const result = findBy(obj);
      expect(result).toBe(-1);
    });
    it("if properties are from different objects", () => {
      const obj = {
        company_name: "Infusionsoft",
        city: "Tempe",
        state: "AZ",
        round: "a",
      };
      const result = findBy(obj);
      expect(result).toBe(-1);
    });
  });
});
