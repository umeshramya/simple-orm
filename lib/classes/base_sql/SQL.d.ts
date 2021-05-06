import { SQL_VALUES } from "../../Iinterfaces/index";
export default class Sql {
    private _sqlAndValues;
    protected _tableName: string;
    constructor(_tablename: string);
    get sqlAndValues(): SQL_VALUES;
    set sqlAndValues(value: SQL_VALUES);
}
//# sourceMappingURL=SQL.d.ts.map