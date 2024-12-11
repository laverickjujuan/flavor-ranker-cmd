import fs from "fs";
import FlavorRanker from "../helpers/FlavorRanker";

export function processInput(filePath: string): string[] {
  const flavorRanker = new FlavorRanker();

  const input = fs.readFileSync(filePath, "utf-8");
  const lines = input.split("\n").filter((line) => line.trim() !== "");

  lines.forEach((line) => {
    const parts = line.split(" ");
    const rank = parseInt(parts.pop()!, 10);
    const flavor = parts.join(" ");

    flavorRanker.processVote(flavor, rank);
  });

  return flavorRanker.getSortedFlavors();
}

export function printResults(sortedFlavors: string[]): void {
  sortedFlavors.forEach((flavor, index) => {
    console.log(`${index + 1}. ${flavor}`);
  });
}
