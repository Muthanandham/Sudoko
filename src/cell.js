"use strict";
exports.__esModule = true;
exports.Cell = void 0;
var Cell = /** @class */ (function () {
    function Cell(index) {
        var _this = this;
        this.cellValue = 0;
        this.possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.tofindRow = function (cIndex) {
            var rowIndex = Math.floor(cIndex / 9);
            var row = _this.associatedSudoku.rows[rowIndex];
            return row;
        };
        this.tofindColumn = function (cIndex) {
            var columnIndex = Math.floor(cIndex % 9);
            var column = _this.associatedSudoku.columns[columnIndex];
            return column;
        };
        this.tofindGrid = function (cIndex) {
            var gridIndex = Math.floor(cIndex / 27) * 3 + Math.floor((cIndex % 9) / 3);
            var grid = _this.associatedSudoku.grids[gridIndex];
            return grid;
        };
        this.setCellValue = function (cValue) {
            _this.cellValue = cValue;
            _this.possibleValues = [];
            _this.removeTheRowNighbours(cValue);
            _this.removeTheColumnNighbours(cValue);
            _this.removeTheGridNighbours(cValue);
        };
        this.removeTheRowNighbours = function (cValue) {
            var row = _this.associatedRow;
            var cellArray = row.associatedCells;
            for (var _i = 0, cellArray_1 = cellArray; _i < cellArray_1.length; _i++) {
                var element = cellArray_1[_i];
                element.removeTheRowNighbours(cValue);
            }
        };
        this.removeTheColumnNighbours = function (cValue) {
            var column = _this.associatedColumn;
            var cellArray = column.associatedCells;
            for (var _i = 0, cellArray_2 = cellArray; _i < cellArray_2.length; _i++) {
                var element = cellArray_2[_i];
                element.removeTheColumnNighbours(cValue);
            }
        };
        this.removeTheGridNighbours = function (cValue) {
            var grid = _this.associatedGrid;
            var cellArray = grid.associatedCells;
            for (var _i = 0, cellArray_3 = cellArray; _i < cellArray_3.length; _i++) {
                var element = cellArray_3[_i];
                element.removeTheGridNighbours(cValue);
            }
        };
        this.toRemoveNeighbours = function (cValue) {
            var a = _this.possibleValues.indexOf(cValue);
            if (a != -1) {
                _this.possibleValues.splice(a, 1);
            }
        };
        this.linkAllsToCell = function () {
            var row = _this.tofindRow(_this.cellIndex);
            row.associatedCells.push(_this);
            _this.associatedRow = row;
            var column = _this.tofindColumn(_this.cellIndex);
            column.associatedCells.push(_this);
            _this.associatedColumn = column;
            var grid = _this.tofindGrid(_this.cellIndex);
            grid.associatedCells.push(_this);
            _this.associatedGrid = grid;
        };
        this.cellIndex = index;
    }
    return Cell;
}());
exports.Cell = Cell;
