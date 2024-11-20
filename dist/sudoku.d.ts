import { Cell } from "./cell.js";
import { Column } from "./column.js";
import { Grid } from "./grid.js";
import { Row } from "./row.js";
export declare class Sudoku {
    cells: Cell[];
    rows: Row[];
    columns: Column[];
    grids: Grid[];
    NumberSolving: boolean;
    constructor();
    solve: () => Promise<void>;
    cellSolve: () => Promise<void>;
    defineCells: () => void;
    defineRows: () => void;
    defineColumns: () => void;
    defineGrids: () => void;
    answerForSudoku: (input: string) => Promise<void>;
    printSudoku: () => Promise<string>;
}
