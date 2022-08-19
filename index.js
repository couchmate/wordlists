/**
 * Expose word lists as string arrays
 */

const fs = require("fs");
const path = require("path");

const loadType = (wordType) => {
  const files = fs
    .readdirSync(path.join(__dirname, wordType), { withFileTypes: true })
    .filter(file => file.isFile() && file.name.endsWith(".txt"))
    .map(file => path.join(__dirname, wordType, file.name));

  return files
    .map(file => fs.readFileSync(file, "utf8"))
    .map(file => file.split("\n"))
    .reduce((acc, words) => [...acc, ...words], []);
};

module.exports = {
  adjectives: loadType("adjectives"),
  ipsum: loadType("ipsum"),
  names: {
    cities: loadType("names/cities"),
    codenames: loadType("names/codenames"),
    companies: loadType("names/companies"),
    people: loadType("names/people"),
    states: loadType("names/states"),
    streets: loadType("names/streets"),
    surnames: loadType("names/surnames"),
  },
  nouns: loadType("nouns"),
  verbs: loadType("verbs"),
};
