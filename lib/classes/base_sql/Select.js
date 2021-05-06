"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SQL_1 = __importDefault(require("./SQL"));
class Select extends SQL_1.default {
    /**
     * select the table by single filed i.e id
     * @param _field this is  object with id field name and it value as clause
     * @param _tableName name of the table
     * @param _selectedFields field to returned if undefined all fields will be returned
     */
    selectById(_field, _selectedFields) {
        let __sql = "";
        let __values = [];
        if (_selectedFields === undefined) {
            __sql = `SELECT * FROM ${this._tableName} WhERE ${_field["fieldName"]} = ?`;
        }
        else {
            __sql = `SELECT ${_selectedFields.toString()} FROM ${this._tableName} WHERE ${_field['fieldName']} = ?`;
        }
        __values = [_field["value"]];
        this.sqlAndValues = { "sql": __sql, "values": __values };
    }
}
exports.default = Select;
//# sourceMappingURL=Select.js.map