import { Column } from "./column.js";
import { Grid } from "./grid.js";
import { Row } from "./row.js";
import { Sudoku } from "./sudoku.js";
export declare class Cell {
    cellIndex: number;
    cellValue: number;
    possibleValues: number[];
    associatedColumn: Column;
    associatedRow: Row;
    associatedGrid: Grid;
    associatedSudoku: Sudoku;
    constructor(index: number);
    tofindRow: (cIndex: number) => Row;
    tofindColumn: (cIndex: number) => Column;
    tofindGrid: (cIndex: number) => Grid;
    removeTheRowNighbours: (cValue: number) => void;
    removeTheColumnNighbours: (cValue: number) => void;
    removeTheGridNighbours: (cValue: number) => void;
    toRemoveNeighbours: (cValue: number) => void;
    setCellValue: (cValue: number) => void;
    linkAllsToCell: () => void;
}
