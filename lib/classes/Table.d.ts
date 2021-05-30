import { FIELD, FIELD_NAME_VALUE_OPERATOR, JOIN, SQL_VALUES, SQL_VALUES_MANY, TABLE } from "../Iinterfaces";
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
     * @param _insertFields two dimensional array filed and values
     * return sql string and two dimensiona array
     */
    insertMany(_insertFields: FIELD_NAME_VALUE[][]): SQL_VALUES_MANY;
    /**
     *
     * @param _field
     * @returns
     */
    deleteById(_field: FIELD_NAME_VALUE): SQL_VALUES;
    /**
     *
     * @param _clauseField where clase uarguments
     * @returns SQL and values
     */
    delete(_clauseField: FIELD_NAME_VALUE_OPERATOR[]): SQL_VALUES;
    /**
     *
     * @param _idField id field
     * @param _selectedFields The field o fthe table to reurned
     * @param _orderBy by filed either ASC | DESC
     * @param _limit number of rows limited
     * @param _offset number of rows to be offset
     * @returns sql string and values array of the clause
     */
    selectById(_idField: FIELD_NAME_VALUE, _selectedFields?: string[], _orderBy?: {
        fields: string[];
        by: "ASC" | "DESC";
    }, _limit?: number, _offset?: number): SQL_VALUES;
    /**
     *
    * @param _clauseFields These th fileds in the clause , use AND | OR | NONE opertaor  NONE oprator is is to be used only at last element of array
     * @param _selectedFields The field o fthe table to reurned
     * @param _orderBy by filed either ASC | DESC
     * @param _limit number of rows limited
     * @param _offset number of rows to be offset
     * @returns sql string and values array of the clause
     */
    select(_clauseFields?: FIELD_NAME_VALUE_OPERATOR[], _selectedFields?: string[], _orderBy?: {
        fields: string[];
        by: "ASC" | "DESC";
    }, _limit?: number, _offset?: number, _join?: JOIN[]): SQL_VALUES;
    /**
     *
     * @param _field id file dof table
     * @param _updateFields update fileds
     * @returns sql string and values array of the clause
     */
    updateById(_field: FIELD_NAME_VALUE, _updateFields: FIELD_NAME_VALUE[]): SQL_VALUES;
    /**
     *
     * @param _updateFields update fileds
     * @param _clauseFileds clause fileds
     * @returns  sql string and values
     */
    update(_updateFields: FIELD_NAME_VALUE[], _clauseFileds: FIELD_NAME_VALUE_OPERATOR[]): SQL_VALUES;
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
    /**
     * This method retruns the contraint selct statement
     * @param constraint name of constraint
     * @returns reqturns sql_vales
     */
    getConstraint(constraint: string): SQL_VALUES;
    /**
     * This function throws error in case there is falire of validation
     * @param _sqlField this is array of field which destned to update or insert table in insert and update operations
     */
    private validateHandler;
}
//# sourceMappingURL=Table.d.ts.map