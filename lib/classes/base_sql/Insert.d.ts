import { FIELD_NAME_VALUE, INSERT, SQL_VALUES } from "../../Iinterfaces";
import Sql from "./SQL";
export default class Insert extends Sql implements INSERT {
    insert(_insertFields: FIELD_NAME_VALUE[]): SQL_VALUES;
}
//# sourceMappingURL=Insert.d.ts.map