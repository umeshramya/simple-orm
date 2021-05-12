import { FIELD_NAME_VALUE, FIELD_NAME_VALUE_OPERATOR, SQL_VALUES } from "../../Iinterfaces/index";
import Sql from "./SQL";
export default class Update extends Sql {
    updateById(_field: FIELD_NAME_VALUE, _updateFields: FIELD_NAME_VALUE[]): SQL_VALUES;
    update(_updateFields: FIELD_NAME_VALUE[], _clauseFileds: FIELD_NAME_VALUE_OPERATOR[]): SQL_VALUES;
}
//# sourceMappingURL=Update.d.ts.map