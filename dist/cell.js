export class Cell {
    constructor(index) {
        this.cellValue = 0;
        this.possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.tofindRow = (cIndex) => {
            let rowIndex = Math.floor(cIndex / 9);
            let row = this.associatedSudoku.rows[rowIndex];
            return row;
        };
        this.tofindColumn = (cIndex) => {
            let columnIndex = cIndex % 9;
            let column = this.associatedSudoku.columns[columnIndex];
            return column;
        };
        this.tofindGrid = (cIndex) => {
            let gridIndex = Math.floor(cIndex / 27) * 3 + Math.floor((cIndex % 9) / 3);
            let grid = this.associatedSudoku.grids[gridIndex];
            return grid;
        };
        this.removeTheRowNighbours = (cValue) => {
            let row = this.associatedRow;
            let cellArray = row.associatedCells;
            for (const element of cellArray) {
                element.toRemoveNeighbours(cValue);
            }
        };
        this.removeTheColumnNighbours = (cValue) => {
            let column = this.associatedColumn;
            let cellArray = column.associatedCells;
            for (const element of cellArray) {
                element.toRemoveNeighbours(cValue);
            }
        };
        this.removeTheGridNighbours = (cValue) => {
            let grid = this.associatedGrid;
            let cellArray = grid.associatedCells;
            for (const element of cellArray) {
                element.toRemoveNeighbours(cValue);
            }
        };
        this.toRemoveNeighbours = (cValue) => {
            let a = this.possibleValues.indexOf(cValue);
            if (a != -1) {
                this.possibleValues.splice(a, 1);
            }
        };
        this.setCellValue = (cValue) => {
            this.cellValue = cValue;
            this.possibleValues = [];
            this.removeTheRowNighbours(cValue);
            this.removeTheColumnNighbours(cValue);
            this.removeTheGridNighbours(cValue);
        };
        this.linkAllsToCell = () => {
            let row = this.tofindRow(this.cellIndex);
            row.associatedCells.push(this);
            this.associatedRow = row;
            let column = this.tofindColumn(this.cellIndex);
            column.associatedCells.push(this);
            this.associatedColumn = column;
            let grid = this.tofindGrid(this.cellIndex);
            grid.associatedCells.push(this);
            this.associatedGrid = grid;
        };
        this.cellIndex = index;
    }
}
//# sourceMappingURL=cell.js.map