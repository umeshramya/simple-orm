"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SQL_1 = __importDefault(require("./SQL"));
class Update extends SQL_1.default {
    updateById(_field, _updateFields) {
        let __sql = "";
        let __fieldStr = "";
        let __values = [];
        _updateFields.map(el => {
            __fieldStr = `${__fieldStr} ${el.fieldName} = ?,`;
            __values.push(el.value);
        });
        __values.push(_field.value);
        __sql = `UPDATE ${this._tableName} SET ${__fieldStr} WHERE ${this._tableName}.${_field.fieldName} = ?`;
        return { "sql": __sql, "values": __values };
    }
}
exports.default = Update;
//# sourceMappingURL=Update.js.map