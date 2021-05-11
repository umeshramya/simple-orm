import { SQL_VALUES, FIELD_NAME_VALUE_OPERATOR } from "../../Iinterfaces/index";
export default class Sql {
    private _sqlAndValues;
    protected _tableName: string;
    constructor(_tablename: string);
    get sqlAndValues(): SQL_VALUES;
    set sqlAndValues(value: SQL_VALUES);
    protected clauseMaker(_fields: FIELD_NAME_VALUE_OPERATOR[]): SQL_VALUES;
}
//# sourceMappingURL=SQL.d.ts.map