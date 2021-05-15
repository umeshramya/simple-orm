import { FIELD_NAME_VALUE, FIELD_NAME_VALUE_OPERATOR, SQL_VALUES, SQL_VALUES_MANY} from "../../Iinterfaces/index"
import Sql from "./SQL";
export default class Update extends Sql{

    public updateById(_field:FIELD_NAME_VALUE, _updateFields:FIELD_NAME_VALUE[]):SQL_VALUES{
        let __sql:string="";
        let __fieldStr:string="";
        let __values:any[]=[];
        _updateFields.map(el=>{
            __fieldStr = `${__fieldStr} ${el.fieldName} = ?, `
            __values.push(el.value);
        })

        __fieldStr = __fieldStr.substring(0, __fieldStr.length -2)
    
        __values.push(_field.value);
        __sql = `UPDATE ${this._tableName} SET ${__fieldStr} WHERE ${this._tableName}.${_field.fieldName} = ?`;

        return{ "sql" : __sql, "values" : __values};
    }

    public update(_updateFields:FIELD_NAME_VALUE[], _clauseFileds:FIELD_NAME_VALUE_OPERATOR[] ):SQL_VALUES{
        let __sql:string="";
        let __fieldStr:string="";
        let __values:any[][]=[];


        _updateFields.map(el=>{
            __fieldStr = `${__fieldStr} ${el.fieldName} = ?, `
            __values.push(el.value);
        })

        __fieldStr = __fieldStr.substring(0, __fieldStr.length -2)
       let updatevalues = this.clauseMaker(_clauseFileds)

        __sql = `UPDATE ${this._tableName} SET ${__fieldStr} WHERE ${this._tableName}.${updatevalues.sql}`;
        
        updatevalues.values.forEach(el=>{
            __values.push(el)
        })
        

        let ret:SQL_VALUES_MANY= {"sql" : __sql , "values": __values};
        return ret;
    }


}