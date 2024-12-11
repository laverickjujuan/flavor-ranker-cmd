import { processInput, printResults } from "./utils/fileUtils";

function main(): void {
  const filePath = process.argv[2];
  if (!filePath) {
    console.error("Please provide the input file path as an argument.");
    process.exit(1);
  }

  const sortedFlavors = processInput(filePath);
  printResults(sortedFlavors);
}

main();
