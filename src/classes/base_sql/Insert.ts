import { FIELD_NAME_VALUE, INSERT, SQL_VALUES } from "../../Iinterfaces";
import Sql from "./SQL";

export default class Insert extends Sql implements INSERT{
    insert(_insertFields: FIELD_NAME_VALUE[]): SQL_VALUES {
        let __sql:string="";
        let __values:any[]=[];
        let __filedList:string[]=[]
        let __valueList:"?"[]=[]

        _insertFields.forEach(el=>{
            __filedList.push(el.fieldName)
            __valueList.push("?");
            __values.push(el.value)
        })
        __sql = `INSERT INTO ${this._tableName} (${__filedList.toString()}) VALUES (${__valueList.toString()})`;
        let ret:SQL_VALUES= {"sql" : __sql , "values": __values};
        return ret;


    }
    
}