# Flavor Ranker

This project is a command-line application that processes flavor rankings, calculates total points, and sorts the flavors based on the points and name length. The input is a text file containing rankings, and the output is the sorted list of flavors.

## Features

- Reads flavor rankings from a file.
- Calculates total points based on votes.
- Sorts flavors first by points (descending) and then by name length (ascending) if there is a tie.
- Utilizes the Node.js `fs` module for file handling.

## Requirements

- Node.js (v12 or higher)
- Jest (for testing)
- Typescript

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/laverickjujuan/flavor-ranker-cmd
   ```
2. Navigate into the project directory:
   ```bash
   cd flavor-ranker-cmd
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Build the application:

   ```bash
   npm run build
   ```

   This will compile the files into the dist/ directory.

5. Running the application:
   ```bash
   npm start <path-to-input-file>
   ```
   for example:
   ```bash
   npm start sample-input.txt
   ```
6. Running the tests
   ```bash
   npm test
   ```
