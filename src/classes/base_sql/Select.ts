import {FIELD_NAME_VALUE, FIELD_NAME_VALUE_OPERATOR,SELECT, SQL_VALUES} from "../../Iinterfaces/index"
import Sql from "./SQL";

export default class Select extends Sql implements SELECT{
    /**
     * select the table by single filed i.e id 
     * @param _field this is  object with id field name and it value as clause
     * @param _tableName name of the table
     * @param _selectedFields field to returned if undefined all fields will be returned
     */
    public selectById(_field:FIELD_NAME_VALUE, _selectedFields ?:string[]):SQL_VALUES {
        let __sql:string="";
        let __values:any[]=[];
       
        if(_selectedFields === undefined){
            __sql = `SELECT * FROM ${this._tableName} WhERE ${_field["fieldName"]} = ?`;
           
        }else{
            __sql = `SELECT ${_selectedFields.toString()} FROM ${this._tableName} WHERE ${_field['fieldName']} = ?`
        }

        __values = [_field["value"]]

        return {"sql" : __sql, "values" : __values}
    }

    /**
     * select
     */
    public select(_fields:FIELD_NAME_VALUE_OPERATOR[],  _selectedFields ?:string[]):SQL_VALUES {
        let __sql:string="";
        let __values:any[]=[];

        let __fieldList:string =""

        _fields.forEach((field, index )=>{
            if(index  < _fields.length-1){
                if(field.Operator === "NONE"){
                    throw new Error().message="NONE operator is aloowed only at the last"
                }
                __fieldList = `${__fieldList} ${field.fieldName} = ? ${field.Operator}, `
            }else{
                __fieldList = `${__fieldList} ${field.fieldName} = ?, `
            }

            __values.push(field.value);
            
        })
        
        if(_selectedFields === undefined){
            __sql = `SELECT * FROM ${this._tableName} WhERE ${__fieldList}`;
           
        }else{
            __sql = `SELECT ${_selectedFields.toString()} FROM ${this._tableName} WHERE ${__fieldList} = ?`
        }


        return {"sql" : __sql, "values" : __values}
    }
        
}