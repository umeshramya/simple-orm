"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SQL_1 = __importDefault(require("./SQL"));
class Insert extends SQL_1.default {
    insert(_insertFields) {
        let __sql = "";
        let __values = [];
        let __filedList = [];
        let __valueList = [];
        _insertFields.forEach(el => {
            __filedList.push(el.fieldName);
            __valueList.push("?");
            __values.push(el.value);
        });
        __sql = `INSERT INTO ${this._tableName} (${__filedList.toString()}) VALUES (${__valueList.toString()})`;
        let ret = { "sql": __sql, "values": __values };
        return ret;
    }
}
exports.default = Insert;
//# sourceMappingURL=Insert.js.map