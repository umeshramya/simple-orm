import { DELETE, FIELD_NAME_VALUE, FIELD_NAME_VALUE_OPERATOR, SQL_VALUES } from "../../Iinterfaces";
import Sql from "./SQL";

export default class Delete extends Sql implements DELETE{
    deleteById(_field: FIELD_NAME_VALUE): SQL_VALUES {
        let __sql:string="";
        let __values:any[]=[];

        __sql = `DELETE FROM ${this._tableName} WHERE ${_field.fieldName} = ?`
        __values.push(_field.value)
        let ret:SQL_VALUES= {"sql" : __sql , "values": __values};
        return ret;
    }


    delete(_clauseField: FIELD_NAME_VALUE_OPERATOR[]): SQL_VALUES{
        let __sql:string="";
        let ClauseFieldValues = this.clauseMaker(_clauseField)

        __sql = `DELETE FROM ${this._tableName} WHERE ${ClauseFieldValues.sql} = ?`
  
        let ret:SQL_VALUES= {"sql" : __sql , "values": ClauseFieldValues.values};
        return ret;

    }
    
}