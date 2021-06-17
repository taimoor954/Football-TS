import fs from "fs"; //install @types/node when using node built in modules

const matches = fs
  .readFileSync("football.csv.csv", { encoding: "utf-8" })
  .split("\n")
  .map((row: string): string[] => {
    return row.split(",");
  });

let manUnitedWins = 0;
for (let match of matches) {
  if (match[1] == "Man United" && match[5] === "H") {
    manUnitedWins++;
  } else if (match[2] == "Man United" && match[5] === "A") {
    manUnitedWins++
}
}
console.log(`Man united wins ${manUnitedWins}`);

