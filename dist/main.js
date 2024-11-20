import { Sudoku } from "./sudoku.js";
let input = `
+ ========+======+======= +
|| 5 3 0 + 0 7 0 + 0 0 0 ||
|| 6 0 0 + 1 9 5 + 0 0 0 ||
|| 0 9 8 + 0 0 0 + 0 6 0 ||
+ =======+=======+======= +
|| 8 0 0 + 0 6 0 + 0 0 3 ||
|| 4 0 0 + 8 0 3 + 0 0 1 ||
|| 7 0 0 + 0 2 0 + 0 0 6 ||
+ =======+=======+======= +
|| 0 6 0 + 0 0 0 + 2 8 0 ||
|| 0 0 0 + 4 1 9 + 0 0 5 ||
|| 0 0 0 + 0 8 0 + 0 7 9 ||
+ =======+=======+======= +
`;
console.log("The Sudoku Question is.....");
console.log(input);
let sudoku001 = new Sudoku();
await sudoku001.answerForSudoku(input);
await sudoku001.solve();
console.log("The Sudoku Answer is.....");
console.log(await sudoku001.printSudoku());
//# sourceMappingURL=main.js.map