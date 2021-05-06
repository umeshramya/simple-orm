import { DELETE, FIELD_NAME_VALUE, SQL_VALUES } from "../../Iinterfaces";
import Sql from "./SQL";
export default class Delete extends Sql implements DELETE {
    deleteById(_field: FIELD_NAME_VALUE): SQL_VALUES;
}
//# sourceMappingURL=Delete.d.ts.map