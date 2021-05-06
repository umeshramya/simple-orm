"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sql {
    constructor(_tablename) {
        this._tableName = _tablename;
    }
    get sqlAndValues() {
        return this._sqlAndValues;
    }
    set sqlAndValues(value) {
        this._sqlAndValues = value;
    }
}
exports.default = Sql;
//# sourceMappingURL=SQL.js.map