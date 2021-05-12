import { FIELD_NAME_VALUE, SQL_VALUES, SQL_VALUES_MANY} from "../../Iinterfaces/index"
import Sql from "./SQL";
export default class Update extends Sql{

    public updateById(_field:FIELD_NAME_VALUE, _updateFields:FIELD_NAME_VALUE[]):SQL_VALUES{
        let __sql:string="";
        let __fieldStr:string="";
        let __values:any[]=[];
        _updateFields.map(el=>{
            __fieldStr = `${__fieldStr} ${el.fieldName} = ?,`
            __values.push(el.value);
        })
        __values.push(_field.value);
        __sql = `UPDATE ${this._tableName} SET ${__fieldStr} WHERE ${this._tableName}.${_field.fieldName} = ?`;

        return{ "sql" : __sql, "values" : __values};
    }

    public update(_fileds:FIELD_NAME_VALUE, _updateFields:FIELD_NAME_VALUE[][]):SQL_VALUES_MANY{
        let __sql:string="";
        let __values:any[][]=[];
        let __filedList:string[]=[]
        let __valueList:"?"[]=[];

        //Write code here

        let ret:SQL_VALUES_MANY= {"sql" : __sql , "values": __values};
        return ret;
    }


}