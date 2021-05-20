import { FIELD_NAME_VALUE, FIELD_NAME_VALUE_OPERATOR, SELECT, JOIN, SQL_VALUES } from "../../Iinterfaces/index";
import Sql from "./SQL";
export default class Select extends Sql implements SELECT {
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
    selectById(_idField: FIELD_NAME_VALUE, _selectedFields?: string[], _orderBy?: {
        fields: string[];
        by: "ASC" | "DESC";
    }, _limit?: number, _offset?: number): SQL_VALUES;
    /**
     *
     * @param _clauseFields clauase fileds
     * @param _selectedFields selected field of the current table
     * @param _orderBy  order by columns
     * @param _limit limit of rows
     * @param _offset offset rows
     * @returns return sql_values
     */
    select(_clauseFields?: FIELD_NAME_VALUE_OPERATOR[], _selectedFields?: string[], _orderBy?: {
        fields: string[];
        by: "ASC" | "DESC";
    }, _limit?: number, _offset?: number, _join?: JOIN): SQL_VALUES;
    private orderBy;
    private offset;
    private limit;
}
//# sourceMappingURL=Select.d.ts.map