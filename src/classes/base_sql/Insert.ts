import { FIELD_NAME_VALUE, INSERT, SQL_VALUES, SQL_VALUES_MANY } from "../../Iinterfaces";
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

    // INSERT INTO `orgTest` (`id`, `orgName`) VALUES (NULL, 'jjh'), (NULL, 'tdh');
    insertMany(_insertFields: FIELD_NAME_VALUE[][]): SQL_VALUES_MANY {
        let __sql:string="";
        let __values:any[][]=[];
        let __filedList:string[]=[]
        let __valueList:"?"[]=[];
        _insertFields.forEach((el, index)=>{
            let __inValues:any[]=[];
            el.forEach((item)=>{
                if(__filedList.length < el.length){
                    __filedList.push(item.fieldName)
                    __valueList.push("?")
                }
                __inValues.push(item.value)

            })
            __values.push(__inValues)
        })
  

        __sql = `INSERT INTO ${this._tableName} (${__filedList.toString()}) VALUES (${__valueList.toString()})`;
        let ret:SQL_VALUES_MANY= {"sql" : __sql , "values": __values};
        return ret;


    }
   
}