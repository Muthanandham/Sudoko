"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Sudoku = void 0;
var cell_js_1 = require("./cell.js");
var column_js_1 = require("./column.js");
var grid_js_1 = require("./grid.js");
var row_js_1 = require("./row.js");
var Sudoku = /** @class */ (function () {
    function Sudoku() {
        var _this = this;
        this.cells = [];
        this.rows = [];
        this.columns = [];
        this.grids = [];
        this.NumberSolving = true;
        this.solve = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                while (this.NumberSolving) {
                    this.cellSolve();
                }
                return [2 /*return*/];
            });
        }); };
        this.cellSolve = function () { return __awaiter(_this, void 0, void 0, function () {
            var _i, _a, element, c;
            return __generator(this, function (_b) {
                this.NumberSolving = false;
                for (_i = 0, _a = this.cells; _i < _a.length; _i++) {
                    element = _a[_i];
                    c = element;
                    if (c.possibleValues.length == 1) {
                        c.setCellValue(c.possibleValues[0]);
                    }
                    if (c.cellValue == 0) {
                        this.NumberSolving = true;
                    }
                }
                return [2 /*return*/];
            });
        }); };
        this.defineCells = function () {
            for (var index = 0; index < 81; index++) {
                var c = new cell_js_1.Cell(index);
                c.associatedSudoku = _this;
                _this.cells[index] = c;
                _this.cells[index].linkAllsToCell();
            }
        };
        this.defineRows = function () {
            for (var index = 0; index < 9; index++) {
                _this.rows[index] = new row_js_1.Row(index);
            }
        };
        this.defineColumns = function () {
            for (var index = 0; index < 9; index++) {
                _this.columns[index] = new column_js_1.Column(index);
            }
        };
        this.defineGrids = function () {
            for (var index = 0; index < 9; index++) {
                _this.grids[index] = new grid_js_1.Grid(index);
            }
        };
        this.answerForSudoku = function (input) { return __awaiter(_this, void 0, void 0, function () {
            var cIndex, index, inChar, cellObj;
            return __generator(this, function (_a) {
                cIndex = 0;
                for (index = 0; index < input.length; index++) {
                    inChar = input.substring(index, index + 1);
                    if (!isNaN(parseInt(inChar))) {
                        cellObj = this.cells[cIndex++];
                        if (parseInt(inChar) != 0) {
                            cellObj.setCellValue(parseInt(inChar));
                        }
                    }
                }
                return [2 /*return*/];
            });
        }); };
        this.printSudoku = function () { return __awaiter(_this, void 0, void 0, function () {
            var starter, input;
            return __generator(this, function (_a) {
                starter = 0;
                input = "\n        + ========+======+======= +\n        || ".concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " + ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " + ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ||\n        || ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " + ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " + ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ||\n        || ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " + ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " + ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ||\n        + =======+=======+======= +\n        || ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " + ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " + ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ||\n        || ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " + ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " + ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ||\n        || ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " + ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " + ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ||\n        + =======+=======+======= +\n        || ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " + ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " + ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ||\n        || ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " + ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " + ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ||\n        || ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " + ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " + ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ").concat(this.cells[starter++].cellValue, " ||\n        + =======+=======+======= +\n        ");
                return [2 /*return*/, input];
            });
        }); };
        this.defineRows();
        this.defineColumns();
        this.defineGrids();
        this.defineCells();
    }
    return Sudoku;
}());
exports.Sudoku = Sudoku;
