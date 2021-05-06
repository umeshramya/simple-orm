import { FIELD_NAME_VALUE, SELECT, SQL_VALUES } from "../../Iinterfaces/index";
import Sql from "./SQL";
export default class Select extends Sql implements SELECT {
    /**
     * select the table by single filed i.e id
     * @param _field this is  object with id field name and it value as clause
     * @param _tableName name of the table
     * @param _selectedFields field to returned if undefined all fields will be returned
     */
    selectById(_field: FIELD_NAME_VALUE, _selectedFields?: string[]): SQL_VALUES;
}
//# sourceMappingURL=Select.d.ts.map