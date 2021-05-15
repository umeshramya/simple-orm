"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SQL_1 = __importDefault(require("./SQL"));
class Select extends SQL_1.default {
    /**
     * select the table by single filed i.e id
     * @param _idField this is  object with id field name and it value as clause
     * @param _tableName name of the table
     * @param _selectedFields field to returned if undefined all fields will be returned
     * @param _orderBy  order by columns
     * @param _limit limit of rows
     * @param _offset offset rows
     * @returns return sql_values
     */
    selectById(_idField, _selectedFields, _orderBy, _limit, _offset) {
        let __sql = "";
        let __values = [];
        if (_selectedFields === undefined || _selectedFields.length < 1) {
            __sql = `SELECT * FROM ${this._tableName} WhERE ${_idField["fieldName"]} = ?`;
        }
        else {
            __sql = `SELECT ${_selectedFields.toString()} FROM ${this._tableName} WHERE ${_idField['fieldName']} = ?`;
        }
        __sql = `${__sql}${this.orderBy(_orderBy === null || _orderBy === void 0 ? void 0 : _orderBy.fields, _orderBy === null || _orderBy === void 0 ? void 0 : _orderBy.by)}${this.limit(_limit)}${this.offset(_offset)}`;
        __values = [_idField["value"]];
        return { "sql": __sql, "values": __values };
    }
    /**
     *
     * @param _clauseFields clauase fileds
     * @param _selectedFields selected field to be returned
     * @param _orderBy  order by columns
     * @param _limit limit of rows
     * @param _offset offset rows
     * @returns return sql_values
     */
    select(_clauseFields, _selectedFields, _orderBy, _limit, _offset) {
        let __sql = "";
        let ClauseFieldValues = this.clauseMaker(_clauseFields);
        if (_selectedFields === undefined || _selectedFields.length < 1) {
            __sql = `SELECT * FROM ${this._tableName} WhERE ${ClauseFieldValues.sql}`;
        }
        else {
            __sql = `SELECT ${_selectedFields.toString()} FROM ${this._tableName} WHERE ${ClauseFieldValues.sql}`;
        }
        __sql = `${__sql}${this.orderBy(_orderBy === null || _orderBy === void 0 ? void 0 : _orderBy.fields, _orderBy === null || _orderBy === void 0 ? void 0 : _orderBy.by)}${this.limit(_limit)}${this.offset(_offset)}`;
        return { "sql": __sql, "values": ClauseFieldValues.values };
    }
    orderBy(fields = [], by = "ASC") {
        //write code for sort statement
        let ret = fields.length > 0 ? ` ORDER BY ${fields.toString()} ${by}` : "";
        return ret;
    }
    offset(_offset = 0) {
        let ret = _offset > 0 ? ` OFFSET ${_offset}` : "";
        return ret;
    }
    limit(_limit = 0) {
        let ret = _limit > 0 ? ` LIMIT ${_limit}` : "";
        return ret;
    }
}
exports.default = Select;
//# sourceMappingURL=Select.js.map