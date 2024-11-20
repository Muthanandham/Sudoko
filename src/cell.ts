import { Column } from "./column.js";
import { Grid } from "./grid.js";
import { Row } from "./row.js";
import { Sudoku } from "./sudoku.js";
export class Cell{
    cellIndex: number;
    cellValue: number = 0;
    possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];    
    associatedColumn: Column;
    associatedRow: Row;
    associatedGrid: Grid;
    associatedSudoku: Sudoku ;

    constructor(index: number) {
        this.cellIndex = index;
    }
    tofindRow = (cIndex: number) =>
    {
        let rowIndex = Math.floor(cIndex/9);
        let row = this.associatedSudoku.rows[rowIndex];
        return row;
    };

    tofindColumn = (cIndex: number) =>
    {
        let columnIndex = cIndex%9;
        let column = this.associatedSudoku.columns[columnIndex];
        return column;
    };

    tofindGrid = (cIndex: number) =>
    {
        let gridIndex = Math.floor(cIndex/27)*3 + Math.floor((cIndex % 9)/3);
        let grid = this.associatedSudoku.grids[gridIndex];
        return grid;
    };

    removeTheRowNighbours = (cValue: number) =>{
        let row = this.associatedRow;
        let cellArray = row.associatedCells;
        for(const element of cellArray){
            element.toRemoveNeighbours(cValue);
        }
    };
    removeTheColumnNighbours = (cValue: number) =>{
        let column = this.associatedColumn;
        let cellArray = column.associatedCells;
        for(const element of cellArray){
            element.toRemoveNeighbours(cValue);
        }
    };
    removeTheGridNighbours = (cValue: number) =>{
        let grid = this.associatedGrid;
        let cellArray = grid.associatedCells;
        for(const element of cellArray){
            element.toRemoveNeighbours(cValue);
        }
    };
    toRemoveNeighbours = (cValue: number) =>{
        let a = this.possibleValues.indexOf(cValue);
        if (a!= -1){
            this.possibleValues.splice(a, 1);
        }
    };
    setCellValue = (cValue: number) =>{
        this.cellValue = cValue;
        this.possibleValues = [];
        this.removeTheRowNighbours(cValue);
        this.removeTheColumnNighbours(cValue);
        this.removeTheGridNighbours(cValue);

    };
    linkAllsToCell =() =>{
        let row = this.tofindRow(this.cellIndex);
        row.associatedCells.push(this);
        this.associatedRow = row;

        let column = this.tofindColumn(this.cellIndex);
        column.associatedCells.push(this);
        this.associatedColumn = column;

        let grid = this.tofindGrid(this.cellIndex);
        grid.associatedCells.push(this);
        this.associatedGrid = grid;
    }
}