import { FIELD, SQL_VALUES, TABLE } from "../Iinterfaces";
import { FIELD_NAME_VALUE, SQL_MASTER } from "../Iinterfaces";
export default class Table implements TABLE, SQL_MASTER {
    /**name of the table */
    readonly tableName: string;
    readonly fields: FIELD[];
    private selectCls;
    private updateCls;
    private insertCls;
    private deleteCls;
    constructor(_name: string, _fields: FIELD[]);
    /**
     *
     * @param _insertFields
     * @returns
     */
    insert(_insertFields: FIELD_NAME_VALUE[]): SQL_VALUES;
    /**
     *
     * @param _field
     * @returns
     */
    deleteById(_field: FIELD_NAME_VALUE): SQL_VALUES;
    /**
     *
     * @param _field
     * @param _selectedFields
     * @returns
     */
    selectById(_field: FIELD_NAME_VALUE, _selectedFields?: string[]): SQL_VALUES;
    /**
     *
     * @param _field
     * @param _updateFields
     * @returns
     */
    updateById(_field: FIELD_NAME_VALUE, _updateFields: FIELD_NAME_VALUE[]): SQL_VALUES;
    /**
     * createTable
     */
    createTable(): string;
    /**
     * This function creates relationship
     * @param thisTableFieldName FOREIGN KEY of this table
     * @param otherTable  name of related table
     * @param otherTablefieldName REFERENCES of retated table\
     * @onDelete "RESTRICT" | "CASCADE"
     * @onUpdate "RESTRICT" |"NO ACTION" | "CASCADE" | "SET NULL" | "SET DEFAULT"
     */
    relatetable(thisTableFieldName: string, otherTable: string, otherTablefieldName: string, onDelete?: "RESTRICT" | "CASCADE", onUpdate?: "RESTRICT" | "NO ACTION" | "CASCADE" | "SET NULL" | "SET DEFAULT"): string;
    validate(): boolean;
}
//# sourceMappingURL=Table.d.ts.map