import { FIELD_NAME_VALUE} from "../../Iinterfaces/index"
import Sql from "./SQL";
export default class Update extends Sql{

    public updateById(_field:FIELD_NAME_VALUE, _updateFields:FIELD_NAME_VALUE[]):void{
        let __sql:string="";
        let __fieldStr:string="";
        let __values:any[]=[];
        _updateFields.map(el=>{
            __fieldStr = `${__fieldStr} ${el.fieldName} = ?,`
            __values.push(el.value);
        })
        __values.push(_field.value);
        __sql = `UPDATE ${this._tableName} SET ${__fieldStr} WHERE ${this._tableName}.${_field.fieldName} = ?`;

        this.sqlAndValues={ "sql" : __sql, "values" : __values};
    }


}