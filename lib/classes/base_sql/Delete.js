"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SQL_1 = __importDefault(require("./SQL"));
class Delete extends SQL_1.default {
    deleteById(_field) {
        let __sql = "";
        let __values = [];
        __sql = `DELETE FROM ${this._tableName} WHERE ${_field.fieldName} = ?`;
        __values.push(_field.value);
        let ret = { "sql": __sql, "values": __values };
        return ret;
    }
}
exports.default = Delete;
//# sourceMappingURL=Delete.js.map