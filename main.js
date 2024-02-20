import * as readline from "readline";
import knightMoves from "./Knight.js";

(function main() {
  console.log("\n\nWelcome to Knights Travails, a program that finds the shortest path a knight can take on a chessboard!\n\n");
  console.log("INSTRUCTIONS\n--------------\nThis program utilizes an 8 x 8 chessboard. To enter the source and destination, entries must be in the following format: [x, y]\n\n");
  console.log("EXAMPLE\n--------------\nSource: [0,0], Destination: [7,7]");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const waitForUserInput = function () {
    rl.question("\n\nEnter a source : ", (source) => {
      rl.question("Enter a destination : ", (destination) => {
        const json = `{"src": ${source}, "dest": ${destination}}`;
        const obj = JSON.parse(json);
        const path = knightMoves(obj.src, obj.dest);
        console.log("\n\nShortest Path : \n", path);

        rl.question("\n\nSearch for another shortest path? Y for yes, N for no : ", (answer) => {
          if (answer === "N" || answer === "n") {
            rl.close();
          } else {
            waitForUserInput();
          }
        });
      });
    });
  };

  waitForUserInput();
}());
