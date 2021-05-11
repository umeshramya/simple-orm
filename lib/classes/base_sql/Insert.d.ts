import { FIELD_NAME_VALUE, INSERT, SQL_VALUES, SQL_VALUES_MANY } from "../../Iinterfaces";
import Sql from "./SQL";
export default class Insert extends Sql implements INSERT {
    insert(_insertFields: FIELD_NAME_VALUE[]): SQL_VALUES;
    insertMany(_insertFields: FIELD_NAME_VALUE[][]): SQL_VALUES_MANY;
}
//# sourceMappingURL=Insert.d.ts.map