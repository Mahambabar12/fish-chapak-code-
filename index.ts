// import chalk from "chalk";
// import inquirer from "inquirer";

// console.log("\n");

// let { userAns } = await inquirer.prompt({
//   type: "number",
//   name: "userAns",
//   message: chalk.yellow.bold("How many fishes Do you want to Chappak? ")
// });

// if (isNaN(userAns)) {
//   console.log(chalk.red.bold("\nWrite a number"));
// } else {
//   async function fish_into_water(numFish = 1) {
//     for (let i = 10; i > 0; i--) {
//       let space = ' '.repeat(i);
//       console.clear();

//       for (let j = 0; j < numFish; j++) {
//         console.log((chalk.bold.bgWhite(space + "🐟🐟---Machili")));
//       }

//       await new Promise(resolve => setTimeout(resolve, 500));
//     }
//     console.clear();
//     for (let j = 0; j < numFish; j++) {
//       console.log((chalk.bold.white("🌊🌊      Chappak")));
//     }
//   }

//   fish_into_water(userAns);
// }





